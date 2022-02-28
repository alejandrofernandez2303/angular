import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  title = 'hola a esta primera clase';
  name = 'alex';
  rockBandName = '';

  rockBands = ['acdc', 'heroes del silencio', 'mago'];

  public changeTitle()
  {
    this.title = 'nuevo titulooo';
  }

  public addRockBand()
  {
    this.rockBands.push(this.rockBandName);
    this.rockBandName = '';
  }
}
