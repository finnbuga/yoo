import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AlbumService } from "./album.service";

@NgModule({
  imports: [HttpClientModule],
  providers: [AlbumService]
})
export class ApiModule {}
