import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-form';

  firstForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    //Step 1 radio validator
    this.firstForm = new FormGroup({
      Options: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.firstForm);
  }
}
