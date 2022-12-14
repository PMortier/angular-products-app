import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/state/product.state';
import { Product } from '../../../model/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() productsInput$:Observable<AppDataState<Product[]>> | null = null;
  //@Output() productsEventEmitter:EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  readonly DataStateEnum=DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }

  /*
  onSelect(p:Product){
    this.productsEventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT,payload:p});
  }

  onDelete(p:Product){
    this.productsEventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCT,payload:p});
  }

  onEdit(p:Product){
    this.productsEventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT,payload:p});
  }

  onActionEvent($event:ActionEvent){
    this.productsEventEmitter.emit($event);
  }
  */

}
