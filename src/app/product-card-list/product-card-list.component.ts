import { Product } from '../model/product';
import { PaginationComponent } from '../pagination/pagination.component';
import { ProductCardComponent } from './../product-card/product-card.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-list',
  imports: [PaginationComponent, ProductCardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
})
export class ProductCardListComponent {
  @Input({ required: true })
  products!: Product[];

  pageIndex = 1;
}
