import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  
  dolar_value;
  euro_value;
  dolar = 5.21;


  dolar_converter(formConverter){
    let real = formConverter.value.real_value;

    let dolar = 5.21;
    
    this.dolar_value = dolar*parseFloat(real)

  }

  euro_converter(formConverter){
    let real = formConverter.value.real_value;

    let euro = 5.22;
    
    this.euro_value = euro*parseFloat(real)
  }
  clean_button(formConverter){
    this.euro_value = 0.00;
    this.dolar_value = 0.00;

  }

}
