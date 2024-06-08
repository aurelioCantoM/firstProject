import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { HomeComponent } from './home/home.component';
import { PaymentManagerComponent } from './payment-manager/payment-manager.component';
import { IdentityComponent } from './identity/identity.component';
import { SearchAdapterComponent } from './search-adapter/search-adapter.component';
import { checkPaymentsGuard } from './guards/check-payments.guard';
import { registerGuard } from './register.guard';

const routes: Routes = [
  {path:"login",component:LoginComponent, canActivate: [registerGuard]},
  {path:"register",component:RegisterComponent, canActivate: [registerGuard]},
  {path:"search",component:SearchAdapterComponent},
  {path:"product-manager",component:ProductManagerComponent},
  {path:"home",component:HomeComponent},
  {path:"payments", component:PaymentManagerComponent, canActivate: [checkPaymentsGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }