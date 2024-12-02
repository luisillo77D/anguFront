import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-add-client-modal',
  templateUrl: './add-client-modal.component.html',
  styleUrls: ['./add-client-modal.component.css'],
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatDialogModule],
})
export class AddClienteModalComponent {
  cliente = { name: '', lastname: '', address: '' };

  constructor(public dialogRef: MatDialogRef<AddClienteModalComponent>) {}

  guardar() {
    this.dialogRef.close(this.cliente);
  }

  cancelar() {
    this.dialogRef.close(null);
  }
}
