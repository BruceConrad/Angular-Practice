import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  // templateUrl: './app.component.html',
   template: `
     <div>
        <!-- <app-post [heading] = "'Post 1'" (remove) = "onDeletePost($event)"></app-post>
        <app-post [heading] = "'Post 2'" (remove) = "onDeletePost($event)"></app-post>
        <app-post [heading] = "'Post 3'" (remove) = "onDeletePost($event)"></app-post> -->
        
        <!-- <app-product></app-product> -->
        <!-- <app-products></app-products>
        <app-product-list></app-product-list> -->
        <!-- <app-observablesample></app-observablesample> -->
        <app-api-sample></app-api-sample>
     </div>
   `,
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'my-first-app';
  active = false;
  name = 'John Doe';
  expression = 'Test';

  submit()
  {
    console.log('submitting form');
  }

  sayHello()
  {
    return 'Hi there';
  }

  changeNameHandler(e:any)
  {
    this.name = e.target.value;
  }

  getValue()
  {
    return 3;
  }

  leaveFocus()
  {
    console.log('done editing');
  }

  textChange(e:any)
  {
    this.print('some text');
    console.log('done editing: ' + e.target.value);
  }

  print(txt:any)
  {
    console.log(txt);
  }

  onDeletePost(e:string)
  {
    console.log('delete post event fired ' + e);
  }
}
