import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ICategory } from "./category";

import "rxjs/Rx";
import { Observable } from "rxjs/Observable";

@Injectable()

export class CategoryService {
    private categorytUrl = "https://category-service.firebaseio.com/data.json";

    constructor(private http: Http) { }

    getCategories(): Observable<ICategory[]> {
        return this.http.get(this.categorytUrl)
            .map((response: Response) => <ICategory[]>response.json())
            // .do(data=>{console.log(this.categorytUrl)})
            .catch(
                (error: Response) => {
                    console.log(error);
                    return Observable.throw(error);
                }
            )
    }
}