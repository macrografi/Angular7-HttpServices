import { Component, OnInit } from '@angular/core';
import { CategoryService } from "./category/category.service";
import { ICategory } from "./category/category";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  errorMessage: string;
  categories: ICategory[];
  isCollapsed = true;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      categories => this.categories = categories, error => this.errorMessage = <any>error
    );
  }
}
