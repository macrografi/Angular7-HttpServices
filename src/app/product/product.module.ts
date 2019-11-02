import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from "./product.component";

//bootstrap-modal
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
//bootstrap-carousel
import { CarouselModule } from "ngx-bootstrap/carousel";
//
import { ModalComponent } from "./modal/modal.component";
import { ProductDataService } from "./product.data.service";
import { LoadingSpinnerComponent } from '../ui/loading-spinner/loading-spinner.component';



@NgModule({
    declarations: [
        ProductComponent,
        ModalComponent,
        LoadingSpinnerComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'product/:id', component: ProductComponent }
        ]),
        BootstrapModalModule.forRoot({ container: document.body }),
        CarouselModule.forRoot()
    ],
    entryComponents: [
        ModalComponent
    ],
    providers: [
        ProductDataService
    ]
})

export class ProductModule { }