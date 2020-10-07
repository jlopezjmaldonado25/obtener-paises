import { Component, OnInit } from '@angular/core';
import { PaisesService } from './services/paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: any;
  paises: any;

    constructor(private paisesService: PaisesService) {
      console.log('Listando Paises');
      this.verPaises();
    }

    ngOnInit(): void {
    }

    verPaises(): void{
      this.paisesService.getPaises().subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
    );

  }
}
