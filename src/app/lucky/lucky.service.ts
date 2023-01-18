import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LuckyService {
  private myValue: string = '😴';
  
  get value(): string {
    return this.myValue;
  }

  beLucky(): void {
    this.myValue = '🍀';
  }

  beVeryLucky(): void {
    this.myValue = '🍀🍀';
  }
}
