import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminUsuariosVerComponent } from './pages/admin-usuarios-ver/admin-usuarios-ver.component';
import { AdminUsuariosRegistrarComponent } from './pages/admin-usuarios-registrar/admin-usuarios-registrar.component';
import { SharedModule } from '../shared/shared.module';
import { AdminUsuariosEditarComponent } from './pages/admin-usuarios-editar/admin-usuarios-editar.component';

@NgModule({
  declarations: [AdminHomeComponent, AdminHeaderComponent, AdminUsuariosVerComponent, AdminUsuariosRegistrarComponent, AdminUsuariosEditarComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
