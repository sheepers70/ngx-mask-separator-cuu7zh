import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public separatorWithoutDecimals: number;
  public separatorWithDotDecimals: number;
  public separatorWithCommaDecimals: number;
  public anotherMask: number;
}
