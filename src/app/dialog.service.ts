import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable()

export class DialogService {
  pagina:any = '';

  @Output() dialog: EventEmitter<any> = new EventEmitter();

  constructor(public dialogBase: MatDialog) { }

  public abrirDialog() {
    this.dialogBase.open(DialogBase);
    console.log('dialog lanzado');
    console.log(this.pagina);
  }
}

@Component({
  selector: 'dialog-base',
  templateUrl: 'dialog/dialog-base.html',
})
export class DialogBase {}