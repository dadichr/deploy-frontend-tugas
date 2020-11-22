import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories: Category

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((values:any) => {
      this.categories=values
    })
  }

}
