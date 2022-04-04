import {Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';

import {ModalController} from '@ionic/angular';

import {Coordinates, Geolocation} from "@awesome-cordova-plugins/geolocation/ngx";

import {GeolocateControl, LngLat, Map, MapboxOptions, Marker} from "mapbox-gl";

import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Component({
  selector: 'app-map-modal',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class LocationPickerComponent
{
  @ViewChild('mapHolder') mapHolder: ElementRef<HTMLDivElement>;
  @ViewChild('searchBar') searchBar: any;
  @ViewChild('locationsList') locationsList: any;

  private map: Map;
  public mapStyle: string = 'streets';

  private marker: Marker;
  public selectedAddress: string = "";

  public searchLocations = [];

  private locationFeatures = [];
  private selectedFeature = null;

  constructor(private modalController: ModalController, private geoLocation: Geolocation, private http: HttpClient)
  {

  }

  async ionViewDidEnter()
  {
    try
    {
      const geoPosition = await this.geoLocation.getCurrentPosition();

      const coordinates: Coordinates = geoPosition.coords;

      const mapOptions : MapboxOptions =
        {
          accessToken: environment.MAPBOX_KEY,
          center: [coordinates.longitude, coordinates.latitude],
          container: this.mapHolder.nativeElement,
          style: 'mapbox://styles/mapbox/streets-v11',
          zoom: 15,
          maxBounds: [[68, 7.5], [98, 37.5]],
          attributionControl: false
        };

      this.map = new Map(mapOptions);

      const geoControl: GeolocateControl = new GeolocateControl({trackUserLocation: true});

      geoControl.on
      (
        'trackuserlocationend',
        () =>
        {
          const longitudeLatitude: LngLat = this.map.getCenter();

          this.updateSelectedAddress(longitudeLatitude.lng, longitudeLatitude.lat);

          this.map.flyTo({center: [longitudeLatitude.lng, longitudeLatitude.lat], zoom: 15});
        }
      );
      this.map.addControl(geoControl);

      this.marker = new Marker({draggable: true});
      this.marker.on
      (
        'dragend',
        () =>
        {
          this.updateSelectedAddress(this.marker.getLngLat().lng, this.marker.getLngLat().lat);
        }
      );
      this.updateSelectedAddress(coordinates.longitude, coordinates.latitude);

      this.marker.addTo(this.map);
    }
    catch (error)
    {
      console.log("Error while fetching user current location : ", error)
    }
  }

  public toggleMapStyle()
  {
    this.mapStyle = this.mapStyle == 'streets' ? 'satellite' : 'streets';

    this.map.setStyle(this.mapStyle == 'streets' ? 'mapbox://styles/mapbox/streets-v11' : 'mapbox://styles/mapbox/satellite-streets-v11')
  }

  public async closeLocationPick()
  {
    await this.modalController.dismiss(null, 'cancel');
  }

  private updateSelectedAddress(longitude: number, latitude: number)
  {
    this.marker.setLngLat({lon: longitude, lat: latitude});

    this.selectedAddress = "";

    this.http.get
    (
      encodeURI(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${environment.MAPBOX_KEY}`)
    )
    .pipe
    (
      catchError
      (
        (error: any) =>
        {
          console.log("Error while reverse geocoding : ", error)
          return throwError(error);
        }
      )
    ).subscribe
      (
        (response: any) =>
        {
          const features: any[] = response.features;

          if (features.length == 0)
          {
            console.log("Can't identify location");
          }

          this.selectedAddress = features[0].place_name;
          this.searchBar.el.value = features[0].place_name;

          this.selectedFeature = features[0];
        }
      );
  }

  public changedAddress(input)
  {
    if (input === '')
    {
      this.searchLocations = [];
      this.locationFeatures = [];
      return;
    }

    this.http.get
    (
      encodeURI(`https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?country=IN&limit=5&access_token=${environment.MAPBOX_KEY}`)
    )
      .pipe
      (
        catchError
        (
          (error: any) =>
          {
            console.log("Error while forward geocoding : ", error)
            return throwError(error);
          }
        )
      ).subscribe
    (
      (response: any) =>
      {
        const features : any[] = response.features;

        this.searchLocations = [];

        this.locationFeatures = features;

        features.forEach
        (
          (feature) =>
          {
            const location = {text: feature.text, place_name: feature.place_name, longitude: feature.center[0], latitude: feature.center[1]};
            this.searchLocations.push(location);
          }
        );

        if (this.searchLocations.length > 0)
        {
          this.locationsList.el.style.display = "block";
        }
        else
        {
          this.locationsList.el.style.display = "none";
        }
      }
    );
  }

  public locationClicked(index)
  {
    const selectedLocation = this.searchLocations[index];

    this.selectedAddress = selectedLocation.place_name;

    this.searchBar.el.value = selectedLocation.place_name;

    this.map.flyTo({center: [selectedLocation.longitude, selectedLocation.latitude], zoom: 15});

    this.marker.setLngLat({lon: selectedLocation.longitude, lat: selectedLocation.latitude});

    this.locationsList.el.style.display = "none";

    this.selectedFeature = this.locationFeatures[index];
  }

  public async locationConfirmed()
  {
    await this.modalController.dismiss
    (
      this.selectedFeature,'dismiss'
    )
  }
}
