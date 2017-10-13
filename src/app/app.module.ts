import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SidenavComponent} from './common/sidenav/sidenav.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        SkillsComponent,
        HomeComponent,
        ContactComponent,
        SidenavComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(rootRouterConfig)
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}
