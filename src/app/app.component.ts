import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Syncfusion PodCast';
  public boolean = false;
  selectedFiles: any;
  progress: any;

  constructor(@Inject(Http)private http: Http) {

  }

  public onclick(args) {
    this.boolean = !this.boolean;
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;
    this.http.post('http://172.16.104.125:5000/home/UploadFile', this.selectedFiles, {});

    // this.currentFileUpload = this.selectedFiles.item(0) as  any;

    // (this.dm.insert(this.currentFileUpload)  as Promise<Object>).then((value: Object) =>{
    //   debugger;
    // });


    this.selectedFiles = undefined;
  }
}
