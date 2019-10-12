import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
dataSubject = new BehaviorSubject(null);
  constructor() { }
}
