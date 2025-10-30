import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
        {
            codigo: 0,
            codEditora: 1, // Jambô Editora
            titulo: "Tormenta 20 - Edição Jogo do Ano",
            resumo: "O maior RPG de fantasia do Brasil. Regras completas para criar heróis e explorar o mundo de Arton.",
            autores: ["Guilherme Dei Svaldi", "J.M. Trevisan", "Marcelo Cassaro"]
        },
        {
            codigo: 1,
            codEditora: 2, // New Order
            titulo: "Mutantes e Malfeitores: Livro Básico 3ª Ed.",
            resumo: "Um sistema de RPG focado em aventuras de super-heróis. Crie qualquer poder que imaginar!",
            autores: ["Steve Kenson", "Leonel Caldela"]
        },
        {
            codigo: 2,
            codEditora: 3, // CPAD (Exemplo fictício de livro com tema religioso/fantasia)
            titulo: "A Queda do Anjo: Uma Análise Teológica",
            resumo: "Estudo profundo sobre as narrativas de conflito entre o bem e o mal, com foco na mitologia bíblica.",
            autores: ["Dr. Silas Malafaia", "Pr. João Ferreira"]
        },
        {
            codigo: 3,
            codEditora: 1, // Jambô Editora
            titulo: "Manual de Classes do Mago",
            resumo: "Guia detalhado com novas classes, arquétipos e magias para complementar seu sistema de RPG.",
            autores: ["Ricardo Fidelis"]
        }
    ];

    public obterLivros(): Array<Livro>{
      return this.livros;
    }
    public incluir(livro: Livro): void{
      const maxCodigo = Math.max(...this.livros.map(l => l.codigo), 0);
      livro.codigo = maxCodigo + 1;
      this.livros.push(livro);
    }
    public excluir(codigo: number): void{
      const index = this.livros.findIndex(l => l.codigo === codigo);
      if(index !== -1){
        this.livros.splice(index, 1);
      }
    }
}
