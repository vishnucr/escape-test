import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'escape';
  public view = 'trip';

  public changeView(view){
    this.view = view;
  }
}
