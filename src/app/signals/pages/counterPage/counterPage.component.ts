import { Component, OnInit, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counterPage',
  templateUrl: './counterPage.component.html',
})
export class CounterPageComponent {
  public counter = signal(0);
  public squareCounter = computed( () => this.counter() * this.counter() );

  increaseBy( value : number ){
    // this.counter.set( this.counter() + value );
    this.counter.update( current => current + value);
  }


}
