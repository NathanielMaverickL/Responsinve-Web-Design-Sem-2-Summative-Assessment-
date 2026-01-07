const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

const recipeData = {
    "Prinsesstårta": {
        content: `
Servings: 8 slices
Prep Time: 40 minutes
Chill Time: 1 hour

Ingredients:
• Sponge cake layers  
• 2 cups whipped cream  
• 1 cup vanilla custard  
• Green marzipan  
• Powdered sugar  

Instructions:
1. Place first cake layer on plate.  
2. Spread custard evenly.  
3. Add whipped cream and second cake layer.  
4. Shape remaining cream into a dome.  
5. Cover cake with rolled marzipan.  
6. Dust lightly with powdered sugar.  

Chef’s Tip:
Keep marzipan slightly cool for easier handling.
        `
    },

    "Kladdkaka": {
        content: `
Servings: 6
Prep Time: 10 minutes
Cook Time: 15 minutes

Ingredients:
• 100g butter  
• 2 dl sugar  
• 2 eggs  
• 1 dl flour  
• 3 tbsp cocoa powder  
• 1 tsp vanilla sugar  
• Pinch of salt  

Instructions:
1. Preheat oven to 175°C (350°F).  
2. Melt butter and mix with sugar.  
3. Add eggs one at a time and mix well.  
4. Sift in flour, cocoa, vanilla, and salt.  
5. Pour batter into greased pan.  
6. Bake 12–15 minutes until top is set but center is gooey.  

Chef’s Tip:
Serve with whipped cream or vanilla ice cream.
        `
    },

    "Semla": {
        content: `
Servings: 4 buns
Prep Time: 20 minutes
Cook Time: 15 minutes
Rise Time: 1 hour

Ingredients:
• 4 cardamom buns  
• Almond paste  
• 1 cup whipped cream  
• Powdered sugar  

Instructions:
1. Cut the top off each bun and scoop out some interior.  
2. Fill with almond paste and whipped cream.  
3. Place top back on and dust with powdered sugar.  
4. Serve fresh.  

Chef’s Tip:
Slightly warm buns for extra softness.
        `
    },

    "Ostkaka": {
        content: `
Servings: 6
Prep Time: 15 minutes
Cook Time: 45 minutes

Ingredients:
• 500g curd  
• 2 eggs  
• ½ cup sugar  
• 1 tsp vanilla extract  
• Almonds (optional)  
• Jam for serving  

Instructions:
1. Preheat oven to 175°C (350°F).  
2. Mix curd, eggs, sugar, and vanilla until smooth.  
3. Pour into greased baking dish.  
4. Bake 40–45 minutes until lightly golden.  
5. Serve warm with jam.  

Chef’s Tip:
Sprinkle lightly toasted almonds on top for extra crunch.
        `
    },

    "Chokladbiskvi": {
        content: `
Servings: 12
Prep Time: 30 minutes
Cook Time: 15 minutes

Ingredients:
• 100g almond flour  
• 100g sugar  
• 2 egg whites  
• 200g butter  
• 100g chocolate  

Instructions:
1. Preheat oven to 175°C (350°F).  
2. Whip egg whites and sugar to stiff peaks.  
3. Fold in almond flour and pipe small rounds on baking sheet.  
4. Bake 12–15 minutes. Cool completely.  
5. Prepare buttercream and sandwich between cookies.  
6. Dip top in melted chocolate.  

Chef’s Tip:
Use a piping bag for perfect uniform cookies.
        `
    },

    "Punsch-roll": {
        content: `
Servings: 8 slices
Prep Time: 25 minutes
Cook Time: 10 minutes
Chill Time: 1 hour

Ingredients:
• 200g sponge cake  
• 150g buttercream  
• 100g marzipan  
• Swedish punsch liqueur  

Instructions:
1. Spread buttercream over sponge cake layer.  
2. Roll cake tightly into a log.  
3. Wrap in marzipan and seal edges.  
4. Chill for 1 hour.  
5. Slice and serve.  

Chef’s Tip:
Brush sponge with punsch for authentic flavor.
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
