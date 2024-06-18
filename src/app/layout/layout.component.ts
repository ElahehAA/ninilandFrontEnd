import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,
            FormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatGridListModule,
            MatButtonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  public logoSrc:string="assets/Images/logo.png";
  constructor(){

  }
}
