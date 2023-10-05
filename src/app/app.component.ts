import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-form';

  formData: {
    name: string;
    lastname: string;
    age: string;
    username: string;
    password: string;
  } = {
    name: '',
    lastname: '',
    age: '',
    username: '',
    password: '',
  };

  onSubmit() {
    console.log(this.formData);
  }
}
