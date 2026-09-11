import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Layout } from './shared/layout/layout';
import { Career } from './pages/career/career';
import { Apply } from './pages/apply/apply';
import { Practice } from './practice/practice';
import { ParentPage } from './parent-page/parent-page';

export const routes: Routes = [
    {

        // path: '',component: Layout, children: 
        // [

        //     {path: 'home', component: Home},
        //     {path: 'career', component: Career},
        //     {path: 'apply', component: Apply},
        //     {path: '', redirectTo: 'home', pathMatch: 'full'}
        // ]
        path: '', component:ParentPage
    }
];
