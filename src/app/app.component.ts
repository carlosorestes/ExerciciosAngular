import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nomes: string[] = ['joão', 'maria', 'jose', 'pedro', 'felipe', 'flavia'];

  buscar(valor: string) {
    alert(valor);
  }

}
