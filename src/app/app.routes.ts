import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TuvinoComponent } from './views/tuvino/tuvino.component';
import { DenominacionesComponent } from './views/denominaciones/denominaciones.component';
import { BodegasComponent } from './views/bodegas/bodegas.component';
import { VinosComponent } from './views/vinos/vinos.component';
import { ValoracionesComponent } from './views/valoraciones/valoraciones.component';
import { ContactoComponent } from './views/contacto/contacto.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'tuvino',component:TuvinoComponent},
    {path:'denominaciones/:id',component:DenominacionesComponent},
    {path:'bodegas/:id',component:BodegasComponent},
    {path:'vinos/color/:id',component:VinosComponent},
    {path:'vinos/espumosos/:id',component:VinosComponent},
    {path:'valoraciones',component:ValoracionesComponent},
    {path:'contacto',component:ContactoComponent}
];


  