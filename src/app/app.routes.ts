import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Layout } from './shared/layout/layout';
import { Career } from './pages/career/career';
import { Apply } from './pages/apply/apply';
import { Practice } from './practice/practice';
import { ParentPage } from './parent-page/parent-page';
import { Child } from './child/child';
import { UpdateEmployees } from './update-employees/update-employees';
import { AddEmployee } from './add-employee/add-employee';

export const routes: Routes = [
    {

        // path: '',component: Layout, children: 
        // [

        //     {path: 'home', component: Home},
        //     {path: 'career', component: Career},
        //     {path: 'apply', component: Apply},
        //     {path: '', redirectTo: 'home', pathMatch: 'full'}
        // ]
        path: '', component: ParentPage
    },
    { path: "employee-details/:id", component: Child },
    { path: 'update-employee/:id', component: UpdateEmployees },
    { path: "add-employee", component: AddEmployee }


];
