"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserPhotoEditorComponent = void 0;
var core_1 = require("@angular/core");
var ng2_file_upload_1 = require("ng2-file-upload");
var environment_1 = require("../../../environments/environment");
var UserPhotoEditorComponent = /** @class */ (function () {
    function UserPhotoEditorComponent(authService) {
        this.authService = authService;
        this.hasBaseDropZoneOver = false;
        this.baseUrl = environment_1.environment.apiUrl;
    }
    UserPhotoEditorComponent.prototype.ngOnInit = function () {
        this.initializeUploader();
    };
    UserPhotoEditorComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UserPhotoEditorComponent.prototype.initializeUploader = function () {
        var _this = this;
        this.uploader = new ng2_file_upload_1.FileUploader({
            url: this.baseUrl + 'user/' + this.authService.decodedToken.nameid + '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 1 * 1024 * 1024
        });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
                var res = JSON.parse(response);
                var photo = {
                    id: res.id,
                    url: res.url,
                    type: res.type
                };
                _this.photoUrl = photo.url;
            }
        };
    };
    __decorate([
        core_1.Input()
    ], UserPhotoEditorComponent.prototype, "photoUrl");
    UserPhotoEditorComponent = __decorate([
        core_1.Component({
            selector: 'app-UserPhotoEditor',
            templateUrl: './UserPhotoEditor.component.html',
            styleUrls: ['./UserPhotoEditor.component.css']
        })
    ], UserPhotoEditorComponent);
    return UserPhotoEditorComponent;
}());
exports.UserPhotoEditorComponent = UserPhotoEditorComponent;
