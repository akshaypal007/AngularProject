import { Component, OnInit } from '@angular/core';

//importing formgroup,formbuilder,validators
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  myform:FormGroup;
  pagesubmit:boolean=false;


  constructor(private obj:FormBuilder) { }

  ngOnInit() {

    this.myform=this.obj.group({
      email:["",[Validators.required, Validators.email]],
      password:["",[Validators.required]]
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
      alert("Welcome User..");
      window.location.href="https://akshaypal007.github.io/AngularProject/home";
    }
  }

}
