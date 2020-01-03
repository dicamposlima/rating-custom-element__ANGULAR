import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>()
  @Input() rate: number = 0
  rates: number[] = [1,2,3,4,5]  
  previousRate: number

  constructor() { }

  ngOnInit() {
  }

  setRate(r: number): void {
    this.rate = r
    this.previousRate = undefined
    this.rated.emit(this.rate)
  }

  setTemporaryRate(r: number): void {
    if(this.previousRate === undefined) {
      this.previousRate = this.rate
    }
    this.rate = r
  }
   
  clearTemporaryRate(): void {
    if(this.previousRate !== undefined) {
      this.rate = this.previousRate
      this.previousRate = undefined
    }
  }
}
