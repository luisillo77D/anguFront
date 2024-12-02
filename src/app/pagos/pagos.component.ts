import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import {Pagos} from '../pagos'
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-pagos',
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent {
  pagos: MatTableDataSource<Pagos> = new MatTableDataSource<Pagos>([]);
  id: number = 0;
  displayedColumns: string[] = ['id','prestamo_id', 'amount', 'date', 'actions'];
  constructor(private route: ActivatedRoute,private api: ApiService) { }

  ngOnInit(): void {
    // Obtiene el id de los parámetros de la ruta
    this.id = +this.route.snapshot.paramMap.get('id')!;  // El "+" convierte el string en número
    console.log('ID de la ruta:', this.id);
    this.llenaPagos();
  }

  llenaPagos() {
    // Obtiene los pagos del cliente con el id especificado
    this.api.get('pagos/' + this.id).subscribe((data: Pagos) => {
      // Asegúrate de que 'data' sea un arreglo
      if (Array.isArray(data)) {
        this.pagos.data = data;
      } else {
        console.error('Los datos obtenidos no son un arreglo:', data);
      }
    });
}

pagar(pago: Pagos) {
  console.log('Pagar');
}
}
