import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { IBanner } from '../home/banners';

import "rxjs/Rx";
import { Observable } from "rxjs/Observable";

@Injectable()

export class BannerService {
    private bannerUrl = "https://banner-services.firebaseio.com/data.json";

    constructor(private http: Http) { }

    getBanners(): Observable<IBanner[]> {
        return this.http.get(this.bannerUrl)
            .map((response: Response) => <IBanner[]>response.json())
            .catch(
                (error: Response) => {
                    console.log(error);
                    return Observable.throw(error);
                }
            );
    }
}