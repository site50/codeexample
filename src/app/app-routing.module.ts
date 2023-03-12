import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from "@angular/core";
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from './navigator/table.module';

const routes: Routes = [
        { path: '', redirectTo: '/', pathMatch: 'full' },
        {
                path: '',
                loadChildren: () => import('./navigator/table.module').then(m => m.TableModule)
        },
        {
                path: '',
                redirectTo: '',
                pathMatch: 'full'
        },
]
@NgModule({
        imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
        exports: [RouterModule]
})
export class AppRoutingModule { }
