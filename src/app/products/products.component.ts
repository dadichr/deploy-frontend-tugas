import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared/products.service';
import { IdProduct }  from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  id: any;
  products: IdProduct
  public productConnect: any = {}
  constructor ( public productservice: ProductsService, public router: ActivatedRoute,) {}

  ngOnInit() {
    this.router.params.subscribe((params) =>{
      this.id = params._categoryId
      this.productservice.getIdProduct(this.id).subscribe((result) =>{
        console.log("xxx", result)
        this.products=result.data
      })
    })
  }

}
