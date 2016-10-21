import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Client } from 'ng2-f-client-models';

@Component({
  selector: 'ng2-f-client-list',
  template: require('./client-list.component.html')
})
export class ClientListComponent {
  @Input() clients: Client[];
  @Input() listTitle: string = 'List items';
  @Input() selectLabel: string = 'Select';
  @Output() clientSelected = new EventEmitter<Client>();

  selectClient(client: Client) {
    this.clientSelected.emit(client);
  }
}
