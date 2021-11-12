import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Filme } from '../filmesdata'
import { Filmes } from '../filmeslista'
//import titleinput from '..src/index'

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  filmeslista = Filmes;
  idqt = 3

  selectedTitle?: Filme //EDITAR FILME
  EditInput(filmesdata: Filme) {
    this.selectedTitle = filmesdata;
  };

  RemoveInput(filmesdata: Filme): void { // REMOVER FILME
    delete this.selectedTitle; //fecha a caixa de edicao
    this.filmeslista = this.filmeslista.filter(item => item !== filmesdata);
    this.idqt--
  }

  
  AddInput() { //ADICIONAR FILME
    var novofilme = {
      "title": "Novo filme ("+this.filmeslista.length+")",
      "id": this.idqt++,
      "desc": '',
    }
    this.filmeslista.push(novofilme)
    this.EditInput(novofilme) // abre edicao pra nomear o filme
  }

  constructor() { }

  ngOnInit(): void {
  }

}


