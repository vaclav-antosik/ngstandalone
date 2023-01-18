import { Route } from "@angular/router";
import { LuckyChild1Component } from "./children/lucky.child1/lucky.child1.component";
import { LuckyChild2Component } from "./children/lucky.child2/lucky.child2.component";
import { LuckyComponent } from "./lucky.component";
import { LuckyService } from "./lucky.service";

export default [
    {
        path: '', 
        component: LuckyComponent,
        children: [
            {path: 'child1', component: LuckyChild1Component},
            // it will not create fresh instance for Child2 as component tree is traversed first
            // LuckyComponent instance is provided for Child2
            {path: 'child2', component: LuckyChild2Component, providers: [LuckyService]}
        ]
    }
] as Route[];