const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

const recipeData = {
    "Kanelbullar": {
        content: `
Servings: 12 buns
Prep Time: 25 minutes
Cook Time: 15 minutes

Ingredients

• 3 cups all-purpose flour  
• 1 cup warm milk  
• ¼ cup sugar  
• ¼ cup butter (softened)  
• 1 tbsp active dry yeast  
• 1 tsp ground cinnamon  
• ½ tsp salt  

Instructions

1. In a bowl, dissolve yeast in warm milk and let sit for 5 minutes.
2. Add sugar, butter, salt, and flour. Mix until dough forms.
3. Knead dough on a floured surface for 8–10 minutes.
4. Place dough in a bowl, cover, and let rise for 1 hour.
5. Roll dough into a rectangle, sprinkle cinnamon and sugar.
6. Roll tightly, slice into buns.
7. Bake at 180°C (350°F) for 15 minutes until golden.

Tip: Brush warm buns with melted butter for extra softness.
        `
    },

    "Köttbullar": {
        content: `
Servings: 4 people
Prep Time: 20 minutes
Cook Time: 25 minutes

Ingredients

• 250g ground beef  
• 250g ground pork  
• 1 small onion (finely chopped)  
• ½ cup breadcrumbs  
• 1 egg  
• ½ cup cream  
• Salt & pepper  

Instructions

1. Combine meat, onion, breadcrumbs, egg, salt, and pepper.
2. Shape mixture into small meatballs.
3. Heat pan with butter and fry meatballs until browned.
4. Add cream and simmer for 10 minutes.
5. Season to taste.

Serving Suggestion:
Serve with mashed potatoes and lingonberry jam.
        `
    },

    "Prinsesstårta": {
        content: `
Servings: 8 slices
Prep Time: 40 minutes
Chill Time: 1 hour

Ingredients

• Sponge cake layers  
• 2 cups whipped cream  
• 1 cup vanilla custard  
• Green marzipan  
• Powdered sugar  

Instructions

1. Place first cake layer on plate.
2. Spread custard evenly.
3. Add whipped cream and second cake layer.
4. Shape remaining cream into a dome.
5. Cover cake with rolled marzipan.
6. Dust lightly with powdered sugar.

Chef’s Note:
Keep marzipan slightly cool for easier handling.
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
