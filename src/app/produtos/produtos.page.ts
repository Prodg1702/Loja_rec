import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

   public TodosProdutos : any

  constructor(private objinfoService : InfoService) { }

  ngOnInit() {
    this.TodosProdutos = this.objinfoService.EnviarTodosProdutos()
    }
  }


