import { Ingridient } from "../ingridient";

export class Recipe {
    constructor(public name: String, public description: string, public imagePath: string, public ingredients: Ingridient[]){}
}
