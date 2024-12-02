import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Prestamo } from '../prestamo.model';
import { AddPrestamoModalComponent } from '../components/add-prestamo-modal/add-prestamo-modal.component';
import { Cliente } from '../cliente.model';
import { CommonModule } from '@angular/common';
import { HttpResponse, } from '@angular/common/http';
import { ConfirmDeleteDialogComponent } from '../components/confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-prestamos',
  imports: [ MatTableModule, MatDialogModule, FormsModule, MatButtonModule, CommonModule ],
  templateUrl: './prestamos.component.html',
  styleUrl: './prestamos.component.css'
})
export class PrestamosComponent {
  prestamos: MatTableDataSource<Prestamo> = new MatTableDataSource<Prestamo>([]);
  clientes: Cliente[] = [];

  constructor(private api: ApiService, public dialog: MatDialog) {}

  llenaPrestamos() {
    this.api.get('prestamos').subscribe((data: Prestamo[]) => {
      // Asegúrate de que 'data' sea un arreglo
      if (Array.isArray(data)) {
        this.prestamos.data = data;
      } else {
        console.error('Los datos obtenidos no son un arreglo:', data);
      }
    });
  }

  llenaClientes() {
    this.api.get('clientes').subscribe((data: Cliente[]) => {
      // Asegúrate de que 'data' sea un arreglo
      if (Array.isArray(data)) {
        this.clientes = data;
      } else {
        console.error('Los datos obtenidos no son un arreglo:', data);
      }
    });
  }

  agregarPrestamo() {
    const dialogRef = this.dialog.open(AddPrestamoModalComponent, {
      width: '400px',
      data: {clientes: this.clientes}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        //AGREGAMOS EL DUE_DATE 15 SEMANAS DESPUES DE LA FECHA DE INICIO
        let fecha = new Date(result.date);
        fecha.setDate(fecha.getDate() + 15*7);
        result.due_date = fecha.toISOString().split('T')[0];

        this.api.post('prestamos', result,).subscribe((response: HttpResponse<Prestamo>) => {
          //ejecutamos llenarPrestamos para actualizar la tabla
          this.llenaPrestamos();
        });
      }
    });
  }

  ngOnInit() {
    this.llenaPrestamos();
    this.llenaClientes();
  }

  //funcion para rediccionar a la pagina de pagos
  redireccionarPagos(prestamo: Prestamo) {
    window.location.href = '/pagos/' + prestamo.id;
  }
}
