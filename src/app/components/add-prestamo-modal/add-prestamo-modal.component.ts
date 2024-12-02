import { Component } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOption } from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';
import { Cliente } from '../../cliente.model';
import { Inject } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';  // Para el selector de fecha
import { MatNativeDateModule } from '@angular/material/core'; 

@Component({
  selector: 'app-add-prestamo-modal',
  imports: [ FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatDialogModule,MatOption,MatSelect,MatOptionModule,CommonModule,MatDatepickerModule,MatNativeDateModule ],
  templateUrl: './add-prestamo-modal.component.html',
  styleUrl: './add-prestamo-modal.component.css'
})
export class AddPrestamoModalComponent {
  prestamo = { amount: 0, date: '', cliente_id: '',  };
  clientes: Cliente[];

  constructor(
    public dialogRef: MatDialogRef<AddPrestamoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.clientes = data.clientes;
    console.log(this.clientes);
  }
  guardar() {
    this.dialogRef.close(this.prestamo);
  }

  cancelar() {
    this.dialogRef.close(null);
  }
}
