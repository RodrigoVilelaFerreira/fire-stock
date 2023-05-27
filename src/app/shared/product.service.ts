import { Injectable } from '@angular/core';
import { Product } from '../shared/Product';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  registerListRef: AngularFireList<any>;
  registerRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }
    // Create
    createRegister(apt: Product) {
      return this.registerListRef.push({
        name: apt.name,
        quantity: apt.quantity,
        price: apt.price,
      });
    }
    // Get Single
    getRegister(id: string) {
      this.registerRef = this.db.object('/product/' + id);
      return this.registerRef;
    }
    // Get List
    getRegisterList() {
      this.registerListRef = this.db.list('/product');
      return this.registerListRef;
    }
    // Update
    updateRegister( apt: Product) {
      return this.registerRef.update({
        name: apt.name,
        quantity: apt.quantity,
        price: apt.price,
      });
    }
    // Delete
    deleteRegister(id: string) {
      this.registerRef = this.db.object('/product/' + id);
      this.registerRef.remove();
    }
}
