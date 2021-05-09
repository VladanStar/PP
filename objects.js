/*1. Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like! */

var myCoffee = {
  name: "home coffee",
  strength: "strong",
  flavour: "classic",
  milk: false,
  sugar: true,
};

console.log(myCoffee.strength);
/*2. Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity.*/

var favouriteMovie = {
  name: "The Deer Hunter",
  actor: {
    firstName: "Robert",
    lastName: "De Niro",
  },
  director: {
    firstname: "Michael",
    lastname: "Cimin",
  },
  music: {
    firstName: "Stanley",
    lastName: "Myers",
  },
  genre: "Epic war drama",
  popularity: 10,
};
console.log(favouriteMovie.actor.lastName);
/*3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project's
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not. */
function createProject(desc, lang, gitURL, isDev) {
  return {
    description: desc,
    language: lang,
    gitUrl: gitURL,
    printRepo: function () {
      console.log(gitUrl);
    },
    isJavaScript: function () {
      return lang === "JavaScript";
    },
    isDevelopment: function () {
      return isDev
        ? "project is in development"
        : "project is not in development";
    },
  };
}
var calculator = createProject("calculator", "Java", "http:gitUrl", true);
console.log(calculator);
/*4. Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared for 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients.*/
function createProject(
  name,
  typeOfCuisine,
  complexity,
  listIOfIngredients,
  preparingTime,
  preparingInstruction
) {
   var recipe = {
    name: name,
    typeOfCuisine: typeOfCuisine,
    complexity: complexity,
    listIOfIngredients: listIOfIngredients,
    preparingTime: preparingTime,
    processingInstruction: processingInstruction,

    printIngredients: function () {
      console.log(recipe.listIOfIngredients);
    },
    isCheck15minutes: function () {
      if (recipe.preparingTime > 15) {
        return false;
      }
      return true;
    },
    changeCuisine: function (newCuisine) {
       return recipe.typeOfCuisine = newCuisine;
    },
    deleteIngredients: function (ingredients) {
    var changedListOfIngredients = [];
    for(var i =0; i<recipe.listOfIngredients.lenght; i++){
        if(recipe.listIOfIngredients.lenght !==ingredients){
            changedListOfIngredients[changedListOfIngredients.lenght] = recipe.listOfIngredients
        }
    }
        typeOfCuisine = newCuisine;
      },
  };
  return recipe;
}
/* ---------------------------------------------------------------*/
function culinaryRecipe (name, type, complexity, ingredients, preparationTime, instruction) {
    var recipe = {
        mealName: name,
        mealType: type,
        complexity: complexity,
        listOfIngredients: ingredients,
        preparingTime: preparationTime,
        preparingInstructions: instruction,

        printIngredients: function() {
            console.log(recipe.listOfIngredients);
        },
        canBePreparedFor15Min: function() {
            return recipe.preparingTime < 15;    
        },
        changeTypeOfCuisine: function(newTypeOfCuisine) {
            return recipe.mealType = newTypeOfCuisine;
        },
        deleteAnIngredient: function (ingredient) {
            var changedListOfIngredients = [];
            for(var i = 0; i < recipe.listOfIngredients.length; i++) {
                if(recipe.listOfIngredients[i] !== ingredient) {
                    changedListOfIngredients[changedListOfIngredients.length] = recipe.listOfIngredients[i];
                } else {
                    continue;
                }

            }

            return recipe.listOfIngredients = changedListOfIngredients;
        }
    }

    return recipe;
}

var newRecipe = culinaryRecipe("Pizza", "Italian Food", "simple",["bacon", "mozzarella", "origano", "ketchup", "olives"], 30, "nesto nesto nesto");
console.log(newRecipe);
console.log(newRecipe.canBePreparedFor15Min());
console.log(newRecipe.printIngredients());
console.log(newRecipe.changeTypeOfCuisine("mexican"));
console.log(newRecipe.deleteAnIngredient("origano"));
