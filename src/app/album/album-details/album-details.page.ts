import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { IAlbum } from "../../shared/interfaces";
import { AlbumService } from "../../api/album.service";

@Component({
  selector: "album-details",
  templateUrl: "album-details.page.html"
})
export class AlbumDetailsPage implements OnInit {
  private id: number = null;
  public album: IAlbum = null;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => (this.id = params["id"]));
    this.albumService
      .getAlbum(this.id)
      .subscribe((album: IAlbum) => (this.album = album));
  }
}
