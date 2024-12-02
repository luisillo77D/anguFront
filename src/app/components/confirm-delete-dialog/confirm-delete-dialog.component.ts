import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.css'],
  imports: [MatDialogContent, MatDialogActions,MatButtonModule]
})
export class ConfirmDeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true); // Devuelve true cuando el usuario confirma la eliminación
  }

  onCancel(): void {
    this.dialogRef.close(false); // Devuelve false cuando el usuario cancela
  }
}
