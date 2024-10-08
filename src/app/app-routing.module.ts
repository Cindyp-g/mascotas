import { EmpleadoComponent } from './components/empleado/empleado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotaComponent } from './components/mascota/mascota.component';
import { DiagnosticoComponent } from './components/diagnostico/diagnostico.component';
import { AlumnoComponent } from './components/alumno/alumno.component';

const routes: Routes = [
  {path:'empleados',component:EmpleadoComponent},
  {path:'mascotas',component:MascotaComponent},
  {path:'diagnosticos',component:DiagnosticoComponent},
  {path:'alumnos',component:AlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
