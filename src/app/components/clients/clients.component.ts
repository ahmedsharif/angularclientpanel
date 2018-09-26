import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { Client } from "../../models/client";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.css"]
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  totalOwd: number;

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    // this.clientService.getClients().subscribe(clients => {
    //   this.clients = clients;
    //   this.getTotalOwed();
    // });
  }

  getTotalOwed() {
    this.totalOwd = this.clients.reduce((total, client) => {
      return total + client.balance;
    }, 0);
  }
}
