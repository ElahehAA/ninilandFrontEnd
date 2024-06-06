import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
{
    path:"Home",component:LayoutComponent,
    pathMatch : 'prefix',
    children:[


    ]
},
{path:"**",component:LayoutComponent}
];
