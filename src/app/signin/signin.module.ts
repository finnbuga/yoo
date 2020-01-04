import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

import { SigninPage } from "./signin.page";

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: SigninPage
      }
    ])
  ],
  declarations: [SigninPage]
})
export class SigninModule {}
