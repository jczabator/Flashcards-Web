import { NgModule } from "@angular/core";

import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
    imports: [

    ],
    exports:[
        [NavigationComponent]
    ],
    declarations: [NavigationComponent],
    providers:[]
})
export class CoreModule {    
}