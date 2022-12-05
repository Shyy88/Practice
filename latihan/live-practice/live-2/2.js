function filterRecipes(ingredients) {
    let recipes = [
      ["Dimsum", "Udang", "Ayam", "Kepiting"],
      ["Ayam Geprek", "Ayam", "Sambal", "Bawang"],
      ["Chicken Katsu", "Ayam", "Tepung Roti", "Terigu"],
      ["Kebab", "Daging Sapi", "Tortilla"],
      ["Bakso", "Daging Sapi", "Terigu"],
    ];
    // write your code here
    if (!recipes || !ingredients) {
        return []
    }

    let result = [];
    for (let i = 0; i < ingredients.length; i++) {
        for (let j = 0; j < recipes.length; j++) {
           if (ingredients[i] === recipes[j][0]) {
            result.push(recipes[j])
           }
        }
    }
    return result
}

//   console.log(filterRecipes([ "Chicken Katsu", "Kebab", "Bakso" ]));
  /*
  [
    [ "Chicken Katsu", "Ayam", "Tepung Roti", "Terigu" ],
    [ "Kebab", "Daging Sapi", "Tortilla" ],
    [ "Bakso", "Daging Sapi", "Terigu" ]
  ]
  */

//   console.log(filterRecipes([ "Mie", "Pangsit" ]));
  // []


  function usersCanCook(users) {
    // write your code here
    if (!users) {
        return "Invalid Data!"
    }

    let arr1 = [];
    let str = '';
    for (let i = 0; i <= users.menu.length; i++) {
        if (users.menu[i] === '-' || !users.menu[i]) {
            arr1.push(str);
            str = '';
        } else {
                str += users.menu[i]
        }   
    }
    let foodChoose = filterRecipes(arr1);
    if (!foodChoose.length) {
        return "Menu not found"
    }
    return foodChoose
  }

  console.log(usersCanCook({
      name: "Fajrin",
      resto: "Fajrin Food",
      menu: "Chicken Katsu-Kebab-Bakso"
    })
  );
  /*
  [
    [ "Chicken Katsu", "Ayam", "Tepung Roti", "Terigu" ],
    [ "Kebab", "Daging Sapi", "Tortilla" ],
    [ "Bakso", "Daging Sapi", "Terigu" ]
  ]
  */

  console.log(usersCanCook({
      name: "Rizka",
      resto: "Rizka Cafe",
      menu: "Mie-Pangsit"
    })
  );
  // "Menu not found"

  console.log(usersCanCook());
  // "Invalid Data!"