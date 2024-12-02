import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddClienteModalComponent } from '../components/add-client-modal/add-client-modal.component';
import {Cliente} from '../cliente.model';
import { ConfirmDeleteDialogComponent } from '../components/confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-clientes',
  imports: [ MatTableModule, MatDialogModule, FormsModule, MatButtonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes: MatTableDataSource<Cliente> = new MatTableDataSource<Cliente>([]);

  constructor(private api: ApiService, public dialog: MatDialog) {}

  llenaClientes() {
    this.api.get('clientes').subscribe((data: Cliente[]) => {
      // Asegúrate de que 'data' sea un arreglo
      if (Array.isArray(data)) {
        this.clientes.data = data;
      } else {
        console.error('Los datos obtenidos no son un arreglo:', data);
      }
    });
  }
  

  agregarCliente() {
    const dialogRef = this.dialog.open(AddClienteModalComponent, {
      width: '400px',
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.api.post('clientes', result).subscribe((data: Cliente) => {
          // Verifica si 'data' es un arreglo antes de actualizar
          if (Array.isArray(this.clientes.data)) {
            this.clientes.data = [...this.clientes.data, data];
          } else {
            console.error('La propiedad "data" no es un arreglo:', this.clientes.data);
          }
        });
      }
    });
  }

  confirmDelete(cliente: Cliente) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Si el usuario confirma la eliminación, procede a eliminar el cliente
        this.api.delete(`clientes/${cliente.id}`).subscribe(() => {
          // Actualiza la tabla eliminando el cliente
          this.clientes.data = this.clientes.data.filter((c) => c.id !== cliente.id);
        });
      }
    });
  }
  
  ngOnInit() {
    this.llenaClientes();
  }
}
