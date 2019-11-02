import { Injectable, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { IProductData } from "../product/data.products";
import { ActivatedRoute, Router } from '@angular/router';

import "rxjs/Rx";
import { Observable } from "rxjs/Observable";


@Injectable()


export class ProductDataService {
    private productUrl = "https://product-data-service.firebaseio.com/category-";

    constructor(private http: Http, private router: Router, private activatedRoute: ActivatedRoute) { }

    getProducts(categoryId: number): Observable<IProductData[]> {

        return this.http.get(this.productUrl + categoryId + ".json", { params: { categoryId: categoryId } })
            .map((response: Response) => <IProductData[]>response.json())
            .do(data => console.log('Category Listed - Activated route id : ' + categoryId))
            .catch(
                (error: Response) => {
                    console.log(error);
                    return Observable.throw(error);
                }
            )
    }
}