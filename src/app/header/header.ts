import { Component, computed, inject } from '@angular/core';
import { MenuInfoService } from '../menu-info-service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private router = inject(Router);

  pageTitle = '';

  constructor() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      let route = this.router.routerState.root;

      while (route.firstChild) {
        route = route.firstChild;
      }

      this.pageTitle = route.snapshot.data['title'] ?? 'Unknown page';
    });
  }

  private menuInfoService = inject(MenuInfoService);

  subjects = this.menuInfoService.getSubjects();

  selected = computed(() => this.subjects().filter((s) => s.selected));
  total = computed(() => this.selected().length);
  totalHours = computed(() => this.selected().reduce((t, s) => t + s.quantity, 0));
}
