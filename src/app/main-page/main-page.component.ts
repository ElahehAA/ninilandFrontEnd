import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
    selector: 'app-main-page',
    standalone: true,
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css',
    imports: [NavBarComponent]
})
export class MainPageComponent {

}
