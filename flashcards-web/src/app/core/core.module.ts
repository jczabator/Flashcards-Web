import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule
    ],
    exports:[
        CommonModule,
        MaterialModule,
        [NavigationComponent]
    ],
    declarations: [NavigationComponent],
    providers:[]
})
export class CoreModule {    
}