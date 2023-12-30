import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-property-page',
  templateUrl: './property-page.component.html',
  styles: [
  ]
})
export class PropertyPageComponent {
  public counter = signal(10);
  public user = signal<User>(
    {
      id: 4,
      email: 'eve.holt@reqres.in',
      first_name: 'Eve',
      last_name: 'Holt',
      avatar: 'https://reqres.in/img/faces/4-image.jpg'
    }
  )

  public fullName = computed( () => `${this.user().first_name} ${this.user().last_name} ` )

  public userChangeEffect = effect( () => {
    console.log(`${this.user().first_name} - ${this.counter()}`);
  })
  increaseBy( value : number ){
    this.counter.update(current => current + value);
  }

  onFieldUpdated( field : keyof(User) , value : string ):void{

    // this.user.set({
    //   ...this.user(),
    //   [field] : value,
    // })

    this.user.update(current => {
      switch(field){
        case 'email' :
          current.email = value
          break;
        case 'first_name' :
          current.first_name = value
          break;
        case 'last_name' :
          current.last_name = value
          break;
        case 'avatar' :
          current.avatar = value
          break;
        case 'id' :
          current.id = Number(value)
          break;
      }

      return current
    })

  }
}
