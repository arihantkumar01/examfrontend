import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, public snackBar: MatSnackBar) { }

  public user={
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
  }

  

  ngOnInit(): void {
  }

  formSubmit()
  {
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        // success
        console.log(data)
        swal("Success", "User registered successfully", "success")
      },
      (error)=>{
        // error
        console.log(error)
        this.snackBar.open("An error occured while registering user", "", {duration:2000})
      }
    )
  }

}
