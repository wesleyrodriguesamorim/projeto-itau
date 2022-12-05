import { Component, OnInit } from '@angular/core'; // talvez necessario importar OnInit
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router"

interface IBusiness {
  id: number
  name: string
  business: string
  valuation: number
  active: boolean
  cep: string
  cnpj: number
}

@Component({
  selector: 'polo-listar-component',
  templateUrl: './polo-listar.component.html',
  styleUrls: ['./polo-listar.component.css']
})
export class PoloListarComponent implements OnInit {
  //variaveis
  public listaDados: IBusiness[] = [];
  displayedColumns: string[] = ['Nome', 'Business', 'Valuation', 'Situação', 'Ação'];

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }
  
  //inicio pagina
  ngOnInit(): void{
    this.recuperarValores();
  }

  //funcoes
  recuperarValores(){
    this.http.get<IBusiness>('https://antlia-mockapi.azurewebsites.net/api/v1/itau_teste')
      .subscribe((data: any) => {
        this.listaDados = data;
    })
  }

  redirecionarPagina(id: number){   
    this.router.navigate(['/polo-cadastrar', { id: id }])
  }
}
