import { MenuInfoService } from './../menu-info-service';
import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-welcome',
  imports: [RouterLink],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {

  private menuService = inject(MenuInfoService);

  welcome = this.menuService.getWelcomeInfo();
}
