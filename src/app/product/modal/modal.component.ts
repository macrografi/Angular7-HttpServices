import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { IProductData } from "../../product/data.products";


export interface ConfirmModel {
    item: IProductData;
}

@Component({
    selector: 'confirm',
    templateUrl: '../modal/modal.component.html',
    styleUrls: ['../modal/modal.component.scss']
})


export class ModalComponent extends DialogComponent<ConfirmModel, true> implements ConfirmModel {
    item: IProductData;

    constructor(dialogService: DialogService) {
        super(dialogService);
    }

    confirm() {
        this.result = true;
        this.close();
    }
}
