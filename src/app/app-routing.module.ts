import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesPcListComponent } from './componentes-pc-list/componentes-pc-list.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'componentes',
        pathMatch: 'full',
    },
    {
        path:'componentes',
        component: ComponentesPcListComponent
    },
    {
        path:'contacto',
        component: ContactoComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
