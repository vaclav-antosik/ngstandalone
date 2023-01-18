import { Route } from "@angular/router";
import { LuckyChild1Component } from "./children/lucky.child1/lucky.child1.component";
import { LuckyChild2Component } from "./children/lucky.child2/lucky.child2.component";
import { LuckyComponent } from "./lucky.component";

export default [
    {
        path: '', 
        component: LuckyComponent,
        children: [
            {path: 'child1', component: LuckyChild1Component},
            {path: 'child2', component: LuckyChild2Component}
        ]
    }
] as Route[];