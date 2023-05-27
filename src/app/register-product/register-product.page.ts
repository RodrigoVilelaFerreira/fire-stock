import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ProductService } from './../shared/product.service';
@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.page.html',
  styleUrls: ['./register-product.page.scss'],
})
export class RegisterProductPage implements OnInit {
  registerForm: FormGroup;
  constructor(
    private aptService: ProductService,
    private router: Router,
    public fb: FormBuilder
  ) { }
  ngOnInit() {
    this.registerForm = this.fb.group({
      name: [''],
      quantity: [''],
      price: ['']
    })
  }
  formSubmit() {
    if (!this.registerForm.valid) {
      return false;
    } else {
      this.aptService.createRegister(this.registerForm.value).then(res => {
        console.log(res)
        this.registerForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}
