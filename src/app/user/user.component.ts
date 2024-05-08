import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm : any;
  users: any;

  ngOnInit(): void {
    this.GetAllUsers();
  };
  constructor(public fb: FormBuilder, private service: CommonService){  
    this.userForm = this.fb.group({
      Name: [""],
      Email: [""],
      Mobile: [""],
      Age:[""],
    })                 
  }

  SubmitForm(){
    console.log(this.userForm.value);

    this.service.AddUpdateUser(this.userForm.value).subscribe(data=>{
      alert("Added");
      this.userForm.reset();
      console.log(data);  
    })

  }
  
  GetAllUsers(){
    this.service.GetAllUsers().subscribe(data=>{
      console.log('users',data);  
      this.users = data;
    })

  }

  DeleteUserByID(ID:any){
    this.service.DeleteUserByID(ID).subscribe(data=>{
      alert("User Deleted");
      this.GetAllUsers();

    }) 

  }
}
