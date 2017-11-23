import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './common/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeamComponent } from './pages/team/team.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ProductComponent } from './pages/product/product.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { NewsComponent } from './pages/news/news.component';
import { ConsultantComponent } from './pages/consultant/consultant.component';
// Service subpage
import { ServicesComponent } from './pages/services/services.component';
import { ItconsultantComponent } from './pages/services/itconsultant/itconsultant.component';
import { AutomationComponent } from './pages/services/automation/automation.component';
import { SoftwaredevComponent } from './pages/services/softwaredev/softwaredev.component';
import { DataanalysisComponent } from './pages/services/dataanalysis/dataanalysis.component';
import { WebportalComponent } from './pages/services/webportal/webportal.component';
import { EcommerceComponent } from './pages/services/ecommerce/ecommerce.component';
import { OutsourceComponent } from './pages/services/outsource/outsource.component';
import { MobileappComponent } from './pages/services/mobileapp/mobileapp.component';
import { WebappComponent } from './pages/services/webapp/webapp.component';
import { QaComponent } from './pages/services/qa/qa.component';
import { ImageComponent } from './pages/services/image/image.component';
import { NetworkingComponent } from './pages/services/networking/networking.component';
import { SecurityComponent } from './pages/services/security/security.component';
import { ServicehomeComponent } from './pages/services/servicehome/servicehome.component';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

const appRoutes: Routes = [
  { path: 'home',         component: HomeComponent },
  { path: 'about',        component: AboutComponent },
  { path: 'contact',        component: ContactComponent },
  //Services
  { path: 'services', component: ServicesComponent},
  { path: 'itconsultant', component: ItconsultantComponent },
  { path: 'automation', component: AutomationComponent },
  { path: 'softwaredev', component: SoftwaredevComponent },
  { path: 'dataanalysis', component: DataanalysisComponent },
  { path: 'webportal', component: WebportalComponent },
  { path: 'ecommerce', component: EcommerceComponent },
  { path: 'outsource', component: OutsourceComponent },
  { path: 'mobileapp', component: MobileappComponent },
  { path: 'webapp', component: WebappComponent },
  { path: 'qa', component: QaComponent },
  { path: 'image', component: ImageComponent },
  { path: 'networking', component: NetworkingComponent },
  { path: 'security', component: SecurityComponent },

  { path: 'emp',        component: TeamComponent },
  { path: 'testimonial',        component: TestimonialComponent },
  { path: 'faq',        component: FaqComponent },
  { path: 'product',        component: ProductComponent },
  { path: 'portfolio',        component: PortfolioComponent },
  { path: 'news',        component: NewsComponent },
  { path: 'consultant',        component: ConsultantComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**',           component: PageNotFoundComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TeamComponent,
    PageNotFoundComponent,
    TestimonialComponent,
    FaqComponent,
    ProductComponent,
    NewsComponent,
    ConsultantComponent,
    ServicesComponent,
    PortfolioComponent,
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: true }
    ),
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlGu7E-wW0FMhPxwYajU8FseFkM8TGlLE'
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
