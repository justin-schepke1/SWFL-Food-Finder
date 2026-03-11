const cuisines = ["Seafood", "Italian", "Latin", "BBQ", "Thai", "Vegan"];
const diets = ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"];
const vibes = ["Casual", "Date Night", "Family", "Quick Bite", "Waterfront"];

const restaurants = [
  {
    id: 1,
    name: "Doc Ford's Rum Bar & Grille",
    city: "Fort Myers",
    cuisine: "Seafood",
    price: "$$",
    vibe: ["Casual", "Family", "Waterfront"],
    dietary: ["Gluten-Free"],
    independent: true,
    rating: 4.7,
    menu: "Fresh gulf fish tacos, shrimp bowls, and island-style seafood plates.",
    hours: "11:00 AM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80",
    location: "https://maps.google.com/?q=Fort+Myers+FL"
  },
  {
    id: 2,
    name: "Harold's Place Chickee Bar & Grill",
    city: "Sanibel",
    cuisine: "Latin",
    price: "$$",
    vibe: ["Casual", "Date Night"],
    dietary: ["Dairy-Free"],
    independent: true,
    rating: 4.6,
    menu: "Tropical cocktails, grouper sandwiches, and local catch specials.",
    hours: "8:00 AM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    location: "https://maps.google.com/?q=Sanibel+FL"
  },
  {
    id: 3,
    name: "Campiello",
    city: "Naples",
    cuisine: "Italian",
    price: "$$$",
    vibe: ["Date Night", "Family"],
    dietary: ["Vegetarian"],
    independent: true,
    rating: 4.8,
    menu: "Wood-fired pizza, handmade pasta, and seasonal Italian classics.",
    hours: "4:00 PM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80",
    location: "https://maps.google.com/?q=Naples+FL"
  },
  {
    id: 4,
    name: "Goldies Restaurant",
    city: "Cape Coral",
    cuisine: "BBQ",
    price: "$",
    vibe: ["Family", "Quick Bite", "Casual"],
    dietary: ["Dairy-Free"],
    independent: true,
    rating: 4.4,
    menu: "Smoked brisket, ribs, and comfort-food sides.",
    hours: "10:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
    location: "https://maps.google.com/?q=Cape+Coral+FL"
  }
];

const state = {
  selectedCuisine: ["Seafood", "Italian"],
  selectedDiet: ["Gluten-Free"],
  selectedVibes: ["Casual", "Date Night"],
  budget: "$$",
  distance: "10 mi",
  favorites: new Set([1]),
  wantToTry: new Set([3])
};

const byId = (id) => document.getElementById(id);

function setStatus(message) {
  byId("appStatus").textContent = message;
}

function buildChips(target, items, activeList) {
  const root = byId(target);
  root.innerHTML = "";
  items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip ${activeList.includes(item) ? "active" : ""}`;
    button.textContent = item;
    button.onclick = () => {
      const idx = activeList.indexOf(item);
      idx >= 0 ? activeList.splice(idx, 1) : activeList.push(item);
      buildUI();
      setStatus(`Updated ${target.replace("Choices", "")} preferences.`);
    };
    root.appendChild(button);
  });
}

function scoreRestaurant(restaurant) {
  let score = restaurant.independent ? 4 : 0;
  if (state.selectedCuisine.includes(restaurant.cuisine)) score += 5;
  if (restaurant.price === state.budget) score += 2;
  if (restaurant.vibe.some((v) => state.selectedVibes.includes(v))) score += 3;
  if (restaurant.dietary.some((d) => state.selectedDiet.includes(d))) score += 2;
  return score + restaurant.rating;
}

function restaurantCard(restaurant) {
  const article = document.createElement("article");
  article.className = "restaurant";
  article.innerHTML = `
    <img alt="${restaurant.name}" src="${restaurant.image}" />
    <div class="copy">
      <strong>${restaurant.name}</strong>
      <p class="meta">${restaurant.city} · ${restaurant.cuisine} · ${restaurant.price} · ★ ${restaurant.rating}</p>
      <div class="row">
        <button data-action="details" type="button">View details</button>
        <button class="ghost" data-action="favorite" type="button">${state.favorites.has(restaurant.id) ? "Favorited" : "Favorite"}</button>
        <button class="ghost" data-action="want" type="button">${state.wantToTry.has(restaurant.id) ? "Saved" : "Want to try"}</button>
      </div>
    </div>
  `;

  article.querySelector('[data-action="details"]').onclick = () => {
    showDetails(restaurant);
    setStatus(`Showing details for ${restaurant.name}.`);
  };
  article.querySelector('[data-action="favorite"]').onclick = () => {
    state.favorites.has(restaurant.id) ? state.favorites.delete(restaurant.id) : state.favorites.add(restaurant.id);
    buildUI();
    setStatus(`${restaurant.name} favorites updated.`);
  };
  article.querySelector('[data-action="want"]').onclick = () => {
    state.wantToTry.has(restaurant.id) ? state.wantToTry.delete(restaurant.id) : state.wantToTry.add(restaurant.id);
    buildUI();
    setStatus(`${restaurant.name} want-to-try list updated.`);
  };

  return article;
}

function showDetails(restaurant) {
  byId("restaurantDetails").innerHTML = `
    <h3>${restaurant.name}</h3>
    <p>${restaurant.city} · ${restaurant.cuisine} · ${restaurant.price}</p>
    <p><strong>Menu:</strong> ${restaurant.menu}</p>
    <p><strong>Hours:</strong> ${restaurant.hours}</p>
    <p><strong>Vibe:</strong> ${restaurant.vibe.join(", ")}</p>
    <a href="${restaurant.location}" target="_blank" rel="noreferrer">Open in Maps</a>
  `;
}

function buildFilters() {
  const cities = [...new Set(restaurants.map((r) => r.city))];
  const cuisineSet = [...new Set(restaurants.map((r) => r.cuisine))];

  byId("cityFilter").innerHTML = `<option value="">All</option>${cities.map((c) => `<option>${c}</option>`).join("")}`;
  byId("cuisineFilter").innerHTML = `<option value="">All</option>${cuisineSet.map((c) => `<option>${c}</option>`).join("")}`;
}

function buildUI() {
  buildChips("cuisineChoices", cuisines, state.selectedCuisine);
  buildChips("dietChoices", diets, state.selectedDiet);
  buildChips("vibeChoices", vibes, state.selectedVibes);

  const ranked = [...restaurants].sort((a, b) => scoreRestaurant(b) - scoreRestaurant(a));
  const recRoot = byId("recommendations");
  recRoot.innerHTML = "";
  ranked.slice(0, 3).forEach((r) => recRoot.appendChild(restaurantCard(r)));

  const city = byId("cityFilter").value;
  const cuisine = byId("cuisineFilter").value;
  const context = byId("contextFilter").value.toLowerCase();

  const filtered = restaurants.filter((r) => {
    const cityMatch = !city || r.city === city;
    const cuisineMatch = !cuisine || r.cuisine === cuisine;
    const contextMatch = !context || r.vibe.join(" ").toLowerCase().includes(context);
    return cityMatch && cuisineMatch && contextMatch;
  });

  const discRoot = byId("discoveryList");
  discRoot.innerHTML = "";
  filtered.forEach((r) => discRoot.appendChild(restaurantCard(r)));

  const favoriteNames = restaurants.filter((r) => state.favorites.has(r.id)).map((r) => `<li>${r.name}</li>`).join("") || "<li>None yet</li>";
  const wantNames = restaurants.filter((r) => state.wantToTry.has(r.id)).map((r) => `<li>${r.name}</li>`).join("") || "<li>None yet</li>";

  byId("favoritesList").innerHTML = favoriteNames;
  byId("wantList").innerHTML = wantNames;
  byId("profileSummary").textContent = `Cuisine: ${state.selectedCuisine.join(", ")} · Budget: ${state.budget} · Distance: ${state.distance} · Diet: ${state.selectedDiet.join(", ")} · Context: ${state.selectedVibes.join(", ")}`;

  showDetails(ranked[0]);
}

function setupEvents() {
  byId("budget").onchange = (e) => {
    state.budget = e.target.value;
    buildUI();
    setStatus(`Budget preference set to ${state.budget}.`);
  };

  byId("distance").onchange = (e) => {
    state.distance = e.target.value;
    buildUI();
    setStatus(`Distance preference set to ${state.distance}.`);
  };

  ["cityFilter", "cuisineFilter", "contextFilter"].forEach((id) => {
    byId(id).oninput = () => {
      buildUI();
      setStatus("Discovery filters updated.");
    };
  });

  byId("authForm").onsubmit = (e) => {
    e.preventDefault();
    byId("authCard").querySelector("p").textContent = "You're in! We saved your profile and enabled recommendations.";
    setStatus("Logged in with email/password.");
  };

  byId("googleLoginBtn").onclick = () => setStatus("Google login is a demo action in this prototype.");
  byId("appleLoginBtn").onclick = () => setStatus("Apple login is a demo action in this prototype.");

  byId("refreshRecs").onclick = () => {
    buildUI();
    setStatus("Recommendations refreshed.");
  };

  byId("notifyBtn").onclick = () => {
    byId("notificationCount").textContent = "0";
    setStatus("No new notifications. Trending now: waterfront seafood in Naples.");
  };

  document.querySelectorAll(".bottom-nav button").forEach((button) => {
    button.onclick = () => {
      document.querySelectorAll(".bottom-nav button").forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      byId(button.dataset.target).scrollIntoView({ behavior: "smooth", block: "start" });
      setStatus(`Navigated to ${button.textContent}.`);
    };
  });
}

buildFilters();
setupEvents();
buildUI();
setStatus("App ready. Try any button to interact with the prototype.");
