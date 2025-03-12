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
  imagem!: string;
  title: any;

  calcularIMC() {
    if (this.peso && this.altura) {
      this.imc = this.peso / (this.altura * this.altura);
      this.definirClassificacao();
    }
  }

  definirClassificacao() {
    if (this.imc < 18.5) {
      this.classificacao = 'Abaixo do peso';
      this.imagem = 'https://example.com/baixo-peso.png';
    } else if (this.imc < 24.9) {
      this.classificacao = 'Peso normal';
      this.imagem = 'https://example.com/peso-normal.png';
    } else if (this.imc < 29.9) {
      this.classificacao = 'Sobrepeso';
      this.imagem = 'https://example.com/sobrepeso.png';
    } else {
      this.classificacao = 'Obesidade';
      this.imagem = 'https://example.com/obesidade.png';
    }
  }
}