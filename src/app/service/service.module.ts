import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Service subpage
import { ServicesComponent } from '../pages/services/services.component';
import { ItconsultantComponent } from '../pages/services/itconsultant/itconsultant.component';
import { AutomationComponent } from '../pages/services/automation/automation.component';
import { SoftwaredevComponent } from '../pages/services/softwaredev/softwaredev.component';
import { DataanalysisComponent } from '../pages/services/dataanalysis/dataanalysis.component';
import { WebportalComponent } from '../pages/services/webportal/webportal.component';
import { EcommerceComponent } from '../pages/services/ecommerce/ecommerce.component';
import { OutsourceComponent } from '../pages/services/outsource/outsource.component';
import { MobileappComponent } from '../pages/services/mobileapp/mobileapp.component';
import { WebappComponent } from '../pages/services/webapp/webapp.component';
import { QaComponent } from '../pages/services/qa/qa.component';
import { ImageComponent } from '../pages/services/image/image.component';
import { NetworkingComponent } from '../pages/services/networking/networking.component';
import { SecurityComponent } from '../pages/services/security/security.component';
import { ServicehomeComponent } from '../pages/services/servicehome/servicehome.component';


const routes: Routes = [
  {path:'services', component: ServicesComponent},
  {path:'automation', component: AutomationComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ServicesComponent,
    ItconsultantComponent,
    AutomationComponent,
    SoftwaredevComponent,
    DataanalysisComponent,
    WebportalComponent,
    EcommerceComponent,
    OutsourceComponent,
    MobileappComponent,
    WebappComponent,
    QaComponent,
    ImageComponent,
    NetworkingComponent,
    SecurityComponent,
    ServicehomeComponent
  ]
})
export class ServiceModule { }
