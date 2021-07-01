import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './app.component.html',
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

  searchText(elem:HTMLInputElement)
  {
    console.log(elem.value);
  }
}
