import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainLayoutComponent } from './common/layouts/main-layout/main-layout.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostComponent } from './common/components/post/post.component'
import { AppCommonModule } from './common/app-common.module'

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
