const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

const recipeData = {
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

1. Mix beef, pork, onion, breadcrumbs, egg, salt, and pepper.
2. Form small meatballs and fry until golden brown.
3. Add cream and simmer 10 minutes.
4. Serve with boiled potatoes and lingonberry jam.

Tip: Add a pinch of nutmeg for a traditional flavor.
        `
    },

    "Pyttipanna": {
        content: `
Servings: 4 people
Prep Time: 15 minutes
Cook Time: 20 minutes

Ingredients

• 400g leftover meat (beef/pork)  
• 4 potatoes (diced)  
• 1 onion (chopped)  
• 2 tbsp butter  
• Salt & pepper  

Instructions

1. Fry onions in butter until translucent.
2. Add diced potatoes and cook until lightly browned.
3. Chop leftover meat and mix in.
4. Season with salt and pepper.
5. Fry all together for 5–10 minutes.

Serving Suggestion:
Top with a fried egg and pickled beets.
        `
    },

    "Ärtsoppa och Pannkakor": {
        content: `
Servings: 4 people
Prep Time: 15 minutes
Cook Time: 40 minutes

Ingredients

• 300g yellow split peas  
• 1 liter water  
• 1 onion (chopped)  
• 1 tsp thyme  
• Salt & pepper  

For pancakes:
• 2 cups flour  
• 2 cups milk  
• 3 eggs  
• Butter for frying  

Instructions

1. Boil peas with water, onion, thyme, salt & pepper until soft (30 min).
2. Blend soup if desired.
3. Mix flour, milk, and eggs to make thin pancakes.
4. Fry pancakes in butter until golden.

Serving Suggestion:
Serve soup with mustard, pancakes with jam or cream.
        `
    },

    "Kroppkakor": {
        content: `
Servings: 4 people
Prep Time: 45 minutes
Cook Time: 25 minutes

Ingredients

• 500g potatoes (boiled and mashed)  
• 150g pork (diced)  
• 1 small onion  
• ½ cup flour  
• Salt & pepper  

Instructions

1. Mix mashed potatoes with flour and salt to form dough.
2. Make small potato balls and fill with pork & onion.
3. Boil in salted water for 10–15 minutes.
4. Serve with melted butter or cream sauce.
        `
    },

    "Korv Stroganoff": {
        content: `
Servings: 4 people
Prep Time: 10 minutes
Cook Time: 20 minutes

Ingredients

• 400g sausage (sliced)  
• 1 onion (chopped)  
• 1 cup tomato sauce  
• ½ cup cream  
• Salt & pepper  

Instructions

1. Fry onion and sausage until lightly browned.
2. Add tomato sauce and simmer 5 minutes.
3. Stir in cream and cook 5 more minutes.
4. Serve with rice or pasta.
        `
    },

    "Kalops": {
        content: `
Servings: 4 people
Prep Time: 20 minutes
Cook Time: 2–3 hours

Ingredients

• 500g beef (cubed)  
• 2 onions (chopped)  
• 3 carrots (sliced)  
• 2 cups beef broth  
• 1 tsp allspice  
• Salt & pepper  

Instructions

1. Brown beef cubes in a pan.
2. Add onions, carrots, allspice, salt & pepper.
3. Pour in broth and simmer 2–3 hours until tender.
4. Serve with boiled potatoes and pickled cucumbers.
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
