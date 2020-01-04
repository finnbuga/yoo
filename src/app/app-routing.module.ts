import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { ApiModule } from "./api/api.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "signin",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "albums",
    loadChildren: () => import("./album/album.module").then(m => m.AlbumModule)
  },
  {
    path: "signin",
    loadChildren: () =>
      import("./signin/signin.module").then(m => m.SigninModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ApiModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
