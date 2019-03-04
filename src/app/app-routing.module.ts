import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClassTeachComponent} from './class-teach/class-teach.component';
import {EsaylifeComponent} from './esaylife/esaylife.component';
import {ResearchComponent} from './research/research.component';
import {SelfInfoComponent} from './self-info/self-info.component';
import {ClassListComponent} from './class-list/class-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/self_info', pathMatch: 'full' },
    { path: 'self_info', component: SelfInfoComponent },
    { path: 'research', component: ResearchComponent },
    { path: 'easy_life', component: EsaylifeComponent },
    { path: 'class_teach', component: ClassTeachComponent, children: [
            { path: ':type', component: ClassListComponent }
        ] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
