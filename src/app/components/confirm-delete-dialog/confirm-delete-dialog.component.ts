import { Component, Inject } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.css'],
  imports: [MatDialogContent, MatDialogActions,MatButtonModule]
})
export class ConfirmDeleteDialogComponent {
  message: string;
  status:string;
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.message = data.message || '¿Estás seguro de que deseas eliminar este elemento?';
    this.status = data.status || 'eliminar';
  }
  onConfirm(): void {
    this.dialogRef.close(true); // Devuelve true cuando el usuario confirma la eliminación
  }

  onCancel(): void {
    this.dialogRef.close(false); // Devuelve false cuando el usuario cancela
  }
}
