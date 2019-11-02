import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { BannerService } from "./banner.service";
//ngx
import { CarouselModule } from "ngx-bootstrap/carousel";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'home', component: HomeComponent }
        ]),
        CarouselModule.forRoot(),
        BsDropdownModule.forRoot()
    ],
    providers: [BannerService],
})
export class HomeModule { }