import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerticalTabsService {
  multi: boolean;
  selectedOptions: string[];

  constructor() {
    this.selectedOptions = [];
  }
}
