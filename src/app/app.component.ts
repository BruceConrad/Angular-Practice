import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './app.component.html',
  // template: `
  //   <div>
  //     {{title}}
  //     {{sayHello()}}
  //   </div>
  // `,
  // styleUrls: ['./app.component.css']
  styles: [`
  div{
    background-color: #def;
  }
  `]
})
export class AppComponent {
  title = 'my-first-app';
  active = false;
  name = 'John Doe'

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
}
