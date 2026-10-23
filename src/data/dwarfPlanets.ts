export type DwarfPlanetData = {
  id: string;
  name: string;
  subtitle: string;
  type: string;
  diameterKm: number;
  distanceAU: number;
  orbitPeriod: string;
  orbitDays: number;
  dayLength: string;
  discoverer: string;
  year: number;
  composition: string[];
  moonsCount: number;
  moons?: string[];
  hasRings?: boolean;
  funFacts: string[];
  kidWow: string;
  color: string;
  accent: string;
  radiusScale: number;
  orbitRadius: number;
  orbitSpeed: number;
  orbitInclination: number;
  rotationSpeed: number;
};

// Added after Neptune, in Kuiper Belt
// Real distances: Ceres 2.8 AU (asteroid belt), Pluto 39.5, Haumea 43, Makemake 45.7, Eris 68, etc.
// For kid scale, compress to 60-82 range

export const DWARF_PLANETS: DwarfPlanetData[] = [
  {
    id: 'ceres',
    name: 'Ceres',
    subtitle: 'King of the Asteroid Belt',
    type: 'Dwarf Planet — Asteroid Belt',
    diameterKm: 939,
    distanceAU: 2.77,
    orbitPeriod: '4.6 Earth years',
    orbitDays: 1680,
    dayLength: '9.07 hours',
    discoverer: 'Giuseppe Piazzi',
    year: 1801,
    composition: ['Rocky core', 'Icy mantle', 'Salty water? Bright spots are salt deposits'],
    moonsCount: 0,
    funFacts: [
      'Ceres is the only dwarf planet in the asteroid belt — between Mars and Jupiter. It holds 25% of the asteroid belt mass!',
      'NASA Dawn orbited Ceres 2015-2018 and found bright salt deposits in Occator Crater — leftover from a salty ocean.',
      'Ceres has a mysterious mountain, Ahuna Mons, 4km tall — a cryovolcano that oozed icy mud, not lava.',
      'It’s round like a planet (hydrostatic equilibrium) but was once called an asteroid for 150 years!',
      'If you stood on Ceres, the Sun would look only 1/9 as bright as from Earth — still dazzling.',
    ],
    kidWow: 'Ceres would fit inside Texas with room to spare, but it’s the biggest thing in the asteroid belt!',
    color: '#A9A9A9',
    accent: '#8A8A8A',
    radiusScale: 0.18,
    orbitRadius: 23.8, // between mars 19.2 and jupiter 27.5
    orbitSpeed: 0.0022,
    orbitInclination: 0.18,
    rotationSpeed: 0.022,
  },
  {
    id: 'haumea',
    name: 'Haumea',
    subtitle: 'The Spinning Football',
    type: 'Dwarf Planet — Kuiper Belt',
    diameterKm: 1632, // long axis
    distanceAU: 43.3,
    orbitPeriod: '284 Earth years',
    orbitDays: 103774,
    dayLength: '3.9 hours — fastest spinner!',
    discoverer: 'Disputed: Sierra Nevada / Caltech',
    year: 2004,
    composition: ['Rocky core', 'Thick water-ice crust', 'Ultra-fast spin stretches it'],
    moonsCount: 2,
    moons: ['Hiʻiaka (310km)', 'Namaka (170km)'],
    hasRings: true,
    funFacts: [
      'Haumea spins every 3.9 hours — so fast it’s stretched into an American football shape! One day = 3.9 hours.',
      'It has a razor-thin ring discovered 2017 — first ring around a dwarf planet/Trans-Neptunian object!',
      'Haumea has 2 moons: Hiʻiaka and Namaka (named after Hawaiian goddess’s daughters).',
      'Its surface is mostly crystalline water ice — fresh, bright, never seen before on Kuiper Belt objects.',
      'A day on Haumea is shorter than watching two movies — and it’s been spinning that fast for billions of years.',
    ],
    kidWow: 'Haumea is shaped like a deflated football because it spins so insanely fast!',
    color: '#E8E8E8',
    accent: '#C8D8E8',
    radiusScale: 0.22,
    orbitRadius: 73,
    orbitSpeed: 0.00016,
    orbitInclination: 0.48,
    rotationSpeed: 0.045,
  },
  {
    id: 'makemake',
    name: 'Makemake',
    subtitle: 'Easter Dwarf',
    type: 'Dwarf Planet — Kuiper Belt',
    diameterKm: 1434,
    distanceAU: 45.7,
    orbitPeriod: '306 Earth years',
    orbitDays: 111845,
    dayLength: '~22.5 hours',
    discoverer: 'Michael Brown team',
    year: 2005,
    composition: ['Methane, ethane, nitrogen ices', 'Reddish tholins'],
    moonsCount: 1,
    moons: ['MK2 (~175km)'],
    funFacts: [
      'Makemake was discovered just after Easter 2005 — its codename was Easterbunny! Official name is from Rapanui god.',
      'It’s bright salmon-pink because methane ice has been cooked by Sun into red tholins.',
      'Makemake has one tiny moon MK2, only 175km wide — found by Hubble in 2016.',
      'It’s the second-brightest Kuiper Belt object after Pluto (magnitude 16.7) — still needs big telescope.',
      'New Horizons couldn’t visit: it’s too far, but JWST will map its methane.',
    ],
    kidWow: 'Makemake is named after the creator of humanity in Rapa Nui mythology — perfect for an Easter discovery!',
    color: '#C97B7B',
    accent: '#A85A5A',
    radiusScale: 0.19,
    orbitRadius: 76,
    orbitSpeed: 0.00014,
    orbitInclination: 0.52,
    rotationSpeed: 0.012,
  },
  {
    id: 'eris',
    name: 'Eris',
    subtitle: 'The Planet Killer — bigger than Pluto!',
    type: 'Dwarf Planet — Scattered Disc',
    diameterKm: 2326,
    distanceAU: 67.9,
    orbitPeriod: '560 Earth years',
    orbitDays: 204600,
    dayLength: '25.9 hours',
    discoverer: 'Michael Brown, Trujillo, Rabinowitz',
    year: 2005,
    composition: ['Rock + ice', 'Methane frost — brightest dwarf (albedo 0.96)'],
    moonsCount: 1,
    moons: ['Dysnomia'],
    funFacts: [
      'Eris is 27% larger in mass than Pluto — its discovery in 2005 forced astronomers to demote Pluto! Hence “planet killer.”',
      'It’s the most distant known dwarf planet studied: 67 AU average, currently 95 AU away — 3× Pluto distance!',
      'Eris shines super-bright because its surface is fresh methane frost reflecting 96% of light.',
      'One moon Dysnomia — its orbit let us weigh Eris: 1.66×10²² kg (0.28% Earth mass).',
      'Eris takes 560 years to orbit Sun — last time it was where it is now, Galileo hadn’t invented telescope!',
    ],
    kidWow: 'Eris is so far that sunlight takes 13 hours to reach it — 3× longer than to Pluto!',
    color: '#F0F0F0',
    accent: '#D0D0D0',
    radiusScale: 0.29,
    orbitRadius: 82,
    orbitSpeed: 0.00011,
    orbitInclination: 0.78,
    rotationSpeed: 0.011,
  },
];

export const ASTEROIDS = [
  {
    id: 'vesta',
    name: 'Vesta',
    subtitle: 'Brightest Asteroid — Dawn’s World',
    diameterKm: 525,
    distanceAU: 2.36,
    color: '#C2B280',
    orbitRadius: 22.9,
    orbitSpeed: 0.0026,
    type: 'Asteroid — Vesta family',
    funFacts: ['Second-largest asteroid (525km), brightest from Earth — sometimes visible naked-eye!', 'NASA Dawn orbited Vesta 2011-12: found giant south-pole crater Rheasilvia 500km wide.'],
  },
  {
    id: 'pallas',
    name: 'Pallas',
    subtitle: 'The Tilted One',
    diameterKm: 512,
    distanceAU: 2.77,
    color: '#9AA0A8',
    orbitRadius: 23.4,
    orbitSpeed: 0.0024,
    type: 'Asteroid',
    funFacts: ['Huge tilt 34° — most inclined big asteroid, discovered 1802.', 'Likely protoplanet, shape lumpy not round — failed to become planet.'],
  },
  {
    id: 'hygiea',
    name: 'Hygiea',
    subtitle: 'Almost a Dwarf',
    diameterKm: 434,
    distanceAU: 3.14,
    color: '#8B9A8B',
    orbitRadius: 24.6,
    orbitSpeed: 0.0019,
    type: 'Asteroid — Hygiea family',
    funFacts: ['4th largest asteroid, almost round — could be smallest dwarf planet! VLT proved 2019.', 'Heads huge family of fragments from ancient collision.'],
  },
  {
    id: 'psyche',
    name: 'Psyche',
    subtitle: 'Metal World — $10 Quadrillion?',
    diameterKm: 226,
    distanceAU: 2.92,
    color: '#A8A29C',
    orbitRadius: 24.1,
    orbitSpeed: 0.0020,
    type: 'M-type Asteroid',
    funFacts: ['Made of 90% metal — iron/nickel core of a protoplanet stripped of rock. NASA Psyche mission launched 2023!', 'If mined, iron worth $10 quadrillion (more than world economy) — but we won’t.'],
  },
  {
    id: 'bennu',
    name: 'Bennu',
    subtitle: 'Earth’s Frequent Visitor',
    diameterKm: 0.49,
    distanceAU: 1.13,
    color: '#6B5E4F',
    orbitRadius: 20.5,
    orbitSpeed: 0.0032,
    type: 'Near-Earth Asteroid — B-type',
    funFacts: ['500m rubble pile, may hit Earth 2182 (tiny chance). OSIRIS-REx brought back sample 2023!', 'Spins every 4.3 hours, ejecting rocks into space — active asteroid!'],
  },
  {
    id: 'eros',
    name: 'Eros',
    subtitle: 'First Asteroid Landed On',
    diameterKm: 16.8,
    distanceAU: 1.46,
    color: '#8B7355',
    orbitRadius: 21.2,
    orbitSpeed: 0.0030,
    type: 'Near-Earth Asteroid — S-type',
    funFacts: ['NEAR Shoemaker landed on Eros 2001 — first asteroid landing! 34×11×11km peanut shape.', 'We have meteorites on Earth that are pieces of Eros!'],
  },
];
