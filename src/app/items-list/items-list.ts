import { Component, inject } from '@angular/core';
import { MenuInfoService } from '../menu-info-service';

@Component({
  selector: 'app-items-list',
  imports: [],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList {
  private menuInfoService = inject(MenuInfoService);

  subjects = this.menuInfoService.getSubjects();

  toggleItem(id: number, state: boolean) {
    this.subjects.update((items) =>
      items.map((item) => (item.id === id ? { ...item, selected: state } : item)),
    );
  }
}
