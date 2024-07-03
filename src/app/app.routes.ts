import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
{
    path:"Home",component:LayoutComponent,
    pathMatch : 'prefix',
    children:[
        {path:"",component:MainPageComponent},
        // {path:"xxx",component:}

    ]
},
{path:"**",component:LayoutComponent}
];
