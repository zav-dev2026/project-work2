import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: false,
  template: `
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid px-lg-5 justify-content-around">
        <a class="navbar-brand"> Vetrine Riminesi </a>

        <ul class="navbar-nav flex-row ">
          <li class="nav-item">
            <a class="nav-link active" [routerLink]="['/']" routerLinkActive="active"> Home </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styleUrl: './nav-component.css',
})
export class NavComponent {}
