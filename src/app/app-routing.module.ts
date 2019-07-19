import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'products/new', component: NewComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'products', component: ProductsComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
