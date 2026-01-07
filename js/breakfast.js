const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

const recipeData = {
    "Smörgås": {
        content: `
Servings: 1 sandwich
Prep Time: 5 minutes

Ingredients:
• 2 slices of fresh bread  
• 1 tbsp butter  
• 2 slices of ham  
• 2 slices of cheese  
• Optional: cucumber or tomato slices  

Instructions:
1. Spread butter evenly on both slices of bread.  
2. Layer ham and cheese on one slice.  
3. Add optional veggies if desired.  
4. Top with second slice of bread and serve immediately.

Chef's Tip:
Use freshly baked bread for the best flavor and texture.
        `
    },

    "Knäckebröd with Kalles Kaviar": {
        content: `
Servings: 1 piece
Prep Time: 5 minutes

Ingredients:
• 1 crispbread (knäckebröd)  
• Butter (optional)  
• Kalles Kaviar  
• 1 boiled egg (optional)  

Instructions:
1. Lightly spread butter on the crispbread if desired.  
2. Apply Kalles Kaviar evenly on top.  
3. Slice the boiled egg and place on top for extra richness.  
4. Enjoy immediately as a traditional Swedish breakfast snack.

Chef's Tip:
Keep the Kalles Kaviar chilled; it spreads easier when cold.
        `
    },

    "Filmjölk with Muesli": {
        content: `
Servings: 1 bowl
Prep Time: 2 minutes

Ingredients:
• 200ml filmjölk (fermented milk)  
• 50g muesli  
• Optional: fresh berries or honey  

Instructions:
1. Pour filmjölk into a serving bowl.  
2. Sprinkle muesli evenly over the top.  
3. Add optional berries or a drizzle of honey.  
4. Mix lightly and serve chilled.

Chef's Tip:
Filmjölk has a naturally tangy flavor; pair with sweet fruit for balance.
        `
    },

    "Havregrynsgröt": {
        content: `
Servings: 1 bowl
Prep Time: 5 minutes
Cook Time: 5 minutes

Ingredients:
• ½ cup rolled oats  
• 1 cup milk or water  
• Pinch of salt  
• Optional toppings: berries, cinnamon, brown sugar, nuts  

Instructions:
1. In a small saucepan, bring milk or water to a boil.  
2. Stir in oats and a pinch of salt.  
3. Reduce heat and cook 3-5 minutes until creamy.  
4. Pour into a bowl and add toppings of choice.  
5. Serve warm.

Chef's Tip:
For extra creaminess, stir in a teaspoon of butter or cream before serving.
        `
    },

    "Pannkakor": {
        content: `
Servings: 4 pancakes
Prep Time: 10 minutes
Cook Time: 10 minutes

Ingredients:
• 1 cup all-purpose flour  
• 1 cup milk  
• 2 large eggs  
• 2 tbsp melted butter (plus extra for frying)  
• Pinch of salt  
• Optional toppings: jam, cream, or powdered sugar  

Instructions:
1. In a bowl, whisk flour, milk, eggs, butter, and salt until smooth.  
2. Heat a non-stick skillet over medium heat and lightly grease with butter.  
3. Pour a small amount of batter and swirl to cover the pan.  
4. Cook 1-2 minutes per side until golden.  
5. Repeat with remaining batter.  
6. Serve with desired toppings.

Chef's Tip:
Thin batter = traditional Swedish pancakes. Thicker batter = more like crepes.
        `
    },

    "Kanelbullar": {
        content: `
Servings: 12 buns
Prep Time: 25 minutes
Cook Time: 15 minutes
Rise Time: 1 hour

Ingredients:
• 3 cups all-purpose flour  
• 1 cup warm milk  
• ¼ cup sugar  
• ¼ cup butter, softened  
• 1 tbsp active dry yeast  
• 1 tsp ground cinnamon  
• ½ tsp salt  
• 1 egg (for egg wash)  

Instructions:
1. Dissolve yeast in warm milk and let sit 5 minutes.  
2. Add sugar, butter, salt, and flour. Mix to form dough.  
3. Knead on floured surface for 8–10 minutes.  
4. Place dough in greased bowl, cover, and let rise 1 hour.  
5. Roll dough into rectangle, sprinkle cinnamon and sugar evenly.  
6. Roll tightly and cut into 12 buns.  
7. Place on baking sheet, brush with beaten egg.  
8. Bake at 180°C (350°F) for 15 minutes until golden.  

Chef's Tip:
Brush warm buns with melted butter immediately after baking for a soft, shiny finish.
        `
    }
};

// Open modal
document.querySelectorAll(".view-btn").forEach(button => {
    button.addEventListener("click", () => {
        const title = button.dataset.title;
        modalTitle.textContent = title;
        modalText.textContent = recipeData[title].content;
        modal.style.display = "block";
    });
});

// Close modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
