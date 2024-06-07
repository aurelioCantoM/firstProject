import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { NgIfExamplesComponent } from './ng-if-examples/ng-if-examples.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { EvenOrOddPipe } from './even-or-odd.pipe';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SortStuffComponent } from './sort-stuff/sort-stuff.component';
import { DisplayArrayPipe } from './display-array.pipe';
import { CustomTooltipDirective } from './custom-tooltip.directive';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { EmailExistsDirective } from './email-exists.directive';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentManagerComponent } from './payment-manager/payment-manager.component';
import { IdentityComponent } from './identity/identity.component';
import { TableModule } from 'primeng/table';
import { SearchAdapterComponent } from './search-adapter/search-adapter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsListComponent,
    AddToCartComponent,
    NgIfExamplesComponent,
    HomeComponent,
    CartComponent,
    EvenOrOddPipe,
    SearchBarComponent,
    SortStuffComponent,
    DisplayArrayPipe,
    CustomTooltipDirective,
    EditProductComponent,
    ProductManagerComponent,
    RegisterComponent,
    LoginComponent,
    EmailExistsDirective,
    ProductDetailsComponent,
    MenuComponent,
    PaymentManagerComponent,
    IdentityComponent,
    SearchAdapterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
