import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { AlbumListPage } from './album-list/album-list.page';
import { AlbumDetailsPage } from './album-details/album-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AlbumListPage
      },
      {
        path: ':id',
        component: AlbumDetailsPage
      }
    ])
  ],
  declarations: [AlbumListPage, AlbumDetailsPage]
})
export class AlbumModule {}
