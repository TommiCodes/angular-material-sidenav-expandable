import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-wrapper',
  templateUrl: './sidenav-wrapper.component.html',
  styleUrls: ['./sidenav-wrapper.component.scss']
})
export class SidenavWrapperComponent {

  isExpanded: boolean = false;

  constructor(private router: Router) { }

}
