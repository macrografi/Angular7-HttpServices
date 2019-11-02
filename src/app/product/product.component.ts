import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductData } from "../product/data.products";
import { ProductDataService } from './product.data.service';
import { ICategory } from '../category/category';
import { CategoryService } from '../category/category.service';
//bootstrap-modal
import { ModalComponent } from "./modal/modal.component";
import { DialogService } from "ng2-bootstrap-modal";



@Component({
    templateUrl: '../product/product.component.html',
    styleUrls: ['../product/product.component.scss']
})

export class ProductComponent implements OnInit {
    errorMessage: string;
    productsData: IProductData[];
    categories: ICategory[];

    public showSpinner: boolean = true;

    constructor(private productDataService: ProductDataService, private categoryService: CategoryService, private activatedRoute: ActivatedRoute, private dialogService: DialogService) { }

    ngOnInit() {

        this.activatedRoute.params.subscribe(

            params => {
                let categoryId = params["id"];
                
                this.categoryService.getCategories().subscribe(
                    categories => this.categories = categories, error => this.errorMessage = <any>error
                );

                this.productDataService.getProducts(categoryId).subscribe(
                    productsData => {
                        this.productsData = productsData;
                        this.showSpinner = false

                    }, error => {
                        this.errorMessage = <any>error
                    }
                );
            }
        );
    }
    showConfirm(item) {
        let disposable = this.dialogService.addDialog(ModalComponent, { item: item }, { closeByClickingOutside: true, backdropColor: 'rgba(0, 0, 0, 0.9)' });
    }
}