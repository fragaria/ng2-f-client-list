import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Client } from 'ng2-f-client-models';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ng2-f-client-list',
  templateUrl: 'client-list.component.html'
})
export class ClientListComponent {
  _clients: Client[] | Promise<Client[]> | Observable<Client[]>;
  @Input() listTitle: string = 'List items';
  @Input() selectLabel: string = 'Select';
  @Output() clientSelected = new EventEmitter<Client>();

  @Input()
  set clients(clients: Client[] | Promise<Client[]> | Observable<Client[]>) {
    if (clients instanceof Array) {
      this._clients = new Promise<Client[]>(resolve => { resolve(clients) });
    } else {
      this._clients = clients;
    }
  }

  get clients(): Client[] | Promise<Client[]> | Observable<Client[]> {
    return this._clients
  }

  selectClient(client: Client) {
    this.clientSelected.emit(client);
  }
}
