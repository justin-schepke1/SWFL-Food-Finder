/* ═══════════════════════════════════════════════════════════
   SWFL Food Finder · app.js
   Mobile-first personalized restaurant recommendation app
   ═══════════════════════════════════════════════════════════ */

// ── DATA ─────────────────────────────────────────────────────

const CUISINES = [
  "Seafood","Italian","Latin","BBQ","Thai","Sushi","Mexican",
  "American","Mediterranean","Indian","Vegan","Cuban","Steakhouse",
  "Breakfast","Pizza","Greek","Vietnamese","French"
];

const DIETS = ["Vegetarian","Vegan","Gluten-Free","Dairy-Free","Nut-Free","Halal","Kosher"];
const VIBES = ["Casual","Date Night","Family","Quick Bite","Waterfront","Brunch","Outdoor","Live Music","Fine Dining","Dog-Friendly"];
const BUDGETS = ["$","$$","$$$","$$$$"];
const DISTANCES = ["5","15","30","50"];

const RESTAURANTS = [
  {
    id: 1,
    name: "Doc Ford's Rum Bar & Grille",
    city: "Fort Myers Beach",
    cuisine: "Seafood",
    price: "$$",
    vibe: ["Casual","Family","Waterfront","Outdoor"],
    dietary: ["Gluten-Free"],
    independent: true,
    rating: 4.7,
    reviews: 2840,
    menu: "Fresh gulf shrimp tacos, island-style fish & chips, crab cakes, mahi-mahi bites, and rum punch cocktails.",
    hours: "Mon–Sun  11:00 AM – 10:00 PM",
    address: "708 Fisherman's Wharf, Fort Myers Beach, FL 33931",
    phone: "(239) 765-9660",
    website: "https://docfords.com",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Doc+Ford%27s+Fort+Myers+Beach+FL",
    distanceMi: 8
  },
  {
    id: 2,
    name: "Campiello",
    city: "Naples",
    cuisine: "Italian",
    price: "$$$",
    vibe: ["Date Night","Fine Dining","Outdoor"],
    dietary: ["Vegetarian","Gluten-Free"],
    independent: true,
    rating: 4.8,
    reviews: 3120,
    menu: "Wood-fired Neapolitan pizza, handmade tagliatelle, branzino in acqua pazza, tiramisu, and a curated Italian wine list.",
    hours: "Mon–Thu  4:00 PM – 10:00 PM · Fri–Sun  4:00 PM – 11:00 PM",
    address: "1177 3rd St S, Naples, FL 34102",
    phone: "(239) 435-1166",
    website: "https://campiello.com",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Campiello+Naples+FL",
    distanceMi: 22
  },
  {
    id: 3,
    name: "Goldies BBQ",
    city: "Cape Coral",
    cuisine: "BBQ",
    price: "$",
    vibe: ["Family","Quick Bite","Casual"],
    dietary: ["Dairy-Free","Gluten-Free"],
    independent: true,
    rating: 4.5,
    reviews: 980,
    menu: "Low-and-slow smoked brisket, baby back ribs, pulled pork, mac-n-cheese, collard greens, and banana pudding.",
    hours: "Tue–Sun  10:00 AM – 8:00 PM · Closed Monday",
    address: "2118 Santa Barbara Blvd, Cape Coral, FL 33991",
    phone: "(239) 540-4653",
    website: "",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Goldies+BBQ+Cape+Coral+FL",
    distanceMi: 6
  },
  {
    id: 4,
    name: "Harold's Place Chickee Bar",
    city: "Sanibel",
    cuisine: "Seafood",
    price: "$$",
    vibe: ["Casual","Date Night","Waterfront","Outdoor"],
    dietary: ["Dairy-Free"],
    independent: true,
    rating: 4.6,
    reviews: 1540,
    menu: "Tropical cocktails, local grouper sandwiches, conch fritters, stone crab claws (in season), and fresh-catch specials.",
    hours: "Mon–Sun  8:00 AM – 9:00 PM",
    address: "1451 Middle Gulf Dr, Sanibel, FL 33957",
    phone: "(239) 472-1242",
    website: "",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Harold%27s+Place+Sanibel+FL",
    distanceMi: 18
  },
  {
    id: 5,
    name: "Yabba Island Grill",
    city: "Naples",
    cuisine: "Latin",
    price: "$$",
    vibe: ["Casual","Waterfront","Outdoor","Live Music"],
    dietary: ["Vegetarian","Gluten-Free"],
    independent: true,
    rating: 4.4,
    reviews: 2210,
    menu: "Jerk chicken, ahi tuna tacos, lobster quesadillas, mango salsa, and Caribbean-inspired cocktails.",
    hours: "Mon–Sun  11:30 AM – 10:00 PM",
    address: "711 5th Ave S, Naples, FL 34102",
    phone: "(239) 262-5787",
    website: "https://yabbaislandgrill.com",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Yabba+Island+Grill+Naples+FL",
    distanceMi: 20
  },
  {
    id: 6,
    name: "Sushi Nami Royale",
    city: "Fort Myers",
    cuisine: "Sushi",
    price: "$$",
    vibe: ["Date Night","Casual"],
    dietary: ["Gluten-Free","Dairy-Free"],
    independent: true,
    rating: 4.6,
    reviews: 1350,
    menu: "Omakase chef's selection, spicy tuna rolls, sashimi platters, tempura, and sake flights.",
    hours: "Mon–Sat  11:30 AM – 10:00 PM · Sun  12:00 PM – 9:00 PM",
    address: "12800 University Dr #140, Fort Myers, FL 33907",
    phone: "(239) 415-5888",
    website: "",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Sushi+Nami+Royale+Fort+Myers+FL",
    distanceMi: 4
  },
  {
    id: 7,
    name: "Pho Cali Vietnamese",
    city: "Fort Myers",
    cuisine: "Vietnamese",
    price: "$",
    vibe: ["Quick Bite","Family","Casual"],
    dietary: ["Vegetarian","Gluten-Free","Dairy-Free"],
    independent: true,
    rating: 4.5,
    reviews: 780,
    menu: "Slow-simmered beef pho, vermicelli bowls, spring rolls, banh mi, and Vietnamese iced coffee.",
    hours: "Mon–Sun  10:00 AM – 9:30 PM",
    address: "4820 S Cleveland Ave, Fort Myers, FL 33907",
    phone: "(239) 274-1440",
    website: "",
    image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Pho+Cali+Fort+Myers+FL",
    distanceMi: 5
  },
  {
    id: 8,
    name: "Pinchers Crab Shack",
    city: "Fort Myers",
    cuisine: "Seafood",
    price: "$$",
    vibe: ["Family","Casual","Waterfront"],
    dietary: ["Gluten-Free"],
    independent: false,
    rating: 4.3,
    reviews: 3400,
    menu: "Stone crab claws, steamed king crab, fish tacos, lobster bisque, and craft local beer.",
    hours: "Mon–Sun  11:00 AM – 10:00 PM",
    address: "Marina Town, 14940 US-41 N, Fort Myers, FL 33912",
    phone: "(239) 997-9888",
    website: "https://pinchersusa.com",
    image: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Pinchers+Crab+Shack+Fort+Myers+FL",
    distanceMi: 10
  },
  {
    id: 9,
    name: "The Green Cup Café",
    city: "Fort Myers",
    cuisine: "Vegan",
    price: "$",
    vibe: ["Casual","Quick Bite","Outdoor"],
    dietary: ["Vegan","Vegetarian","Gluten-Free","Dairy-Free","Nut-Free"],
    independent: true,
    rating: 4.7,
    reviews: 620,
    menu: "Acai bowls, plant-based burgers, raw cheesecake, green smoothies, Buddha bowls, and cold-press juices.",
    hours: "Mon–Sat  8:00 AM – 6:00 PM · Sun  9:00 AM – 4:00 PM",
    address: "2571 Velasco St, Fort Myers, FL 33901",
    phone: "(239) 936-5444",
    website: "",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=The+Green+Cup+Fort+Myers+FL",
    distanceMi: 3
  },
  {
    id: 10,
    name: "El Gaucho Inca Restaurant",
    city: "Naples",
    cuisine: "Latin",
    price: "$$",
    vibe: ["Family","Date Night","Casual"],
    dietary: ["Gluten-Free"],
    independent: true,
    rating: 4.6,
    reviews: 890,
    menu: "Peruvian ceviche, lomo saltado, Argentine chimichurri steak, plantains, and pisco sours.",
    hours: "Tue–Sun  11:00 AM – 9:30 PM · Closed Monday",
    address: "2494 Tamiami Trail N, Naples, FL 34103",
    phone: "(239) 403-8822",
    website: "",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=El+Gaucho+Inca+Naples+FL",
    distanceMi: 21
  },
  {
    id: 11,
    name: "Rumrunners",
    city: "Cape Coral",
    cuisine: "American",
    price: "$$",
    vibe: ["Waterfront","Casual","Family","Outdoor","Dog-Friendly"],
    dietary: ["Gluten-Free"],
    independent: true,
    rating: 4.4,
    reviews: 2670,
    menu: "Gulf shrimp, burgers, fish & chips, coconut shrimp, sunset cocktails, and daily fresh-catch specials.",
    hours: "Mon–Sun  11:00 AM – 10:00 PM",
    address: "5819 Palm Beach Blvd, Cape Coral, FL 33905",
    phone: "(239) 542-0200",
    website: "https://rumrunnerscapecoral.com",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Rumrunners+Cape+Coral+FL",
    distanceMi: 7
  },
  {
    id: 12,
    name: "Twisted Vine Bistro",
    city: "Fort Myers",
    cuisine: "American",
    price: "$$$",
    vibe: ["Date Night","Fine Dining","Casual"],
    dietary: ["Vegetarian","Gluten-Free"],
    independent: true,
    rating: 4.7,
    reviews: 1100,
    menu: "Duck confit, pan-seared scallops, short rib agnolotti, craft cocktails, and a wine list of 200+ bottles.",
    hours: "Tue–Sat  5:00 PM – 10:00 PM",
    address: "2117 Andrea Ln, Fort Myers, FL 33912",
    phone: "(239) 690-2844",
    website: "https://twistedvinebistro.com",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Twisted+Vine+Bistro+Fort+Myers+FL",
    distanceMi: 5
  },
  {
    id: 13,
    name: "Café Carmon",
    city: "Fort Myers",
    cuisine: "Breakfast",
    price: "$",
    vibe: ["Brunch","Casual","Family","Outdoor"],
    dietary: ["Vegetarian"],
    independent: true,
    rating: 4.5,
    reviews: 2100,
    menu: "Eggs Benedict, stuffed French toast, avocado omelets, breakfast burritos, and bottomless mimosas on weekends.",
    hours: "Mon–Fri  7:00 AM – 3:00 PM · Sat–Sun  7:00 AM – 2:00 PM",
    address: "2224 Bay St, Fort Myers, FL 33901",
    phone: "(239) 332-2233",
    website: "",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Cafe+Carmon+Fort+Myers+FL",
    distanceMi: 3
  },
  {
    id: 14,
    name: "Sukhothai Thai Cuisine",
    city: "Fort Myers",
    cuisine: "Thai",
    price: "$$",
    vibe: ["Casual","Date Night","Family"],
    dietary: ["Vegetarian","Vegan","Gluten-Free","Dairy-Free"],
    independent: true,
    rating: 4.6,
    reviews: 940,
    menu: "Pad Thai, massaman curry, tom kha soup, green papaya salad, and mango sticky rice.",
    hours: "Mon–Sat  11:00 AM – 9:30 PM · Sun  12:00 PM – 9:00 PM",
    address: "7091 College Pkwy #10, Fort Myers, FL 33907",
    phone: "(239) 936-1800",
    website: "",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Sukhothai+Fort+Myers+FL",
    distanceMi: 5
  },
  {
    id: 15,
    name: "Mel's Diner",
    city: "Fort Myers",
    cuisine: "American",
    price: "$",
    vibe: ["Casual","Family","Quick Bite","Brunch"],
    dietary: ["Vegetarian"],
    independent: false,
    rating: 4.2,
    reviews: 3800,
    menu: "Classic burgers, all-day breakfast, milkshakes, diner specials, and homemade pie.",
    hours: "Mon–Sun  6:00 AM – 10:00 PM",
    address: "4820 Cleveland Ave, Fort Myers, FL 33907",
    phone: "(239) 275-7850",
    website: "https://melsdiner.com",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Mels+Diner+Fort+Myers+FL",
    distanceMi: 5
  },
  {
    id: 16,
    name: "The Boathouse on Naples Bay",
    city: "Naples",
    cuisine: "Seafood",
    price: "$$$",
    vibe: ["Date Night","Waterfront","Fine Dining","Outdoor"],
    dietary: ["Gluten-Free"],
    independent: true,
    rating: 4.8,
    reviews: 1870,
    menu: "Gulf yellowfin tuna crudo, whole roasted branzino, lobster risotto, oysters on the half shell, and artisan charcuterie.",
    hours: "Wed–Mon  4:00 PM – 10:00 PM · Closed Tuesday",
    address: "975 Riverside Cir, Naples, FL 34102",
    phone: "(239) 643-2235",
    website: "https://theboathousenaples.com",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=The+Boathouse+Naples+FL",
    distanceMi: 23
  },
  {
    id: 17,
    name: "Cibao Latin Cuisine",
    city: "Cape Coral",
    cuisine: "Cuban",
    price: "$",
    vibe: ["Family","Casual","Quick Bite"],
    dietary: ["Dairy-Free","Gluten-Free"],
    independent: true,
    rating: 4.5,
    reviews: 560,
    menu: "Ropa vieja, Cuban sandwich, tostones, arroz con pollo, tres leches cake, and fresh-squeezed tropical juices.",
    hours: "Mon–Sat  10:00 AM – 9:00 PM",
    address: "3820 Del Prado Blvd S, Cape Coral, FL 33904",
    phone: "(239) 549-4000",
    website: "",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Cibao+Latin+Cuisine+Cape+Coral+FL",
    distanceMi: 7
  },
  {
    id: 18,
    name: "Bleu Provence",
    city: "Naples",
    cuisine: "French",
    price: "$$$$",
    vibe: ["Date Night","Fine Dining"],
    dietary: ["Vegetarian","Gluten-Free"],
    independent: true,
    rating: 4.9,
    reviews: 820,
    menu: "Foie gras terrine, bouillabaisse, duck à l'orange, soufflés, French cheese board, and sommelier wine pairings.",
    hours: "Tue–Sat  5:30 PM – 10:00 PM · Sun brunch 11:00 AM – 2:00 PM",
    address: "1234 8th St S, Naples, FL 34102",
    phone: "(239) 261-8239",
    website: "https://bleuprovence.com",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Bleu+Provence+Naples+FL",
    distanceMi: 22
  },
  {
    id: 19,
    name: "Bonita Bill's Waterfront Café",
    city: "Fort Myers Beach",
    cuisine: "Seafood",
    price: "$$",
    vibe: ["Casual","Waterfront","Family","Dog-Friendly","Outdoor"],
    dietary: ["Gluten-Free"],
    independent: true,
    rating: 4.4,
    reviews: 1650,
    menu: "Grouper sandwiches, crab cakes, shrimp cocktail, fish & chips, and island-style rum drinks.",
    hours: "Mon–Sun  11:00 AM – 10:00 PM",
    address: "450 Harbor Ct, Fort Myers Beach, FL 33931",
    phone: "(239) 463-9127",
    website: "",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Bonita+Bills+Fort+Myers+Beach+FL",
    distanceMi: 10
  },
  {
    id: 20,
    name: "India Palace",
    city: "Fort Myers",
    cuisine: "Indian",
    price: "$$",
    vibe: ["Family","Casual","Date Night"],
    dietary: ["Vegetarian","Vegan","Gluten-Free","Dairy-Free","Halal"],
    independent: true,
    rating: 4.5,
    reviews: 710,
    menu: "Butter chicken, lamb biryani, saag paneer, fresh-baked naan, tandoori platters, and mango lassi.",
    hours: "Mon–Sun  11:30 AM – 2:30 PM · 5:00 PM – 10:00 PM",
    address: "6220 S College Rd, Fort Myers, FL 33919",
    phone: "(239) 433-0331",
    website: "",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=India+Palace+Fort+Myers+FL",
    distanceMi: 6
  },
  {
    id: 21,
    name: "Real Macaw Bar & Grill",
    city: "Marco Island",
    cuisine: "American",
    price: "$$",
    vibe: ["Waterfront","Casual","Live Music","Outdoor","Dog-Friendly"],
    dietary: ["Vegetarian","Gluten-Free"],
    independent: true,
    rating: 4.5,
    reviews: 1340,
    menu: "Tropical fish tacos, shrimp po'boys, jerk wings, island burgers, and frozen cocktails with views of the Ten Thousand Islands.",
    hours: "Mon–Sun  11:00 AM – 11:00 PM",
    address: "710 Collier Blvd, Marco Island, FL 34145",
    phone: "(239) 642-1000",
    website: "",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Real+Macaw+Marco+Island+FL",
    distanceMi: 35
  },
  {
    id: 22,
    name: "Nino's Italian Grill",
    city: "Cape Coral",
    cuisine: "Italian",
    price: "$$",
    vibe: ["Family","Casual","Date Night"],
    dietary: ["Vegetarian","Gluten-Free"],
    independent: true,
    rating: 4.4,
    reviews: 990,
    menu: "Classic lasagna, veal piccata, wood-fired pizza, house-made tiramisu, and Chianti by the carafe.",
    hours: "Tue–Sun  4:00 PM – 9:30 PM",
    address: "4229 SE 20th Pl, Cape Coral, FL 33904",
    phone: "(239) 542-2060",
    website: "",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Nino%27s+Italian+Grill+Cape+Coral+FL",
    distanceMi: 6
  },
  {
    id: 23,
    name: "Masa Ramen & Izakaya",
    city: "Fort Myers",
    cuisine: "Sushi",
    price: "$$",
    vibe: ["Casual","Date Night"],
    dietary: ["Vegetarian","Vegan","Dairy-Free"],
    independent: true,
    rating: 4.7,
    reviews: 530,
    menu: "Tonkotsu ramen, spicy miso ramen, takoyaki, karaage, gyoza, and a rotating sake selection.",
    hours: "Wed–Mon  11:30 AM – 9:30 PM",
    address: "8771 College Pkwy, Fort Myers, FL 33919",
    phone: "(239) 208-5688",
    website: "",
    image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Masa+Ramen+Fort+Myers+FL",
    distanceMi: 5
  },
  {
    id: 24,
    name: "Tacos & Tequila Cantina",
    city: "Fort Myers",
    cuisine: "Mexican",
    price: "$",
    vibe: ["Casual","Quick Bite","Family","Live Music"],
    dietary: ["Vegetarian","Vegan","Gluten-Free","Dairy-Free"],
    independent: true,
    rating: 4.3,
    reviews: 1820,
    menu: "Street-style tacos (birria, al pastor, veggie), fresh guacamole, elote, jalapeño margaritas, and micheladas.",
    hours: "Mon–Sun  11:00 AM – 11:00 PM",
    address: "3313 Lee Blvd, Fort Myers, FL 33905",
    phone: "(239) 332-8226",
    website: "",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Tacos+%26+Tequila+Fort+Myers+FL",
    distanceMi: 4
  },
  {
    id: 25,
    name: "Gulf Coast Steakhouse",
    city: "Naples",
    cuisine: "Steakhouse",
    price: "$$$",
    vibe: ["Date Night","Fine Dining","Family"],
    dietary: ["Gluten-Free"],
    independent: true,
    rating: 4.6,
    reviews: 1450,
    menu: "40-day dry-aged ribeye, wagyu filets, Maine lobster tail, wedge salad, truffle fries, and vintage bourbon selection.",
    hours: "Mon–Sun  4:00 PM – 10:30 PM",
    address: "5111 Tamiami Trail N, Naples, FL 34103",
    phone: "(239) 649-2277",
    website: "",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    mapsUrl: "https://maps.google.com/?q=Gulf+Coast+Steakhouse+Naples+FL",
    distanceMi: 20
  }
];

// ── STATE ─────────────────────────────────────────────────────

const DEFAULT_STATE = {
  onboarded: false,
  cuisines: [],
  budget: ["$","$$"],
  distance: ["15","30","50"],
  dietary: [],
  vibes: [],
  favorites: [],
  wantToTry: []
};

let state = loadState();
let activeQuickVibe = "";
let activeTab = "favorites";
let currentModal = null;

function loadState() {
  try {
    const saved = localStorage.getItem("swfl_state");
    if (saved) return { ...DEFAULT_STATE, ...JSON.parse(saved) };
  } catch(e) { /* ignore */ }
  return { ...DEFAULT_STATE };
}

function saveState() {
  localStorage.setItem("swfl_state", JSON.stringify(state));
}

// ── SCORING ───────────────────────────────────────────────────

function scoreRestaurant(r) {
  let score = 0;
  if (r.independent) score += 5;
  if (state.cuisines.length === 0 || state.cuisines.includes(r.cuisine)) score += 6;
  if (state.budget.length === 0 || state.budget.includes(r.price)) score += 3;
  if (state.vibes.length === 0 || r.vibe.some(v => state.vibes.includes(v))) score += 4;
  if (state.dietary.length === 0 || state.dietary.every(d => r.dietary.includes(d))) score += 2;
  const maxDist = state.distance.length > 0 ? Math.max(...state.distance.map(Number)) : 50;
  if (r.distanceMi <= maxDist) score += 2;
  if (r.distanceMi <= 10) score += 1;
  return score + r.rating;
}

function getRanked(vibeFilter = "") {
  let list = RESTAURANTS;
  if (vibeFilter) list = list.filter(r => r.vibe.includes(vibeFilter));
  return [...list].sort((a, b) => scoreRestaurant(b) - scoreRestaurant(a));
}

// ── ROUTING ───────────────────────────────────────────────────

function showPage(name) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(`page-${name}`).classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.page === name);
  });
  window.scrollTo(0, 0);
  renderPage(name);
}

function renderPage(name) {
  if (name === "home") renderHome();
  else if (name === "discover") renderDiscover();
  else if (name === "saved") renderSaved();
  else if (name === "profile") renderProfile();
}

// ── HOME ──────────────────────────────────────────────────────

function renderHome() {
  // Greeting
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  document.getElementById("greetingTime").textContent = greeting;

  const ranked = getRanked(activeQuickVibe);
  const recCount = document.getElementById("recCount");
  recCount.textContent = `${ranked.length} restaurant${ranked.length !== 1 ? "s" : ""} match your profile`;

  // Top picks (horizontal)
  const topPicks = document.getElementById("topPicks");
  topPicks.innerHTML = "";
  ranked.slice(0, 6).forEach(r => topPicks.appendChild(makeHCard(r)));

  // Hidden gems (independent only)
  const gemsRoot = document.getElementById("hiddenGems");
  gemsRoot.innerHTML = "";
  const gems = ranked.filter(r => r.independent).slice(0, 4);
  gems.forEach(r => gemsRoot.appendChild(makeVCard(r)));

  // All recs
  const allRoot = document.getElementById("allRecs");
  allRoot.innerHTML = "";
  ranked.slice(0, 12).forEach(r => allRoot.appendChild(makeVCard(r)));
}

// ── DISCOVER ─────────────────────────────────────────────────

function renderDiscover() {
  const cities = [...new Set(RESTAURANTS.map(r => r.city))].sort();
  const cuisineList = [...new Set(RESTAURANTS.map(r => r.cuisine))].sort();
  const vibeList = [...new Set(RESTAURANTS.flatMap(r => r.vibe))].sort();

  const cityEl = document.getElementById("cityFilter");
  const cuisineEl = document.getElementById("cuisineFilter");
  const vibeEl = document.getElementById("vibeFilter");

  if (!cityEl.dataset.populated) {
    cities.forEach(c => { const o = document.createElement("option"); o.value = c; o.textContent = c; cityEl.appendChild(o); });
    cuisineList.forEach(c => { const o = document.createElement("option"); o.value = c; o.textContent = c; cuisineEl.appendChild(o); });
    vibeList.forEach(v => { const o = document.createElement("option"); o.value = v; o.textContent = v; vibeEl.appendChild(o); });
    cityEl.dataset.populated = "1";
  }

  // Diet filter chips
  const dietChips = document.getElementById("dietFilterChips");
  if (!dietChips.dataset.built) {
    DIETS.forEach(d => {
      const btn = document.createElement("button");
      btn.className = "chip";
      btn.textContent = d;
      btn.onclick = () => { btn.classList.toggle("active"); applyDiscoverFilters(); };
      dietChips.appendChild(btn);
    });
    dietChips.dataset.built = "1";
  }

  applyDiscoverFilters();
}

function applyDiscoverFilters() {
  const city = document.getElementById("cityFilter").value;
  const cuisine = document.getElementById("cuisineFilter").value;
  const price = document.getElementById("priceFilter").value;
  const vibe = document.getElementById("vibeFilter").value;
  const activeDiets = [...document.querySelectorAll("#dietFilterChips .chip.active")].map(b => b.textContent);

  let results = RESTAURANTS.filter(r => {
    if (city && r.city !== city) return false;
    if (cuisine && r.cuisine !== cuisine) return false;
    if (price && r.price !== price) return false;
    if (vibe && !r.vibe.includes(vibe)) return false;
    if (activeDiets.length && !activeDiets.every(d => r.dietary.includes(d))) return false;
    return true;
  });

  results = results.sort((a,b) => scoreRestaurant(b) - scoreRestaurant(a));
  document.getElementById("filterCount").textContent = `${results.length} restaurant${results.length !== 1 ? "s" : ""} found`;

  const list = document.getElementById("discoveryList");
  list.innerHTML = "";
  if (results.length === 0) {
    list.innerHTML = '<p style="color:var(--muted);text-align:center;padding:2rem">No restaurants match these filters.</p>';
  } else {
    results.forEach(r => list.appendChild(makeVCard(r)));
  }
}

// ── SAVED ─────────────────────────────────────────────────────

function renderSaved() {
  const favs = RESTAURANTS.filter(r => state.favorites.includes(r.id));
  const wants = RESTAURANTS.filter(r => state.wantToTry.includes(r.id));

  const favList = document.getElementById("favoritesList");
  favList.innerHTML = "";
  favs.forEach(r => favList.appendChild(makeVCard(r)));
  document.getElementById("favEmpty").classList.toggle("visible", favs.length === 0);

  const wantList = document.getElementById("wantList");
  wantList.innerHTML = "";
  wants.forEach(r => wantList.appendChild(makeVCard(r)));
  document.getElementById("wantEmpty").classList.toggle("visible", wants.length === 0);
}

// ── PROFILE ───────────────────────────────────────────────────

function renderProfile() {
  document.getElementById("profileStats").textContent =
    `❤️ ${state.favorites.length} favorites · 🔖 ${state.wantToTry.length} saved`;

  buildChipGroup("prefCuisine", CUISINES, state.cuisines, v => {
    toggle(state.cuisines, v); saveState(); renderHome();
  });

  buildSegGroup("prefBudget", BUDGETS, state.budget, v => {
    toggle(state.budget, v); saveState(); renderHome();
  });

  buildSegGroup("prefDistance", DISTANCES.map(d => ({ val: d, label: `${d} mi` })), state.distance, v => {
    toggle(state.distance, v); saveState(); renderHome();
  });

  buildChipGroup("prefDiet", DIETS, state.dietary, v => {
    toggle(state.dietary, v); saveState();
  });

  buildChipGroup("prefVibe", VIBES, state.vibes, v => {
    toggle(state.vibes, v); saveState(); renderHome();
  });
}

// ── CARD BUILDERS ─────────────────────────────────────────────

function makeHCard(r) {
  const el = document.createElement("div");
  el.className = "h-card";
  el.innerHTML = `
    <img class="h-card-img" src="${r.image}" alt="${r.name}" loading="lazy" />
    <div class="h-card-body">
      <div class="h-card-name">${r.name}</div>
      <div class="h-card-meta">${r.city} · ${r.price}</div>
      <span class="h-card-badge">${r.cuisine}</span>
    </div>
  `;
  el.onclick = () => openModal(r);
  return el;
}

function makeVCard(r) {
  const isFav = state.favorites.includes(r.id);
  const isWant = state.wantToTry.includes(r.id);
  const score = scoreRestaurant(r);

  const el = document.createElement("div");
  el.className = "v-card";
  el.innerHTML = `
    <img class="v-card-img" src="${r.image}" alt="${r.name}" loading="lazy" />
    <div class="v-card-body">
      <div class="v-card-name">${r.name}</div>
      <div class="v-card-meta">${r.city} · ${r.cuisine} · ${r.price}</div>
      <div class="v-card-tags">
        ${r.independent ? `<span class="v-card-tag">🌟 Local Gem</span>` : ""}
        ${r.vibe.slice(0,2).map(v => `<span class="v-card-tag">${v}</span>`).join("")}
      </div>
      <div class="v-card-actions">
        <div class="v-card-rating">★ ${r.rating} <span style="font-weight:400;color:var(--muted)">(${r.reviews.toLocaleString()})</span></div>
        <button class="v-card-icon-btn ${isFav ? "active" : ""}" data-action="fav" title="Favorite">❤️</button>
        <button class="v-card-icon-btn ${isWant ? "want-active" : ""}" data-action="want" title="Want to Try">🔖</button>
      </div>
    </div>
  `;

  el.querySelector('[data-action="fav"]').onclick = (e) => {
    e.stopPropagation();
    toggle(state.favorites, r.id);
    saveState();
    el.querySelector('[data-action="fav"]').classList.toggle("active", state.favorites.includes(r.id));
    showToast(state.favorites.includes(r.id) ? `Added ${r.name} to Favorites` : `Removed from Favorites`);
    if (activeTab === "favorites") renderSaved();
  };

  el.querySelector('[data-action="want"]').onclick = (e) => {
    e.stopPropagation();
    toggle(state.wantToTry, r.id);
    saveState();
    el.querySelector('[data-action="want"]').classList.toggle("want-active", state.wantToTry.includes(r.id));
    showToast(state.wantToTry.includes(r.id) ? `Saved ${r.name} to Want to Try` : `Removed from Want to Try`);
    if (activeTab === "wantToTry") renderSaved();
  };

  el.onclick = () => openModal(r);
  return el;
}

// ── MODAL ─────────────────────────────────────────────────────

function openModal(r) {
  currentModal = r;
  document.getElementById("modalImg").src = r.image;
  document.getElementById("modalImg").alt = r.name;
  document.getElementById("modalName").textContent = r.name;
  document.getElementById("modalMeta").textContent = `${r.city} · ${r.cuisine} · ${r.price}`;
  document.getElementById("modalRating").innerHTML = `★ ${r.rating}`;
  document.getElementById("modalMenu").textContent = r.menu;
  document.getElementById("modalHours").textContent = r.hours;
  document.getElementById("modalAddress").textContent = r.address;
  document.getElementById("modalPhone").textContent = r.phone || "Not available";

  const websiteEl = document.getElementById("modalWebsite");
  const websiteSection = document.getElementById("modalWebsiteSection");
  if (r.website) {
    websiteEl.href = r.website;
    websiteEl.textContent = r.website.replace(/^https?:\/\//, "");
    websiteSection.style.display = "";
  } else {
    websiteSection.style.display = "none";
  }

  const badges = document.getElementById("modalBadges");
  badges.innerHTML = [
    r.independent ? `<span class="modal-badge gem">🌟 Independent</span>` : "",
    ...r.vibe.map(v => `<span class="modal-badge vibe">${v}</span>`),
    ...r.dietary.map(d => `<span class="modal-badge diet">${d}</span>`)
  ].join("");

  document.getElementById("modalMaps").href = r.mapsUrl;

  const favBtn = document.getElementById("modalFav");
  const wantBtn = document.getElementById("modalWant");

  function refreshModalBtns() {
    favBtn.textContent = state.favorites.includes(r.id) ? "❤️ Favorited" : "❤️ Favorite";
    wantBtn.textContent = state.wantToTry.includes(r.id) ? "🔖 Saved" : "🔖 Want to Try";
  }
  refreshModalBtns();

  favBtn.onclick = () => {
    toggle(state.favorites, r.id);
    saveState();
    refreshModalBtns();
    showToast(state.favorites.includes(r.id) ? `Added to Favorites` : `Removed from Favorites`);
    renderPage(document.querySelector(".page.active").id.replace("page-",""));
  };
  wantBtn.onclick = () => {
    toggle(state.wantToTry, r.id);
    saveState();
    refreshModalBtns();
    showToast(state.wantToTry.includes(r.id) ? `Saved to Want to Try` : `Removed from Want to Try`);
    renderPage(document.querySelector(".page.active").id.replace("page-",""));
  };

  document.getElementById("detailModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("detailModal").classList.remove("open");
  document.body.style.overflow = "";
  currentModal = null;
}

// ── ONBOARDING ────────────────────────────────────────────────

let obStep = 0;

function showObStep(n) {
  document.querySelectorAll(".ob-step").forEach(s => s.classList.remove("active"));
  const step = document.querySelector(`.ob-step[data-step="${n}"]`);
  if (step) step.classList.add("active");
  document.querySelectorAll(".ob-dot").forEach(d => {
    d.classList.toggle("active", parseInt(d.dataset.s) <= n);
  });
  obStep = n;
}

function initOnboarding() {
  // Build chip groups
  buildObChips("ob-cuisine", CUISINES, state.cuisines);
  buildObChips("ob-diet", DIETS, state.dietary);
  buildObChips("ob-vibe", VIBES, state.vibes);

  // Budget segmented buttons
  const budgetGroup = document.getElementById("ob-budget");
  budgetGroup.querySelectorAll(".seg").forEach(btn => {
    const val = btn.dataset.val;
    btn.classList.toggle("active", state.budget.includes(val));
    btn.onclick = () => { btn.classList.toggle("active"); toggle(state.budget, val); };
  });

  // Distance segmented buttons
  const distGroup = document.getElementById("ob-distance");
  distGroup.querySelectorAll(".seg").forEach(btn => {
    const val = btn.dataset.val;
    btn.classList.toggle("active", state.distance.includes(val));
    btn.onclick = () => { btn.classList.toggle("active"); toggle(state.distance, val); };
  });

  document.getElementById("startOnboarding").onclick = () => showObStep(1);
  document.getElementById("skipOnboarding").onclick = () => finishOnboarding();
  document.getElementById("ob-next-1").onclick = () => showObStep(2);
  document.getElementById("ob-next-2").onclick = () => showObStep(3);
  document.getElementById("ob-next-3").onclick = () => showObStep(4);
  document.getElementById("ob-finish").onclick = () => finishOnboarding();
}

function buildObChips(containerId, items, activeList) {
  const root = document.getElementById(containerId);
  root.innerHTML = "";
  items.forEach(item => {
    const btn = document.createElement("button");
    btn.className = `chip${activeList.includes(item) ? " active" : ""}`;
    btn.textContent = item;
    btn.onclick = () => { btn.classList.toggle("active"); toggle(activeList, item); };
    root.appendChild(btn);
  });
}

function finishOnboarding() {
  state.onboarded = true;
  saveState();
  document.getElementById("onboardingScreen").classList.remove("active");
  document.getElementById("appScreen").classList.add("active");
  showPage("home");
}

// ── PROFILE CHIP/SEG BUILDERS ─────────────────────────────────

function buildChipGroup(containerId, items, activeList, onToggle) {
  const root = document.getElementById(containerId);
  root.innerHTML = "";
  items.forEach(item => {
    const btn = document.createElement("button");
    btn.className = `chip${activeList.includes(item) ? " active" : ""}`;
    btn.textContent = item;
    btn.onclick = () => { onToggle(item); btn.classList.toggle("active", activeList.includes(item)); };
    root.appendChild(btn);
  });
}

function buildSegGroup(containerId, items, activeList, onToggle) {
  const root = document.getElementById(containerId);
  root.innerHTML = "";
  items.forEach(item => {
    const val = typeof item === "object" ? item.val : item;
    const label = typeof item === "object" ? item.label : item;
    const btn = document.createElement("button");
    btn.className = `seg${activeList.includes(val) ? " active" : ""}`;
    btn.textContent = label;
    btn.onclick = () => { onToggle(val); btn.classList.toggle("active", activeList.includes(val)); };
    root.appendChild(btn);
  });
}

// ── GLOBAL SEARCH ─────────────────────────────────────────────

function setupSearch() {
  const toggleBtn = document.getElementById("searchToggleBtn");
  const searchBox = document.getElementById("globalSearch");
  const input = document.getElementById("globalSearchInput");
  const dropdown = document.getElementById("searchResults");

  toggleBtn.onclick = () => {
    const open = searchBox.classList.toggle("open");
    if (open) { input.focus(); }
    else { dropdown.innerHTML = ""; input.value = ""; }
  };

  input.oninput = () => {
    const q = input.value.trim().toLowerCase();
    dropdown.innerHTML = "";
    if (!q) return;
    const matches = RESTAURANTS.filter(r =>
      r.name.toLowerCase().includes(q) ||
      r.cuisine.toLowerCase().includes(q) ||
      r.city.toLowerCase().includes(q) ||
      r.vibe.join(" ").toLowerCase().includes(q)
    ).slice(0, 8);

    matches.forEach(r => {
      const item = document.createElement("div");
      item.className = "search-item";
      item.innerHTML = `
        <img class="search-item-img" src="${r.image}" alt="${r.name}" />
        <div>
          <div class="search-item-name">${r.name}</div>
          <div class="search-item-sub">${r.city} · ${r.cuisine} · ${r.price}</div>
        </div>
      `;
      item.onclick = () => {
        searchBox.classList.remove("open");
        dropdown.innerHTML = "";
        input.value = "";
        openModal(r);
      };
      dropdown.appendChild(item);
    });
  };

  document.addEventListener("click", e => {
    if (!searchBox.contains(e.target) && e.target !== toggleBtn) {
      searchBox.classList.remove("open");
      dropdown.innerHTML = "";
      input.value = "";
    }
  });
}

// ── NOTIFICATIONS ─────────────────────────────────────────────

const NOTIFICATIONS = [
  "🦀 Stone crab season is open — check out waterfront spots!",
  "🌅 Great sunset tonight — Waterfront restaurants are buzzing.",
];
let notifIndex = 0;

function setupNotifications() {
  const btn = document.getElementById("notifyBtn");
  const badge = document.getElementById("notifBadge");
  badge.textContent = NOTIFICATIONS.length;

  btn.onclick = () => {
    if (notifIndex < NOTIFICATIONS.length) {
      showToast(NOTIFICATIONS[notifIndex++]);
      badge.textContent = Math.max(0, NOTIFICATIONS.length - notifIndex);
    } else {
      showToast("You're all caught up! 🎉");
    }
  };
}

// ── TOAST ─────────────────────────────────────────────────────

let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

// ── UTILITIES ─────────────────────────────────────────────────

function toggle(arr, val) {
  const idx = arr.indexOf(val);
  idx >= 0 ? arr.splice(idx, 1) : arr.push(val);
}

// ── EVENT WIRING ──────────────────────────────────────────────

function setupEvents() {
  // Bottom nav
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.onclick = () => showPage(btn.dataset.page);
  });

  // Modal close
  document.getElementById("modalClose").onclick = closeModal;
  document.getElementById("detailModal").onclick = (e) => {
    if (e.target === document.getElementById("detailModal")) closeModal();
  };
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  // Tabs (Saved page)
  document.querySelectorAll(".tab").forEach(tab => {
    tab.onclick = () => {
      activeTab = tab.dataset.tab;
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(`tab-${activeTab}`).classList.add("active");
    };
  });

  // Quick vibe filters
  document.querySelectorAll(".qf-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".qf-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeQuickVibe = btn.dataset.vibe;
      renderHome();
    };
  });

  // Refresh recs
  document.getElementById("refreshRecs").onclick = () => {
    renderHome();
    showToast("Recommendations refreshed ✓");
  };

  // Discover filters
  ["cityFilter","cuisineFilter","priceFilter","vibeFilter"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.onchange = applyDiscoverFilters;
  });

  // Profile resets
  document.getElementById("resetPrefs").onclick = () => {
    state = { ...DEFAULT_STATE };
    saveState();
    renderProfile();
    renderHome();
    showToast("Preferences reset to defaults.");
  };

  document.getElementById("reRunOnboarding").onclick = () => {
    document.getElementById("appScreen").classList.remove("active");
    document.getElementById("onboardingScreen").classList.add("active");
    showObStep(1);
  };
}

// ── BOOT ──────────────────────────────────────────────────────

function boot() {
  initOnboarding();
  setupSearch();
  setupNotifications();
  setupEvents();

  if (state.onboarded) {
    document.getElementById("onboardingScreen").classList.remove("active");
    document.getElementById("appScreen").classList.add("active");
    showPage("home");
  }
  // Otherwise onboarding screen is already shown via HTML class
}

boot();
