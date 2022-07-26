import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminUsuariosEditarComponent } from './pages/admin-usuarios-editar/admin-usuarios-editar.component';
import { AdminUsuariosRegistrarComponent } from './pages/admin-usuarios-registrar/admin-usuarios-registrar.component';
import { AdminUsuariosVerComponent } from './pages/admin-usuarios-ver/admin-usuarios-ver.component';

const routes: Routes = [
  { path: '', component: AdminHomeComponent },
  { path: 'usuarios/ver', component: AdminUsuariosVerComponent },
  { path: 'usuarios/registrar', component: AdminUsuariosRegistrarComponent },
  { path: 'usuarios/editar/:id', component: AdminUsuariosEditarComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
