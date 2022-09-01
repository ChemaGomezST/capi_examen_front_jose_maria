import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  public users:any;
  constructor(
    public usuariosService: UsuariosService,
  ) { }

  ngOnInit(): void {
    this.usuariosService.getUsers().subscribe(
      (response:any)=>{
        this.users=response;
        console.log(this.users);
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

}
