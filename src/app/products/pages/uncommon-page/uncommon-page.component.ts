import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  public name: string = 'Ricardo';
  public gender: 'male' | 'female' = 'male';

  // i18nSelect

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    if (this.name == 'Ricardo') {
      this.name = 'Melisa';
      this.gender = 'female';
    } else {
      this.name = 'Ricardo';
      this.gender = 'male';
    }
  }

  // i18nPlural

  public clients: string[] = [
    'Maria',
    'Pedrio',
    'David',
    'Laura',
    'Francesca',
    'Belen',
    'Eduardo',
    'Melisa',
    // 'Natalia',
    // 'Claudia',
    // 'Ricardo',
  ];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe

  public person = {
    name: 'Ricardo',
    age: 31,
    adress: 'Buenos Aires, Argentina',
  };
}
