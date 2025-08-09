// Backend-free provider configuration for the Unified Admin
// You can set public JSON URLs per provider (GitHub raw/Gist).
// Example shape that each URL should return:
// {
//   "provider":"gemini",
//   "competitors": {
//     "servpro-billings": {
//       "budget": 21000,
//       "mix": {"PPC":0.4,"LSAs":0.25,"LocalSEO":0.2,"PaidSocial":0.1,"CRO":0.05},
//       "tactics": ["...","..."],
//       "keywords": [{"keyword":"water damage billings","volume":950,"cpc":17.0,"intent":"Emergency","service":"Water Damage"}]
//     }
//   },
//   "master": {
//     "budget": 15000,
//     "mix": {"PPC":0.35,"LSAs":0.2,"LocalSEO":0.25,"PaidSocial":0.1,"CRO":0.1},
//     "notes": ["..."]
//   }
// }
window.PROVIDER_URLS = {
  // gemini: "https://raw.githubusercontent.com/you/gist-id/gemini.json",
  // o3: "https://raw.githubusercontent.com/you/gist-id/o3.json",
  // gpt5: "https://raw.githubusercontent.com/you/gist-id/gpt5.json",
  // gpt5pro: "https://raw.githubusercontent.com/you/gist-id/gpt5pro.json"
};

// Optional keyword JSON URL (array or {keywords:[...]}) — used when Live is ON.
window.KEYWORD_JSON_URL = ""; // e.g., "https://raw.githubusercontent.com/you/gist-id/keywords_billings.json"
