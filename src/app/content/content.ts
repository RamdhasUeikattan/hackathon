import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `<div>
  <div>
  <video width="400" controls>
   <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  </video>
  <video width="400" controls>
   <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  </video>
  <video width="400" controls>
   <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  </video>
  <video width="400" controls>
   <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  </video>
  <video width="400" controls>
   <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  </video>
  <video width="400" controls>
   <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  </video>
</div>
</div>`,
    styleUrls: ['./content.css']
})
export class ContentComponent {
    public data: Object[] = [];
    public fields: Object = { text: 'category'};
}
