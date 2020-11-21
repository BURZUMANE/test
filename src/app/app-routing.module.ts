import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthContainerComponent } from './auth/containers/auth-container/auth-container.component';
import { GalleryContainerComponent } from './gallery/containers/gallery-container/gallery-container.component';
import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthContainerComponent
  },
  {
    path: 'gallery',
    component: GalleryContainerComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
