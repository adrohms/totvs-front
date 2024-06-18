import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ConfirmationDialogData {
  title: string;
  message: string;
  content: any;
}

@Component({
  selector: 'totvs-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss'
})
export class ConfirmationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
  ) {}

  onConfirmClick(): void {
    this.dialogRef.close(
      {
        resp: true,
        content: this.data.content
      }
    );
  }

  onCancelClick(): void {
    this.dialogRef.close(
      {
        resp: false,
        content: this.data.content
      }
    );
  }

}
