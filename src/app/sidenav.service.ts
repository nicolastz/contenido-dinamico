import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class SidenavService {
  pagina:any = '';

  public sidenavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  public sidenavToggle() {
    this.pagina = '';
    return this.sidenavToggleSubject.next(null);
  }
}
