import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  babasOriginal = [
    {
      foto: '',
      nome: 'Luciana ALves',
      idade: 26,
      telefone: '1213213213123',
      descricao: 'Sou top sdasdasdasdas dasdasdassdu asudit asiduas dsai uikuiku kikik',
      bairro: 'morumbi',
    },
    {
      foto: '',
      nome: 'Luciana ALves',
      idade: 26,
      telefone: '1213213213123',
      descricao: 'Sou top sdasdasdasdas dasdasdassdu asudit asiduas dsai uikuiku kikik',
      bairro: 'morumbaw',
    },
    {
      foto: '',
      nome: 'Luciana ALves',
      idade: 26,
      telefone: '1213213213123',
      descricao: 'Sou top sdasdasdasdas dasdasdassdu asudit asiduas dsai uikuiku kikik',
      bairro: 'ipiranga',
    },
    {
      foto: '',
      nome: 'Luciana ALves',
      idade: 26,
      telefone: '1213213213123',
      descricao: 'Sou top sdasdasdasdas dasdasdassdu asudit asiduas dsai uikuiku kikik',
      bairro: 'cidade nova',
    },
    {
      foto: '',
      nome: 'Luciana ALves',
      idade: 26,
      telefone: '1213213213123',
      descricao: 'Sou top sdasdasdasdas dasdasdassdu asudit asiduas dsai uikuiku kikik',
      bairro: 'tatuapé',
    },
    {
      foto: '',
      nome: 'Luciana ALves',
      idade: 26,
      telefone: '1213213213123',
      descricao: 'Sou top sdasdasdasdas dasdasdassdu asudit asiduas dsai uikuiku kikik',
      bairro: 'morumbi now',
    },
  ]

  constructor(public navCtrl: NavController) {
    this.babas = this.babasOriginal
  
  }

  busca(evento){
    this.babas = this.babasOriginal

    var query = evento.target.value
    
    this.babas = this.babas.filter(function(baba){
      return baba.bairro.includes(query)
    })
  }

  babaSelecionada(baba){
    //console.log('Babá', baba)
  }

}
