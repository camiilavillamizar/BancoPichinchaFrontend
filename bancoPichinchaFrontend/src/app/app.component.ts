import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'bancoPichinchaFrontend';

  menu = [
    
    {
      "name": "Clientes", 
      "icon": "person"
    }, 
    {
      "name": "Cuentas", 
      "icon": "credit_card"
    }, 
    {
      "name": "Movimientos", 
      "icon": "paid"
    }, 
    {
      "name": "Reportes", 
      "icon": "monitoring"
    }

  
  ]; 

}

