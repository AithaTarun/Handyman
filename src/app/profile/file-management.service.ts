import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ProfileData} from "./profile.data";

@Injectable
(
  {
    providedIn: 'root'
  }
)
export class FileManagementService
{
  private BACKEND_URL = environment.BACKEND_URL;

  constructor(private http: HttpClient)
  {

  }

  public fetchProfile(): Observable<{message: string, profile: ProfileData}>
  {
    return this.http.get<{message: string, profile: ProfileData}>
    (
      this.BACKEND_URL+ '/storage/fetchProfile',
    )
  }

  public uploadFile(file: File, documentType: string): Observable<{message: string, profile: ProfileData}>
  {
    const formData: FormData = new FormData();

    formData.append('uploadFile', file);
    formData.append('documentType', documentType);

    return this.http.post<{message: string, profile: ProfileData}>
    (
      this.BACKEND_URL+ '/storage/uploadSingleFile',
      formData
    )
  }

  public updateSkills(skills: string[]): Observable<any>
  {
    const data = {skills};

    return this.http.post
    (
      this.BACKEND_URL+ '/storage/updateSkills',
      data
    );
  }
}
