import { Component, Input, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Photo } from 'src/app/_models/Photo';
import { AuthService } from 'src/app/_services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-UserPhotoEditor',
  templateUrl: './UserPhotoEditor.component.html',
  styleUrls: ['./UserPhotoEditor.component.css']
})
export class UserPhotoEditorComponent implements OnInit {
  @Input() photoUrl: string;
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initializeUploader();
  }
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'user/' + this.authService.decodedToken.nameid + '/photos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 1 * 1024 * 1024
    });

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if(response) {
        const res: Photo  = JSON.parse(response);
        const photo = {
          id: res.id,
          url: res.url,
          type: res.type
        };
        this.photoUrl = photo.url;
      }
    };
  }


}
