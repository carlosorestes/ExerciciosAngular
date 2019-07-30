import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  observable: Observable<string>;
  
  nomes: string[] = ['joão', 'maria', 'jose', 'pedro', 'felipe', 'flavia'];

  nomesFiltro: string[];

  ngOnInit() {
    const observable = new Observable(subuscriber => {
      subuscriber.next(100);
      subuscriber.next(2);
      subuscriber.next(300);
      setTimeout(() => {
        subuscriber.next(4);
        subuscriber.complete();
      }, 1000);
    });


  console.log('Antes de executar subscribe');
  observable.subscribe({
    next(x) { console.log('recebeu o valor ' + x); },
    error(err) { console.error('Erro: ' + err); },
    complete() { console.log('terminou o subscribe'); }
  });

  console.log('ultima linha');
  
  let lista: Array<string> = [];
  this.observable.subscribe({
    next(x) {lista.push(x); },
    error(err) { alert('ocorreu um erro ' + err); }
  });

  this.nomes = lista;

  }
  
  buscar(valor: string) {
    this.nomesFiltro = [];

    // let temp = [];
    // this.nomes.forEach(buscarItem);
    // function buscarItem(nome) {
    //   console.log(nome);
    //   if (nome.toLowerCase().includes(valor.toLowerCase())) {
    //     temp.push(nome);
    //   }
    // }
    // this.nomesFiltro = temp;

    // this.nomesFiltro = this.nomes.filter (function (nome) {
    //   return nome.toLowerCase().includes(valor.toLowerCase());
    // });

    this.nomesFiltro = this.nomes.filter(
      (nome) => nome.toLocaleLowerCase().includes(valor.toLocaleLowerCase())
    );
  }


  pessoas: any = [
    {id: 1, nome: 'joão', salario: 5000},
    {id: 2, nome: 'maria', salario: 1000},
    {id: 3, nome: 'jose', salario: 2000},
    {id: 4, nome: 'pedro', salario: 3000},
    {id: 5, nome: 'felipe', salario: 10000},
    {id: 6, nome: 'flavia', salario: 800}
  ]

  getValorTotal(): Number {
    return this.pessoas.reduce(
      (soma, pessoas) => soma + pessoas.salario, 0);
  }

  buscarId(id) {
    return this.pessoas.find(pessoas => pessoas.id == id);
  }

  aumentarSalario(percentual) {
    this.pessoas.map(pessoa =>
      pessoa.salario += pessoa.salario * percentual/100)
  }

  verificaSalario(valor: number) {
    return this.pessoas.every(pessoa => pessoa.salario > valor);
  }

  buscaCampos(criterio: string) {
    return this.pessoas.filter((pessoa) => 
    Object.keys(pessoa).some
    (chave => pessoa[chave].toString().includes(criterio)));
  }

  enviar(valor: string) {
    this.nomes.push(valor);
  }

  makeid(length) {
    var text = "";
    var possible  = "AASDFASDFMASDFJEKJJSDFHEHSSKKDFJIADSFKAKLDSJFQWEELLIPOIPHFHHASDHF";
    for (var i = 0; i < length; i++ ){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
    }
  }
}
