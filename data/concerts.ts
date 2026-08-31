// ─────────────────────────────────────────────────────────────
// CONCERT DATES
// ─────────────────────────────────────────────────────────────
// This is the ONLY file you need to edit to add, remove, or
// change a concert date on the website.
//
// To add a new concert: copy one of the objects below (including
// the curly braces { }), paste it into the list, and fill in
// your own info. To remove a concert, delete its whole object.
// The website will update automatically — no other file needs
// to change.
//
// Fields:
//   date  -> short date shown in big text, e.g. "12 JUIN"
//   year  -> the year, e.g. "2026"
//   time  -> the start time, e.g. "20:00"
//   city  -> the city name, shown as the title
//   venue -> the venue or event name
// ─────────────────────────────────────────────────────────────

export type Concert = {
  date: string
  year: string
  time: string
  city: string
  venue: string
}

export const concerts: Concert[] = [
  {
    date: "12 JUIN",
    year: "2026",
    time: "20:00",
    city: "Lausanne",
    venue: "Lavaux Classic",
  },
  {
    date: "20 JUIN",
    year: "2026",
    time: "18:30",
    city: "Lausanne",
    venue: "Fête de la musique - EJMA",
  },
  {
    date: "04 JUIL",
    year: "2026",
    time: "21:00",
    city: "Montreux",
    venue: "Scène ouverte",
  },
  {
    date: "18 JUIL",
    year: "2026",
    time: "19:00",
    city: "Genève",
    venue: "Festival d'été",
  },
]
