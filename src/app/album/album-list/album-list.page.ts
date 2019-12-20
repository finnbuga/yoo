import { Component, OnInit } from '@angular/core';

import { IAlbum } from '../../shared/interfaces';
import { AlbumService } from '../../api/album.service';

@Component({
  selector: 'album-list',
  templateUrl: 'album-list.page.html'
})
export class AlbumListPage implements OnInit {
  private selectedItem: any;

  //public items: Array<{ title: string; note: string; icon: string }> = [];
  public albums: IAlbum[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums()
      .subscribe((albums: IAlbum[]) => this.albums = albums);
  }
}
