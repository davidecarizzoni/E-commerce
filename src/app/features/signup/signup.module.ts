import { NgModule } from '@angular/core';
import { SignupComponent } from './components/main/signup.component';
import { SignupService } from './services/signup.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
  declarations: [SignupComponent],
  providers: [SignupService],
  imports: [
    SharedModule,
    SignupRoutingModule
  ]
})
export class SignupModule { }
