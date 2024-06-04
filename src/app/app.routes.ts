import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
{
    path:"Home",component:LayoutComponent,
    pathMatch : 'prefix',
    children:[
        {path:"Test",component:TestComponent},




    ]
},
{path:"**",component:LayoutComponent}
];
