import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { SectionsComponent } from './sections/sections.component';

const routes: Routes = [
    // { path: 'presentation',         component: PresentationComponent },
    // { path: 'components',           component: ComponentsComponent },
    { path: '',             component: SectionsComponent },
    // { path: 'nucleoicons',          component: NucleoiconsComponent },
    // { path: 'examples/aboutus',     component: AboutusComponent },
    // { path: 'examples/addproduct',  component: AddproductComponent },
    // { path: 'examples/blogpost',    component: BlogpostComponent },
    // { path: 'examples/blogposts',   component: BlogpostsComponent },
    // { path: 'examples/contactus',   component: ContactusComponent },
    // { path: 'examples/discover',    component: DiscoverComponent },
    // { path: 'examples/ecommerce',   component: EcommerceComponent },
    // { path: 'examples/landing',     component: LandingComponent },
    // { path: 'examples/login',       component: LoginComponent },
    // { path: 'examples/productpage', component: ProductpageComponent },
    // { path: 'examples/profile',     component: ProfileComponent },
    // { path: 'examples/register',    component: RegisterComponent },
    // { path: 'examples/search',      component: SearchComponent },
    // { path: 'examples/settings',    component: SettingsComponent },
    // { path: 'examples/twitter',     component: TwitterComponent },
    // { path: 'examples/page404',     component: Page404Component },
    // { path: 'examples/page422',     component: Page422Component },
    // { path: 'examples/page500',     component: Page500Component },
    { path: '', redirectTo: 'sections', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
