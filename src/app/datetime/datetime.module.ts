import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { DatetimePageRoutingModule } from "./datetime-routing.module";
import { DatetimePage } from "./datetime.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DatetimePageRoutingModule],
  declarations: [DatetimePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DatetimePageModule {}
