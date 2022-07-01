import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AdminLayoutComponent } from './common/layouts/admin-layout/admin-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component'
import { AuthService } from './common/services/auth.service'
import { AppCommonModule } from '../common/app-common.module'


@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent
  ],
  providers: [AuthService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppCommonModule,
    RouterModule.forChild([
      { path: '', component: AdminLayoutComponent, children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          { path: 'dashboard', component: DashboardPageComponent },
          { path: 'create', component: CreatePageComponent },
          { path: 'post/:id/edit', component: EditPageComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AdminModule {
}
