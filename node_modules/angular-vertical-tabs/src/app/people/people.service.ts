import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

export interface IPerson {
  id: number;
  name: string;
  surname: string;
  twitter: string;
}

@Injectable()
export class PeopleService {
  constructor() {
  }

  getPeople(): Observable<IPerson[]> {
    return of([
      {
        id: 1,
        name: 'Juri',
        surname: 'Strumpflohner',
        twitter: '@juristr'
      }
    ]);
  }
}
