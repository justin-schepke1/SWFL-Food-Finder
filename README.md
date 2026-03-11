# SWFL Food Finder (Prototype)

Mobile-first prototype for a personalized Southwest Florida restaurant recommendation app.

## Included pages / sections
- Login / signup
- Onboarding preference setup
- Personalized home recommendations
- Discovery list with filters
- Individual restaurant detail view
- Favorites and want-to-try lists
- Notifications trigger
- Profile / preference summary

## Run locally
```bash
python3 -m http.server 4173
```
Then open `http://localhost:4173`.

## Personalization logic
Recommendations are scored by:
- preferred cuisine match
- budget match
- vibe/context match
- dietary fit
- local/independent weighting
- base rating
