import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  selector: 'app-cadastrar',
  templateUrl: './polo-cadastrar.component.html',
  styleUrls: ['./polo-cadastrar.component.css']
})

export class PoloCadastrarComponent implements OnInit {
  //variaveis
  polo: IBusiness = {
    id: 0,
    name: '',
    business: '',
    valuation: 0,
    active: false,
    cep: '',
    cnpj: 0
  };

  poloFormulario = new FormGroup({
    cep: new FormControl('', Validators.required),
    nomeDaRua: new FormControl('', Validators.required),
    bairro: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    cidade: new FormControl('', Validators.required),
    nome: new FormControl('', Validators.required),
    business: new FormControl('', Validators.required),
    valuation: new FormControl(0, Validators.required),
    cnpj: new FormControl(0, Validators.required),
    ativo: new FormControl(false, Validators.required),
  });

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }
  
  //inicio pagina
  ngOnInit(): void{
    const poloId = this.route.snapshot.paramMap.get('id');        
    this.recuperarValores(poloId);
  }

  //funcoes
  recuperarValores(id: any){
    this.http.get<IBusiness>('https://antlia-mockapi.azurewebsites.net/api/v1/itau_teste/' + id)
      .subscribe((data) => {
        this.polo = data;
        console.log(this.polo.active);
        this.construirFormulario(this.polo);
      }
    )
  }

  redirecionarPagina(botao: number){
    if(botao === 1){
      console.log(this.poloFormulario.value);
      console.log(this.poloFormulario.errors);
    }
    this.router.navigate(['/polo-listar'])
  }

  construirFormulario(polo: IBusiness){
    this.poloFormulario.setValue(
      {
        nome: polo.name,
        business: polo.business,
        cnpj: polo.cnpj,
        valuation: polo.valuation,
        ativo: polo.active,
        cep: polo.cep,
        nomeDaRua: '',
        bairro: '',
        estado: '',
        cidade: '',
      }
    );
  }  
}
