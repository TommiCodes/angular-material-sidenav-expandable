import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav-wrapper',
  templateUrl: './sidenav-wrapper.component.html',
  styleUrls: ['./sidenav-wrapper.component.scss']
})
export class SidenavWrapperComponent {

  isExpanded: boolean = false;

  constructor() {}

}
