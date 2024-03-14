import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: "", redirectTo: "", pathMatch: "full" },
    {path:'recipe',loadChildren:()=>import('./recipe/recipe.module').then(c=>c.RecipeModule)},
    {path:'user',loadChildren:()=>import('./user/user.module').then(c=>c.UserModule)}

];


