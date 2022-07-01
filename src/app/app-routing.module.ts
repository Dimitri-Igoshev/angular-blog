import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { MainLayoutComponent } from './common/layouts/main-layout/main-layout.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { PostPageComponent } from './pages/post-page/post-page.component'

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'post/:id', component: PostPageComponent }
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
