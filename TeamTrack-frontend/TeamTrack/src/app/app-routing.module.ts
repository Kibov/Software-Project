import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TablicaTestComponent } from "./tablica-test/tablica-test.component";

const routes: Routes = [{ path: "table", component: TablicaTestComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
