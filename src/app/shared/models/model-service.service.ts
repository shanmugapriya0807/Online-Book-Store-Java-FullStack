import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelServiceService {

  constructor() { }
}
export interface Product {
  id: number,
  description: string,
  author: string,
  title:string;
  pictureUrl: string,
  price: number
}