{
  "meta": {
    "title": "Italy Tourism Observatory (2022–2026)",
    "subtitle": "Post-pandemic recovery, shoulder-season expansion, mega-events, and regional dispersal across Italy.",
    "sources": "ISTAT, ENIT / Ministry of Tourism, Jubilee & Milano Cortina releases",
    "status": "Prototype Baseline · Ready for Verified Series"
  },
  "tabs": {
    "trajectory": {
      "title": "2022–2026 Trajectory",
      "subtitle": "Post-pandemic rebound, shoulder-season growth, and mega-event waves across Italy.",
      "chartHeading": "National & Corridor Index (2022–2026)",
      "chartDesc": "Indexed to Jan 2022 = 100. Hover any period for context notes.",
      "chartType": "line",
      "callout": "<strong>Trajectory takeaway:</strong> Strong summer peaks are increasingly paired with spring/autumn shoulder demand and event spikes in 2025–2026.",
      "showRegionalTable": false,
      "kpis": [
        { "label": "2024 Inbound Arrivals", "value": "~57.7M", "meta": "~381M international nights", "positive": false },
        { "label": "2025 Visitor Volume", "value": "~87.9M", "meta": "Record annual momentum", "positive": true },
        { "label": "Shoulder Expansion", "value": "Apr–Jun / Sep–Nov", "meta": "Broadening beyond peak summer", "positive": true },
        { "label": "Event Window Span", "value": "Dec 2024 – Feb 2026", "meta": "Jubilee & Winter Olympics", "positive": false }
      ],
      "lenses": [
        { "value": "all", "label": "All Series", "visible": [true, true, true, true] },
        { "value": "national-vs-secondary", "label": "National vs. Secondary Regions", "visible": [true, false, false, true] },
        { "value": "event-corridors", "label": "Rome/Lazio vs. Northern/Alpine", "visible": [false, true, true, false] }
      ],
      "windows": [
        { "value": "full", "label": "2022–2026" },
        { "value": "recent", "label": "2024–2026" }
      ],
      "seriesLabels": ["National Index", "Rome & Lazio", "Northern & Alpine", "Secondary Regions"],
      "seriesColors": ["#1d4ed8", "#b45309", "#0f766e", "#6d28d9"],
      "rows": [
        { "label": "2022-01", "v": [100.0, 100.0, 100.0, 100.0], "note": "Early 2022 recovery baseline", "forecast": false },
        { "label": "2022-07", "v": [148.0, 146.0, 152.0, 145.0], "note": "Post-lockdown summer rebound", "forecast": false },
        { "label": "2023-07", "v": [164.0, 166.0, 162.0, 161.0], "note": "Strong international return", "forecast": false },
        { "label": "2024-07", "v": [176.0, 178.0, 173.0, 175.0], "note": "Pre-Jubilee summer peak", "forecast": false },
        { "label": "2024-12", "v": [142.0, 156.0, 145.0, 136.0], "note": "Jubilee Holy Door opens (Dec 24, 2024)", "forecast": false },
        { "label": "2025-07", "v": [192.0, 208.0, 182.0, 186.0], "note": "Peak 2025 summer & Youth Jubilee wave", "forecast": false },
        { "label": "2026-02", "v": [158.0, 154.0, 194.0, 151.0], "note": "Milano Cortina Winter Olympics (Feb 6–22, 2026)", "forecast": false },
        { "label": "2026-07", "v": [196.0, 190.0, 188.0, 194.0], "note": "Post-Olympics summer & continued dispersal", "forecast": false },
        { "label": "2027-02", "v": [162.0, 157.0, 186.0, 156.0], "note": "Projected winter baseline post-Games", "forecast": true },
        { "label": "2027-07", "v": [200.0, 193.0, 191.0, 199.0], "note": "Projected summer with continued shoulder/secondary growth", "forecast": true }
      ],
      "notes": [
        {
          "heading": "Macro Recovery to Record Volume",
          "body": "After rapid post-pandemic gains in 2022–2024, 2025 saw record visitor activity while shoulder months carried a larger share of annual demand."
        },
        {
          "heading": "Two Distinct Mega-Event Shapes",
          "body": "The 2025 Jubilee stretched across more than a year in Rome/Lazio, whereas the February 2026 Winter Olympics created a sharp winter spike in Northern & Alpine corridors."
        }
      ]
    },
    "jubilee": {
      "title": "2025 Jubilee Deep Dive",
      "subtitle": "Pilgrimage waves from Dec 24, 2024 through Jan 6, 2026 alongside Rome arrivals and Lazio spend.",
      "chartHeading": "Jubilee Wave vs. Rome Arrivals & Lazio Spend",
      "chartDesc": "Indexed to Jan 2024 = 100. Compare day/pilgrimage intensity against overnight and spending series.",
      "chartType": "line",
      "callout": "<strong>Jubilee takeaway:</strong> Total pilgrimage counts (~33.5M) capture same-day and liturgical waves alongside Rome's 22.9M arrivals and €10.25B Lazio international spend in 2025.",
      "showRegionalTable": false,
      "kpis": [
        { "label": "Jubilee Participation", "value": "~33.5M", "meta": "Dec 2024 – Jan 2026 scope", "positive": true },
        { "label": "Rome Arrivals (2025)", "value": "22.9M", "meta": "52.92M overnight stays", "positive": false },
        { "label": "Lazio Intl. Spend (2025)", "value": "€10.25B", "meta": "+19.2% YoY gain", "positive": true },
        { "label": "Rome Airports (2025)", "value": "55.3M", "meta": "Fiumicino & Ciampino", "positive": false }
      ],
      "lenses": [
        { "value": "all", "label": "All Jubilee Series", "visible": [true, true, true, true] },
        { "value": "wave-arrivals", "label": "Jubilee Wave vs. Rome Arrivals", "visible": [true, true, false, false] },
        { "value": "vatican-spend", "label": "Vatican Corridor vs. Lazio Spend", "visible": [false, false, true, true] }
      ],
      "windows": [
        { "value": "full", "label": "2024–2026" },
        { "value": "jubilee", "label": "Dec ’24 – Jan ’26" }
      ],
      "seriesLabels": ["Rome Arrivals", "Jubilee Wave", "Vatican Corridor", "Lazio Intl. Spend"],
      "seriesColors": ["#1d4ed8", "#b45309", "#0f766e", "#6d28d9"],
      "rows": [
        { "label": "2024-01", "v": [100.0, 100.0, 100.0, 100.0], "note": "2024 baseline month", "forecast": false },
        { "label": "2024-07", "v": [136.0, 110.0, 114.0, 132.0], "note": "Summer leisure baseline", "forecast": false },
        { "label": "2024-12", "v": [116.0, 134.0, 138.0, 119.0], "note": "Holy Door opens (Dec 24, 2024)", "forecast": false },
        { "label": "2025-04", "v": [129.0, 148.0, 152.0, 134.0], "note": "Spring Jubilee & Easter gatherings", "forecast": false },
        { "label": "2025-07", "v": [147.0, 184.0, 176.0, 156.0], "note": "Jubilee of Young People peak wave", "forecast": false },
        { "label": "2025-10", "v": [135.0, 150.0, 154.0, 142.0], "note": "Autumn pilgrimage wave", "forecast": false },
        { "label": "2026-01", "v": [115.0, 128.0, 126.0, 118.0], "note": "Holy Door closes (Jan 6, 2026)", "forecast": false },
        { "label": "2026-06", "v": [138.0, 110.0, 114.0, 135.0], "note": "Post-Jubilee normalization", "forecast": false },
        { "label": "2027-04", "v": [132.0, 112.0, 116.0, 137.0], "note": "Projected spring leisure baseline post-Jubilee", "forecast": true },
        { "label": "2027-07", "v": [149.0, 115.0, 118.0, 153.0], "note": "Projected summer baseline post-Jubilee", "forecast": true }
      ],
      "notes": [
        {
          "heading": "Pilgrims vs. Bed-Nights",
          "body": "Separate same-day pilgrimage and liturgical counts from hotel/short-term rental bed-nights so accommodation capacity is interpreted accurately."
        },
        {
          "heading": "Vatican & Lazio Spillover",
          "body": "Track Vatican/Prati/Borgo and Major Basilica activity alongside Lazio international expenditure and airport traffic."
        }
      ]
    },
    "olympics": {
      "title": "2026 Winter Olympics (Milano Cortina)",
      "subtitle": "February 6–22, 2026 winter spike across Milan and alpine venue clusters vs. post-Games normalization.",
      "chartHeading": "Winter Olympics Corridor & Seasonal Shift",
      "chartDesc": "Indexed to Jan 2025 = 100. Contrast alpine clusters, Milan gateway demand, and post-Feb normalization.",
      "chartType": "line",
      "callout": "<strong>Olympics takeaway:</strong> Milano Cortina (Feb 6–22, 2026) concentrated winter demand around Milan and alpine competition hubs before returning toward seasonal baselines.",
      "showRegionalTable": false,
      "kpis": [
        { "label": "Games Window", "value": "Feb 6–22, 2026", "meta": "Milano Cortina Winter Olympics", "positive": true },
        { "label": "Primary Hubs", "value": "Milan & Alps", "meta": "Cortina, Livigno, Bormio, Val di Fiemme", "positive": false },
        { "label": "Peak Signal", "value": "Feb 2026 Spike", "meta": "Mid-winter surge vs. typical Feb", "positive": true },
        { "label": "Post-Event Phase", "value": "Mar–Apr 2026", "meta": "Spring normalization & shoulder shift", "positive": false }
      ],
      "lenses": [
        { "value": "all", "label": "All Olympics Series", "visible": [true, true, true] },
        { "value": "alpine-vs-milan", "label": "Alpine Clusters vs. Milan Gateway", "visible": [true, true, false] },
        { "value": "alpine-vs-national", "label": "Alpine Clusters vs. National", "visible": [true, false, true] }
      ],
      "windows": [
        { "value": "full", "label": "2025–2026" },
        { "value": "winter26", "label": "Nov ’25 – Apr ’26" }
      ],
      "seriesLabels": ["Alpine Venue Corridors", "Milan Gateway", "National Baseline"],
      "seriesColors": ["#0f766e", "#1d4ed8", "#64748b"],
      "rows": [
        { "label": "2025-01", "v": [100.0, 100.0, 100.0], "note": "Prior-year winter baseline", "forecast": false },
        { "label": "2025-07", "v": [128.0, 122.0, 134.0], "note": "Summer mountain & city travel", "forecast": false },
        { "label": "2025-11", "v": [108.0, 118.0, 106.0], "note": "Pre-winter shoulder", "forecast": false },
        { "label": "2026-01", "v": [134.0, 126.0, 112.0], "note": "Pre-Games ramp-up", "forecast": false },
        { "label": "2026-02", "v": [188.0, 162.0, 124.0], "note": "Milano Cortina Winter Olympics (Feb 6–22, 2026)", "forecast": false },
        { "label": "2026-03", "v": [132.0, 124.0, 118.0], "note": "Post-Games transition", "forecast": false },
        { "label": "2026-05", "v": [110.0, 125.0, 128.0], "note": "Spring normalization", "forecast": false },
        { "label": "2027-02", "v": [140.0, 130.0, 120.0], "note": "Projected Feb baseline post-Games", "forecast": true },
        { "label": "2027-05", "v": [114.0, 128.0, 131.0], "note": "Projected spring normalization", "forecast": true }
      ],
      "notes": [
        {
          "heading": "Distributed Alpine Footprint",
          "body": "Unlike single-city Games, Milano Cortina spans Lombardy, Veneto, and Trentino/Alto Adige—requiring cluster-level tracking rather than a single city metric."
        },
        {
          "heading": "Winter Spike vs. Long-Tail Legacy",
          "body": "Distinguish short-window Games rate/occupancy spikes from repeat alpine visitation and transport/infrastructure legacy."
        }
      ]
    },
    "dispersal": {
      "title": "Regional Dispersal & Pressure",
      "subtitle": "Comparing core honeypot hubs against secondary, mountain, and rural regions across Italy.",
      "chartHeading": "Regional Share & Growth Profile (Prototype)",
      "chartDesc": "Compare accommodation night share across major corridors and secondary/alpine regions.",
      "chartType": "bar",
      "callout": "<strong>Dispersal takeaway:</strong> Tracking secondary and mountain/rural regions alongside core hubs shows whether growth is relieving or shifting pressure.",
      "showRegionalTable": true,
      "kpis": [
        { "label": "Core Hubs", "value": "Rome · Florence · Venice · Milan", "meta": "High international & day-trip intensity", "positive": false },
        { "label": "Secondary & Alpine", "value": "Emilia-Romagna · Marche · Alps", "meta": "Broader seasonal & regional reach", "positive": true },
        { "label": "Concentration Metric", "value": "HHI / Top-5 Share", "meta": "Compute from ISTAT regional nights", "positive": false },
        { "label": "Pressure Metric", "value": "Nights vs. Residents", "meta": "Pair with short-term rental share", "positive": true }
      ],
      "lenses": [
        { "value": "all", "label": "2022 vs. 2025 Share (%)", "visible": [true, true] },
        { "value": "y2025-only", "label": "2025 Share Only (%)", "visible": [false, true] }
      ],
      "windows": [],
      "seriesLabels": ["2022 Night Share (%)", "2025 Night Share (%)"],
      "seriesColors": ["#94a3b8", "#1d4ed8"],
      "rows": [
        {
          "label": "Lazio (Rome)",
          "v": [11.2, 12.1],
          "note": "Jubilee boost & capital demand",
          "forecast": false,
          "role": "Core Hub",
          "trend": "Up (Jubilee lift)",
          "season": "Year-round + spikes",
          "pressure": "High urban density"
        },
        {
          "label": "Veneto (Venice/Dolomites)",
          "v": [15.4, 14.8],
          "note": "Strong coastal, lake & alpine base",
          "forecast": false,
          "role": "Core + Alpine",
          "trend": "High volume, shifting mix",
          "season": "Spring–Autumn + Winter",
          "pressure": "Very high in Venice"
        },
        {
          "label": "Lombardy (Milan/Lakes/Alps)",
          "v": [11.8, 12.4],
          "note": "Business, lakes & 2026 Olympics",
          "forecast": false,
          "role": "Gateway + Alpine",
          "trend": "Steady upward",
          "season": "Year-round + Feb peak",
          "pressure": "Moderate–High"
        },
        {
          "label": "Tuscany (Florence/Val d'Orcia)",
          "v": [10.9, 10.5],
          "note": "Art cities & rural/wine corridors",
          "forecast": false,
          "role": "Core + Rural",
          "trend": "High baseline",
          "season": "Spring–Autumn",
          "pressure": "High in historic centers"
        },
        {
          "label": "Emilia-Romagna",
          "v": [9.4, 9.7],
          "note": "Riviera, food/motor valley & cities",
          "forecast": false,
          "role": "Secondary / Diversified",
          "trend": "Gradual dispersal",
          "season": "Summer + Shoulder",
          "pressure": "Moderate"
        },
        {
          "label": "Trentino-Alto Adige/Südtirol",
          "v": [11.5, 11.6],
          "note": "High alpine hiking & ski tourism",
          "forecast": false,
          "role": "Alpine / Nature",
          "trend": "Resilient two-season",
          "season": "Summer & Winter",
          "pressure": "Seasonal mountain peak"
        }
      ],
      "notes": [
        {
          "heading": "Concentration vs. Dispersal",
          "body": "A falling top-region share or rising secondary-region growth rate signals broader dispersal—provided growth isn't just moving to a few new bottlenecks."
        },
        {
          "heading": "Overtourism Context",
          "body": "High visitor counts mean different things in a dense historic center than in a larger region; normalize by local population and bed capacity."
        }
      ]
    }
  }
}
