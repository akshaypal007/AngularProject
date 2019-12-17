import { Component, OnInit } from '@angular/core';

//importing formgroup,formbuilder,validators
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myform:FormGroup;
  pagesubmit:boolean=false;

  constructor(private obj:FormBuilder) { }

  ngOnInit() {

    this.myform = this.obj.group({
      name:["", Validators.required],
      mobile:["", Validators.required],
      email:["", [Validators.required, Validators.email]],
      password:["", Validators.required],
      state:["", Validators.required]
    })

  }

  save()
  {
    this.pagesubmit=true;
    if(this.myform.invalid)
    {
      return;
    }
    else
    {
      alert("Thanks for registration..Please Login");
      window.location.href="https://akshaypal007.github.io/AngularProject/login";
    }
  }

}
