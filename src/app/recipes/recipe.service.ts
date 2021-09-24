import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Lasagne', 'This classic lasagna is made with an easy meat sauce as the base. Layer the sauce with noodles and cheese, then bake until bubbly! This is great for feeding a big family, and freezes well, too.',
            'https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg',
            [
                new Ingredient('Meat', 2),
                new Ingredient('Pasta', 3)
            ]),
        new Recipe('Chowmein', 'Chicken Chow Mein is firmly planted in the Noodle Hall of Fame as one of the all time most loved noodles, along with other favourites like Pad Thai, Pad See Ew and Singapore noodles. Quick and easy!', 'https://static.toiimg.com/thumb/75455420.cms?imgsize=2101247&width=800&height=800',
        [
            new Ingredient('Noodle', 2),
            new Ingredient('Buffalo meat', 1)
        ])
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }

    getRecipies() {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}