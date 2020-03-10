import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MeasuresService {

  private measurements: {name:string, value:string}[] = [
    { value: 'gr', name:'gramm' },
    { value: 'piece', name:'piece' },
    { value: 'ml', name:'milliliters' }
  ];

  constructor( ) {}

  getMeasurements() {
    return this.measurements.slice();
  }
}
