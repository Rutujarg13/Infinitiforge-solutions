import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent implements OnInit{
  contact: Contact = new Contact();
  public isVisible: boolean = false;

 
    
  contactus : FormGroup = new FormGroup({});
nameInput: any;




  constructor(private contactService: ContactService,
    private router : Router, private fb:FormBuilder) {
      this.contactus = fb.group({  
        mobileno : ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]  
      })  
  }
  get f() {
    return this.contactus.controls;
  }

  ngOnInit(): void {
   
  }

  saveContact(){
    this.contactService.createContact(this.contact).subscribe(data =>{
      console.log(data);
    },
  error => console.log(error));
  }

  
 
  
  onSubmit(contactus: NgForm): void{
    console.log(this.contact);
    this.saveContact();
   contactus.reset()

 
  }
 
  showMsg() : void {
    if (this.isVisible) { 
      return;
    } 
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,2500)
  }

  
}
