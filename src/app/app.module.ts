import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { GamificationComponent } from "./gamification.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [GamificationComponent],
  bootstrap: [GamificationComponent]
})
export class AppModule {}
