import { Component, OnInit, Input } from '@angular/core';
import { ServiciosBD} from '../modelos/lstServicios'
import { ListaserviciosService } from '../servicios/listaservicios.service'

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.css'],
  providers: [ListaserviciosService]
})
export class ListaServiciosComponent implements OnInit{
 public listaServicios: Array<ServiciosBD>
 public codServicios: string[] = []
 public verdetalle: boolean = false

 @Input() mensaje?: string
 
 constructor(private _listaServicios: ListaserviciosService){
  this.listaServicios = new Array<ServiciosBD>()
 }

 ngOnInit(): void {
   this.listaServicios = this._listaServicios.getServicios()
   this.mensaje = "DISPONIBLE"
 }

 verDetalles(){
this.verdetalle = true
 }


}
