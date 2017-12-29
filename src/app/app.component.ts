import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PodCast';
  public boolean = false;

  public onclick(args) {
    this.boolean = !this.boolean;
  }
}
