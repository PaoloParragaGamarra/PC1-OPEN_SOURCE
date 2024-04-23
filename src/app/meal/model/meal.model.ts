export class Meal {
  name:any;
  instructions:any;
  ingredient1:any;
  ingredient2:any;
  category:any
  image:any;

  constructor(image:any,name:any, instructions:any, ingredient1:any, ingredient2:any, category:any) {
    this.image = image;
    this.name = name;
    this.instructions = instructions;
    this.ingredient1 = ingredient1;
    this.ingredient2 = ingredient2;
    this.category = category;
  }
}
