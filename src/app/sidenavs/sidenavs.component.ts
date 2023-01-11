import { Component } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-sidenavs',
  templateUrl: './sidenavs.component.html',
  styleUrls: ['./sidenavs.component.scss']
})
export class SidenavsComponent {

  constructor(public sidenavService: SidenavService) {}

}
