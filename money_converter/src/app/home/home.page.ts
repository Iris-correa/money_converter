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


  converter(formConverter){
    let real = formConverter.value.real_value;

    let dolar = formConverter.value.dolar_quote;

    let euro = formConverter.value.euro_quote;
    
    this.dolar_value = parseFloat(dolar)*parseFloat(real)

    this.euro_value = parseFloat(euro)*parseFloat(real)

  }

  clean_button(formConverter){
    this.euro_value = 0.00;
    this.dolar_value = 0.00;
  }

}
