
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };
}
