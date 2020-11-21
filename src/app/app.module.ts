import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthContainerComponent } from './auth/containers/auth-container/auth-container.component';
import { EntryComponent } from './auth/components/entry/entry.component';
import { AuthService } from './auth/services/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GalleryContainerComponent } from './gallery/containers/gallery-container/gallery-container.component';
import { AuthGuard } from './auth/services/auth.guard';
import { TokenInterceptor } from './token.interceptor';
import { GalleryComponent } from './gallery/components/gallery/gallery.component';
import { ModalComponent } from './gallery/components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthContainerComponent,
    EntryComponent,
    GalleryContainerComponent,
    GalleryComponent,
    ModalComponent
  ],
  imports: [
    InfiniteScrollModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
