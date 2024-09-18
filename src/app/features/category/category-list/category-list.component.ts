import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent  implements OnInit{

  categories?: Category[];


  constructor(private categotyService: CategoryService){

  }

  ngOnInit(): void {
    this.categotyService.getAllCategories().subscribe({
      next:(response) => {
        this.categories = response
      }
    })
  }

  

}
