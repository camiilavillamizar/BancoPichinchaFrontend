import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/clients.interfaces';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  filter: string = ""; 
  clients: Client[] = []; 
  filteredClients: Client[] =[]

  ngOnInit(): void {

    this.clientService.getAll().subscribe(response => {
      this.clients = response;
      this.filteredClients = response; 
    })
    
  }

  onCreateClient(){
    console.log("Se oprimió el botón")
  }
  onFilter(){
    this.filteredClients = this.clients.filter(
      c => c.name.toUpperCase().includes(this.filter.toUpperCase())   || 
      c.gender.toUpperCase().includes(this.filter.toUpperCase())         ||
      c.age.toString().includes(this.filter.toUpperCase()) ||
      c.dni.toUpperCase().includes(this.filter.toUpperCase())            ||
      c.address.toUpperCase().includes(this.filter.toUpperCase())        ||
      c.phone.toUpperCase().includes(this.filter.toUpperCase())          ||
      (c.state == true ? "true".includes(this.filter.toUpperCase()) : null
      || c.state == false ? "false".includes(this.filter.toUpperCase()) : null)    
      )
  }
}
