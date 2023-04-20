import { Component } from '@angular/core';
import { Pessoa } from './model/pessoas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atividade-crud';

  pessoa: Pessoa;
  pessoas: Array<Pessoa>;

  constructor() {
    this.pessoa = new Pessoa();
    this.pessoas = new Array<Pessoa>();
  }

  cadastrar(): void {
    this.pessoas.push(this.pessoa);
    this.pessoa = new Pessoa();
  }

  excluir(pessoaARemover: Pessoa): void {
    const indx = this.pessoas.findIndex(pessoa =>
      pessoa.email === pessoaARemover.email);

    this.pessoas.splice(indx, 1);
  }

  editar(pessoa: Pessoa): void {
    this.pessoa = pessoa;
  }


}
