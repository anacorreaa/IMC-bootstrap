import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  peso!: number;
  altura!: number;
  imc!: number;
  classificacao!: string;
  imagem! : string;
  title: any;

  calcularIMC() {
    if (this.peso && this.altura) {
      this.imc = this.peso / (this.altura * this.altura);
      this.definirClassificacao();
    }
  }

  definirClassificacao() {
    if (this.imc < 18.5) {
      this.classificacao = 'magro';
      this.imagem = 'magro.png';
    } else if (this.imc < 24.9) {
      this.classificacao = 'normal';
      this.imagem = 'normal.png';
    } else if (this.imc < 29.9) {
      this.classificacao = 'gordo';
      this.imagem = 'gordo.png';
    } else {
      this.classificacao = 'Obeso';
      this.imagem = 'obeso.png';
    }
  }
}