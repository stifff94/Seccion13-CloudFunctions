import { Component, OnDestroy, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {


  @Input() results: any[] = [];

  // results: any[]=[
    
  //     {
  //       "name": "Juego1",
  //       "value": 20
  //     },
  //     {
  //       "name": "Juego2",
  //       "value": 30
  //     },
  //     {
  //       "name": "Juego3",
  //       "value": 10
  //     },
  //     {
  //       "name": "Juego4",
  //       "value": 30
  //     }
    
  // ];
  

  

  //options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Votos';
  showYAxisLabel = true;
  yAxisLabel = 'Juegos';

  colorScheme = 'nightLights';

  //intervarlo;
  constructor() {
    
    
    // this.intervarlo=setInterval(() =>{
    //   console.log("tick");
    //   const newresults = [...this.results];

    //   for( let i in newresults){
    //     newresults[i].value = Math.round(Math.random()*100);
    //   }
    //   this.results = [...newresults];
    // }, 1500);
    

  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(){
      //clearInterval( this.intervarlo);
  }

}
