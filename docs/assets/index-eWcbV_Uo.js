(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const un=[{id:"sun",name:"The Sun",subtitle:"Our Solar System’s Star",type:"Yellow Dwarf Star",classification:"Star",diameterKm:1392700,massKg:"1.989 × 10³⁰ kg",gravity:274,distanceAU:0,distanceKm:"0 km — it IS the center",orbitPeriod:"—",orbitDays:0,dayLength:"~25 days at equator",dayHours:600,avgTemp:"5,500°C surface / 15,000,000°C core",tempRange:"Core: 15M°C, Surface: 5,500°C",composition:["Hydrogen 73%","Helium 25%","Oxygen, Carbon, Iron 2%"],atmosphere:["Photosphere","Chromosphere","Corona"],moonsCount:0,moons:[],discovered:"Known since ancient times",discoveredBy:"Visible to all humanity",funFacts:["The Sun is 99.86% of all mass in the Solar System. If it were hollow, 1.3 million Earths could fit inside.","Light from the Sun takes 8 minutes 20 seconds to reach Earth. When you see sunrise, that light left the Sun 8 minutes ago!","The Sun is middle-aged at 4.6 billion years old. It has enough fuel for another 5 billion years.","Solar wind from the Sun creates auroras — the Northern and Southern Lights — when it hits Earth’s magnetic field.","Every second, the Sun fuses 600 million tons of hydrogen into helium, releasing unimaginable energy.","From Earth, the Sun and Moon look almost exactly the same size in the sky — which is why perfect solar eclipses are possible.","Sunspots are cooler, darker patches that can be larger than Earth and follow an 11-year cycle."],kidWow:"If the Sun were a giant beach ball, Earth would be a tiny peppercorn 26 meters away!",compareEarth:"1× — everything is compared to the Sun! It’s 109× wider than Earth.",color:"#FDB813",accent:"#FF6B00",hasRings:!1,tilt:"7.25°",radiusScale:3.2,orbitRadius:0,orbitSpeed:0,orbitInclination:0,rotationSpeed:6e-4},{id:"mercury",name:"Mercury",subtitle:"The Swift Messenger",type:"Terrestrial Planet",classification:"Terrestrial",diameterKm:4879,massKg:"3.301 × 10²³ kg",gravity:3.7,distanceAU:.39,distanceKm:"57.9 million km",orbitPeriod:"88 Earth days",orbitDays:88,dayLength:"59 Earth days (1,408 hours)",dayHours:1408,avgTemp:"167°C (but swings wildly)",tempRange:"-173°C at night → 427°C by day",composition:["Iron core 75% radius","Silicate mantle & crust","Thin exosphere"],atmosphere:["Helium","Sodium","Oxygen traces — almost no atmosphere"],moonsCount:0,moons:[],discovered:"Known to ancients",discoveredBy:"First telescopes: Galileo & Thomas Harriot",funFacts:["Mercury has the most extreme temperature swings: boiling hot by day, freezing by night — because it has almost no atmosphere to hold heat.","A year on Mercury (88 days) is shorter than a single day-night cycle (176 days)! You’d see two sunrises per year.","Mercury is shrinking — it has wrinkle-like cliffs called “lobate scarps” because its giant iron core cools and contracts.","Despite being closest to the Sun, Venus is hotter — Mercury has no blanket atmosphere.","MESSENGER probe discovered water ice hiding in permanently shadowed craters at Mercury’s poles!","Mercury has a surprisingly strong magnetic field for such a small world, made by its molten core.","You could jump 3× higher on Mercury than on Earth — gravity is only 38% of Earth’s."],kidWow:"On Mercury, the Sun sometimes appears to go backwards in the sky!",compareEarth:"0.38× Earth size, 0.055× Earth mass — you’d weigh 38% of your Earth weight.",color:"#A8A39D",accent:"#8B8680",hasRings:!1,tilt:"0.03°",radiusScale:.38,orbitRadius:7,orbitSpeed:.008,orbitInclination:.05,rotationSpeed:.015},{id:"venus",name:"Venus",subtitle:"Earth’s Evil Twin",type:"Terrestrial Planet",classification:"Terrestrial",diameterKm:12104,massKg:"4.867 × 10²⁴ kg",gravity:8.87,distanceAU:.72,distanceKm:"108.2 million km",orbitPeriod:"225 Earth days",orbitDays:225,dayLength:"243 Earth days — longer than its year!",dayHours:5832,avgTemp:"462°C — hottest planet!",tempRange:"462°C everywhere (thick CO₂ blanket)",composition:["Rocky mantle","Iron core","Volcanic plains cover 85%"],atmosphere:["Carbon dioxide 96.5%","Nitrogen 3.5%","Sulfuric acid clouds"],moonsCount:0,moons:[],discovered:"Known since prehistory",discoveredBy:"Brightest planet after Sun & Moon",funFacts:["Venus is the hottest planet at 462°C — hot enough to melt lead — because its super-thick CO₂ atmosphere traps heat like a runaway greenhouse.","Venus rotates backwards! The Sun rises in the west and sets in the east — and a day lasts longer than a year.","Atmospheric pressure on Venus is 92× Earth’s — like being 900 meters under the ocean. Probes get crushed in hours.","Venus has no moons and no rings, but it has thousands of volcanoes. It may still be volcanically active today.","Its clouds are made of sulfuric acid. It rains acid that evaporates before hitting the ground — “virga”.","Venus is Earth’s closest size twin: 95% of Earth’s diameter, 82% of its mass.","The first successful landing on another planet was Venera 7 on Venus in 1970 — it survived 23 minutes before melting."],kidWow:"Venus sparkles so bright you can see it in daylight — ancient people called it the Morning and Evening Star!",compareEarth:"0.95× Earth diameter — almost identical in size, but utterly unlivable.",color:"#E6C79A",accent:"#D4A76A",hasRings:!1,tilt:"177.4°",radiusScale:.95,orbitRadius:10.2,orbitSpeed:.005,orbitInclination:.04,rotationSpeed:-.002},{id:"earth",name:"Earth",subtitle:"The Blue Marble — Our Home",type:"Terrestrial Planet",classification:"Terrestrial",diameterKm:12742,massKg:"5.972 × 10²⁴ kg",gravity:9.81,distanceAU:1,distanceKm:"149.6 million km (1 AU)",orbitPeriod:"365.25 days",orbitDays:365,dayLength:"24 hours",dayHours:24,avgTemp:"15°C",tempRange:"-89°C (Antarctica) → 58°C (Death Valley)",composition:["Iron-nickel core","Silicate mantle","Crust: continents & ocean floor","71% water covered"],atmosphere:["Nitrogen 78%","Oxygen 21%","Argon, CO₂ & trace gases"],moonsCount:1,moons:[{name:"The Moon — Luna",diameterKm:3474,distanceKm:384400,discovered:"Known forever",fact:"The Moon is drifting away from Earth by 3.8 cm per year — about as fast as your fingernails grow!"}],discovered:"—",discoveredBy:"We live here! First photographed as whole Earth in 1972 (Blue Marble).",funFacts:["Earth is the only planet not named after a god. “Earth” comes from Old English “eorþe” meaning ground.","71% of Earth’s surface is water, but 97% of that is salty ocean. Only 3% is fresh, and 68% of that is locked in ice.","Earth’s magnetic field protects us from solar wind — without it, our atmosphere would have been stripped away like Mars.","The Moon stabilizes Earth’s tilt (23.5°), giving us stable seasons. Without it, climate would swing wildly.","Earth is 4.54 billion years old. The oldest rocks are 4.03 billion years old, found in Canada.","One day is getting longer by 1.7 milliseconds per century because the Moon is stealing Earth’s spin.","From space, Earth glows at night with city lights — and auroras dance at the poles. Astronauts call it “the most beautiful thing”.","Earth has had 5 mass extinctions. The last one killed the dinosaurs 66 million years ago, making room for mammals — and us!"],kidWow:"If you drilled a tunnel straight through Earth and jumped in, you’d pop out the other side in 42 minutes!",compareEarth:"1× — this is Earth! Reference for all others.",color:"#4B9CD3",accent:"#2E86C1",hasRings:!1,tilt:"23.5°",radiusScale:1,orbitRadius:14,orbitSpeed:.004,orbitInclination:0,rotationSpeed:.02},{id:"mars",name:"Mars",subtitle:"The Red Planet",type:"Terrestrial Planet",classification:"Terrestrial",diameterKm:6779,massKg:"6.417 × 10²³ kg",gravity:3.71,distanceAU:1.52,distanceKm:"228 million km",orbitPeriod:"687 Earth days (1.9 years)",orbitDays:687,dayLength:"24h 37m — almost like Earth!",dayHours:24.6,avgTemp:"-65°C",tempRange:"-143°C (poles) → 35°C (summer equator)",composition:["Iron-rich basalt rock","Iron oxide dust = red color","Polar ice caps: frozen CO₂ & water"],atmosphere:["Carbon dioxide 95%","Nitrogen 2.7%","Argon 1.6% — very thin, 0.6% of Earth’s pressure"],moonsCount:2,moons:[{name:"Phobos",diameterKm:22,distanceKm:9376,discovered:"1877 — Asaph Hall",fact:"Phobos rises in the west and sets in the east, circling Mars 3× per day. It’s doomed to crash in 50M years!"},{name:"Deimos",diameterKm:12,distanceKm:23460,discovered:"1877 — Asaph Hall",fact:"Deimos is tiny and smooth, looks more like a star from Mars than a moon."}],discovered:"Known to ancients",discoveredBy:"Telescopes since 1610; mapped by Mariner 4 (1965)",funFacts:["Mars looks red because its soil is rusty — literally iron oxide, the same thing that makes old bikes turn reddish-brown.","Olympus Mons on Mars is the tallest volcano in the Solar System: 22 km high, 3× Everest, as wide as France!","Valles Marineris is a canyon 4,000 km long and 7 km deep. Grand Canyon could fit inside it 10× over.","Mars had rivers, lakes, and maybe an ocean 3.5 billion years ago. Rovers found riverbeds and organic molecules.","Dust storms on Mars can engulf the entire planet for months. Wind speeds hit 96 km/h but feel gentle due to thin air.","Weight on Mars is 38% of Earth — a 60 kg kid would weigh ~23 kg and could jump 3× higher.","NASA has 3 rovers driving on Mars right now. Perseverance carries a tiny helicopter, Ingenuity, the first aircraft on another planet!","Elon Musk’s SpaceX and NASA both plan to send humans to Mars in the 2030s-2040s. You might be that generation!"],kidWow:"Sunsets on Mars are blue! Dust scatters red light, so the Sun looks like a tiny blue-white dot.",compareEarth:"0.53× diameter, 0.11× mass. Gravity = you could dunk a basketball on a 3-meter hoop easily.",color:"#C1440E",accent:"#FF6B35",hasRings:!1,tilt:"25.19°",radiusScale:.53,orbitRadius:19.2,orbitSpeed:.0028,orbitInclination:.03,rotationSpeed:.018},{id:"jupiter",name:"Jupiter",subtitle:"The Giant King",type:"Gas Giant",classification:"Gas Giant",diameterKm:139820,massKg:"1.898 × 10²⁷ kg",gravity:24.79,distanceAU:5.2,distanceKm:"778.5 million km",orbitPeriod:"11.86 Earth years",orbitDays:4333,dayLength:"9h 55m — fastest spinner!",dayHours:9.9,avgTemp:"-145°C (cloud tops)",tempRange:"Core ~24,000°C → Cloud tops -145°C",composition:["Hydrogen 90%","Helium 10%","No solid surface — ocean of liquid metallic hydrogen inside"],atmosphere:["Hydrogen & helium","Ammonia clouds (white)","Ammonium hydrosulfide (brown)"],moonsCount:95,moons:[{name:"Io",diameterKm:3642,distanceKm:421700,discovered:"1610 — Galileo",fact:"Most volcanic world in Solar System — 400+ active volcanoes, lava fountains, sulfur snow!"},{name:"Europa",diameterKm:3121,distanceKm:671100,discovered:"1610 — Galileo",fact:"Icy shell hides a saltwater ocean with 2× Earth’s water. Best place to find alien life? NASA’s Europa Clipper is heading there!"},{name:"Ganymede",diameterKm:5268,distanceKm:1070400,discovered:"1610 — Galileo",fact:"Largest moon in Solar System — bigger than Mercury! Has its own magnetic field and hidden ocean."},{name:"Callisto",diameterKm:4820,distanceKm:1882700,discovered:"1610 — Galileo",fact:"Ancient, crater-covered ice ball — the most heavily cratered place we’ve seen. Could be safe for human base (low radiation)."}],discovered:"Known since antiquity",discoveredBy:"Galileo discovered 4 big moons in 1610",funFacts:["Jupiter is 2.5× the mass of all other planets combined. It’s a failed star — if it were 13× bigger, it could fuse deuterium.","The Great Red Spot is a storm 1.3× Earth’s size raging for at least 350 years. It’s shrinking and may vanish in decades.","Jupiter has faint rings made of dust from its moons, discovered by Voyager 1 in 1979. You can’t see them from Earth easily.","Its magnetic field is 20,000× Earth’s — creates permanent auroras at its poles larger than Earth.","Jupiter protects Earth by flinging asteroids and comets away (or sometimes toward us) with its huge gravity.","A day on Jupiter is under 10 hours, so it bulges at the equator — it’s not a perfect sphere!","JunO probe discovered Jupiter’s core is fuzzy, not solid — hydrogen and rock mixed together.","You could fit 1,321 Earths inside Jupiter. But it would float in water (if you had a bathtub big enough) — density 1.33 g/cm³."],kidWow:"If Jupiter were hollow, you could pour 1,321 Earths inside — and still have room!",compareEarth:"11.2× wider than Earth, 318× mass. You’d weigh 2.5× more — a 40 kg kid would weigh 100 kg!",color:"#D8CA9D",accent:"#C19A6B",hasRings:!0,tilt:"3.13°",radiusScale:2.2,orbitRadius:27.5,orbitSpeed:.0012,orbitInclination:.02,rotationSpeed:.04},{id:"saturn",name:"Saturn",subtitle:"The Jewel of the Solar System",type:"Gas Giant",classification:"Gas Giant",diameterKm:116460,massKg:"5.683 × 10²⁶ kg",gravity:10.44,distanceAU:9.5,distanceKm:"1.43 billion km",orbitPeriod:"29.46 Earth years",orbitDays:10759,dayLength:"10h 33m",dayHours:10.5,avgTemp:"-178°C",tempRange:"Core ~11,700°C → Cloud tops -178°C",composition:["Hydrogen 96%","Helium 3%","Rocky core ~15 Earth masses"],atmosphere:["Hydrogen","Helium","Ammonia ice crystals make pale yellow"],moonsCount:146,moons:[{name:"Titan",diameterKm:5150,distanceKm:1221830,discovered:"1655 — Christiaan Huygens",fact:"Only moon with thick atmosphere (1.5× Earth pressure)! Has lakes of liquid methane & ethane. Dragonfly drone will fly there 2034."},{name:"Enceladus",diameterKm:504,distanceKm:238040,discovered:"1789 — William Herschel",fact:"Shoots geysers of water 500 km high from its south pole ocean. Sampled by Cassini — contains organic molecules!"},{name:"Mimas",diameterKm:396,distanceKm:185520,discovered:"1789 — Herschel",fact:"Looks exactly like the Death Star from Star Wars — huge Herschel crater makes it uncanny."},{name:"Iapetus",diameterKm:1470,distanceKm:3560800,discovered:"1671 — Giovanni Cassini",fact:"Half bright white, half dark black — like a yin-yang. Has a 13 km tall ridge around its equator."}],discovered:"Known to ancients",discoveredBy:"Galileo first saw rings in 1610 (thought they were ears); Huygens proved rings 1655",funFacts:["Saturn’s rings are mostly water ice, from microns to meters. They’re incredibly thin: 10 meters thick but 280,000 km wide!","Rings are made of countless chunks — 99.9% pure water ice — leftover from a shattered moon or comet. They may be only 100M years old.","Saturn would float in water! Density 0.687 g/cm³ — less than water. No solid surface to stand on.","Its hexagon storm at the north pole is 25,000 km wide, raging for decades, with 6 straight sides — still unexplained!","Cassini probe ended by diving into Saturn in 2017, tasting its atmosphere to protect Titan & Enceladus from contamination.","Saturn has 146 moons officially — more than any planet. New ones still being found.","Wind speeds reach 1,800 km/h at the equator — fastest in Solar System.","If you could scoop Saturn’s atmosphere, you’d get mostly hydrogen — the same gas that makes stars shine."],kidWow:"Saturn’s rings are so wide you could line up 23 Earths across them — but they’re thinner than a pancake!",compareEarth:"9.5× wider, 95× mass, but light as cork — you’d weigh almost same as on Earth (1.07×).",color:"#F7DC6F",accent:"#D4AC0D",hasRings:!0,tilt:"26.73°",radiusScale:1.95,orbitRadius:36,orbitSpeed:8e-4,orbitInclination:.04,rotationSpeed:.038},{id:"uranus",name:"Uranus",subtitle:"The Tilted Ice Giant",type:"Ice Giant",classification:"Ice Giant",diameterKm:50724,massKg:"8.681 × 10²⁵ kg",gravity:8.69,distanceAU:19.2,distanceKm:"2.87 billion km",orbitPeriod:"84 Earth years",orbitDays:30687,dayLength:"17h 14m (retrograde)",dayHours:17.2,avgTemp:"-195°C — coldest planet!",tempRange:"-224°C (even colder than Neptune due to no internal heat)",composition:["Water-ammonia-methane ices","Hydrogen & helium envelope","Possible slushy ocean"],atmosphere:["Hydrogen 83%","Helium 15%","Methane 2% — gives blue-green color"],moonsCount:28,moons:[{name:"Miranda",diameterKm:472,distanceKm:129900,discovered:"1948 — Gerard Kuiper",fact:"Most deformed moon: 20 km cliffs, patchwork terrain — looks like Frankenstein’s moon, shattered & reassembled."},{name:"Ariel",diameterKm:1158,distanceKm:191e3,discovered:"1851 — William Lassell",fact:"Brightest Uranian moon, youngest surface — recent cryovolcanism resurfaced it."},{name:"Titania",diameterKm:1578,distanceKm:436300,discovered:"1787 — Herschel",fact:"Largest Uranian moon, has 8 km deep canyons and possible subsurface ocean."},{name:"Oberon",diameterKm:1523,distanceKm:583500,discovered:"1787 — Herschel",fact:"Outermost big moon, ancient cratered, has a mysterious 11 km tall mountain."}],discovered:"1781 — William Herschel (first planet discovered with telescope)",discoveredBy:"William Herschel — thought it was a comet at first!",funFacts:["Uranus is tipped over 98° — it rolls on its side like a ball! Likely knocked by an Earth-sized collision long ago.","Because it’s sideways, Uranus has extreme seasons: 42 years of daylight then 42 years of darkness at each pole!","Uranus is icy blue-green because methane in its atmosphere absorbs red light. It smells like… well, no smell (you’d freeze).","It has faint dark rings discovered in 1977 when it occulted a star — first rings found after Saturn’s.","Voyager 2 is the only probe to visit Uranus (1986). We still haven’t sent an orbiter — scientists beg to go!","Inside Uranus, superionic water ice may exist — solid but electrically conductive, like a hot ice ocean.","Uranus has no solid surface; you’d sink into slushy water-ammonia ocean thousands of km deep.","Its magnetic field is tilted 59° from spin axis and off-center — weirdest magnetosphere known."],kidWow:"Uranus rolls like a bowling ball around the Sun — knocked sideways by a giant crash long ago!",compareEarth:"4× wider, 14.5× mass. You’d weigh 89% of Earth weight — almost the same!",color:"#43B0F1",accent:"#2E86C1",hasRings:!0,tilt:"97.77°",radiusScale:1.35,orbitRadius:47,orbitSpeed:45e-5,orbitInclination:.015,rotationSpeed:-.025},{id:"neptune",name:"Neptune",subtitle:"The Windy Blue Giant",type:"Ice Giant",classification:"Ice Giant",diameterKm:49244,massKg:"1.024 × 10²⁶ kg",gravity:11.15,distanceAU:30.1,distanceKm:"4.5 billion km",orbitPeriod:"164.8 Earth years",orbitDays:60190,dayLength:"16h 6m",dayHours:16.1,avgTemp:"-214°C",tempRange:"-218°C → -200°C (still super cold)",composition:["Water, ammonia, methane ices","Hydrogen/helium atmosphere","Rocky core"],atmosphere:["Hydrogen 80%","Helium 19%","Methane 1.5% — deep blue"],moonsCount:16,moons:[{name:"Triton",diameterKm:2707,distanceKm:354800,discovered:"1846 — William Lassell (17 days after Neptune!)",fact:"Only big moon orbiting backwards! Captured Kuiper Belt object. Has geysers of nitrogen shooting 8 km high. Will crash or become rings in 3.6B years."},{name:"Proteus",diameterKm:420,distanceKm:117600,discovered:"1989 — Voyager 2",fact:"Largest irregular-shaped moon that hasn’t become round — right at the limit."}],discovered:"1846 — Predicted by math before seen!",discoveredBy:"Urbain Le Verrier & Johann Galle: told where to look, found it same night!",funFacts:["Neptune has the fastest winds in Solar System: up to 2,100 km/h — faster than sound! A storm the size of Earth can appear and vanish in months.","The Great Dark Spot is a giant storm system like Jupiter’s, but Neptune’s storms come and go in years, not centuries.","Neptune was discovered by math: astronomers noticed Uranus wobbling and calculated where an unseen planet must be pulling it.","It has faint rings and ring arcs — clumps that should spread out but don’t. Still a mystery!","Neptune radiates 2.6× more energy than it receives from the Sun — internal heat drives its wild weather.","Light takes 4 hours 6 minutes to reach Neptune from the Sun. From Neptune, the Sun looks like just a bright star.","Voyager 2 flew by in 1989 and saw Triton’s pink south pole cap of nitrogen ice and active geysers.","Neptune has 16 moons. Triton is so big it dominates — 99.5% of mass orbiting Neptune belongs to Triton."],kidWow:"Neptune’s winds are faster than a jet plane — 6× hurricane speed on Earth!",compareEarth:"3.9× wider, 17× mass. You’d weigh 14% more than Earth — not too different!",color:"#2E68F7",accent:"#1A3D9C",hasRings:!0,tilt:"28.32°",radiusScale:1.32,orbitRadius:58,orbitSpeed:28e-5,orbitInclination:.02,rotationSpeed:.03},{id:"pluto",name:"Pluto",subtitle:"The Beloved Dwarf Planet",type:"Dwarf Planet — Kuiper Belt",classification:"Dwarf Planet",diameterKm:2376,massKg:"1.303 × 10²² kg",gravity:.62,distanceAU:39.5,distanceKm:"5.9 billion km average",orbitPeriod:"248 Earth years",orbitDays:90560,dayLength:"153 hours (6.4 Earth days) — tidally locked with Charon",dayHours:153,avgTemp:"-229°C",tempRange:"-240°C → -218°C",composition:["Rock & water ice","Nitrogen, methane, CO ice plains","Heart-shaped glacier!"],atmosphere:["Nitrogen, methane, CO — thin, freezes when far from Sun"],moonsCount:5,moons:[{name:"Charon",diameterKm:1212,distanceKm:19570,discovered:"1978 — James Christy",fact:"Half Pluto’s size! So big they orbit each other like a double planet. Charon has a huge red polar cap called Mordor."},{name:"Hydra",diameterKm:51,distanceKm:64700,discovered:"2005 — Hubble",fact:"Shaped like a lopsided potato, mostly water ice."},{name:"Nix",diameterKm:50,distanceKm:48700,discovered:"2005 — Hubble",fact:"Chaotic tumbling rotation, bright icy surface."}],discovered:"1930 — Clyde Tombaugh (24-year-old!)",discoveredBy:"Clyde Tombaugh at Lowell Observatory, searching 7 years",funFacts:["Pluto was considered the 9th planet for 76 years (1930-2006) until reclassified as dwarf planet — many still call it planet #9 with love.","Pluto has a giant heart! Tombaugh Regio is a 1,600 km wide nitrogen ice glacier shaped like a heart, seen by New Horizons 2015.","Pluto’s moon Charon is so big that Pluto and Charon orbit each other — they’re tidally locked, always facing same side like dancers.","A day on Pluto is 6.4 Earth days. It takes 248 years to orbit the Sun — discovered 1930, it hasn’t completed one orbit yet (until 2178)!","Pluto’s atmosphere snows! Methane snow falls, and its thin air freezes and collapses when Pluto goes far from Sun.","New Horizons flew by in 2015 after 9-year journey, revealing ice mountains 3 km tall made of water ice as hard as rock at -230°C.","Pluto has 5 moons. Charon was found in 1978 when astronomer James Christy noticed a bump on Pluto’s photo.","If Pluto were on Earth, you could walk around it in about a month — circumference 7,445 km (shorter than Australia’s coastline)."],kidWow:"Pluto’s heart glacier is bigger than Texas — and it beats? Nitrogen ice actually flows like a slow heart!",compareEarth:"0.18× Earth diameter (smaller than our Moon!). You’d weigh 6% of Earth — a 30 kg kid = 1.8 kg.",color:"#CDBAAA",accent:"#A78B71",hasRings:!1,tilt:"122.53°",radiusScale:.3,orbitRadius:68,orbitSpeed:18e-5,orbitInclination:.12,rotationSpeed:-.005}];un.map(i=>i.id);const Ps=[{id:"proxima",name:"Proxima Centauri",subtitle:"Our Nearest Stellar Neighbor",type:"Star",distanceLy:"4.24 light-years",distanceNote:"41 trillion km away — Voyager would take 70,000 years!",constellation:"Centaurus",facts:["Proxima Centauri is the closest star to the Sun at 4.24 ly. It’s a tiny red dwarf — only 14% the Sun’s mass.","It hosts at least 2 planets: Proxima b (rocky, in habitable zone) and Proxima d (tiny, closer in). Is there life? Unknown!","Proxima flares violently — its stellar storms would batter any nearby planet with radiation 100× Earth’s worst solar flare.","To the naked eye, Proxima is invisible (magnitude 11). Alpha Centauri next to it shines bright — a double star you can see.","Light from Proxima you see tonight left 4.24 years ago — when you were 4 years younger!"],kidWow:"If the Sun were a basketball in New York, Proxima Centauri would be a golf ball in Chicago!",color:"#FF6B6B",theta:.8,phi:1.4,radius:42,size:.6},{id:"alpha-centauri",name:"Alpha Centauri",subtitle:"The Twin Suns Next Door",type:"Star",distanceLy:"4.37 light-years",distanceNote:"Triple star system — closest like our Sun",constellation:"Centaurus",facts:["Alpha Centauri is actually three stars: A (Sun-like yellow), B (orange dwarf), and Proxima (red dwarf) orbiting each other.","Alpha Centauri A is almost identical to our Sun — 10% bigger, 1.5× brighter. Alpha B is cooler and smaller.","The system appears as one bright star (3rd brightest in night sky) but binoculars split A and B.","No planets confirmed yet around A or B, but searches continue — maybe an Earth twin hides there.","Breakthrough Starshot wants to send laser-pushed chips there at 20% light speed, arriving in 20 years (if funded)."],kidWow:"From a planet around Alpha Centauri, our Sun would look like a normal bright star in Cassiopeia!",color:"#FFD93D",theta:1.1,phi:1.3,radius:44,size:.9},{id:"trappist",name:"TRAPPIST-1 System",subtitle:"Seven Earth-Sized Worlds",type:"Exoplanet",distanceLy:"39 light-years",distanceNote:"Ultra-cool red dwarf with 7 rocky planets",constellation:"Aquarius",facts:["TRAPPIST-1 is a tiny red dwarf (jupiter-sized but star) hosting SEVEN Earth-sized rocky planets — 3 in the habitable zone where water could be liquid!","All 7 planets orbit closer than Mercury does to our Sun, packed tight — year lasts 1.5 to 20 Earth days.","Planets likely tidally locked: one side eternal day, other eternal night — twilight ring might be habitable.","JWST is studying their atmospheres now. TRAPPIST-1e is the best bet for Earth-like conditions.","If you stood on TRAPPIST-1e, neighboring planets would look 2× bigger than our Moon in the sky — incredible view!"],kidWow:"Seven worlds the size of Earth crammed closer than Mercury — you could hop planets in weeks at light speed!",color:"#FF6B35",theta:2.4,phi:1.1,radius:60,size:.7},{id:"kepler452b",name:"Kepler-452b",subtitle:"Earth’s Older Cousin",type:"Exoplanet",distanceLy:"1,400 light-years",distanceNote:"Most Earth-like: orbits Sun-like star",constellation:"Cygnus",facts:["Kepler-452b is 1.6× Earth’s size, orbits a Sun-like star every 385 days — almost an Earth year! Star is 1.5 billion years older than Sun.","It’s in the habitable zone — could have water. Surface is likely rocky, but gravity 2× Earth would feel heavy.","Its star Kepler-452 is 60% more luminous than Sun — if planet exists, its oceans might be evaporating as star brightens.","Discovery 2015 made headlines as “Earth 2.0” — but we still don’t know its mass/composition for sure.","At 1,400 ly, its light we see left around year 624 AD — early Middle Ages on Earth!"],kidWow:"Kepler-452b circles a star like ours — maybe someone there looks back at our Sun and wonders about us!",color:"#4B9CD3",theta:3,phi:.7,radius:78,size:.65},{id:"betelgeuse",name:"Betelgeuse",subtitle:"The Dying Red Supergiant",type:"Star",distanceLy:"642 light-years",distanceNote:"1,000× Sun’s size — will explode supernova",constellation:"Orion",facts:["Betelgeuse is so huge, if it replaced the Sun, its surface would swallow Jupiter! And it’s only 10 million years old (baby star that lived fast).","It dims and brightens over 400 days — in 2019-2020 it famously “Great Dimming” when it blew a dust cloud — some thought it might explode.","When it does supernova (within next 100,000 years), it will shine as bright as half-Moon for weeks — visible in daytime!","Its surface pulsates: hot spots and cool spots bubble like boiling water — we’ve imaged them with telescopes.","Marks Orion’s shoulder — easy to find: the bright red star top-left of Orion constellation."],kidWow:"Betelgeuse could explode any time (astronomically) — and outshine the Moon! Don’t worry, it’s too far to hurt Earth.",color:"#FF4500",theta:4.1,phi:1,radius:66,size:1.4},{id:"orion-nebula",name:"Orion Nebula (M42)",subtitle:"Stellar Nursery — Stars Being Born",type:"Nebula",distanceLy:"1,344 light-years",distanceNote:"1,500× mass of Sun in gas & dust",constellation:"Orion",facts:["Orion Nebula is a giant cloud where stars are born — 1,344 ly away, visible as fuzzy middle “star” of Orion’s sword with naked eye.","Inside, 700+ young stars, plus proplyds — disks forming planets right now. Hubble & JWST watch planets being built.","The Trapezium cluster: 4 bright baby stars (only 300,000 years old) illuminate the gas, making it glow pink and blue.","Spans 24 light-years across — if you drove at jet speed, crossing would take 24 trillion years!","In 4 billion years, Sun will also become a nebula (planetary nebula) for 10,000 years before fading to white dwarf."],kidWow:"You’re watching stars being born — the Orion Nebula glows because newborn suns light up the cloud they were born in!",color:"#DA70D6",theta:4,phi:.9,radius:70,size:1.2},{id:"andromeda",name:"Andromeda Galaxy (M31)",subtitle:"Our Galactic Neighbor — On Collision Course!",type:"Galaxy",distanceLy:"2.5 million light-years",distanceNote:"1 trillion stars — Milky Way’s twin",constellation:"Andromeda",facts:["Andromeda is the nearest big galaxy at 2.5M ly — visible as faint smudge with naked eye on dark night. Contains 1 trillion stars!","It’s 220,000 ly wide, bigger than Milky Way. Has its own satellite galaxies: M32 and M110 orbit it.","Milky Way and Andromeda are falling toward each other at 110 km/s — will collide in 4.5 billion years, forming “Milkomeda”.","Andromeda hosts a supermassive black hole 100M× Sun mass at its core — devouring stars.","Light we see left 2.5M years ago — australopithecus ancestors walked Earth then. You’re looking back in time."],kidWow:"Andromeda is on a crash course with us! In 4.5 billion years, galaxies will collide — but stars are so spread out, no star collisions happen.",color:"#87CEEB",theta:1.8,phi:.6,radius:95,size:2},{id:"sag-a",name:"Sagittarius A*",subtitle:"Milky Way’s Supermassive Black Hole",type:"Black Hole",distanceLy:"26,673 light-years",distanceNote:"4.1 million solar masses — heart of our galaxy",constellation:"Sagittarius",facts:["Sgr A* is the 4.1 million solar-mass black hole at Milky Way’s center, 26,673 ly away. Event Horizon Telescope imaged it in 2022.","It’s surprisingly quiet: eats very little matter now. Stars orbit it at 8,000 km/s — one (S2) completes orbit in 16 years!","Event horizon is 12 million km radius — light cannot escape. Time stops at the edge (to outside observer).","Stars near it whip around so fast, Einstein’s relativity visibly shifts their orbits — tested with S2.","Don’t worry: it’s 26,000 ly away and won’t pull us in. Sun orbits it once every 230 million years — 1 galactic year!"],kidWow:"Our galaxy spins around a monster black hole 4 million times heavier than the Sun — and you’re orbiting it right now!",color:"#1a1a2e",theta:.2,phi:1.55,radius:88,size:1},{id:"voyager1",name:"Voyager 1",subtitle:"Farthest Human-Made Object",type:"Probe",distanceLy:"0.0025 light-years (162 AU)",distanceNote:"24.9 billion km — in interstellar space since 2012",constellation:"Ophiuchus",facts:["Voyager 1 launched 1977, now 24.9B km away — 0.0025 ly! It crossed heliopause in 2012, first to leave Solar System bubble.","Travels at 17 km/s — 61,000 km/h. Carries Golden Record: greetings in 55 languages, music (Bach, Chuck Berry), whale sounds — message for aliens.","Power from plutonium RTG — will die ~2030 when too dim. Then drifts forever: will pass near star Gliese 445 in 40,000 years.","Still phones home daily with 23W transmitter (like fridge light) — signal takes 23 hours at light speed!","Twin Voyager 2 is 20.5B km away, heading toward Sirius. Pioneer 10 & 11 also outbound."],kidWow:"Voyager 1 is farther than anything humans ever built — its signal takes a whole day to reach Earth at light speed!",color:"#FFD700",theta:5.2,phi:1.9,radius:36,size:.4},{id:"pleiades",name:"Pleiades — Seven Sisters (M45)",subtitle:"Jewel Box Cluster",type:"Cluster",distanceLy:"444 light-years",distanceNote:"1,000 stars in open cluster",constellation:"Taurus",facts:["Pleiades is the famous Seven Sisters — 444 ly away, visible as tiny dipper. Actually 1,000+ stars, 100M years old (young!).","Stars are blue-hot, surrounded by reflection nebula — dust that shines by reflected starlight (not glowing itself).","Japanese call it Subaru — logo is 6 stars of Pleiades. Many cultures mythologized: Greek sisters fleeing Orion.","Will disperse in 250M years as stars drift apart — enjoy while it lasts!","Binoculars reveal dozens of stars; telescope hundreds. Best winter target for kids."],kidWow:"Can you count 7 sisters? Most see 6 — ancient Greeks saw 7 before one faded (or myth explains)!",color:"#B0E0E6",theta:3.4,phi:.8,radius:58,size:1},{id:"crab",name:"Crab Nebula (M1)",subtitle:"Supernova Remnant — Pulsar Inside",type:"Nebula",distanceLy:"6,523 light-years",distanceNote:"Remains of star seen exploding in 1054 AD",constellation:"Taurus",facts:["Crab Nebula is the remains of a supernova Chinese astronomers saw explode in 1054 AD — bright as Venus for weeks! Now 6,523 ly away.","At its heart spins a pulsar: neutron star 20 km wide, spinning 30× per second, beaming like lighthouse — detected 1968.","Nebula expands at 1,500 km/s — Hubble movies show filaments moving. Filaments are where pulsar wind slams ejected gas.","Pulsar packs 1.4 solar masses into 20 km sphere: teaspoon weighs 1 billion tons! Strongest magnetic field known.","Study Crab to understand supernovae — how heavy elements (iron, gold) spread to form planets and life. We’re made of star dust!"],kidWow:"In 1054, people saw a new star as bright as the Moon for a month — now we see the still-expanding smoke from that explosion!",color:"#FF6347",theta:3.5,phi:.9,radius:68,size:.8}];/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kr="160",Wl=0,pa=1,Xl=2,nl=1,il=2,on=3,Tn=0,gt=1,Ot=2,xn=0,vi=1,ln=2,ma=3,ga=4,ql=5,On=100,Yl=101,Kl=102,_a=103,va=104,$l=200,jl=201,Zl=202,Jl=203,Dr=204,Ir=205,Ql=206,ec=207,tc=208,nc=209,ic=210,sc=211,rc=212,ac=213,oc=214,lc=0,cc=1,hc=2,Ls=3,uc=4,dc=5,fc=6,pc=7,sl=0,mc=1,gc=2,Sn=0,_c=1,vc=2,Mc=3,rl=4,yc=5,xc=6,al=300,xi=301,Si=302,Ur=303,Nr=304,ks=306,Xi=1e3,Kt=1001,Fr=1002,Pt=1003,Ma=1004,js=1005,Ht=1006,Sc=1007,qi=1008,bn=1009,bc=1010,Ec=1011,$r=1012,ol=1013,Mn=1014,yn=1015,Yi=1016,ll=1017,cl=1018,zn=1020,Tc=1021,$t=1023,wc=1024,Ac=1025,kn=1026,bi=1027,Rc=1028,hl=1029,Cc=1030,ul=1031,dl=1033,Zs=33776,Js=33777,Qs=33778,er=33779,ya=35840,xa=35841,Sa=35842,ba=35843,fl=36196,Ea=37492,Ta=37496,wa=37808,Aa=37809,Ra=37810,Ca=37811,Pa=37812,La=37813,Da=37814,Ia=37815,Ua=37816,Na=37817,Fa=37818,Oa=37819,Ba=37820,za=37821,tr=36492,ka=36494,Ga=36495,Pc=36283,Ha=36284,Va=36285,Wa=36286,pl=3e3,Gn=3001,Lc=3200,Dc=3201,ml=0,Ic=1,Wt="",ct="srgb",fn="srgb-linear",jr="display-p3",Gs="display-p3-linear",Ds="linear",Je="srgb",Is="rec709",Us="p3",Xn=7680,Xa=519,Uc=512,Nc=513,Fc=514,gl=515,Oc=516,Bc=517,zc=518,kc=519,Or=35044,qa="300 es",Br=1035,cn=2e3,Ns=2001;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ya=1234567;const Hi=Math.PI/180,Ki=180/Math.PI;function dn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function Zr(i,e){return(i%e+e)%e}function Gc(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Hc(i,e,t){return i!==e?(t-i)/(e-i):0}function Vi(i,e,t){return(1-t)*i+t*e}function Vc(i,e,t,n){return Vi(i,e,1-Math.exp(-t*n))}function Wc(i,e=1){return e-Math.abs(Zr(i,e*2)-e)}function Xc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function qc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Yc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Kc(i,e){return i+Math.random()*(e-i)}function $c(i){return i*(.5-Math.random())}function jc(i){i!==void 0&&(Ya=i);let e=Ya+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zc(i){return i*Hi}function Jc(i){return i*Ki}function zr(i){return(i&i-1)===0&&i!==0}function Qc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function eh(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),h=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),p=o((e-n)/2),m=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*f,l*p,a*h);break;case"YZY":i.set(l*p,a*u,l*f,a*h);break;case"ZXZ":i.set(l*f,l*p,a*u,a*h);break;case"XZX":i.set(a*u,l*_,l*m,a*h);break;case"YXY":i.set(l*m,a*u,l*_,a*h);break;case"ZYZ":i.set(l*_,l*m,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qn={DEG2RAD:Hi,RAD2DEG:Ki,generateUUID:dn,clamp:Et,euclideanModulo:Zr,mapLinear:Gc,inverseLerp:Hc,lerp:Vi,damp:Vc,pingpong:Wc,smoothstep:Xc,smootherstep:qc,randInt:Yc,randFloat:Kc,randFloatSpread:$c,seededRandom:jc,degToRad:Zc,radToDeg:Jc,isPowerOfTwo:zr,ceilPowerOfTwo:Qc,floorPowerOfTwo:Fs,setQuaternionFromProperEuler:eh,normalize:qe,denormalize:Qt};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,s,r,o,a,l,h){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,h)}set(e,t,n,s,r,o,a,l,h){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],u=n[4],f=n[7],p=n[2],m=n[5],_=n[8],g=s[0],d=s[3],c=s[6],x=s[1],v=s[4],b=s[7],R=s[2],w=s[5],A=s[8];return r[0]=o*g+a*x+l*R,r[3]=o*d+a*v+l*w,r[6]=o*c+a*b+l*A,r[1]=h*g+u*x+f*R,r[4]=h*d+u*v+f*w,r[7]=h*c+u*b+f*A,r[2]=p*g+m*x+_*R,r[5]=p*d+m*v+_*w,r[8]=p*c+m*b+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8];return t*o*u-t*a*h-n*r*u+n*a*l+s*r*h-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8],f=u*o-a*h,p=a*l-u*r,m=h*r-o*l,_=t*f+n*p+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(s*h-u*n)*g,e[2]=(a*n-s*o)*g,e[3]=p*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(n*l-h*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+e,-s*h,s*l,-s*(-h*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nr.makeScale(e,t)),this}rotate(e){return this.premultiply(nr.makeRotation(-e)),this}translate(e,t){return this.premultiply(nr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nr=new ke;function _l(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function th(){const i=Os("canvas");return i.style.display="block",i}const Ka={};function Wi(i){i in Ka||(Ka[i]=!0,console.warn(i))}const $a=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ja=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),es={[fn]:{transfer:Ds,primaries:Is,toReference:i=>i,fromReference:i=>i},[ct]:{transfer:Je,primaries:Is,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Gs]:{transfer:Ds,primaries:Us,toReference:i=>i.applyMatrix3(ja),fromReference:i=>i.applyMatrix3($a)},[jr]:{transfer:Je,primaries:Us,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ja),fromReference:i=>i.applyMatrix3($a).convertLinearToSRGB()}},nh=new Set([fn,Gs]),Ye={enabled:!0,_workingColorSpace:fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!nh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=es[e].toReference,s=es[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return es[i].primaries},getTransfer:function(i){return i===Wt?Ds:es[i].transfer}};function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yn;class vl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yn===void 0&&(Yn=Os("canvas")),Yn.width=e.width,Yn.height=e.height;const n=Yn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ih=0;class Ml{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sr(s[o].image)):r.push(sr(s[o]))}else r=sr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function sr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sh=0;class Lt extends wi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Kt,s=Kt,r=Ht,o=qi,a=$t,l=bn,h=Lt.DEFAULT_ANISOTROPY,u=Wt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=dn(),this.name="",this.source=new Ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Gn?ct:Wt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xi:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xi:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ct?Gn:pl}set encoding(e){Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gn?ct:Wt}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=al;Lt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,s=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,h=l[0],u=l[4],f=l[8],p=l[1],m=l[5],_=l[9],g=l[2],d=l[6],c=l[10];if(Math.abs(u-p)<.01&&Math.abs(f-g)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+g)<.1&&Math.abs(_+d)<.1&&Math.abs(h+m+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(h+1)/2,b=(m+1)/2,R=(c+1)/2,w=(u+p)/4,A=(f+g)/4,O=(_+d)/4;return v>b&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=A/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=O/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=O/r),this.set(n,s,r,t),this}let x=Math.sqrt((d-_)*(d-_)+(f-g)*(f-g)+(p-u)*(p-u));return Math.abs(x)<.001&&(x=1),this.x=(d-_)/x,this.y=(f-g)/x,this.z=(p-u)/x,this.w=Math.acos((h+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rh extends wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Wi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Gn?ct:Wt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Lt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ml(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends rh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yl extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ah extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],h=n[s+1],u=n[s+2],f=n[s+3];const p=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==p||h!==m||u!==_){let d=1-a;const c=l*p+h*m+u*_+f*g,x=c>=0?1:-1,v=1-c*c;if(v>Number.EPSILON){const R=Math.sqrt(v),w=Math.atan2(R,c*x);d=Math.sin(d*w)/R,a=Math.sin(a*w)/R}const b=a*x;if(l=l*d+p*b,h=h*d+m*b,u=u*d+_*b,f=f*d+g*b,d===1-a){const R=1/Math.sqrt(l*l+h*h+u*u+f*f);l*=R,h*=R,u*=R,f*=R}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o],p=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*f+l*m-h*p,e[t+1]=l*_+u*p+h*f-a*m,e[t+2]=h*_+u*m+a*p-l*f,e[t+3]=u*_-a*f-l*p-h*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(n/2),u=a(s/2),f=a(r/2),p=l(n/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=p*u*f+h*m*_,this._y=h*m*f-p*u*_,this._z=h*u*_+p*m*f,this._w=h*u*f-p*m*_;break;case"YXZ":this._x=p*u*f+h*m*_,this._y=h*m*f-p*u*_,this._z=h*u*_-p*m*f,this._w=h*u*f+p*m*_;break;case"ZXY":this._x=p*u*f-h*m*_,this._y=h*m*f+p*u*_,this._z=h*u*_+p*m*f,this._w=h*u*f-p*m*_;break;case"ZYX":this._x=p*u*f-h*m*_,this._y=h*m*f+p*u*_,this._z=h*u*_-p*m*f,this._w=h*u*f+p*m*_;break;case"YZX":this._x=p*u*f+h*m*_,this._y=h*m*f+p*u*_,this._z=h*u*_-p*m*f,this._w=h*u*f-p*m*_;break;case"XZY":this._x=p*u*f-h*m*_,this._y=h*m*f-p*u*_,this._z=h*u*_+p*m*f,this._w=h*u*f+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],h=t[2],u=t[6],f=t[10],p=n+a+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-h)*m,this._z=(o-s)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+h)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(r-h)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+h)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,h=t._z,u=t._w;return this._x=n*u+o*a+s*h-r*l,this._y=s*u+o*l+r*a-n*h,this._z=r*u+o*h+n*l-s*a,this._w=o*u-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,a),f=Math.sin((1-t)*u)/h,p=Math.sin(t*u)/h;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Za.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Za.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,h=2*(o*s-a*n),u=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*h+o*f-a*u,this.y=n+l*u+a*h-r*f,this.z=s+l*f+r*u-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rr.copy(this).projectOnVector(e),this.sub(rr)}reflect(e){return this.sub(rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rr=new P,Za=new ji;class Vn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xt):Xt.fromBufferAttribute(r,o),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(e.matrixWorld),this.union(ts)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ci),ns.subVectors(this.max,Ci),Kn.subVectors(e.a,Ci),$n.subVectors(e.b,Ci),jn.subVectors(e.c,Ci),pn.subVectors($n,Kn),mn.subVectors(jn,$n),Pn.subVectors(Kn,jn);let t=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-Pn.z,Pn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,Pn.z,0,-Pn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-Pn.y,Pn.x,0];return!ar(t,Kn,$n,jn,ns)||(t=[1,0,0,0,1,0,0,0,1],!ar(t,Kn,$n,jn,ns))?!1:(is.crossVectors(pn,mn),t=[is.x,is.y,is.z],ar(t,Kn,$n,jn,ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new P,new P,new P,new P,new P,new P,new P,new P],Xt=new P,ts=new Vn,Kn=new P,$n=new P,jn=new P,pn=new P,mn=new P,Pn=new P,Ci=new P,ns=new P,is=new P,Ln=new P;function ar(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ln.fromArray(i,r);const a=s.x*Math.abs(Ln.x)+s.y*Math.abs(Ln.y)+s.z*Math.abs(Ln.z),l=e.dot(Ln),h=t.dot(Ln),u=n.dot(Ln);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}const oh=new Vn,Pi=new P,or=new P;class Wn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):oh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);const t=Pi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Pi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(or.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add(or)),this.expandByPoint(Pi.copy(e.center).sub(or))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new P,lr=new P,ss=new P,gn=new P,cr=new P,rs=new P,hr=new P;class Hs{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){lr.copy(e).add(t).multiplyScalar(.5),ss.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(lr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ss),a=gn.dot(this.direction),l=-gn.dot(ss),h=gn.lengthSq(),u=Math.abs(1-o*o);let f,p,m,_;if(u>0)if(f=o*l-a,p=o*a-l,_=r*u,f>=0)if(p>=-_)if(p<=_){const g=1/u;f*=g,p*=g,m=f*(f+o*p+2*a)+p*(o*f+p+2*l)+h}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+h;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+h;else p<=-_?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+h):p<=_?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+h):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+h);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(lr).addScaledVector(ss,p),m}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const n=nn.dot(this.direction),s=nn.dot(nn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,s=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,s=(e.min.x-p.x)*h),u>=0?(r=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,s,r){cr.subVectors(t,e),rs.subVectors(n,e),hr.crossVectors(cr,rs);let o=this.direction.dot(hr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gn.subVectors(this.origin,e);const l=a*this.direction.dot(rs.crossVectors(gn,rs));if(l<0)return null;const h=a*this.direction.dot(cr.cross(gn));if(h<0||l+h>o)return null;const u=-a*gn.dot(hr);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,n,s,r,o,a,l,h,u,f,p,m,_,g,d){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,h,u,f,p,m,_,g,d)}set(e,t,n,s,r,o,a,l,h,u,f,p,m,_,g,d){const c=this.elements;return c[0]=e,c[4]=t,c[8]=n,c[12]=s,c[1]=r,c[5]=o,c[9]=a,c[13]=l,c[2]=h,c[6]=u,c[10]=f,c[14]=p,c[3]=m,c[7]=_,c[11]=g,c[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Zn.setFromMatrixColumn(e,0).length(),r=1/Zn.setFromMatrixColumn(e,1).length(),o=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const p=o*u,m=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=h,t[1]=m+_*h,t[5]=p-g*h,t[9]=-a*l,t[2]=g-p*h,t[6]=_+m*h,t[10]=o*l}else if(e.order==="YXZ"){const p=l*u,m=l*f,_=h*u,g=h*f;t[0]=p+g*a,t[4]=_*a-m,t[8]=o*h,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=g+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*u,m=l*f,_=h*u,g=h*f;t[0]=p-g*a,t[4]=-o*f,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=g-p*a,t[2]=-o*h,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*u,m=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=_*h-m,t[8]=p*h+g,t[1]=l*f,t[5]=g*h+p,t[9]=m*h-_,t[2]=-h,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*h,_=a*l,g=a*h;t[0]=l*u,t[4]=g-p*f,t[8]=_*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-h*u,t[6]=m*f+_,t[10]=p-g*f}else if(e.order==="XZY"){const p=o*l,m=o*h,_=a*l,g=a*h;t[0]=l*u,t[4]=-f,t[8]=h*u,t[1]=p*f+g,t[5]=o*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=a*u,t[10]=g*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lh,e,ch)}lookAt(e,t,n){const s=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),_n.crossVectors(n,It),_n.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),_n.crossVectors(n,It)),_n.normalize(),as.crossVectors(It,_n),s[0]=_n.x,s[4]=as.x,s[8]=It.x,s[1]=_n.y,s[5]=as.y,s[9]=It.y,s[2]=_n.z,s[6]=as.z,s[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],u=n[1],f=n[5],p=n[9],m=n[13],_=n[2],g=n[6],d=n[10],c=n[14],x=n[3],v=n[7],b=n[11],R=n[15],w=s[0],A=s[4],O=s[8],y=s[12],E=s[1],k=s[5],G=s[9],Q=s[13],L=s[2],B=s[6],V=s[10],q=s[14],W=s[3],X=s[7],Y=s[11],ee=s[15];return r[0]=o*w+a*E+l*L+h*W,r[4]=o*A+a*k+l*B+h*X,r[8]=o*O+a*G+l*V+h*Y,r[12]=o*y+a*Q+l*q+h*ee,r[1]=u*w+f*E+p*L+m*W,r[5]=u*A+f*k+p*B+m*X,r[9]=u*O+f*G+p*V+m*Y,r[13]=u*y+f*Q+p*q+m*ee,r[2]=_*w+g*E+d*L+c*W,r[6]=_*A+g*k+d*B+c*X,r[10]=_*O+g*G+d*V+c*Y,r[14]=_*y+g*Q+d*q+c*ee,r[3]=x*w+v*E+b*L+R*W,r[7]=x*A+v*k+b*B+R*X,r[11]=x*O+v*G+b*V+R*Y,r[15]=x*y+v*Q+b*q+R*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],h=e[13],u=e[2],f=e[6],p=e[10],m=e[14],_=e[3],g=e[7],d=e[11],c=e[15];return _*(+r*l*f-s*h*f-r*a*p+n*h*p+s*a*m-n*l*m)+g*(+t*l*m-t*h*p+r*o*p-s*o*m+s*h*u-r*l*u)+d*(+t*h*f-t*a*m-r*o*f+n*o*m+r*a*u-n*h*u)+c*(-s*a*u-t*l*f+t*a*p+s*o*f-n*o*p+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],u=e[8],f=e[9],p=e[10],m=e[11],_=e[12],g=e[13],d=e[14],c=e[15],x=f*d*h-g*p*h+g*l*m-a*d*m-f*l*c+a*p*c,v=_*p*h-u*d*h-_*l*m+o*d*m+u*l*c-o*p*c,b=u*g*h-_*f*h+_*a*m-o*g*m-u*a*c+o*f*c,R=_*f*l-u*g*l-_*a*p+o*g*p+u*a*d-o*f*d,w=t*x+n*v+s*b+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=x*A,e[1]=(g*p*r-f*d*r-g*s*m+n*d*m+f*s*c-n*p*c)*A,e[2]=(a*d*r-g*l*r+g*s*h-n*d*h-a*s*c+n*l*c)*A,e[3]=(f*l*r-a*p*r-f*s*h+n*p*h+a*s*m-n*l*m)*A,e[4]=v*A,e[5]=(u*d*r-_*p*r+_*s*m-t*d*m-u*s*c+t*p*c)*A,e[6]=(_*l*r-o*d*r-_*s*h+t*d*h+o*s*c-t*l*c)*A,e[7]=(o*p*r-u*l*r+u*s*h-t*p*h-o*s*m+t*l*m)*A,e[8]=b*A,e[9]=(_*f*r-u*g*r-_*n*m+t*g*m+u*n*c-t*f*c)*A,e[10]=(o*g*r-_*a*r+_*n*h-t*g*h-o*n*c+t*a*c)*A,e[11]=(u*a*r-o*f*r-u*n*h+t*f*h+o*n*m-t*a*m)*A,e[12]=R*A,e[13]=(u*g*s-_*f*s+_*n*p-t*g*p-u*n*d+t*f*d)*A,e[14]=(_*a*s-o*g*s-_*n*l+t*g*l+o*n*d-t*a*d)*A,e[15]=(o*f*s-u*a*s+u*n*l-t*f*l-o*n*p+t*a*p)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,h=r*o,u=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,u*a+n,u*l-s*o,0,h*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,h=r+r,u=o+o,f=a+a,p=r*h,m=r*u,_=r*f,g=o*u,d=o*f,c=a*f,x=l*h,v=l*u,b=l*f,R=n.x,w=n.y,A=n.z;return s[0]=(1-(g+c))*R,s[1]=(m+b)*R,s[2]=(_-v)*R,s[3]=0,s[4]=(m-b)*w,s[5]=(1-(p+c))*w,s[6]=(d+x)*w,s[7]=0,s[8]=(_+v)*A,s[9]=(d-x)*A,s[10]=(1-(p+g))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Zn.set(s[0],s[1],s[2]).length();const o=Zn.set(s[4],s[5],s[6]).length(),a=Zn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qt.copy(this);const h=1/r,u=1/o,f=1/a;return qt.elements[0]*=h,qt.elements[1]*=h,qt.elements[2]*=h,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=f,qt.elements[9]*=f,qt.elements[10]*=f,t.setFromRotationMatrix(qt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=cn){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s);let m,_;if(a===cn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ns)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=cn){const l=this.elements,h=1/(t-e),u=1/(n-s),f=1/(o-r),p=(t+e)*h,m=(n+s)*u;let _,g;if(a===cn)_=(o+r)*f,g=-2*f;else if(a===Ns)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zn=new P,qt=new Ze,lh=new P(0,0,0),ch=new P(1,1,1),_n=new P,as=new P,It=new P,Ja=new Ze,Qa=new ji;class Vs{constructor(e=0,t=0,n=0,s=Vs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],u=s[9],f=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ja.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ja,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qa.setFromEuler(this),this.setFromQuaternion(Qa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vs.DEFAULT_ORDER="XYZ";class Jr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hh=0;const eo=new P,Jn=new ji,sn=new Ze,os=new P,Li=new P,uh=new P,dh=new ji,to=new P(1,0,0),no=new P(0,1,0),io=new P(0,0,1),fh={type:"added"},ph={type:"removed"};class at extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new P,t=new Vs,n=new ji,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ke}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(to,e)}rotateY(e){return this.rotateOnAxis(no,e)}rotateZ(e){return this.rotateOnAxis(io,e)}translateOnAxis(e,t){return eo.copy(e).applyQuaternion(this.quaternion),this.position.add(eo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(to,e)}translateY(e){return this.translateOnAxis(no,e)}translateZ(e){return this.translateOnAxis(io,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?os.copy(e):os.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Li,os,this.up):sn.lookAt(os,Li,this.up),this.quaternion.setFromRotationMatrix(sn),s&&(sn.extractRotation(s.matrixWorld),Jn.setFromRotationMatrix(sn),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ph)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,e,uh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,dh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const f=l[h];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),h=o(e.textures),u=o(e.images),f=o(e.shapes),p=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const h in a){const u=a[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}at.DEFAULT_UP=new P(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new P,rn=new P,ur=new P,an=new P,Qn=new P,ei=new P,so=new P,dr=new P,fr=new P,pr=new P;let ls=!1;class Vt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yt.subVectors(e,t),s.cross(Yt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yt.subVectors(s,t),rn.subVectors(n,t),ur.subVectors(e,t);const o=Yt.dot(Yt),a=Yt.dot(rn),l=Yt.dot(ur),h=rn.dot(rn),u=rn.dot(ur),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;const p=1/f,m=(h*l-a*u)*p,_=(o*u-a*l)*p;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(e,t,n,s,r,o,a,l){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,an)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,an.x),l.addScaledVector(o,an.y),l.addScaledVector(a,an.z),l)}static isFrontFacing(e,t,n,s){return Yt.subVectors(n,t),rn.subVectors(e,t),Yt.cross(rn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Yt.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ls=!0),Vt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return Vt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Qn.subVectors(s,n),ei.subVectors(r,n),dr.subVectors(e,n);const l=Qn.dot(dr),h=ei.dot(dr);if(l<=0&&h<=0)return t.copy(n);fr.subVectors(e,s);const u=Qn.dot(fr),f=ei.dot(fr);if(u>=0&&f<=u)return t.copy(s);const p=l*f-u*h;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Qn,o);pr.subVectors(e,r);const m=Qn.dot(pr),_=ei.dot(pr);if(_>=0&&m<=_)return t.copy(r);const g=m*h-l*_;if(g<=0&&h>=0&&_<=0)return a=h/(h-_),t.copy(n).addScaledVector(ei,a);const d=u*_-m*f;if(d<=0&&f-u>=0&&m-_>=0)return so.subVectors(r,s),a=(f-u)/(f-u+(m-_)),t.copy(s).addScaledVector(so,a);const c=1/(d+g+p);return o=g*c,a=p*c,t.copy(n).addScaledVector(Qn,o).addScaledVector(ei,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},cs={h:0,s:0,l:0};function mr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=Zr(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=mr(o,r,e+1/3),this.g=mr(o,r,e),this.b=mr(o,r,e-1/3)}return Ye.toWorkingColorSpace(this,s),this}setStyle(e,t=ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){const n=xl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return Ye.fromWorkingColorSpace(xt.copy(this),e),Math.round(Et(xt.r*255,0,255))*65536+Math.round(Et(xt.g*255,0,255))*256+Math.round(Et(xt.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(xt.copy(this),t);const n=xt.r,s=xt.g,r=xt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,h;const u=(a+o)/2;if(a===o)l=0,h=0;else{const f=o-a;switch(h=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=ct){Ye.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,n=xt.g,s=xt.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(vn),this.setHSL(vn.h+e,vn.s+t,vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(cs);const n=Vi(vn.h,cs.h,t),s=Vi(vn.s,cs.s,t),r=Vi(vn.l,cs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new Oe;Oe.NAMES=xl;let mh=0;class An extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=vi,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dr,this.blendDst=Ir,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dr&&(n.blendSrc=this.blendSrc),this.blendDst!==Ir&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bt extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new P,hs=new Ee;class lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Or,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Or&&(e.usage=this.usage),e}}class Sl extends lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bl extends lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gh=0;const zt=new Ze,gr=new at,ti=new P,Ut=new Vn,Di=new Vn,mt=new P;class _t extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_l(e)?bl:Sl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return gr.lookAt(e),gr.updateMatrix(),this.applyMatrix4(gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ut.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Di.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Ut.min,Di.min),Ut.expandByPoint(mt),mt.addVectors(Ut.max,Di.max),Ut.expandByPoint(mt)):(Ut.expandByPoint(Di.min),Ut.expandByPoint(Di.max))}Ut.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)mt.fromBufferAttribute(a,h),l&&(ti.fromBufferAttribute(e,h),mt.add(ti)),s=Math.max(s,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,h=[],u=[];for(let E=0;E<a;E++)h[E]=new P,u[E]=new P;const f=new P,p=new P,m=new P,_=new Ee,g=new Ee,d=new Ee,c=new P,x=new P;function v(E,k,G){f.fromArray(s,E*3),p.fromArray(s,k*3),m.fromArray(s,G*3),_.fromArray(o,E*2),g.fromArray(o,k*2),d.fromArray(o,G*2),p.sub(f),m.sub(f),g.sub(_),d.sub(_);const Q=1/(g.x*d.y-d.x*g.y);isFinite(Q)&&(c.copy(p).multiplyScalar(d.y).addScaledVector(m,-g.y).multiplyScalar(Q),x.copy(m).multiplyScalar(g.x).addScaledVector(p,-d.x).multiplyScalar(Q),h[E].add(c),h[k].add(c),h[G].add(c),u[E].add(x),u[k].add(x),u[G].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let E=0,k=b.length;E<k;++E){const G=b[E],Q=G.start,L=G.count;for(let B=Q,V=Q+L;B<V;B+=3)v(n[B+0],n[B+1],n[B+2])}const R=new P,w=new P,A=new P,O=new P;function y(E){A.fromArray(r,E*3),O.copy(A);const k=h[E];R.copy(k),R.sub(A.multiplyScalar(A.dot(k))).normalize(),w.crossVectors(O,k);const Q=w.dot(u[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=Q}for(let E=0,k=b.length;E<k;++E){const G=b[E],Q=G.start,L=G.count;for(let B=Q,V=Q+L;B<V;B+=3)y(n[B+0]),y(n[B+1]),y(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,h=new P,u=new P,f=new P;if(e)for(let p=0,m=e.count;p<m;p+=3){const _=e.getX(p+0),g=e.getX(p+1),d=e.getX(p+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,d),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,d),a.add(u),l.add(u),h.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(d,h.x,h.y,h.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const h=a.array,u=a.itemSize,f=a.normalized,p=new h.constructor(l.length*u);let m=0,_=0;for(let g=0,d=l.length;g<d;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let c=0;c<u;c++)p[_++]=h[m++]}return new lt(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=e(l,n);t.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let u=0,f=h.length;u<f;u++){const p=h[u],m=e(p,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let f=0,p=h.length;f<p;f++){const m=h[f];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const h in s){const u=s[h];this.setAttribute(h,u.clone(t))}const r=e.morphAttributes;for(const h in r){const u=[],f=r[h];for(let p=0,m=f.length;p<m;p++)u.push(f[p].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,u=o.length;h<u;h++){const f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ro=new Ze,Dn=new Hs,us=new Wn,ao=new P,ni=new P,ii=new P,si=new P,_r=new P,ds=new P,fs=new Ee,ps=new Ee,ms=new Ee,oo=new P,lo=new P,co=new P,gs=new P,_s=new P;class Fe extends at{constructor(e=new _t,t=new bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ds.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const u=a[l],f=r[l];u!==0&&(_r.fromBufferAttribute(f,e),o?ds.addScaledVector(_r,u):ds.addScaledVector(_r.sub(t),u))}t.add(ds)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(r),Dn.copy(e.ray).recast(e.near),!(us.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(us,ao)===null||Dn.origin.distanceToSquared(ao)>(e.far-e.near)**2))&&(ro.copy(r).invert(),Dn.copy(e.ray).applyMatrix4(ro),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){const d=p[_],c=o[d.materialIndex],x=Math.max(d.start,m.start),v=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let b=x,R=v;b<R;b+=3){const w=a.getX(b),A=a.getX(b+1),O=a.getX(b+2);s=vs(this,c,e,n,h,u,f,w,A,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let d=_,c=g;d<c;d+=3){const x=a.getX(d),v=a.getX(d+1),b=a.getX(d+2);s=vs(this,o,e,n,h,u,f,x,v,b),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){const d=p[_],c=o[d.materialIndex],x=Math.max(d.start,m.start),v=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let b=x,R=v;b<R;b+=3){const w=b,A=b+1,O=b+2;s=vs(this,c,e,n,h,u,f,w,A,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let d=_,c=g;d<c;d+=3){const x=d,v=d+1,b=d+2;s=vs(this,o,e,n,h,u,f,x,v,b),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function _h(i,e,t,n,s,r,o,a){let l;if(e.side===gt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Tn,a),l===null)return null;_s.copy(a),_s.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(_s);return h<t.near||h>t.far?null:{distance:h,point:_s.clone(),object:i}}function vs(i,e,t,n,s,r,o,a,l,h){i.getVertexPosition(a,ni),i.getVertexPosition(l,ii),i.getVertexPosition(h,si);const u=_h(i,e,t,n,ni,ii,si,gs);if(u){s&&(fs.fromBufferAttribute(s,a),ps.fromBufferAttribute(s,l),ms.fromBufferAttribute(s,h),u.uv=Vt.getInterpolation(gs,ni,ii,si,fs,ps,ms,new Ee)),r&&(fs.fromBufferAttribute(r,a),ps.fromBufferAttribute(r,l),ms.fromBufferAttribute(r,h),u.uv1=Vt.getInterpolation(gs,ni,ii,si,fs,ps,ms,new Ee),u.uv2=u.uv1),o&&(oo.fromBufferAttribute(o,a),lo.fromBufferAttribute(o,l),co.fromBufferAttribute(o,h),u.normal=Vt.getInterpolation(gs,ni,ii,si,oo,lo,co,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c:h,normal:new P,materialIndex:0};Vt.getNormal(ni,ii,si,f.normal),u.face=f}return u}class En extends _t{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],u=[],f=[];let p=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(f,2));function _(g,d,c,x,v,b,R,w,A,O,y){const E=b/A,k=R/O,G=b/2,Q=R/2,L=w/2,B=A+1,V=O+1;let q=0,W=0;const X=new P;for(let Y=0;Y<V;Y++){const ee=Y*k-Q;for(let te=0;te<B;te++){const H=te*E-G;X[g]=H*x,X[d]=ee*v,X[c]=L,h.push(X.x,X.y,X.z),X[g]=0,X[d]=0,X[c]=w>0?1:-1,u.push(X.x,X.y,X.z),f.push(te/A),f.push(1-Y/O),q+=1}}for(let Y=0;Y<O;Y++)for(let ee=0;ee<A;ee++){const te=p+ee+B*Y,H=p+ee+B*(Y+1),K=p+(ee+1)+B*(Y+1),oe=p+(ee+1)+B*Y;l.push(te,H,oe),l.push(H,K,oe),W+=6}a.addGroup(m,W,y),m+=W,p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ei(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=Ei(i[t]);for(const s in n)e[s]=n[s]}return e}function vh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function El(i){return i.getRenderTarget()===null?i.outputColorSpace:Ye.workingColorSpace}const Mh={clone:Ei,merge:Ct};var yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yh,this.fragmentShader=xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Tl extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ft extends Tl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ri=-90,ai=1;class Sh extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ft(ri,ai,e,t);s.layers=this.layers,this.add(s);const r=new Ft(ri,ai,e,t);r.layers=this.layers,this.add(r);const o=new Ft(ri,ai,e,t);o.layers=this.layers,this.add(o);const a=new Ft(ri,ai,e,t);a.layers=this.layers,this.add(a);const l=new Ft(ri,ai,e,t);l.layers=this.layers,this.add(l);const h=new Ft(ri,ai,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const h of t)this.remove(h);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,u]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,p,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class wl extends Lt{constructor(e,t,n,s,r,o,a,l,h,u){e=e!==void 0?e:[],t=t!==void 0?t:xi,super(e,t,n,s,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bh extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Wi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Gn?ct:Wt),this.texture=new wl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new En(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gt,blending:xn});r.uniforms.tEquirect.value=t;const o=new Fe(s,r),a=t.minFilter;return t.minFilter===qi&&(t.minFilter=Ht),new Sh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const vr=new P,Eh=new P,Th=new ke;class Un{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=vr.subVectors(n,t).cross(Eh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Th.getNormalMatrix(e),s=this.coplanarPoint(vr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Wn,Ms=new P;class Qr{constructor(e=new Un,t=new Un,n=new Un,s=new Un,r=new Un,o=new Un){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],u=s[5],f=s[6],p=s[7],m=s[8],_=s[9],g=s[10],d=s[11],c=s[12],x=s[13],v=s[14],b=s[15];if(n[0].setComponents(l-r,p-h,d-m,b-c).normalize(),n[1].setComponents(l+r,p+h,d+m,b+c).normalize(),n[2].setComponents(l+o,p+u,d+_,b+x).normalize(),n[3].setComponents(l-o,p-u,d-_,b-x).normalize(),n[4].setComponents(l-a,p-f,d-g,b-v).normalize(),t===cn)n[5].setComponents(l+a,p+f,d+g,b+v).normalize();else if(t===Ns)n[5].setComponents(a,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ms.x=s.normal.x>0?e.max.x:e.min.x,Ms.y=s.normal.y>0?e.max.y:e.min.y,Ms.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Al(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function wh(i,e){const t=e.isWebGL2,n=new WeakMap;function s(h,u){const f=h.array,p=h.usage,m=f.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,f,p),h.onUploadCallback();let g;if(f instanceof Float32Array)g=i.FLOAT;else if(f instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=i.SHORT;else if(f instanceof Uint32Array)g=i.UNSIGNED_INT;else if(f instanceof Int32Array)g=i.INT;else if(f instanceof Int8Array)g=i.BYTE;else if(f instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:m}}function r(h,u,f){const p=u.array,m=u._updateRange,_=u.updateRanges;if(i.bindBuffer(f,h),m.count===-1&&_.length===0&&i.bufferSubData(f,0,p),_.length!==0){for(let g=0,d=_.length;g<d;g++){const c=_[g];t?i.bufferSubData(f,c.start*p.BYTES_PER_ELEMENT,p,c.start,c.count):i.bufferSubData(f,c.start*p.BYTES_PER_ELEMENT,p.subarray(c.start,c.start+c.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u&&(i.deleteBuffer(u.buffer),n.delete(h))}function l(h,u){if(h.isGLBufferAttribute){const p=n.get(h);(!p||p.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const f=n.get(h);if(f===void 0)n.set(h,s(h,u));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,h,u),f.version=h.version}}return{get:o,remove:a,update:l}}class ea extends _t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),h=a+1,u=l+1,f=e/a,p=t/l,m=[],_=[],g=[],d=[];for(let c=0;c<u;c++){const x=c*p-o;for(let v=0;v<h;v++){const b=v*f-r;_.push(b,-x,0),g.push(0,0,1),d.push(v/a),d.push(1-c/l)}}for(let c=0;c<l;c++)for(let x=0;x<a;x++){const v=x+h*c,b=x+h*(c+1),R=x+1+h*(c+1),w=x+1+h*c;m.push(v,b,w),m.push(b,R,w)}this.setIndex(m),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(g,3)),this.setAttribute("uv",new ht(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ah=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ch=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ph=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ih=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Oh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iu="gl_FragColor = linearToOutputTexel( gl_FragColor );",su=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,au=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ou=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,du=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_u=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Su=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Au=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ru=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Du=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Iu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Uu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ou=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ku=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Vu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$u=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ju=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,td=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,id=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,od=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ld=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ud=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,md=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Md=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ad=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ld=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Id=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ud=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Od=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$d=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:Ah,alphahash_pars_fragment:Rh,alphamap_fragment:Ch,alphamap_pars_fragment:Ph,alphatest_fragment:Lh,alphatest_pars_fragment:Dh,aomap_fragment:Ih,aomap_pars_fragment:Uh,batching_pars_vertex:Nh,batching_vertex:Fh,begin_vertex:Oh,beginnormal_vertex:Bh,bsdfs:zh,iridescence_fragment:kh,bumpmap_pars_fragment:Gh,clipping_planes_fragment:Hh,clipping_planes_pars_fragment:Vh,clipping_planes_pars_vertex:Wh,clipping_planes_vertex:Xh,color_fragment:qh,color_pars_fragment:Yh,color_pars_vertex:Kh,color_vertex:$h,common:jh,cube_uv_reflection_fragment:Zh,defaultnormal_vertex:Jh,displacementmap_pars_vertex:Qh,displacementmap_vertex:eu,emissivemap_fragment:tu,emissivemap_pars_fragment:nu,colorspace_fragment:iu,colorspace_pars_fragment:su,envmap_fragment:ru,envmap_common_pars_fragment:au,envmap_pars_fragment:ou,envmap_pars_vertex:lu,envmap_physical_pars_fragment:yu,envmap_vertex:cu,fog_vertex:hu,fog_pars_vertex:uu,fog_fragment:du,fog_pars_fragment:fu,gradientmap_pars_fragment:pu,lightmap_fragment:mu,lightmap_pars_fragment:gu,lights_lambert_fragment:_u,lights_lambert_pars_fragment:vu,lights_pars_begin:Mu,lights_toon_fragment:xu,lights_toon_pars_fragment:Su,lights_phong_fragment:bu,lights_phong_pars_fragment:Eu,lights_physical_fragment:Tu,lights_physical_pars_fragment:wu,lights_fragment_begin:Au,lights_fragment_maps:Ru,lights_fragment_end:Cu,logdepthbuf_fragment:Pu,logdepthbuf_pars_fragment:Lu,logdepthbuf_pars_vertex:Du,logdepthbuf_vertex:Iu,map_fragment:Uu,map_pars_fragment:Nu,map_particle_fragment:Fu,map_particle_pars_fragment:Ou,metalnessmap_fragment:Bu,metalnessmap_pars_fragment:zu,morphcolor_vertex:ku,morphnormal_vertex:Gu,morphtarget_pars_vertex:Hu,morphtarget_vertex:Vu,normal_fragment_begin:Wu,normal_fragment_maps:Xu,normal_pars_fragment:qu,normal_pars_vertex:Yu,normal_vertex:Ku,normalmap_pars_fragment:$u,clearcoat_normal_fragment_begin:ju,clearcoat_normal_fragment_maps:Zu,clearcoat_pars_fragment:Ju,iridescence_pars_fragment:Qu,opaque_fragment:ed,packing:td,premultiplied_alpha_fragment:nd,project_vertex:id,dithering_fragment:sd,dithering_pars_fragment:rd,roughnessmap_fragment:ad,roughnessmap_pars_fragment:od,shadowmap_pars_fragment:ld,shadowmap_pars_vertex:cd,shadowmap_vertex:hd,shadowmask_pars_fragment:ud,skinbase_vertex:dd,skinning_pars_vertex:fd,skinning_vertex:pd,skinnormal_vertex:md,specularmap_fragment:gd,specularmap_pars_fragment:_d,tonemapping_fragment:vd,tonemapping_pars_fragment:Md,transmission_fragment:yd,transmission_pars_fragment:xd,uv_pars_fragment:Sd,uv_pars_vertex:bd,uv_vertex:Ed,worldpos_vertex:Td,background_vert:wd,background_frag:Ad,backgroundCube_vert:Rd,backgroundCube_frag:Cd,cube_vert:Pd,cube_frag:Ld,depth_vert:Dd,depth_frag:Id,distanceRGBA_vert:Ud,distanceRGBA_frag:Nd,equirect_vert:Fd,equirect_frag:Od,linedashed_vert:Bd,linedashed_frag:zd,meshbasic_vert:kd,meshbasic_frag:Gd,meshlambert_vert:Hd,meshlambert_frag:Vd,meshmatcap_vert:Wd,meshmatcap_frag:Xd,meshnormal_vert:qd,meshnormal_frag:Yd,meshphong_vert:Kd,meshphong_frag:$d,meshphysical_vert:jd,meshphysical_frag:Zd,meshtoon_vert:Jd,meshtoon_frag:Qd,points_vert:ef,points_frag:tf,shadow_vert:nf,shadow_frag:sf,sprite_vert:rf,sprite_frag:af},ie={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Jt={basic:{uniforms:Ct([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Ct([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Oe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Ct([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Ct([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Ct([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Oe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Ct([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Ct([ie.points,ie.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Ct([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Ct([ie.common,ie.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Ct([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Ct([ie.sprite,ie.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Ct([ie.common,ie.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Ct([ie.lights,ie.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Jt.physical={uniforms:Ct([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const ys={r:0,b:0,g:0};function of(i,e,t,n,s,r,o){const a=new Oe(0);let l=r===!0?0:1,h,u,f=null,p=0,m=null;function _(d,c){let x=!1,v=c.isScene===!0?c.background:null;v&&v.isTexture&&(v=(c.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),x=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ks)?(u===void 0&&(u=new Fe(new En(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Ei(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(v.colorSpace)!==Je,(f!==v||p!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,p=v.version,m=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new Fe(new ea(2,2),new wn({name:"BackgroundMaterial",uniforms:Ei(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,h.material.toneMapped=Ye.getTransfer(v.colorSpace)!==Je,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,p=v.version,m=i.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null))}function g(d,c){d.getRGB(ys,El(i)),n.buffers.color.setClear(ys.r,ys.g,ys.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(d,c=1){a.set(d),l=c,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,g(a,l)},render:_}}function lf(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=d(null);let h=l,u=!1;function f(L,B,V,q,W){let X=!1;if(o){const Y=g(q,V,B);h!==Y&&(h=Y,m(h.object)),X=c(L,q,V,W),X&&x(L,q,V,W)}else{const Y=B.wireframe===!0;(h.geometry!==q.id||h.program!==V.id||h.wireframe!==Y)&&(h.geometry=q.id,h.program=V.id,h.wireframe=Y,X=!0)}W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,O(L,B,V,q),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,B,V){const q=V.wireframe===!0;let W=a[L.id];W===void 0&&(W={},a[L.id]=W);let X=W[B.id];X===void 0&&(X={},W[B.id]=X);let Y=X[q];return Y===void 0&&(Y=d(p()),X[q]=Y),Y}function d(L){const B=[],V=[],q=[];for(let W=0;W<s;W++)B[W]=0,V[W]=0,q[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:q,object:L,attributes:{},index:null}}function c(L,B,V,q){const W=h.attributes,X=B.attributes;let Y=0;const ee=V.getAttributes();for(const te in ee)if(ee[te].location>=0){const K=W[te];let oe=X[te];if(oe===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),K===void 0||K.attribute!==oe||oe&&K.data!==oe.data)return!0;Y++}return h.attributesNum!==Y||h.index!==q}function x(L,B,V,q){const W={},X=B.attributes;let Y=0;const ee=V.getAttributes();for(const te in ee)if(ee[te].location>=0){let K=X[te];K===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const oe={};oe.attribute=K,K&&K.data&&(oe.data=K.data),W[te]=oe,Y++}h.attributes=W,h.attributesNum=Y,h.index=q}function v(){const L=h.newAttributes;for(let B=0,V=L.length;B<V;B++)L[B]=0}function b(L){R(L,0)}function R(L,B){const V=h.newAttributes,q=h.enabledAttributes,W=h.attributeDivisors;V[L]=1,q[L]===0&&(i.enableVertexAttribArray(L),q[L]=1),W[L]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),W[L]=B)}function w(){const L=h.newAttributes,B=h.enabledAttributes;for(let V=0,q=B.length;V<q;V++)B[V]!==L[V]&&(i.disableVertexAttribArray(V),B[V]=0)}function A(L,B,V,q,W,X,Y){Y===!0?i.vertexAttribIPointer(L,B,V,W,X):i.vertexAttribPointer(L,B,V,q,W,X)}function O(L,B,V,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=q.attributes,X=V.getAttributes(),Y=B.defaultAttributeValues;for(const ee in X){const te=X[ee];if(te.location>=0){let H=W[ee];if(H===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){const K=H.normalized,oe=H.itemSize,me=t.get(H);if(me===void 0)continue;const pe=me.buffer,Re=me.type,Pe=me.bytesPerElement,xe=n.isWebGL2===!0&&(Re===i.INT||Re===i.UNSIGNED_INT||H.gpuType===ol);if(H.isInterleavedBufferAttribute){const Ve=H.data,I=Ve.stride,Tt=H.offset;if(Ve.isInstancedInterleavedBuffer){for(let _e=0;_e<te.locationSize;_e++)R(te.location+_e,Ve.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let _e=0;_e<te.locationSize;_e++)b(te.location+_e);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let _e=0;_e<te.locationSize;_e++)A(te.location+_e,oe/te.locationSize,Re,K,I*Pe,(Tt+oe/te.locationSize*_e)*Pe,xe)}else{if(H.isInstancedBufferAttribute){for(let Ve=0;Ve<te.locationSize;Ve++)R(te.location+Ve,H.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Ve=0;Ve<te.locationSize;Ve++)b(te.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let Ve=0;Ve<te.locationSize;Ve++)A(te.location+Ve,oe/te.locationSize,Re,K,oe*Pe,oe/te.locationSize*Ve*Pe,xe)}}else if(Y!==void 0){const K=Y[ee];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(te.location,K);break;case 3:i.vertexAttrib3fv(te.location,K);break;case 4:i.vertexAttrib4fv(te.location,K);break;default:i.vertexAttrib1fv(te.location,K)}}}}w()}function y(){G();for(const L in a){const B=a[L];for(const V in B){const q=B[V];for(const W in q)_(q[W].object),delete q[W];delete B[V]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const B=a[L.id];for(const V in B){const q=B[V];for(const W in q)_(q[W].object),delete q[W];delete B[V]}delete a[L.id]}function k(L){for(const B in a){const V=a[B];if(V[L.id]===void 0)continue;const q=V[L.id];for(const W in q)_(q[W].object),delete q[W];delete V[L.id]}}function G(){Q(),u=!0,h!==l&&(h=l,m(h.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:G,resetDefaultState:Q,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:b,disableUnusedAttributes:w}}function cf(i,e,t,n){const s=n.isWebGL2;let r;function o(u){r=u}function a(u,f){i.drawArrays(r,u,f),t.update(f,r,1)}function l(u,f,p){if(p===0)return;let m,_;if(s)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,u,f,p),t.update(f,r,p)}function h(u,f,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<p;_++)this.render(u[_],f[_]);else{m.multiDrawArraysWEBGL(r,u,0,f,0,p);let _=0;for(let g=0;g<p;g++)_+=f[g];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=h}function hf(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const h=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),c=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,b=o||e.has("OES_texture_float"),R=v&&b,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:d,maxVaryings:c,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:w}}function uf(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Un,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||n!==0||s;return s=p,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=u(f,p,0)},this.setState=function(f,p,m){const _=f.clippingPlanes,g=f.clipIntersection,d=f.clipShadows,c=i.get(f);if(!s||_===null||_.length===0||r&&!d)r?u(null):h();else{const x=r?0:n,v=x*4;let b=c.clippingState||null;l.value=b,b=u(_,p,v,m);for(let R=0;R!==v;++R)b[R]=t[R];c.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,p,m,_){const g=f!==null?f.length:0;let d=null;if(g!==0){if(d=l.value,_!==!0||d===null){const c=m+g*4,x=p.matrixWorldInverse;a.getNormalMatrix(x),(d===null||d.length<c)&&(d=new Float32Array(c));for(let v=0,b=m;v!==g;++v,b+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(d,b),d[b+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,d}}function df(i){let e=new WeakMap;function t(o,a){return a===Ur?o.mapping=xi:a===Nr&&(o.mapping=Si),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ur||a===Nr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new bh(l.height/2);return h.fromEquirectangularTexture(i,o),e.set(o,h),o.addEventListener("dispose",s),t(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Rl extends Tl{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pi=4,ho=[.125,.215,.35,.446,.526,.582],Bn=20,Mr=new Rl,uo=new Oe;let yr=null,xr=0,Sr=0;const Nn=(1+Math.sqrt(5))/2,oi=1/Nn,fo=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Nn,oi),new P(0,Nn,-oi),new P(oi,0,Nn),new P(-oi,0,Nn),new P(Nn,oi,0),new P(-Nn,oi,0)];class po{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){yr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),Sr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yr,xr,Sr),e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===Si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),Sr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Yi,format:$t,colorSpace:fn,depthBuffer:!1},s=mo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ff(r)),this._blurMaterial=pf(r,e,t)}return s}_compileMaterial(e){const t=new Fe(this._lodPlanes[0],e);this._renderer.compile(t,Mr)}_sceneToCubeUV(e,t,n,s){const a=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(uo),u.toneMapping=Sn,u.autoClear=!1;const m=new bt({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),_=new Fe(new En,m);let g=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,g=!0):(m.color.copy(uo),g=!0);for(let c=0;c<6;c++){const x=c%3;x===0?(a.up.set(0,l[c],0),a.lookAt(h[c],0,0)):x===1?(a.up.set(0,0,l[c]),a.lookAt(0,h[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,h[c]));const v=this._cubeSize;xs(s,x*v,c>2?v:0,v,v),u.setRenderTarget(s),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===xi||e.mapping===Si;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_o()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=go());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;xs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Mr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=fo[(s-1)%fo.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Fe(this._lodPlanes[s],h),p=h.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Bn-1),g=r/_,d=isFinite(r)?1+Math.floor(u*g):Bn;d>Bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Bn}`);const c=[];let x=0;for(let A=0;A<Bn;++A){const O=A/g,y=Math.exp(-O*O/2);c.push(y),A===0?x+=y:A<d&&(x+=2*y)}for(let A=0;A<c.length;A++)c[A]=c[A]/x;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=c,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:v}=this;p.dTheta.value=_,p.mipInt.value=v-n;const b=this._sizeLods[s],R=3*b*(s>v-pi?s-v+pi:0),w=4*(this._cubeSize-b);xs(t,R,w,3*b,2*b),l.setRenderTarget(t),l.render(f,Mr)}}function ff(i){const e=[],t=[],n=[];let s=i;const r=i-pi+1+ho.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-pi?l=ho[o-i+pi-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),u=-h,f=1+h,p=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,g=3,d=2,c=1,x=new Float32Array(g*_*m),v=new Float32Array(d*_*m),b=new Float32Array(c*_*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,O=w>2?0:-1,y=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];x.set(y,g*_*w),v.set(p,d*_*w);const E=[w,w,w,w,w,w];b.set(E,c*_*w)}const R=new _t;R.setAttribute("position",new lt(x,g)),R.setAttribute("uv",new lt(v,d)),R.setAttribute("faceIndex",new lt(b,c)),e.push(R),s>pi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mo(i,e,t){const n=new Hn(i,e,t);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function pf(i,e,t){const n=new Float32Array(Bn),s=new P(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function go(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function _o(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function ta(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===Ur||l===Nr,u=l===xi||l===Si;if(h||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new po(i)),f=h?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(h&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new po(i));const p=h?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _f(i,e,t,n){const s={},r=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const g=p.morphAttributes[_];for(let d=0,c=g.length;d<c;d++)e.remove(g[d])}p.removeEventListener("dispose",o),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(f){const p=f.attributes;for(const _ in p)e.update(p[_],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const g=m[_];for(let d=0,c=g.length;d<c;d++)e.update(g[d],i.ARRAY_BUFFER)}}function h(f){const p=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const x=m.array;g=m.version;for(let v=0,b=x.length;v<b;v+=3){const R=x[v+0],w=x[v+1],A=x[v+2];p.push(R,w,w,A,A,R)}}else if(_!==void 0){const x=_.array;g=_.version;for(let v=0,b=x.length/3-1;v<b;v+=3){const R=v+0,w=v+1,A=v+2;p.push(R,w,w,A,A,R)}}else return;const d=new(_l(p)?bl:Sl)(p,1);d.version=g;const c=r.get(f);c&&e.remove(c),r.set(f,d)}function u(f){const p=r.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function vf(i,e,t,n){const s=n.isWebGL2;let r;function o(m){r=m}let a,l;function h(m){a=m.type,l=m.bytesPerElement}function u(m,_){i.drawElements(r,_,a,m*l),t.update(_,r,1)}function f(m,_,g){if(g===0)return;let d,c;if(s)d=i,c="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[c](r,_,a,m*l,g),t.update(_,r,g)}function p(m,_,g){if(g===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let c=0;c<g;c++)this.render(m[c]/l,_[c]);else{d.multiDrawElementsWEBGL(r,_,0,a,m,0,g);let c=0;for(let x=0;x<g;x++)c+=_[x];t.update(c,r,1)}}this.setMode=o,this.setIndex=h,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function Mf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function yf(i,e){return i[0]-e[0]}function xf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Sf(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new Qe,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function l(h,u,f){const p=h.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let d=r.get(u);if(d===void 0||d.count!==g){let B=function(){Q.dispose(),r.delete(u),u.removeEventListener("dispose",B)};var m=B;d!==void 0&&d.texture.dispose();const v=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let y=0;v===!0&&(y=1),b===!0&&(y=2),R===!0&&(y=3);let E=u.attributes.position.count*y,k=1;E>e.maxTextureSize&&(k=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const G=new Float32Array(E*k*4*g),Q=new yl(G,E,k,g);Q.type=yn,Q.needsUpdate=!0;const L=y*4;for(let V=0;V<g;V++){const q=w[V],W=A[V],X=O[V],Y=E*k*4*V;for(let ee=0;ee<q.count;ee++){const te=ee*L;v===!0&&(o.fromBufferAttribute(q,ee),G[Y+te+0]=o.x,G[Y+te+1]=o.y,G[Y+te+2]=o.z,G[Y+te+3]=0),b===!0&&(o.fromBufferAttribute(W,ee),G[Y+te+4]=o.x,G[Y+te+5]=o.y,G[Y+te+6]=o.z,G[Y+te+7]=0),R===!0&&(o.fromBufferAttribute(X,ee),G[Y+te+8]=o.x,G[Y+te+9]=o.y,G[Y+te+10]=o.z,G[Y+te+11]=X.itemSize===4?o.w:1)}}d={count:g,texture:Q,size:new Ee(E,k)},r.set(u,d),u.addEventListener("dispose",B)}let c=0;for(let v=0;v<p.length;v++)c+=p[v];const x=u.morphTargetsRelative?1:1-c;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const _=p===void 0?0:p.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let b=0;b<_;b++)g[b]=[b,0];n[u.id]=g}for(let b=0;b<_;b++){const R=g[b];R[0]=b,R[1]=p[b]}g.sort(xf);for(let b=0;b<8;b++)b<_&&g[b][1]?(a[b][0]=g[b][0],a[b][1]=g[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(yf);const d=u.morphAttributes.position,c=u.morphAttributes.normal;let x=0;for(let b=0;b<8;b++){const R=a[b],w=R[0],A=R[1];w!==Number.MAX_SAFE_INTEGER&&A?(d&&u.getAttribute("morphTarget"+b)!==d[w]&&u.setAttribute("morphTarget"+b,d[w]),c&&u.getAttribute("morphNormal"+b)!==c[w]&&u.setAttribute("morphNormal"+b,c[w]),s[b]=A,x+=A):(d&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),c&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),s[b]=0)}const v=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(i,"morphTargetBaseInfluence",v),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function bf(i,e,t,n){let s=new WeakMap;function r(l){const h=n.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function o(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}class Cl extends Lt{constructor(e,t,n,s,r,o,a,l,h,u){if(u=u!==void 0?u:kn,u!==kn&&u!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===kn&&(n=Mn),n===void 0&&u===bi&&(n=zn),super(null,s,r,o,a,l,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Pl=new Lt,Ll=new Cl(1,1);Ll.compareFunction=gl;const Dl=new yl,Il=new ah,Ul=new wl,vo=[],Mo=[],yo=new Float32Array(16),xo=new Float32Array(9),So=new Float32Array(4);function Ai(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=vo[s];if(r===void 0&&(r=new Float32Array(s),vo[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ws(i,e){let t=Mo[e];t===void 0&&(t=new Int32Array(e),Mo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ef(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function Af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function Rf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;So.set(n),i.uniformMatrix2fv(this.addr,!1,So),dt(t,n)}}function Cf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;xo.set(n),i.uniformMatrix3fv(this.addr,!1,xo),dt(t,n)}}function Pf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;yo.set(n),i.uniformMatrix4fv(this.addr,!1,yo),dt(t,n)}}function Lf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function If(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function Uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function Nf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function Bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function zf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Ll:Pl;t.setTexture2D(e||r,s)}function kf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Il,s)}function Gf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ul,s)}function Hf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Dl,s)}function Vf(i){switch(i){case 5126:return Ef;case 35664:return Tf;case 35665:return wf;case 35666:return Af;case 35674:return Rf;case 35675:return Cf;case 35676:return Pf;case 5124:case 35670:return Lf;case 35667:case 35671:return Df;case 35668:case 35672:return If;case 35669:case 35673:return Uf;case 5125:return Nf;case 36294:return Ff;case 36295:return Of;case 36296:return Bf;case 35678:case 36198:case 36298:case 36306:case 35682:return zf;case 35679:case 36299:case 36307:return kf;case 35680:case 36300:case 36308:case 36293:return Gf;case 36289:case 36303:case 36311:case 36292:return Hf}}function Wf(i,e){i.uniform1fv(this.addr,e)}function Xf(i,e){const t=Ai(e,this.size,2);i.uniform2fv(this.addr,t)}function qf(i,e){const t=Ai(e,this.size,3);i.uniform3fv(this.addr,t)}function Yf(i,e){const t=Ai(e,this.size,4);i.uniform4fv(this.addr,t)}function Kf(i,e){const t=Ai(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $f(i,e){const t=Ai(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jf(i,e){const t=Ai(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zf(i,e){i.uniform1iv(this.addr,e)}function Jf(i,e){i.uniform2iv(this.addr,e)}function Qf(i,e){i.uniform3iv(this.addr,e)}function ep(i,e){i.uniform4iv(this.addr,e)}function tp(i,e){i.uniform1uiv(this.addr,e)}function np(i,e){i.uniform2uiv(this.addr,e)}function ip(i,e){i.uniform3uiv(this.addr,e)}function sp(i,e){i.uniform4uiv(this.addr,e)}function rp(i,e,t){const n=this.cache,s=e.length,r=Ws(t,s);ut(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Pl,r[o])}function ap(i,e,t){const n=this.cache,s=e.length,r=Ws(t,s);ut(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Il,r[o])}function op(i,e,t){const n=this.cache,s=e.length,r=Ws(t,s);ut(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ul,r[o])}function lp(i,e,t){const n=this.cache,s=e.length,r=Ws(t,s);ut(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Dl,r[o])}function cp(i){switch(i){case 5126:return Wf;case 35664:return Xf;case 35665:return qf;case 35666:return Yf;case 35674:return Kf;case 35675:return $f;case 35676:return jf;case 5124:case 35670:return Zf;case 35667:case 35671:return Jf;case 35668:case 35672:return Qf;case 35669:case 35673:return ep;case 5125:return tp;case 36294:return np;case 36295:return ip;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return lp}}class hp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vf(t.type)}}class up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cp(t.type)}}class dp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const br=/(\w+)(\])?(\[|\.)?/g;function bo(i,e){i.seq.push(e),i.map[e.id]=e}function fp(i,e,t){const n=i.name,s=n.length;for(br.lastIndex=0;;){const r=br.exec(n),o=br.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){bo(t,h===void 0?new hp(a,i,e):new up(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new dp(a),bo(t,f)),t=f}}}class Cs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);fp(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Eo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const pp=37297;let mp=0;function gp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function _p(i){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(i);let n;switch(e===t?n="":e===Us&&t===Is?n="LinearDisplayP3ToLinearSRGB":e===Is&&t===Us&&(n="LinearSRGBToLinearDisplayP3"),i){case fn:case Gs:return[n,"LinearTransferOETF"];case ct:case jr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function To(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+gp(i.getShaderSource(e),o)}else return s}function vp(i,e){const t=_p(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Mp(i,e){let t;switch(e){case _c:t="Linear";break;case vc:t="Reinhard";break;case Mc:t="OptimizedCineon";break;case rl:t="ACESFilmic";break;case xc:t="AgX";break;case yc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mi).join(`
`)}function xp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(mi).join(`
`)}function Sp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function mi(i){return i!==""}function wo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ao(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ep=/^[ \t]*#include +<([\w\d./]+)>/gm;function kr(i){return i.replace(Ep,wp)}const Tp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function wp(i,e){let t=De[e];if(t===void 0){const n=Tp.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kr(t)}const Ap=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ro(i){return i.replace(Ap,Rp)}function Rp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Co(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===il?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===on&&(e="SHADOWMAP_TYPE_VSM"),e}function Pp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xi:case Si:e="ENVMAP_TYPE_CUBE";break;case ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Si:e="ENVMAP_MODE_REFRACTION";break}return e}function Dp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sl:e="ENVMAP_BLENDING_MULTIPLY";break;case mc:e="ENVMAP_BLENDING_MIX";break;case gc:e="ENVMAP_BLENDING_ADD";break}return e}function Ip(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Up(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Cp(t),h=Pp(t),u=Lp(t),f=Dp(t),p=Ip(t),m=t.isWebGL2?"":yp(t),_=xp(t),g=Sp(r),d=s.createProgram();let c,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mi).join(`
`),c.length>0&&(c+=`
`),x=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mi).join(`
`),x.length>0&&(x+=`
`)):(c=[Co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mi).join(`
`),x=[m,Co(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?De.tonemapping_pars_fragment:"",t.toneMapping!==Sn?Mp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,vp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mi).join(`
`)),o=kr(o),o=wo(o,t),o=Ao(o,t),a=kr(a),a=wo(a,t),a=Ao(a,t),o=Ro(o),a=Ro(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,c=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=v+c+o,R=v+x+a,w=Eo(s,s.VERTEX_SHADER,b),A=Eo(s,s.FRAGMENT_SHADER,R);s.attachShader(d,w),s.attachShader(d,A),t.index0AttributeName!==void 0?s.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function O(G){if(i.debug.checkShaderErrors){const Q=s.getProgramInfoLog(d).trim(),L=s.getShaderInfoLog(w).trim(),B=s.getShaderInfoLog(A).trim();let V=!0,q=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,d,w,A);else{const W=To(s,w,"vertex"),X=To(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+W+`
`+X)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(L===""||B==="")&&(q=!1);q&&(G.diagnostics={runnable:V,programLog:Q,vertexShader:{log:L,prefix:c},fragmentShader:{log:B,prefix:x}})}s.deleteShader(w),s.deleteShader(A),y=new Cs(s,d),E=bp(s,d)}let y;this.getUniforms=function(){return y===void 0&&O(this),y};let E;this.getAttributes=function(){return E===void 0&&O(this),E};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(d,pp)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mp++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=w,this.fragmentShader=A,this}let Np=0;class Fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Op(e),t.set(e,n)),n}}class Op{constructor(e){this.id=Np++,this.code=e,this.usedTimes=0}}function Bp(i,e,t,n,s,r,o){const a=new Jr,l=new Fp,h=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function d(y,E,k,G,Q){const L=G.fog,B=Q.geometry,V=y.isMeshStandardMaterial?G.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),W=q&&q.mapping===ks?q.image.height:null,X=_[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const Y=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=Y!==void 0?Y.length:0;let te=0;B.morphAttributes.position!==void 0&&(te=1),B.morphAttributes.normal!==void 0&&(te=2),B.morphAttributes.color!==void 0&&(te=3);let H,K,oe,me;if(X){const wt=Jt[X];H=wt.vertexShader,K=wt.fragmentShader}else H=y.vertexShader,K=y.fragmentShader,l.update(y),oe=l.getVertexShaderID(y),me=l.getFragmentShaderID(y);const pe=i.getRenderTarget(),Re=Q.isInstancedMesh===!0,Pe=Q.isBatchedMesh===!0,xe=!!y.map,Ve=!!y.matcap,I=!!q,Tt=!!y.aoMap,_e=!!y.lightMap,we=!!y.bumpMap,ue=!!y.normalMap,et=!!y.displacementMap,Ie=!!y.emissiveMap,T=!!y.metalnessMap,M=!!y.roughnessMap,N=y.anisotropy>0,Z=y.clearcoat>0,j=y.iridescence>0,J=y.sheen>0,de=y.transmission>0,ae=N&&!!y.anisotropyMap,ce=Z&&!!y.clearcoatMap,ye=Z&&!!y.clearcoatNormalMap,Ue=Z&&!!y.clearcoatRoughnessMap,$=j&&!!y.iridescenceMap,Xe=j&&!!y.iridescenceThicknessMap,Ge=J&&!!y.sheenColorMap,Te=J&&!!y.sheenRoughnessMap,ge=!!y.specularMap,he=!!y.specularColorMap,Le=!!y.specularIntensityMap,We=de&&!!y.transmissionMap,nt=de&&!!y.thicknessMap,Be=!!y.gradientMap,ne=!!y.alphaMap,C=y.alphaTest>0,se=!!y.alphaHash,re=!!y.extensions,Se=!!B.attributes.uv1,ve=!!B.attributes.uv2,Ke=!!B.attributes.uv3;let $e=Sn;return y.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&($e=i.toneMapping),{isWebGL2:u,shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:H,fragmentShader:K,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Pe,instancing:Re,instancingColor:Re&&Q.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:fn,map:xe,matcap:Ve,envMap:I,envMapMode:I&&q.mapping,envMapCubeUVHeight:W,aoMap:Tt,lightMap:_e,bumpMap:we,normalMap:ue,displacementMap:p&&et,emissiveMap:Ie,normalMapObjectSpace:ue&&y.normalMapType===Ic,normalMapTangentSpace:ue&&y.normalMapType===ml,metalnessMap:T,roughnessMap:M,anisotropy:N,anisotropyMap:ae,clearcoat:Z,clearcoatMap:ce,clearcoatNormalMap:ye,clearcoatRoughnessMap:Ue,iridescence:j,iridescenceMap:$,iridescenceThicknessMap:Xe,sheen:J,sheenColorMap:Ge,sheenRoughnessMap:Te,specularMap:ge,specularColorMap:he,specularIntensityMap:Le,transmission:de,transmissionMap:We,thicknessMap:nt,gradientMap:Be,opaque:y.transparent===!1&&y.blending===vi,alphaMap:ne,alphaTest:C,alphaHash:se,combine:y.combine,mapUv:xe&&g(y.map.channel),aoMapUv:Tt&&g(y.aoMap.channel),lightMapUv:_e&&g(y.lightMap.channel),bumpMapUv:we&&g(y.bumpMap.channel),normalMapUv:ue&&g(y.normalMap.channel),displacementMapUv:et&&g(y.displacementMap.channel),emissiveMapUv:Ie&&g(y.emissiveMap.channel),metalnessMapUv:T&&g(y.metalnessMap.channel),roughnessMapUv:M&&g(y.roughnessMap.channel),anisotropyMapUv:ae&&g(y.anisotropyMap.channel),clearcoatMapUv:ce&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(y.sheenRoughnessMap.channel),specularMapUv:ge&&g(y.specularMap.channel),specularColorMapUv:he&&g(y.specularColorMap.channel),specularIntensityMapUv:Le&&g(y.specularIntensityMap.channel),transmissionMapUv:We&&g(y.transmissionMap.channel),thicknessMapUv:nt&&g(y.thicknessMap.channel),alphaMapUv:ne&&g(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ue||N),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Se,vertexUv2s:ve,vertexUv3s:Ke,pointsUvs:Q.isPoints===!0&&!!B.attributes.uv&&(xe||ne),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:te,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,useLegacyLights:i._useLegacyLights,decodeVideoTexture:xe&&y.map.isVideoTexture===!0&&Ye.getTransfer(y.map.colorSpace)===Je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ot,flipSided:y.side===gt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:re&&y.extensions.derivatives===!0,extensionFragDepth:re&&y.extensions.fragDepth===!0,extensionDrawBuffers:re&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function c(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)E.push(k),E.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(x(E,y),v(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function x(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function b(y){const E=_[y.type];let k;if(E){const G=Jt[E];k=Mh.clone(G.uniforms)}else k=y.uniforms;return k}function R(y,E){let k;for(let G=0,Q=h.length;G<Q;G++){const L=h[G];if(L.cacheKey===E){k=L,++k.usedTimes;break}}return k===void 0&&(k=new Up(i,E,y,r),h.push(k)),k}function w(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function O(){l.dispose()}return{getParameters:d,getProgramCacheKey:c,getUniforms:b,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:O}}function zp(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function kp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Po(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Lo(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,p,m,_,g,d){let c=i[e];return c===void 0?(c={id:f.id,object:f,geometry:p,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:d},i[e]=c):(c.id=f.id,c.object=f,c.geometry=p,c.material=m,c.groupOrder=_,c.renderOrder=f.renderOrder,c.z=g,c.group=d),e++,c}function a(f,p,m,_,g,d){const c=o(f,p,m,_,g,d);m.transmission>0?n.push(c):m.transparent===!0?s.push(c):t.push(c)}function l(f,p,m,_,g,d){const c=o(f,p,m,_,g,d);m.transmission>0?n.unshift(c):m.transparent===!0?s.unshift(c):t.unshift(c)}function h(f,p){t.length>1&&t.sort(f||kp),n.length>1&&n.sort(p||Po),s.length>1&&s.sort(p||Po)}function u(){for(let f=e,p=i.length;f<p;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:h}}function Gp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Lo,i.set(n,[o])):s>=r.length?(o=new Lo,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Oe};break;case"SpotLight":t={position:new P,direction:new P,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Vp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Wp=0;function Xp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qp(i,e){const t=new Hp,n=Vp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new P);const r=new P,o=new Ze,a=new Ze;function l(u,f){let p=0,m=0,_=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let g=0,d=0,c=0,x=0,v=0,b=0,R=0,w=0,A=0,O=0,y=0;u.sort(Xp);const E=f===!0?Math.PI:1;for(let G=0,Q=u.length;G<Q;G++){const L=u[G],B=L.color,V=L.intensity,q=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=B.r*V*E,m+=B.g*V*E,_+=B.b*V*E;else if(L.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(L.sh.coefficients[X],V);y++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const Y=L.shadow,ee=n.get(L);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,s.directionalShadow[g]=ee,s.directionalShadowMap[g]=W,s.directionalShadowMatrix[g]=L.shadow.matrix,b++}s.directional[g]=X,g++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(V*E),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,s.spot[c]=X;const Y=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,Y.updateMatrices(L),L.castShadow&&O++),s.spotLightMatrix[c]=Y.matrix,L.castShadow){const ee=n.get(L);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,s.spotShadow[c]=ee,s.spotShadowMap[c]=W,w++}c++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(B).multiplyScalar(V),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),s.rectArea[x]=X,x++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*E),X.distance=L.distance,X.decay=L.decay,L.castShadow){const Y=L.shadow,ee=n.get(L);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,ee.shadowCameraNear=Y.camera.near,ee.shadowCameraFar=Y.camera.far,s.pointShadow[d]=ee,s.pointShadowMap[d]=W,s.pointShadowMatrix[d]=L.shadow.matrix,R++}s.point[d]=X,d++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(V*E),X.groundColor.copy(L.groundColor).multiplyScalar(V*E),s.hemi[v]=X,v++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=_;const k=s.hash;(k.directionalLength!==g||k.pointLength!==d||k.spotLength!==c||k.rectAreaLength!==x||k.hemiLength!==v||k.numDirectionalShadows!==b||k.numPointShadows!==R||k.numSpotShadows!==w||k.numSpotMaps!==A||k.numLightProbes!==y)&&(s.directional.length=g,s.spot.length=c,s.rectArea.length=x,s.point.length=d,s.hemi.length=v,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=w+A-O,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=y,k.directionalLength=g,k.pointLength=d,k.spotLength=c,k.rectAreaLength=x,k.hemiLength=v,k.numDirectionalShadows=b,k.numPointShadows=R,k.numSpotShadows=w,k.numSpotMaps=A,k.numLightProbes=y,s.version=Wp++)}function h(u,f){let p=0,m=0,_=0,g=0,d=0;const c=f.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const b=u[x];if(b.isDirectionalLight){const R=s.directional[p];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(c),p++}else if(b.isSpotLight){const R=s.spot[_];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(c),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(c),_++}else if(b.isRectAreaLight){const R=s.rectArea[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(c),a.identity(),o.copy(b.matrixWorld),o.premultiply(c),a.extractRotation(o),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const R=s.point[m];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(c),m++}else if(b.isHemisphereLight){const R=s.hemi[d];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(c),d++}}}return{setup:l,setupView:h,state:s}}function Do(i,e){const t=new qp(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function l(f){t.setup(n,f)}function h(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a}}function Yp(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Do(i,e),t.set(r,[l])):o>=a.length?(l=new Do(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class Kp extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $p extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jp(i,e,t){let n=new Qr;const s=new Ee,r=new Ee,o=new Qe,a=new Kp({depthPacking:Dc}),l=new $p,h={},u=t.maxTextureSize,f={[Tn]:gt,[gt]:Tn,[Ot]:Ot},p=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:jp,fragmentShader:Zp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new _t;_.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Fe(_,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let c=this.type;this.render=function(w,A,O){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const y=i.getRenderTarget(),E=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),G=i.state;G.setBlending(xn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Q=c!==on&&this.type===on,L=c===on&&this.type!==on;for(let B=0,V=w.length;B<V;B++){const q=w[B],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const X=W.getFrameExtents();if(s.multiply(X),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,W.mapSize.y=r.y)),W.map===null||Q===!0||L===!0){const ee=this.type!==on?{minFilter:Pt,magFilter:Pt}:{};W.map!==null&&W.map.dispose(),W.map=new Hn(s.x,s.y,ee),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const Y=W.getViewportCount();for(let ee=0;ee<Y;ee++){const te=W.getViewport(ee);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),G.viewport(o),W.updateMatrices(q,ee),n=W.getFrustum(),b(A,O,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===on&&x(W,O),W.needsUpdate=!1}c=this.type,d.needsUpdate=!1,i.setRenderTarget(y,E,k)};function x(w,A){const O=e.update(g);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Hn(s.x,s.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,O,p,g,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,O,m,g,null)}function v(w,A,O,y){let E=null;const k=O.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)E=k;else if(E=O.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=E.uuid,Q=A.uuid;let L=h[G];L===void 0&&(L={},h[G]=L);let B=L[Q];B===void 0&&(B=E.clone(),L[Q]=B,A.addEventListener("dispose",R)),E=B}if(E.visible=A.visible,E.wireframe=A.wireframe,y===on?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:f[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=i.properties.get(E);G.light=O}return E}function b(w,A,O,y,E){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===on)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld);const Q=e.update(w),L=w.material;if(Array.isArray(L)){const B=Q.groups;for(let V=0,q=B.length;V<q;V++){const W=B[V],X=L[W.materialIndex];if(X&&X.visible){const Y=v(w,X,y,E);w.onBeforeShadow(i,w,A,O,Q,Y,W),i.renderBufferDirect(O,null,Q,Y,w,W),w.onAfterShadow(i,w,A,O,Q,Y,W)}}}else if(L.visible){const B=v(w,L,y,E);w.onBeforeShadow(i,w,A,O,Q,B,null),i.renderBufferDirect(O,null,Q,B,w,null),w.onAfterShadow(i,w,A,O,Q,B,null)}}const G=w.children;for(let Q=0,L=G.length;Q<L;Q++)b(G[Q],A,O,y,E)}function R(w){w.target.removeEventListener("dispose",R);for(const O in h){const y=h[O],E=w.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function Qp(i,e,t){const n=t.isWebGL2;function s(){let C=!1;const se=new Qe;let re=null;const Se=new Qe(0,0,0,0);return{setMask:function(ve){re!==ve&&!C&&(i.colorMask(ve,ve,ve,ve),re=ve)},setLocked:function(ve){C=ve},setClear:function(ve,Ke,$e,ft,wt){wt===!0&&(ve*=ft,Ke*=ft,$e*=ft),se.set(ve,Ke,$e,ft),Se.equals(se)===!1&&(i.clearColor(ve,Ke,$e,ft),Se.copy(se))},reset:function(){C=!1,re=null,Se.set(-1,0,0,0)}}}function r(){let C=!1,se=null,re=null,Se=null;return{setTest:function(ve){ve?Pe(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ve){se!==ve&&!C&&(i.depthMask(ve),se=ve)},setFunc:function(ve){if(re!==ve){switch(ve){case lc:i.depthFunc(i.NEVER);break;case cc:i.depthFunc(i.ALWAYS);break;case hc:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case uc:i.depthFunc(i.EQUAL);break;case dc:i.depthFunc(i.GEQUAL);break;case fc:i.depthFunc(i.GREATER);break;case pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=ve}},setLocked:function(ve){C=ve},setClear:function(ve){Se!==ve&&(i.clearDepth(ve),Se=ve)},reset:function(){C=!1,se=null,re=null,Se=null}}}function o(){let C=!1,se=null,re=null,Se=null,ve=null,Ke=null,$e=null,ft=null,wt=null;return{setTest:function(je){C||(je?Pe(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(je){se!==je&&!C&&(i.stencilMask(je),se=je)},setFunc:function(je,At,jt){(re!==je||Se!==At||ve!==jt)&&(i.stencilFunc(je,At,jt),re=je,Se=At,ve=jt)},setOp:function(je,At,jt){(Ke!==je||$e!==At||ft!==jt)&&(i.stencilOp(je,At,jt),Ke=je,$e=At,ft=jt)},setLocked:function(je){C=je},setClear:function(je){wt!==je&&(i.clearStencil(je),wt=je)},reset:function(){C=!1,se=null,re=null,Se=null,ve=null,Ke=null,$e=null,ft=null,wt=null}}}const a=new s,l=new r,h=new o,u=new WeakMap,f=new WeakMap;let p={},m={},_=new WeakMap,g=[],d=null,c=!1,x=null,v=null,b=null,R=null,w=null,A=null,O=null,y=new Oe(0,0,0),E=0,k=!1,G=null,Q=null,L=null,B=null,V=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=X>=2);let ee=null,te={};const H=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),oe=new Qe().fromArray(H),me=new Qe().fromArray(K);function pe(C,se,re,Se){const ve=new Uint8Array(4),Ke=i.createTexture();i.bindTexture(C,Ke),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<re;$e++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(se,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(se+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return Ke}const Re={};Re[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),h.setClear(0),Pe(i.DEPTH_TEST),l.setFunc(Ls),Ie(!1),T(pa),Pe(i.CULL_FACE),ue(xn);function Pe(C){p[C]!==!0&&(i.enable(C),p[C]=!0)}function xe(C){p[C]!==!1&&(i.disable(C),p[C]=!1)}function Ve(C,se){return m[C]!==se?(i.bindFramebuffer(C,se),m[C]=se,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=se),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=se)),!0):!1}function I(C,se){let re=g,Se=!1;if(C)if(re=_.get(se),re===void 0&&(re=[],_.set(se,re)),C.isWebGLMultipleRenderTargets){const ve=C.texture;if(re.length!==ve.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Ke=0,$e=ve.length;Ke<$e;Ke++)re[Ke]=i.COLOR_ATTACHMENT0+Ke;re.length=ve.length,Se=!0}}else re[0]!==i.COLOR_ATTACHMENT0&&(re[0]=i.COLOR_ATTACHMENT0,Se=!0);else re[0]!==i.BACK&&(re[0]=i.BACK,Se=!0);Se&&(t.isWebGL2?i.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Tt(C){return d!==C?(i.useProgram(C),d=C,!0):!1}const _e={[On]:i.FUNC_ADD,[Yl]:i.FUNC_SUBTRACT,[Kl]:i.FUNC_REVERSE_SUBTRACT};if(n)_e[_a]=i.MIN,_e[va]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(_e[_a]=C.MIN_EXT,_e[va]=C.MAX_EXT)}const we={[$l]:i.ZERO,[jl]:i.ONE,[Zl]:i.SRC_COLOR,[Dr]:i.SRC_ALPHA,[ic]:i.SRC_ALPHA_SATURATE,[tc]:i.DST_COLOR,[Ql]:i.DST_ALPHA,[Jl]:i.ONE_MINUS_SRC_COLOR,[Ir]:i.ONE_MINUS_SRC_ALPHA,[nc]:i.ONE_MINUS_DST_COLOR,[ec]:i.ONE_MINUS_DST_ALPHA,[sc]:i.CONSTANT_COLOR,[rc]:i.ONE_MINUS_CONSTANT_COLOR,[ac]:i.CONSTANT_ALPHA,[oc]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(C,se,re,Se,ve,Ke,$e,ft,wt,je){if(C===xn){c===!0&&(xe(i.BLEND),c=!1);return}if(c===!1&&(Pe(i.BLEND),c=!0),C!==ql){if(C!==x||je!==k){if((v!==On||w!==On)&&(i.blendEquation(i.FUNC_ADD),v=On,w=On),je)switch(C){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ln:i.blendFunc(i.ONE,i.ONE);break;case ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ga:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ln:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ga:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}b=null,R=null,A=null,O=null,y.set(0,0,0),E=0,x=C,k=je}return}ve=ve||se,Ke=Ke||re,$e=$e||Se,(se!==v||ve!==w)&&(i.blendEquationSeparate(_e[se],_e[ve]),v=se,w=ve),(re!==b||Se!==R||Ke!==A||$e!==O)&&(i.blendFuncSeparate(we[re],we[Se],we[Ke],we[$e]),b=re,R=Se,A=Ke,O=$e),(ft.equals(y)===!1||wt!==E)&&(i.blendColor(ft.r,ft.g,ft.b,wt),y.copy(ft),E=wt),x=C,k=!1}function et(C,se){C.side===Ot?xe(i.CULL_FACE):Pe(i.CULL_FACE);let re=C.side===gt;se&&(re=!re),Ie(re),C.blending===vi&&C.transparent===!1?ue(xn):ue(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const Se=C.stencilWrite;h.setTest(Se),Se&&(h.setMask(C.stencilWriteMask),h.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),h.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),N(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Pe(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(C){G!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),G=C)}function T(C){C!==Wl?(Pe(i.CULL_FACE),C!==Q&&(C===pa?i.cullFace(i.BACK):C===Xl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),Q=C}function M(C){C!==L&&(W&&i.lineWidth(C),L=C)}function N(C,se,re){C?(Pe(i.POLYGON_OFFSET_FILL),(B!==se||V!==re)&&(i.polygonOffset(se,re),B=se,V=re)):xe(i.POLYGON_OFFSET_FILL)}function Z(C){C?Pe(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function j(C){C===void 0&&(C=i.TEXTURE0+q-1),ee!==C&&(i.activeTexture(C),ee=C)}function J(C,se,re){re===void 0&&(ee===null?re=i.TEXTURE0+q-1:re=ee);let Se=te[re];Se===void 0&&(Se={type:void 0,texture:void 0},te[re]=Se),(Se.type!==C||Se.texture!==se)&&(ee!==re&&(i.activeTexture(re),ee=re),i.bindTexture(C,se||Re[C]),Se.type=C,Se.texture=se)}function de(){const C=te[ee];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ge(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Le(C){oe.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),oe.copy(C))}function We(C){me.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),me.copy(C))}function nt(C,se){let re=f.get(se);re===void 0&&(re=new WeakMap,f.set(se,re));let Se=re.get(C);Se===void 0&&(Se=i.getUniformBlockIndex(se,C.name),re.set(C,Se))}function Be(C,se){const Se=f.get(se).get(C);u.get(se)!==Se&&(i.uniformBlockBinding(se,Se,C.__bindingPointIndex),u.set(se,Se))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ee=null,te={},m={},_=new WeakMap,g=[],d=null,c=!1,x=null,v=null,b=null,R=null,w=null,A=null,O=null,y=new Oe(0,0,0),E=0,k=!1,G=null,Q=null,L=null,B=null,V=null,oe.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),h.reset()}return{buffers:{color:a,depth:l,stencil:h},enable:Pe,disable:xe,bindFramebuffer:Ve,drawBuffers:I,useProgram:Tt,setBlending:ue,setMaterial:et,setFlipSided:Ie,setCullFace:T,setLineWidth:M,setPolygonOffset:N,setScissorTest:Z,activeTexture:j,bindTexture:J,unbindTexture:de,compressedTexImage2D:ae,compressedTexImage3D:ce,texImage2D:ge,texImage3D:he,updateUBOMapping:nt,uniformBlockBinding:Be,texStorage2D:Ge,texStorage3D:Te,texSubImage2D:ye,texSubImage3D:Ue,compressedTexSubImage2D:$,compressedTexSubImage3D:Xe,scissor:Le,viewport:We,reset:ne}}function em(i,e,t,n,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,M){return m?new OffscreenCanvas(T,M):Os("canvas")}function g(T,M,N,Z){let j=1;if((T.width>Z||T.height>Z)&&(j=Z/Math.max(T.width,T.height)),j<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const J=M?Fs:Math.floor,de=J(j*T.width),ae=J(j*T.height);f===void 0&&(f=_(de,ae));const ce=N?_(de,ae):f;return ce.width=de,ce.height=ae,ce.getContext("2d").drawImage(T,0,0,de,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+de+"x"+ae+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function d(T){return zr(T.width)&&zr(T.height)}function c(T){return a?!1:T.wrapS!==Kt||T.wrapT!==Kt||T.minFilter!==Pt&&T.minFilter!==Ht}function x(T,M){return T.generateMipmaps&&M&&T.minFilter!==Pt&&T.minFilter!==Ht}function v(T){i.generateMipmap(T)}function b(T,M,N,Z,j=!1){if(a===!1)return M;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=M;if(M===i.RED&&(N===i.FLOAT&&(J=i.R32F),N===i.HALF_FLOAT&&(J=i.R16F),N===i.UNSIGNED_BYTE&&(J=i.R8)),M===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(J=i.R8UI),N===i.UNSIGNED_SHORT&&(J=i.R16UI),N===i.UNSIGNED_INT&&(J=i.R32UI),N===i.BYTE&&(J=i.R8I),N===i.SHORT&&(J=i.R16I),N===i.INT&&(J=i.R32I)),M===i.RG&&(N===i.FLOAT&&(J=i.RG32F),N===i.HALF_FLOAT&&(J=i.RG16F),N===i.UNSIGNED_BYTE&&(J=i.RG8)),M===i.RGBA){const de=j?Ds:Ye.getTransfer(Z);N===i.FLOAT&&(J=i.RGBA32F),N===i.HALF_FLOAT&&(J=i.RGBA16F),N===i.UNSIGNED_BYTE&&(J=de===Je?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function R(T,M,N){return x(T,N)===!0||T.isFramebufferTexture&&T.minFilter!==Pt&&T.minFilter!==Ht?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function w(T){return T===Pt||T===Ma||T===js?i.NEAREST:i.LINEAR}function A(T){const M=T.target;M.removeEventListener("dispose",A),y(M),M.isVideoTexture&&u.delete(M)}function O(T){const M=T.target;M.removeEventListener("dispose",O),k(M)}function y(T){const M=n.get(T);if(M.__webglInit===void 0)return;const N=T.source,Z=p.get(N);if(Z){const j=Z[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(T),Object.keys(Z).length===0&&p.delete(N)}n.remove(T)}function E(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const N=T.source,Z=p.get(N);delete Z[M.__cacheKey],o.memory.textures--}function k(T){const M=T.texture,N=n.get(T),Z=n.get(M);if(Z.__webglTexture!==void 0&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(N.__webglFramebuffer[j]))for(let J=0;J<N.__webglFramebuffer[j].length;J++)i.deleteFramebuffer(N.__webglFramebuffer[j][J]);else i.deleteFramebuffer(N.__webglFramebuffer[j]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[j])}else{if(Array.isArray(N.__webglFramebuffer))for(let j=0;j<N.__webglFramebuffer.length;j++)i.deleteFramebuffer(N.__webglFramebuffer[j]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let j=0;j<N.__webglColorRenderbuffer.length;j++)N.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[j]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let j=0,J=M.length;j<J;j++){const de=n.get(M[j]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),o.memory.textures--),n.remove(M[j])}n.remove(M),n.remove(T)}let G=0;function Q(){G=0}function L(){const T=G;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),G+=1,T}function B(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function V(T,M){const N=n.get(T);if(T.isVideoTexture&&et(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(N,T,M);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+M)}function q(T,M){const N=n.get(T);if(T.version>0&&N.__version!==T.version){oe(N,T,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+M)}function W(T,M){const N=n.get(T);if(T.version>0&&N.__version!==T.version){oe(N,T,M);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+M)}function X(T,M){const N=n.get(T);if(T.version>0&&N.__version!==T.version){me(N,T,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+M)}const Y={[Xi]:i.REPEAT,[Kt]:i.CLAMP_TO_EDGE,[Fr]:i.MIRRORED_REPEAT},ee={[Pt]:i.NEAREST,[Ma]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[Sc]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},te={[Uc]:i.NEVER,[kc]:i.ALWAYS,[Nc]:i.LESS,[gl]:i.LEQUAL,[Fc]:i.EQUAL,[zc]:i.GEQUAL,[Oc]:i.GREATER,[Bc]:i.NOTEQUAL};function H(T,M,N){if(N?(i.texParameteri(T,i.TEXTURE_WRAP_S,Y[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Y[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Y[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ee[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ee[M.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Kt||M.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,w(M.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==Pt&&M.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,te[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Pt||M.minFilter!==js&&M.minFilter!==qi||M.type===yn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Yi&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(T,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function K(T,M){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));const Z=M.source;let j=p.get(Z);j===void 0&&(j={},p.set(Z,j));const J=B(M);if(J!==T.__cacheKey){j[J]===void 0&&(j[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),j[J].usedTimes++;const de=j[T.__cacheKey];de!==void 0&&(j[T.__cacheKey].usedTimes--,de.usedTimes===0&&E(M)),T.__cacheKey=J,T.__webglTexture=j[J].texture}return N}function oe(T,M,N){let Z=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=i.TEXTURE_3D);const j=K(T,M),J=M.source;t.bindTexture(Z,T.__webglTexture,i.TEXTURE0+N);const de=n.get(J);if(J.version!==de.__version||j===!0){t.activeTexture(i.TEXTURE0+N);const ae=Ye.getPrimaries(Ye.workingColorSpace),ce=M.colorSpace===Wt?null:Ye.getPrimaries(M.colorSpace),ye=M.colorSpace===Wt||ae===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ue=c(M)&&d(M.image)===!1;let $=g(M.image,Ue,!1,s.maxTextureSize);$=Ie(M,$);const Xe=d($)||a,Ge=r.convert(M.format,M.colorSpace);let Te=r.convert(M.type),ge=b(M.internalFormat,Ge,Te,M.colorSpace,M.isVideoTexture);H(Z,M,Xe);let he;const Le=M.mipmaps,We=a&&M.isVideoTexture!==!0&&ge!==fl,nt=de.__version===void 0||j===!0,Be=R(M,$,Xe);if(M.isDepthTexture)ge=i.DEPTH_COMPONENT,a?M.type===yn?ge=i.DEPTH_COMPONENT32F:M.type===Mn?ge=i.DEPTH_COMPONENT24:M.type===zn?ge=i.DEPTH24_STENCIL8:ge=i.DEPTH_COMPONENT16:M.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===kn&&ge===i.DEPTH_COMPONENT&&M.type!==$r&&M.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Mn,Te=r.convert(M.type)),M.format===bi&&ge===i.DEPTH_COMPONENT&&(ge=i.DEPTH_STENCIL,M.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=zn,Te=r.convert(M.type))),nt&&(We?t.texStorage2D(i.TEXTURE_2D,1,ge,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,ge,$.width,$.height,0,Ge,Te,null));else if(M.isDataTexture)if(Le.length>0&&Xe){We&&nt&&t.texStorage2D(i.TEXTURE_2D,Be,ge,Le[0].width,Le[0].height);for(let ne=0,C=Le.length;ne<C;ne++)he=Le[ne],We?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,Ge,Te,he.data):t.texImage2D(i.TEXTURE_2D,ne,ge,he.width,he.height,0,Ge,Te,he.data);M.generateMipmaps=!1}else We?(nt&&t.texStorage2D(i.TEXTURE_2D,Be,ge,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,Ge,Te,$.data)):t.texImage2D(i.TEXTURE_2D,0,ge,$.width,$.height,0,Ge,Te,$.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,ge,Le[0].width,Le[0].height,$.depth);for(let ne=0,C=Le.length;ne<C;ne++)he=Le[ne],M.format!==$t?Ge!==null?We?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,$.depth,Ge,he.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,ge,he.width,he.height,$.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,$.depth,Ge,Te,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,ge,he.width,he.height,$.depth,0,Ge,Te,he.data)}else{We&&nt&&t.texStorage2D(i.TEXTURE_2D,Be,ge,Le[0].width,Le[0].height);for(let ne=0,C=Le.length;ne<C;ne++)he=Le[ne],M.format!==$t?Ge!==null?We?t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,Ge,he.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,Ge,Te,he.data):t.texImage2D(i.TEXTURE_2D,ne,ge,he.width,he.height,0,Ge,Te,he.data)}else if(M.isDataArrayTexture)We?(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,ge,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Ge,Te,$.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,$.width,$.height,$.depth,0,Ge,Te,$.data);else if(M.isData3DTexture)We?(nt&&t.texStorage3D(i.TEXTURE_3D,Be,ge,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Ge,Te,$.data)):t.texImage3D(i.TEXTURE_3D,0,ge,$.width,$.height,$.depth,0,Ge,Te,$.data);else if(M.isFramebufferTexture){if(nt)if(We)t.texStorage2D(i.TEXTURE_2D,Be,ge,$.width,$.height);else{let ne=$.width,C=$.height;for(let se=0;se<Be;se++)t.texImage2D(i.TEXTURE_2D,se,ge,ne,C,0,Ge,Te,null),ne>>=1,C>>=1}}else if(Le.length>0&&Xe){We&&nt&&t.texStorage2D(i.TEXTURE_2D,Be,ge,Le[0].width,Le[0].height);for(let ne=0,C=Le.length;ne<C;ne++)he=Le[ne],We?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Ge,Te,he):t.texImage2D(i.TEXTURE_2D,ne,ge,Ge,Te,he);M.generateMipmaps=!1}else We?(nt&&t.texStorage2D(i.TEXTURE_2D,Be,ge,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ge,Te,$)):t.texImage2D(i.TEXTURE_2D,0,ge,Ge,Te,$);x(M,Xe)&&v(Z),de.__version=J.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function me(T,M,N){if(M.image.length!==6)return;const Z=K(T,M),j=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);const J=n.get(j);if(j.version!==J.__version||Z===!0){t.activeTexture(i.TEXTURE0+N);const de=Ye.getPrimaries(Ye.workingColorSpace),ae=M.colorSpace===Wt?null:Ye.getPrimaries(M.colorSpace),ce=M.colorSpace===Wt||de===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const ye=M.isCompressedTexture||M.image[0].isCompressedTexture,Ue=M.image[0]&&M.image[0].isDataTexture,$=[];for(let ne=0;ne<6;ne++)!ye&&!Ue?$[ne]=g(M.image[ne],!1,!0,s.maxCubemapSize):$[ne]=Ue?M.image[ne].image:M.image[ne],$[ne]=Ie(M,$[ne]);const Xe=$[0],Ge=d(Xe)||a,Te=r.convert(M.format,M.colorSpace),ge=r.convert(M.type),he=b(M.internalFormat,Te,ge,M.colorSpace),Le=a&&M.isVideoTexture!==!0,We=J.__version===void 0||Z===!0;let nt=R(M,Xe,Ge);H(i.TEXTURE_CUBE_MAP,M,Ge);let Be;if(ye){Le&&We&&t.texStorage2D(i.TEXTURE_CUBE_MAP,nt,he,Xe.width,Xe.height);for(let ne=0;ne<6;ne++){Be=$[ne].mipmaps;for(let C=0;C<Be.length;C++){const se=Be[C];M.format!==$t?Te!==null?Le?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Te,se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,he,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,0,0,se.width,se.height,Te,ge,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C,he,se.width,se.height,0,Te,ge,se.data)}}}else{Be=M.mipmaps,Le&&We&&(Be.length>0&&nt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,nt,he,$[0].width,$[0].height));for(let ne=0;ne<6;ne++)if(Ue){Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,$[ne].width,$[ne].height,Te,ge,$[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,he,$[ne].width,$[ne].height,0,Te,ge,$[ne].data);for(let C=0;C<Be.length;C++){const re=Be[C].image[ne].image;Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,re.width,re.height,Te,ge,re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,he,re.width,re.height,0,Te,ge,re.data)}}else{Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te,ge,$[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,he,Te,ge,$[ne]);for(let C=0;C<Be.length;C++){const se=Be[C];Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,0,0,Te,ge,se.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,C+1,he,Te,ge,se.image[ne])}}}x(M,Ge)&&v(i.TEXTURE_CUBE_MAP),J.__version=j.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function pe(T,M,N,Z,j,J){const de=r.convert(N.format,N.colorSpace),ae=r.convert(N.type),ce=b(N.internalFormat,de,ae,N.colorSpace);if(!n.get(M).__hasExternalTextures){const Ue=Math.max(1,M.width>>J),$=Math.max(1,M.height>>J);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,J,ce,Ue,$,M.depth,0,de,ae,null):t.texImage2D(j,J,ce,Ue,$,0,de,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ue(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,n.get(N).__webglTexture,0,we(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,n.get(N).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(T,M,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let Z=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||ue(M)){const j=M.depthTexture;j&&j.isDepthTexture&&(j.type===yn?Z=i.DEPTH_COMPONENT32F:j.type===Mn&&(Z=i.DEPTH_COMPONENT24));const J=we(M);ue(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,Z,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,Z,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,Z,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){const Z=we(M);N&&ue(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,M.width,M.height):ue(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const Z=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let j=0;j<Z.length;j++){const J=Z[j],de=r.convert(J.format,J.colorSpace),ae=r.convert(J.type),ce=b(J.internalFormat,de,ae,J.colorSpace),ye=we(M);N&&ue(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,ce,M.width,M.height):ue(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,ce,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ce,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const Z=n.get(M.depthTexture).__webglTexture,j=we(M);if(M.depthTexture.format===kn)ue(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(M.depthTexture.format===bi)ue(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function xe(T){const M=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Pe(M.__webglFramebuffer,T)}else if(N){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]=i.createRenderbuffer(),Re(M.__webglDepthbuffer[Z],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Re(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(T,M,N){const Z=n.get(T);M!==void 0&&pe(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&xe(T)}function I(T){const M=T.texture,N=n.get(T),Z=n.get(M);T.addEventListener("dispose",O),T.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,o.memory.textures++);const j=T.isWebGLCubeRenderTarget===!0,J=T.isWebGLMultipleRenderTargets===!0,de=d(T)||a;if(j){N.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[ae]=[];for(let ce=0;ce<M.mipmaps.length;ce++)N.__webglFramebuffer[ae][ce]=i.createFramebuffer()}else N.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)N.__webglFramebuffer[ae]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(J)if(s.drawBuffers){const ae=T.texture;for(let ce=0,ye=ae.length;ce<ye;ce++){const Ue=n.get(ae[ce]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ue(T)===!1){const ae=J?M:[M];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ce=0;ce<ae.length;ce++){const ye=ae[ce];N.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ce]);const Ue=r.convert(ye.format,ye.colorSpace),$=r.convert(ye.type),Xe=b(ye.internalFormat,Ue,$,ye.colorSpace,T.isXRRenderTarget===!0),Ge=we(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Xe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,N.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),H(i.TEXTURE_CUBE_MAP,M,de);for(let ae=0;ae<6;ae++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)pe(N.__webglFramebuffer[ae][ce],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ce);else pe(N.__webglFramebuffer[ae],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);x(M,de)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){const ae=T.texture;for(let ce=0,ye=ae.length;ce<ye;ce++){const Ue=ae[ce],$=n.get(Ue);t.bindTexture(i.TEXTURE_2D,$.__webglTexture),H(i.TEXTURE_2D,Ue,de),pe(N.__webglFramebuffer,T,Ue,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),x(Ue,de)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ae=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,Z.__webglTexture),H(ae,M,de),a&&M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)pe(N.__webglFramebuffer[ce],T,M,i.COLOR_ATTACHMENT0,ae,ce);else pe(N.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,ae,0);x(M,de)&&v(ae),t.unbindTexture()}T.depthBuffer&&xe(T)}function Tt(T){const M=d(T)||a,N=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Z=0,j=N.length;Z<j;Z++){const J=N[Z];if(x(J,M)){const de=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ae=n.get(J).__webglTexture;t.bindTexture(de,ae),v(de),t.unbindTexture()}}}function _e(T){if(a&&T.samples>0&&ue(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],N=T.width,Z=T.height;let j=i.COLOR_BUFFER_BIT;const J=[],de=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(T),ce=T.isWebGLMultipleRenderTargets===!0;if(ce)for(let ye=0;ye<M.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){J.push(i.COLOR_ATTACHMENT0+ye),T.depthBuffer&&J.push(de);const Ue=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Ue===!1&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ce&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[ye]),Ue===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[de]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[de])),ce){const $=n.get(M[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,N,Z,0,0,N,Z,j,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let ye=0;ye<M.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ae.__webglColorRenderbuffer[ye]);const Ue=n.get(M[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function we(T){return Math.min(s.maxSamples,T.samples)}function ue(T){const M=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function et(T){const M=o.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function Ie(T,M){const N=T.colorSpace,Z=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Br||N!==fn&&N!==Wt&&(Ye.getTransfer(N)===Je?a===!1?e.has("EXT_sRGB")===!0&&Z===$t?(T.format=Br,T.minFilter=Ht,T.generateMipmaps=!1):M=vl.sRGBToLinear(M):(Z!==$t||j!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),M}this.allocateTextureUnit=L,this.resetTextureUnits=Q,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=Ve,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ue}function tm(i,e,t){const n=t.isWebGL2;function s(r,o=Wt){let a;const l=Ye.getTransfer(o);if(r===bn)return i.UNSIGNED_BYTE;if(r===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(r===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===bc)return i.BYTE;if(r===Ec)return i.SHORT;if(r===$r)return i.UNSIGNED_SHORT;if(r===ol)return i.INT;if(r===Mn)return i.UNSIGNED_INT;if(r===yn)return i.FLOAT;if(r===Yi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Tc)return i.ALPHA;if(r===$t)return i.RGBA;if(r===wc)return i.LUMINANCE;if(r===Ac)return i.LUMINANCE_ALPHA;if(r===kn)return i.DEPTH_COMPONENT;if(r===bi)return i.DEPTH_STENCIL;if(r===Br)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Rc)return i.RED;if(r===hl)return i.RED_INTEGER;if(r===Cc)return i.RG;if(r===ul)return i.RG_INTEGER;if(r===dl)return i.RGBA_INTEGER;if(r===Zs||r===Js||r===Qs||r===er)if(l===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Zs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Zs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Js)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===er)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ya||r===xa||r===Sa||r===ba)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ya)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ba)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ea||r===Ta)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ea)return l===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ta)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wa||r===Aa||r===Ra||r===Ca||r===Pa||r===La||r===Da||r===Ia||r===Ua||r===Na||r===Fa||r===Oa||r===Ba||r===za)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===wa)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Aa)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ra)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ca)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pa)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===La)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Da)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ia)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ua)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Na)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fa)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Oa)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ba)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===za)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tr||r===ka||r===Ga)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===tr)return l===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ka)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ga)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pc||r===Ha||r===Va||r===Wa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===tr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ha)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Va)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class nm extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vt extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const im={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const g of e.hand.values()){const d=t.getJointPose(g,n),c=this._getHandJoint(h,g);d!==null&&(c.matrix.fromArray(d.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=d.radius),c.visible=d!==null}const u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],p=u.position.distanceTo(f.position),m=.02,_=.005;h.inputState.pinching&&p>m+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=m-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(im)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sm extends wi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,f=null,p=null,m=null,_=null;const g=t.getContextAttributes();let d=null,c=null;const x=[],v=[],b=new Ee;let R=null;const w=new Ft;w.layers.enable(1),w.viewport=new Qe;const A=new Ft;A.layers.enable(2),A.viewport=new Qe;const O=[w,A],y=new nm;y.layers.enable(1),y.layers.enable(2);let E=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=x[H];return K===void 0&&(K=new Er,x[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=x[H];return K===void 0&&(K=new Er,x[H]=K),K.getGripSpace()},this.getHand=function(H){let K=x[H];return K===void 0&&(K=new Er,x[H]=K),K.getHandSpace()};function G(H){const K=v.indexOf(H.inputSource);if(K===-1)return;const oe=x[K];oe!==void 0&&(oe.update(H.inputSource,H.frame,h||o),oe.dispatchEvent({type:H.type,data:H.inputSource}))}function Q(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",L);for(let H=0;H<x.length;H++){const K=v[H];K!==null&&(v[H]=null,x[H].disconnect(K))}E=null,k=null,e.setRenderTarget(d),m=null,p=null,f=null,s=null,c=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(H){h=H},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),c=new Hn(m.framebufferWidth,m.framebufferHeight,{format:$t,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,oe=null,me=null;g.depth&&(me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?bi:kn,oe=g.stencil?zn:Mn);const pe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(pe),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),c=new Hn(p.textureWidth,p.textureHeight,{format:$t,type:bn,depthTexture:new Cl(p.textureWidth,p.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Re=e.properties.get(c);Re.__ignoreDepthValues=p.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(H){for(let K=0;K<H.removed.length;K++){const oe=H.removed[K],me=v.indexOf(oe);me>=0&&(v[me]=null,x[me].disconnect(oe))}for(let K=0;K<H.added.length;K++){const oe=H.added[K];let me=v.indexOf(oe);if(me===-1){for(let Re=0;Re<x.length;Re++)if(Re>=v.length){v.push(oe),me=Re;break}else if(v[Re]===null){v[Re]=oe,me=Re;break}if(me===-1)break}const pe=x[me];pe&&pe.connect(oe)}}const B=new P,V=new P;function q(H,K,oe){B.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(oe.matrixWorld);const me=B.distanceTo(V),pe=K.projectionMatrix.elements,Re=oe.projectionMatrix.elements,Pe=pe[14]/(pe[10]-1),xe=pe[14]/(pe[10]+1),Ve=(pe[9]+1)/pe[5],I=(pe[9]-1)/pe[5],Tt=(pe[8]-1)/pe[0],_e=(Re[8]+1)/Re[0],we=Pe*Tt,ue=Pe*_e,et=me/(-Tt+_e),Ie=et*-Tt;K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ie),H.translateZ(et),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const T=Pe+et,M=xe+et,N=we-Ie,Z=ue+(me-Ie),j=Ve*xe/M*T,J=I*xe/M*T;H.projectionMatrix.makePerspective(N,Z,j,J,T,M),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function W(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;y.near=A.near=w.near=H.near,y.far=A.far=w.far=H.far,(E!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,k=y.far);const K=H.parent,oe=y.cameras;W(y,K);for(let me=0;me<oe.length;me++)W(oe[me],K);oe.length===2?q(y,w,A):y.projectionMatrix.copy(w.projectionMatrix),X(H,y,K)};function X(H,K,oe){oe===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(oe.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ki*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(H){l=H,p!==null&&(p.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let Y=null;function ee(H,K){if(u=K.getViewerPose(h||o),_=K,u!==null){const oe=u.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let me=!1;oe.length!==y.cameras.length&&(y.cameras.length=0,me=!0);for(let pe=0;pe<oe.length;pe++){const Re=oe[pe];let Pe=null;if(m!==null)Pe=m.getViewport(Re);else{const Ve=f.getViewSubImage(p,Re);Pe=Ve.viewport,pe===0&&(e.setRenderTargetTextures(c,Ve.colorTexture,p.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(c))}let xe=O[pe];xe===void 0&&(xe=new Ft,xe.layers.enable(pe),xe.viewport=new Qe,O[pe]=xe),xe.matrix.fromArray(Re.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Re.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),pe===0&&(y.matrix.copy(xe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),me===!0&&y.cameras.push(xe)}}for(let oe=0;oe<x.length;oe++){const me=v[oe],pe=x[oe];me!==null&&pe!==void 0&&pe.update(me,K,h||o)}Y&&Y(H,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}const te=new Al;te.setAnimationLoop(ee),this.setAnimationLoop=function(H){Y=H},this.dispose=function(){}}}function rm(i,e){function t(d,c){d.matrixAutoUpdate===!0&&d.updateMatrix(),c.value.copy(d.matrix)}function n(d,c){c.color.getRGB(d.fogColor.value,El(i)),c.isFog?(d.fogNear.value=c.near,d.fogFar.value=c.far):c.isFogExp2&&(d.fogDensity.value=c.density)}function s(d,c,x,v,b){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(d,c):c.isMeshToonMaterial?(r(d,c),f(d,c)):c.isMeshPhongMaterial?(r(d,c),u(d,c)):c.isMeshStandardMaterial?(r(d,c),p(d,c),c.isMeshPhysicalMaterial&&m(d,c,b)):c.isMeshMatcapMaterial?(r(d,c),_(d,c)):c.isMeshDepthMaterial?r(d,c):c.isMeshDistanceMaterial?(r(d,c),g(d,c)):c.isMeshNormalMaterial?r(d,c):c.isLineBasicMaterial?(o(d,c),c.isLineDashedMaterial&&a(d,c)):c.isPointsMaterial?l(d,c,x,v):c.isSpriteMaterial?h(d,c):c.isShadowMaterial?(d.color.value.copy(c.color),d.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(d,c){d.opacity.value=c.opacity,c.color&&d.diffuse.value.copy(c.color),c.emissive&&d.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(d.map.value=c.map,t(c.map,d.mapTransform)),c.alphaMap&&(d.alphaMap.value=c.alphaMap,t(c.alphaMap,d.alphaMapTransform)),c.bumpMap&&(d.bumpMap.value=c.bumpMap,t(c.bumpMap,d.bumpMapTransform),d.bumpScale.value=c.bumpScale,c.side===gt&&(d.bumpScale.value*=-1)),c.normalMap&&(d.normalMap.value=c.normalMap,t(c.normalMap,d.normalMapTransform),d.normalScale.value.copy(c.normalScale),c.side===gt&&d.normalScale.value.negate()),c.displacementMap&&(d.displacementMap.value=c.displacementMap,t(c.displacementMap,d.displacementMapTransform),d.displacementScale.value=c.displacementScale,d.displacementBias.value=c.displacementBias),c.emissiveMap&&(d.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,d.emissiveMapTransform)),c.specularMap&&(d.specularMap.value=c.specularMap,t(c.specularMap,d.specularMapTransform)),c.alphaTest>0&&(d.alphaTest.value=c.alphaTest);const x=e.get(c).envMap;if(x&&(d.envMap.value=x,d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=c.reflectivity,d.ior.value=c.ior,d.refractionRatio.value=c.refractionRatio),c.lightMap){d.lightMap.value=c.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=c.lightMapIntensity*v,t(c.lightMap,d.lightMapTransform)}c.aoMap&&(d.aoMap.value=c.aoMap,d.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,d.aoMapTransform))}function o(d,c){d.diffuse.value.copy(c.color),d.opacity.value=c.opacity,c.map&&(d.map.value=c.map,t(c.map,d.mapTransform))}function a(d,c){d.dashSize.value=c.dashSize,d.totalSize.value=c.dashSize+c.gapSize,d.scale.value=c.scale}function l(d,c,x,v){d.diffuse.value.copy(c.color),d.opacity.value=c.opacity,d.size.value=c.size*x,d.scale.value=v*.5,c.map&&(d.map.value=c.map,t(c.map,d.uvTransform)),c.alphaMap&&(d.alphaMap.value=c.alphaMap,t(c.alphaMap,d.alphaMapTransform)),c.alphaTest>0&&(d.alphaTest.value=c.alphaTest)}function h(d,c){d.diffuse.value.copy(c.color),d.opacity.value=c.opacity,d.rotation.value=c.rotation,c.map&&(d.map.value=c.map,t(c.map,d.mapTransform)),c.alphaMap&&(d.alphaMap.value=c.alphaMap,t(c.alphaMap,d.alphaMapTransform)),c.alphaTest>0&&(d.alphaTest.value=c.alphaTest)}function u(d,c){d.specular.value.copy(c.specular),d.shininess.value=Math.max(c.shininess,1e-4)}function f(d,c){c.gradientMap&&(d.gradientMap.value=c.gradientMap)}function p(d,c){d.metalness.value=c.metalness,c.metalnessMap&&(d.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,d.metalnessMapTransform)),d.roughness.value=c.roughness,c.roughnessMap&&(d.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,d.roughnessMapTransform)),e.get(c).envMap&&(d.envMapIntensity.value=c.envMapIntensity)}function m(d,c,x){d.ior.value=c.ior,c.sheen>0&&(d.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),d.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(d.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,d.sheenColorMapTransform)),c.sheenRoughnessMap&&(d.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,d.sheenRoughnessMapTransform))),c.clearcoat>0&&(d.clearcoat.value=c.clearcoat,d.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(d.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,d.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(d.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===gt&&d.clearcoatNormalScale.value.negate())),c.iridescence>0&&(d.iridescence.value=c.iridescence,d.iridescenceIOR.value=c.iridescenceIOR,d.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(d.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,d.iridescenceMapTransform)),c.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),c.transmission>0&&(d.transmission.value=c.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),c.transmissionMap&&(d.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,d.transmissionMapTransform)),d.thickness.value=c.thickness,c.thicknessMap&&(d.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=c.attenuationDistance,d.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(d.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(d.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=c.specularIntensity,d.specularColor.value.copy(c.specularColor),c.specularColorMap&&(d.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,d.specularColorMapTransform)),c.specularIntensityMap&&(d.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,c){c.matcap&&(d.matcap.value=c.matcap)}function g(d,c){const x=e.get(c).light;d.referencePosition.value.setFromMatrixPosition(x.matrixWorld),d.nearDistance.value=x.shadow.camera.near,d.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function am(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const b=v.program;n.uniformBlockBinding(x,b)}function h(x,v){let b=s[x.id];b===void 0&&(_(x),b=u(x),s[x.id]=b,x.addEventListener("dispose",d));const R=v.program;n.updateUBOMapping(x,R);const w=e.render.frame;r[x.id]!==w&&(p(x),r[x.id]=w)}function u(x){const v=f();x.__bindingPointIndex=v;const b=i.createBuffer(),R=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,b),b}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const v=s[x.id],b=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,A=b.length;w<A;w++){const O=Array.isArray(b[w])?b[w]:[b[w]];for(let y=0,E=O.length;y<E;y++){const k=O[y];if(m(k,w,y,R)===!0){const G=k.__offset,Q=Array.isArray(k.value)?k.value:[k.value];let L=0;for(let B=0;B<Q.length;B++){const V=Q[B],q=g(V);typeof V=="number"||typeof V=="boolean"?(k.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,G+L,k.__data)):V.isMatrix3?(k.__data[0]=V.elements[0],k.__data[1]=V.elements[1],k.__data[2]=V.elements[2],k.__data[3]=0,k.__data[4]=V.elements[3],k.__data[5]=V.elements[4],k.__data[6]=V.elements[5],k.__data[7]=0,k.__data[8]=V.elements[6],k.__data[9]=V.elements[7],k.__data[10]=V.elements[8],k.__data[11]=0):(V.toArray(k.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,v,b,R){const w=x.value,A=v+"_"+b;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const O=R[A];if(typeof w=="number"||typeof w=="boolean"){if(O!==w)return R[A]=w,!0}else if(O.equals(w)===!1)return O.copy(w),!0}return!1}function _(x){const v=x.uniforms;let b=0;const R=16;for(let A=0,O=v.length;A<O;A++){const y=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,k=y.length;E<k;E++){const G=y[E],Q=Array.isArray(G.value)?G.value:[G.value];for(let L=0,B=Q.length;L<B;L++){const V=Q[L],q=g(V),W=b%R;W!==0&&R-W<q.boundary&&(b+=R-W),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=q.storage}}}const w=b%R;return w>0&&(b+=R-w),x.__size=b,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function d(x){const v=x.target;v.removeEventListener("dispose",d);const b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function c(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:h,dispose:c}}class Nl{constructor(e={}){const{canvas:t=th(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,d=null;const c=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this._useLegacyLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1;const v=this;let b=!1,R=0,w=0,A=null,O=-1,y=null;const E=new Qe,k=new Qe;let G=null;const Q=new Oe(0);let L=0,B=t.width,V=t.height,q=1,W=null,X=null;const Y=new Qe(0,0,B,V),ee=new Qe(0,0,B,V);let te=!1;const H=new Qr;let K=!1,oe=!1,me=null;const pe=new Ze,Re=new Ee,Pe=new P,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return A===null?q:1}let I=n;function Tt(S,D){for(let F=0;F<S.length;F++){const z=S[F],U=t.getContext(z,D);if(U!==null)return U}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kr}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",se,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),I=Tt(D,S),I===null)throw Tt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let _e,we,ue,et,Ie,T,M,N,Z,j,J,de,ae,ce,ye,Ue,$,Xe,Ge,Te,ge,he,Le,We;function nt(){_e=new gf(I),we=new hf(I,_e,e),_e.init(we),he=new tm(I,_e,we),ue=new Qp(I,_e,we),et=new Mf(I),Ie=new zp,T=new em(I,_e,ue,Ie,we,he,et),M=new df(v),N=new mf(v),Z=new wh(I,we),Le=new lf(I,_e,Z,we),j=new _f(I,Z,et,Le),J=new bf(I,j,Z,et),Ge=new Sf(I,we,T),Ue=new uf(Ie),de=new Bp(v,M,N,_e,we,Le,Ue),ae=new rm(v,Ie),ce=new Gp,ye=new Yp(_e,we),Xe=new of(v,M,N,ue,J,p,l),$=new Jp(v,J,we),We=new am(I,et,we,ue),Te=new cf(I,_e,et,we),ge=new vf(I,_e,et,we),et.programs=de.programs,v.capabilities=we,v.extensions=_e,v.properties=Ie,v.renderLists=ce,v.shadowMap=$,v.state=ue,v.info=et}nt();const Be=new sm(v,I);this.xr=Be,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=_e.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=_e.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(B,V,!1))},this.getSize=function(S){return S.set(B,V)},this.setSize=function(S,D,F=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,V=D,t.width=Math.floor(S*q),t.height=Math.floor(D*q),F===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(B*q,V*q).floor()},this.setDrawingBufferSize=function(S,D,F){B=S,V=D,q=F,t.width=Math.floor(S*F),t.height=Math.floor(D*F),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,D,F,z){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,D,F,z),ue.viewport(E.copy(Y).multiplyScalar(q).floor())},this.getScissor=function(S){return S.copy(ee)},this.setScissor=function(S,D,F,z){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,D,F,z),ue.scissor(k.copy(ee).multiplyScalar(q).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(S){ue.setScissorTest(te=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(S=!0,D=!0,F=!0){let z=0;if(S){let U=!1;if(A!==null){const le=A.texture.format;U=le===dl||le===ul||le===hl}if(U){const le=A.texture.type,fe=le===bn||le===Mn||le===$r||le===zn||le===ll||le===cl,Me=Xe.getClearColor(),be=Xe.getClearAlpha(),Ne=Me.r,Ae=Me.g,Ce=Me.b;fe?(m[0]=Ne,m[1]=Ae,m[2]=Ce,m[3]=be,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Ne,_[1]=Ae,_[2]=Ce,_[3]=be,I.clearBufferiv(I.COLOR,0,_))}else z|=I.COLOR_BUFFER_BIT}D&&(z|=I.DEPTH_BUFFER_BIT),F&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ce.dispose(),ye.dispose(),Ie.dispose(),M.dispose(),N.dispose(),J.dispose(),Le.dispose(),We.dispose(),de.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",wt),Be.removeEventListener("sessionend",je),me&&(me.dispose(),me=null),At.stop()};function ne(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=et.autoReset,D=$.enabled,F=$.autoUpdate,z=$.needsUpdate,U=$.type;nt(),et.autoReset=S,$.enabled=D,$.autoUpdate=F,$.needsUpdate=z,$.type=U}function se(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function re(S){const D=S.target;D.removeEventListener("dispose",re),Se(D)}function Se(S){ve(S),Ie.remove(S)}function ve(S){const D=Ie.get(S).programs;D!==void 0&&(D.forEach(function(F){de.releaseProgram(F)}),S.isShaderMaterial&&de.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,F,z,U,le){D===null&&(D=xe);const fe=U.isMesh&&U.matrixWorld.determinant()<0,Me=kl(S,D,F,z,U);ue.setMaterial(z,fe);let be=F.index,Ne=1;if(z.wireframe===!0){if(be=j.getWireframeAttribute(F),be===void 0)return;Ne=2}const Ae=F.drawRange,Ce=F.attributes.position;let rt=Ae.start*Ne,Dt=(Ae.start+Ae.count)*Ne;le!==null&&(rt=Math.max(rt,le.start*Ne),Dt=Math.min(Dt,(le.start+le.count)*Ne)),be!==null?(rt=Math.max(rt,0),Dt=Math.min(Dt,be.count)):Ce!=null&&(rt=Math.max(rt,0),Dt=Math.min(Dt,Ce.count));const pt=Dt-rt;if(pt<0||pt===1/0)return;Le.setup(U,z,Me,F,be);let en,tt=Te;if(be!==null&&(en=Z.get(be),tt=ge,tt.setIndex(en)),U.isMesh)z.wireframe===!0?(ue.setLineWidth(z.wireframeLinewidth*Ve()),tt.setMode(I.LINES)):tt.setMode(I.TRIANGLES);else if(U.isLine){let ze=z.linewidth;ze===void 0&&(ze=1),ue.setLineWidth(ze*Ve()),U.isLineSegments?tt.setMode(I.LINES):U.isLineLoop?tt.setMode(I.LINE_LOOP):tt.setMode(I.LINE_STRIP)}else U.isPoints?tt.setMode(I.POINTS):U.isSprite&&tt.setMode(I.TRIANGLES);if(U.isBatchedMesh)tt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)tt.renderInstances(rt,pt,U.count);else if(F.isInstancedBufferGeometry){const ze=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,qs=Math.min(F.instanceCount,ze);tt.renderInstances(rt,pt,qs)}else tt.render(rt,pt)};function Ke(S,D,F){S.transparent===!0&&S.side===Ot&&S.forceSinglePass===!1?(S.side=gt,S.needsUpdate=!0,Qi(S,D,F),S.side=Tn,S.needsUpdate=!0,Qi(S,D,F),S.side=Ot):Qi(S,D,F)}this.compile=function(S,D,F=null){F===null&&(F=S),d=ye.get(F),d.init(),x.push(d),F.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),S!==F&&S.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(v._useLegacyLights);const z=new Set;return S.traverse(function(U){const le=U.material;if(le)if(Array.isArray(le))for(let fe=0;fe<le.length;fe++){const Me=le[fe];Ke(Me,F,U),z.add(Me)}else Ke(le,F,U),z.add(le)}),x.pop(),d=null,z},this.compileAsync=function(S,D,F=null){const z=this.compile(S,D,F);return new Promise(U=>{function le(){if(z.forEach(function(fe){Ie.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){U(S);return}setTimeout(le,10)}_e.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let $e=null;function ft(S){$e&&$e(S)}function wt(){At.stop()}function je(){At.start()}const At=new Al;At.setAnimationLoop(ft),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(S){$e=S,Be.setAnimationLoop(S),S===null?At.stop():At.start()},Be.addEventListener("sessionstart",wt),Be.addEventListener("sessionend",je),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(D),D=Be.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,D,A),d=ye.get(S,x.length),d.init(),x.push(d),pe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H.setFromProjectionMatrix(pe),oe=this.localClippingEnabled,K=Ue.init(this.clippingPlanes,oe),g=ce.get(S,c.length),g.init(),c.push(g),jt(S,D,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(W,X),this.info.render.frame++,K===!0&&Ue.beginShadows();const F=d.state.shadowsArray;if($.render(F,S,D),K===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xe.render(g,S),d.setupLights(v._useLegacyLights),D.isArrayCamera){const z=D.cameras;for(let U=0,le=z.length;U<le;U++){const fe=z[U];la(g,S,fe,fe.viewport)}}else la(g,S,D);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(v,S,D),Le.resetDefaultState(),O=-1,y=null,x.pop(),x.length>0?d=x[x.length-1]:d=null,c.pop(),c.length>0?g=c[c.length-1]:g=null};function jt(S,D,F,z){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||H.intersectsSprite(S)){z&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pe);const fe=J.update(S),Me=S.material;Me.visible&&g.push(S,fe,Me,F,Pe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||H.intersectsObject(S))){const fe=J.update(S),Me=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Pe.copy(fe.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4(pe)),Array.isArray(Me)){const be=fe.groups;for(let Ne=0,Ae=be.length;Ne<Ae;Ne++){const Ce=be[Ne],rt=Me[Ce.materialIndex];rt&&rt.visible&&g.push(S,fe,rt,F,Pe.z,Ce)}}else Me.visible&&g.push(S,fe,Me,F,Pe.z,null)}}const le=S.children;for(let fe=0,Me=le.length;fe<Me;fe++)jt(le[fe],D,F,z)}function la(S,D,F,z){const U=S.opaque,le=S.transmissive,fe=S.transparent;d.setupLightsView(F),K===!0&&Ue.setGlobalState(v.clippingPlanes,F),le.length>0&&zl(U,le,D,F),z&&ue.viewport(E.copy(z)),U.length>0&&Ji(U,D,F),le.length>0&&Ji(le,D,F),fe.length>0&&Ji(fe,D,F),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function zl(S,D,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const le=we.isWebGL2;me===null&&(me=new Hn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Yi:bn,minFilter:qi,samples:le?4:0})),v.getDrawingBufferSize(Re),le?me.setSize(Re.x,Re.y):me.setSize(Fs(Re.x),Fs(Re.y));const fe=v.getRenderTarget();v.setRenderTarget(me),v.getClearColor(Q),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Me=v.toneMapping;v.toneMapping=Sn,Ji(S,F,z),T.updateMultisampleRenderTarget(me),T.updateRenderTargetMipmap(me);let be=!1;for(let Ne=0,Ae=D.length;Ne<Ae;Ne++){const Ce=D[Ne],rt=Ce.object,Dt=Ce.geometry,pt=Ce.material,en=Ce.group;if(pt.side===Ot&&rt.layers.test(z.layers)){const tt=pt.side;pt.side=gt,pt.needsUpdate=!0,ca(rt,F,z,Dt,pt,en),pt.side=tt,pt.needsUpdate=!0,be=!0}}be===!0&&(T.updateMultisampleRenderTarget(me),T.updateRenderTargetMipmap(me)),v.setRenderTarget(fe),v.setClearColor(Q,L),v.toneMapping=Me}function Ji(S,D,F){const z=D.isScene===!0?D.overrideMaterial:null;for(let U=0,le=S.length;U<le;U++){const fe=S[U],Me=fe.object,be=fe.geometry,Ne=z===null?fe.material:z,Ae=fe.group;Me.layers.test(F.layers)&&ca(Me,D,F,be,Ne,Ae)}}function ca(S,D,F,z,U,le){S.onBeforeRender(v,D,F,z,U,le),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(v,D,F,z,S,le),U.transparent===!0&&U.side===Ot&&U.forceSinglePass===!1?(U.side=gt,U.needsUpdate=!0,v.renderBufferDirect(F,D,z,U,S,le),U.side=Tn,U.needsUpdate=!0,v.renderBufferDirect(F,D,z,U,S,le),U.side=Ot):v.renderBufferDirect(F,D,z,U,S,le),S.onAfterRender(v,D,F,z,U,le)}function Qi(S,D,F){D.isScene!==!0&&(D=xe);const z=Ie.get(S),U=d.state.lights,le=d.state.shadowsArray,fe=U.state.version,Me=de.getParameters(S,U.state,le,D,F),be=de.getProgramCacheKey(Me);let Ne=z.programs;z.environment=S.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(S.isMeshStandardMaterial?N:M).get(S.envMap||z.environment),Ne===void 0&&(S.addEventListener("dispose",re),Ne=new Map,z.programs=Ne);let Ae=Ne.get(be);if(Ae!==void 0){if(z.currentProgram===Ae&&z.lightsStateVersion===fe)return ua(S,Me),Ae}else Me.uniforms=de.getUniforms(S),S.onBuild(F,Me,v),S.onBeforeCompile(Me,v),Ae=de.acquireProgram(Me,be),Ne.set(be,Ae),z.uniforms=Me.uniforms;const Ce=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=Ue.uniform),ua(S,Me),z.needsLights=Hl(S),z.lightsStateVersion=fe,z.needsLights&&(Ce.ambientLightColor.value=U.state.ambient,Ce.lightProbe.value=U.state.probe,Ce.directionalLights.value=U.state.directional,Ce.directionalLightShadows.value=U.state.directionalShadow,Ce.spotLights.value=U.state.spot,Ce.spotLightShadows.value=U.state.spotShadow,Ce.rectAreaLights.value=U.state.rectArea,Ce.ltc_1.value=U.state.rectAreaLTC1,Ce.ltc_2.value=U.state.rectAreaLTC2,Ce.pointLights.value=U.state.point,Ce.pointLightShadows.value=U.state.pointShadow,Ce.hemisphereLights.value=U.state.hemi,Ce.directionalShadowMap.value=U.state.directionalShadowMap,Ce.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ce.spotShadowMap.value=U.state.spotShadowMap,Ce.spotLightMatrix.value=U.state.spotLightMatrix,Ce.spotLightMap.value=U.state.spotLightMap,Ce.pointShadowMap.value=U.state.pointShadowMap,Ce.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ae,z.uniformsList=null,Ae}function ha(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Cs.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function ua(S,D){const F=Ie.get(S);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function kl(S,D,F,z,U){D.isScene!==!0&&(D=xe),T.resetTextureUnits();const le=D.fog,fe=z.isMeshStandardMaterial?D.environment:null,Me=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:fn,be=(z.isMeshStandardMaterial?N:M).get(z.envMap||fe),Ne=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ae=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ce=!!F.morphAttributes.position,rt=!!F.morphAttributes.normal,Dt=!!F.morphAttributes.color;let pt=Sn;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pt=v.toneMapping);const en=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,tt=en!==void 0?en.length:0,ze=Ie.get(z),qs=d.state.lights;if(K===!0&&(oe===!0||S!==y)){const Bt=S===y&&z.id===O;Ue.setState(z,S,Bt)}let it=!1;z.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==qs.state.version||ze.outputColorSpace!==Me||U.isBatchedMesh&&ze.batching===!1||!U.isBatchedMesh&&ze.batching===!0||U.isInstancedMesh&&ze.instancing===!1||!U.isInstancedMesh&&ze.instancing===!0||U.isSkinnedMesh&&ze.skinning===!1||!U.isSkinnedMesh&&ze.skinning===!0||U.isInstancedMesh&&ze.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ze.instancingColor===!1&&U.instanceColor!==null||ze.envMap!==be||z.fog===!0&&ze.fog!==le||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ue.numPlanes||ze.numIntersection!==Ue.numIntersection)||ze.vertexAlphas!==Ne||ze.vertexTangents!==Ae||ze.morphTargets!==Ce||ze.morphNormals!==rt||ze.morphColors!==Dt||ze.toneMapping!==pt||we.isWebGL2===!0&&ze.morphTargetsCount!==tt)&&(it=!0):(it=!0,ze.__version=z.version);let Rn=ze.currentProgram;it===!0&&(Rn=Qi(z,D,U));let da=!1,Ri=!1,Ys=!1;const Mt=Rn.getUniforms(),Cn=ze.uniforms;if(ue.useProgram(Rn.program)&&(da=!0,Ri=!0,Ys=!0),z.id!==O&&(O=z.id,Ri=!0),da||y!==S){Mt.setValue(I,"projectionMatrix",S.projectionMatrix),Mt.setValue(I,"viewMatrix",S.matrixWorldInverse);const Bt=Mt.map.cameraPosition;Bt!==void 0&&Bt.setValue(I,Pe.setFromMatrixPosition(S.matrixWorld)),we.logarithmicDepthBuffer&&Mt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Mt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Ri=!0,Ys=!0)}if(U.isSkinnedMesh){Mt.setOptional(I,U,"bindMatrix"),Mt.setOptional(I,U,"bindMatrixInverse");const Bt=U.skeleton;Bt&&(we.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Mt.setValue(I,"boneTexture",Bt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(Mt.setOptional(I,U,"batchingTexture"),Mt.setValue(I,"batchingTexture",U._matricesTexture,T));const Ks=F.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0&&we.isWebGL2===!0)&&Ge.update(U,F,Rn),(Ri||ze.receiveShadow!==U.receiveShadow)&&(ze.receiveShadow=U.receiveShadow,Mt.setValue(I,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Cn.envMap.value=be,Cn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Ri&&(Mt.setValue(I,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&Gl(Cn,Ys),le&&z.fog===!0&&ae.refreshFogUniforms(Cn,le),ae.refreshMaterialUniforms(Cn,z,q,V,me),Cs.upload(I,ha(ze),Cn,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Cs.upload(I,ha(ze),Cn,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Mt.setValue(I,"center",U.center),Mt.setValue(I,"modelViewMatrix",U.modelViewMatrix),Mt.setValue(I,"normalMatrix",U.normalMatrix),Mt.setValue(I,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Bt=z.uniformsGroups;for(let $s=0,Vl=Bt.length;$s<Vl;$s++)if(we.isWebGL2){const fa=Bt[$s];We.update(fa,Rn),We.bind(fa,Rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rn}function Gl(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Hl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,D,F){Ie.get(S.texture).__webglTexture=D,Ie.get(S.depthTexture).__webglTexture=F;const z=Ie.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=F===void 0,z.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){const F=Ie.get(S);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,F=0){A=S,R=D,w=F;let z=!0,U=null,le=!1,fe=!1;if(S){const be=Ie.get(S);be.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(I.FRAMEBUFFER,null),z=!1):be.__webglFramebuffer===void 0?T.setupRenderTarget(S):be.__hasExternalTextures&&T.rebindTextures(S,Ie.get(S.texture).__webglTexture,Ie.get(S.depthTexture).__webglTexture);const Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(fe=!0);const Ae=Ie.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ae[D])?U=Ae[D][F]:U=Ae[D],le=!0):we.isWebGL2&&S.samples>0&&T.useMultisampledRTT(S)===!1?U=Ie.get(S).__webglMultisampledFramebuffer:Array.isArray(Ae)?U=Ae[F]:U=Ae,E.copy(S.viewport),k.copy(S.scissor),G=S.scissorTest}else E.copy(Y).multiplyScalar(q).floor(),k.copy(ee).multiplyScalar(q).floor(),G=te;if(ue.bindFramebuffer(I.FRAMEBUFFER,U)&&we.drawBuffers&&z&&ue.drawBuffers(S,U),ue.viewport(E),ue.scissor(k),ue.setScissorTest(G),le){const be=Ie.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,be.__webglTexture,F)}else if(fe){const be=Ie.get(S.texture),Ne=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.__webglTexture,F||0,Ne)}O=-1},this.readRenderTargetPixels=function(S,D,F,z,U,le,fe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ie.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){ue.bindFramebuffer(I.FRAMEBUFFER,Me);try{const be=S.texture,Ne=be.format,Ae=be.type;if(Ne!==$t&&he.convert(Ne)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Ae===Yi&&(_e.has("EXT_color_buffer_half_float")||we.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Ae!==bn&&he.convert(Ae)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ae===yn&&(we.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-z&&F>=0&&F<=S.height-U&&I.readPixels(D,F,z,U,he.convert(Ne),he.convert(Ae),le)}finally{const be=A!==null?Ie.get(A).__webglFramebuffer:null;ue.bindFramebuffer(I.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(S,D,F=0){const z=Math.pow(2,-F),U=Math.floor(D.image.width*z),le=Math.floor(D.image.height*z);T.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,F,0,0,S.x,S.y,U,le),ue.unbindTexture()},this.copyTextureToTexture=function(S,D,F,z=0){const U=D.image.width,le=D.image.height,fe=he.convert(F.format),Me=he.convert(F.type);T.setTexture2D(F,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,z,S.x,S.y,U,le,fe,Me,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,z,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,fe,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,z,S.x,S.y,fe,Me,D.image),z===0&&F.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(S,D,F,z,U=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=S.max.x-S.min.x+1,fe=S.max.y-S.min.y+1,Me=S.max.z-S.min.z+1,be=he.convert(z.format),Ne=he.convert(z.type);let Ae;if(z.isData3DTexture)T.setTexture3D(z,0),Ae=I.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)T.setTexture2DArray(z,0),Ae=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const Ce=I.getParameter(I.UNPACK_ROW_LENGTH),rt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Dt=I.getParameter(I.UNPACK_SKIP_PIXELS),pt=I.getParameter(I.UNPACK_SKIP_ROWS),en=I.getParameter(I.UNPACK_SKIP_IMAGES),tt=F.isCompressedTexture?F.mipmaps[U]:F.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,tt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,S.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,S.min.z),F.isDataTexture||F.isData3DTexture?I.texSubImage3D(Ae,U,D.x,D.y,D.z,le,fe,Me,be,Ne,tt.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ae,U,D.x,D.y,D.z,le,fe,Me,be,tt.data)):I.texSubImage3D(Ae,U,D.x,D.y,D.z,le,fe,Me,be,Ne,tt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Dt),I.pixelStorei(I.UNPACK_SKIP_ROWS,pt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,en),U===0&&z.generateMipmaps&&I.generateMipmap(Ae),ue.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),ue.unbindTexture()},this.resetState=function(){R=0,w=0,A=null,ue.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===jr?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===Gs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ct?Gn:pl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gn?ct:fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class om extends Nl{}om.prototype.isWebGL1Renderer=!0;class $i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new $i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class lm extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class cm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Or,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rt=new P;class Bs{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fn extends An{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let li;const Ii=new P,ci=new P,hi=new P,ui=new Ee,Ui=new Ee,Fl=new Ze,Ss=new P,Ni=new P,bs=new P,Io=new Ee,Tr=new Ee,Uo=new Ee;class di extends at{constructor(e=new Fn){if(super(),this.isSprite=!0,this.type="Sprite",li===void 0){li=new _t;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new cm(t,5);li.setIndex([0,1,2,0,2,3]),li.setAttribute("position",new Bs(n,3,0,!1)),li.setAttribute("uv",new Bs(n,2,3,!1))}this.geometry=li,this.material=e,this.center=new Ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ci.setFromMatrixScale(this.matrixWorld),Fl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ci.multiplyScalar(-hi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Es(Ss.set(-.5,-.5,0),hi,o,ci,s,r),Es(Ni.set(.5,-.5,0),hi,o,ci,s,r),Es(bs.set(.5,.5,0),hi,o,ci,s,r),Io.set(0,0),Tr.set(1,0),Uo.set(1,1);let a=e.ray.intersectTriangle(Ss,Ni,bs,!1,Ii);if(a===null&&(Es(Ni.set(-.5,.5,0),hi,o,ci,s,r),Tr.set(0,1),a=e.ray.intersectTriangle(Ss,bs,Ni,!1,Ii),a===null))return;const l=e.ray.origin.distanceTo(Ii);l<e.near||l>e.far||t.push({distance:l,point:Ii.clone(),uv:Vt.getInterpolation(Ii,Ss,Ni,bs,Io,Tr,Uo,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Es(i,e,t,n,s,r){ui.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ui.x=r*ui.x-s*ui.y,Ui.y=s*ui.x+r*ui.y):Ui.copy(ui),i.copy(e),i.x+=Ui.x,i.y+=Ui.y,i.applyMatrix4(Fl)}class No extends lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fi=new Ze,Fo=new Ze,Ts=[],Oo=new Vn,hm=new Ze,Fi=new Fe,Oi=new Wn;class um extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new No(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fi),Oo.copy(e.boundingBox).applyMatrix4(fi),this.boundingBox.union(Oo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fi),Oi.copy(e.boundingSphere).applyMatrix4(fi),this.boundingSphere.union(Oi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Fi.geometry=this.geometry,Fi.material=this.material,Fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oi.copy(this.boundingSphere),Oi.applyMatrix4(n),e.ray.intersectsSphere(Oi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fi),Fo.multiplyMatrices(n,fi),Fi.matrixWorld=Fo,Fi.raycast(e,Ts);for(let o=0,a=Ts.length;o<a;o++){const l=Ts[o];l.instanceId=r,l.object=this,t.push(l)}Ts.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new No(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ol extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bo=new P,zo=new P,ko=new Ze,wr=new Hs,ws=new Wn;class dm extends at{constructor(e=new _t,t=new Ol){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Bo.fromBufferAttribute(t,s-1),zo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Bo.distanceTo(zo);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(s),ws.radius+=r,e.ray.intersectsSphere(ws)===!1)return;ko.copy(s).invert(),wr.copy(e.ray).applyMatrix4(ko);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=new P,u=new P,f=new P,p=new P,m=this.isLineSegments?2:1,_=n.index,d=n.attributes.position;if(_!==null){const c=Math.max(0,o.start),x=Math.min(_.count,o.start+o.count);for(let v=c,b=x-1;v<b;v+=m){const R=_.getX(v),w=_.getX(v+1);if(h.fromBufferAttribute(d,R),u.fromBufferAttribute(d,w),wr.distanceSqToSegment(h,u,p,f)>l)continue;p.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(p);O<e.near||O>e.far||t.push({distance:O,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const c=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let v=c,b=x-1;v<b;v+=m){if(h.fromBufferAttribute(d,v),u.fromBufferAttribute(d,v+1),wr.distanceSqToSegment(h,u,p,f)>l)continue;p.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(p);w<e.near||w>e.far||t.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}class Gr extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Go=new Ze,Hr=new Hs,As=new Wn,Rs=new P;class Ar extends at{constructor(e=new _t,t=new Gr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(s),As.radius+=r,e.ray.intersectsSphere(As)===!1)return;Go.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(Go);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=p,g=m;_<g;_++){const d=h.getX(_);Rs.fromBufferAttribute(f,d),Ho(Rs,d,l,s,e,t,this)}}else{const p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=p,g=m;_<g;_++)Rs.fromBufferAttribute(f,_),Ho(Rs,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ho(i,e,t,n,s,r,o){const a=Hr.distanceSqToPoint(i);if(a<t){const l=new P;Hr.closestPointToPoint(i,l),l.applyMatrix4(n);const h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class gi extends Lt{constructor(e,t,n,s,r,o,a,l,h){super(e,t,n,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class na extends _t{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],p=[],m=[];let _=0;const g=[],d=n/2;let c=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(p,3)),this.setAttribute("uv",new ht(m,2));function x(){const b=new P,R=new P;let w=0;const A=(t-e)/n;for(let O=0;O<=r;O++){const y=[],E=O/r,k=E*(t-e)+e;for(let G=0;G<=s;G++){const Q=G/s,L=Q*l+a,B=Math.sin(L),V=Math.cos(L);R.x=k*B,R.y=-E*n+d,R.z=k*V,f.push(R.x,R.y,R.z),b.set(B,A,V).normalize(),p.push(b.x,b.y,b.z),m.push(Q,1-E),y.push(_++)}g.push(y)}for(let O=0;O<s;O++)for(let y=0;y<r;y++){const E=g[y][O],k=g[y+1][O],G=g[y+1][O+1],Q=g[y][O+1];u.push(E,k,Q),u.push(k,G,Q),w+=6}h.addGroup(c,w,0),c+=w}function v(b){const R=_,w=new Ee,A=new P;let O=0;const y=b===!0?e:t,E=b===!0?1:-1;for(let G=1;G<=s;G++)f.push(0,d*E,0),p.push(0,E,0),m.push(.5,.5),_++;const k=_;for(let G=0;G<=s;G++){const L=G/s*l+a,B=Math.cos(L),V=Math.sin(L);A.x=y*V,A.y=d*E,A.z=y*B,f.push(A.x,A.y,A.z),p.push(0,E,0),w.x=B*.5+.5,w.y=V*.5*E+.5,m.push(w.x,w.y),_++}for(let G=0;G<s;G++){const Q=R+G,L=k+G;b===!0?u.push(L,L+1,Q):u.push(L+1,L,Q),O+=3}h.addGroup(c,O,b===!0?1:2),c+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ia extends na{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ia(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sa extends _t{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),h(n),u(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new P,b=new P,R=new P;for(let w=0;w<t.length;w+=3)m(t[w+0],v),m(t[w+1],b),m(t[w+2],R),l(v,b,R,x)}function l(x,v,b,R){const w=R+1,A=[];for(let O=0;O<=w;O++){A[O]=[];const y=x.clone().lerp(b,O/w),E=v.clone().lerp(b,O/w),k=w-O;for(let G=0;G<=k;G++)G===0&&O===w?A[O][G]=y:A[O][G]=y.clone().lerp(E,G/k)}for(let O=0;O<w;O++)for(let y=0;y<2*(w-O)-1;y++){const E=Math.floor(y/2);y%2===0?(p(A[O][E+1]),p(A[O+1][E]),p(A[O][E])):(p(A[O][E+1]),p(A[O+1][E+1]),p(A[O+1][E]))}}function h(x){const v=new P;for(let b=0;b<r.length;b+=3)v.x=r[b+0],v.y=r[b+1],v.z=r[b+2],v.normalize().multiplyScalar(x),r[b+0]=v.x,r[b+1]=v.y,r[b+2]=v.z}function u(){const x=new P;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const b=d(x)/2/Math.PI+.5,R=c(x)/Math.PI+.5;o.push(b,1-R)}_(),f()}function f(){for(let x=0;x<o.length;x+=6){const v=o[x+0],b=o[x+2],R=o[x+4],w=Math.max(v,b,R),A=Math.min(v,b,R);w>.9&&A<.1&&(v<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function p(x){r.push(x.x,x.y,x.z)}function m(x,v){const b=x*3;v.x=e[b+0],v.y=e[b+1],v.z=e[b+2]}function _(){const x=new P,v=new P,b=new P,R=new P,w=new Ee,A=new Ee,O=new Ee;for(let y=0,E=0;y<r.length;y+=9,E+=6){x.set(r[y+0],r[y+1],r[y+2]),v.set(r[y+3],r[y+4],r[y+5]),b.set(r[y+6],r[y+7],r[y+8]),w.set(o[E+0],o[E+1]),A.set(o[E+2],o[E+3]),O.set(o[E+4],o[E+5]),R.copy(x).add(v).add(b).divideScalar(3);const k=d(R);g(w,E+0,x,k),g(A,E+2,v,k),g(O,E+4,b,k)}}function g(x,v,b,R){R<0&&x.x===1&&(o[v]=x.x-1),b.x===0&&b.z===0&&(o[v]=R/2/Math.PI+.5)}function d(x){return Math.atan2(x.z,-x.x)}function c(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.vertices,e.indices,e.radius,e.details)}}class ra extends sa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ra(e.radius,e.detail)}}class _i extends _t{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],h=[],u=[];let f=e;const p=(t-e)/s,m=new P,_=new Ee;for(let g=0;g<=s;g++){for(let d=0;d<=n;d++){const c=r+d/n*o;m.x=f*Math.cos(c),m.y=f*Math.sin(c),l.push(m.x,m.y,m.z),h.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,u.push(_.x,_.y)}f+=p}for(let g=0;g<s;g++){const d=g*(n+1);for(let c=0;c<n;c++){const x=c+d,v=x,b=x+n+1,R=x+n+2,w=x+1;a.push(v,b,w),a.push(b,R,w)}}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class st extends _t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const u=[],f=new P,p=new P,m=[],_=[],g=[],d=[];for(let c=0;c<=n;c++){const x=[],v=c/n;let b=0;c===0&&o===0?b=.5/t:c===n&&l===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){const w=R/t;f.x=-e*Math.cos(s+w*r)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(s+w*r)*Math.sin(o+v*a),_.push(f.x,f.y,f.z),p.copy(f).normalize(),g.push(p.x,p.y,p.z),d.push(w+b,1-v),x.push(h++)}u.push(x)}for(let c=0;c<n;c++)for(let x=0;x<t;x++){const v=u[c][x+1],b=u[c][x],R=u[c+1][x],w=u[c+1][x+1];(c!==0||o>0)&&m.push(v,b,w),(c!==n-1||l<Math.PI)&&m.push(b,R,w)}this.setIndex(m),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(g,3)),this.setAttribute("uv",new ht(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class St extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xs extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class fm extends Xs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Rr=new Ze,Vo=new P,Wo=new P;class Bl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vo),Wo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wo),t.updateMatrixWorld(),Rr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xo=new Ze,Bi=new P,Cr=new P;class pm extends Bl{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Bi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bi),Cr.copy(n.position),Cr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Cr),n.updateMatrixWorld(),s.makeTranslation(-Bi.x,-Bi.y,-Bi.z),Xo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo)}}class mm extends Xs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new pm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gm extends Bl{constructor(){super(new Rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _m extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new gm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vm extends Xs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qo(){return(typeof performance>"u"?Date:performance).now()}class ym{constructor(e,t,n=0,s=1/0){this.ray=new Hs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Vr(e,this,n,t),n.sort(Yo),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Vr(e[s],this,n,t);return n.sort(Yo),n}}function Yo(i,e){return i.distance-e.distance}function Vr(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)Vr(s[r],e,t,!0)}}class xm{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kr);function kt(i,e=1024,t=512){const n=document.createElement("canvas");n.width=e,n.height=t;const s=n.getContext("2d");return i(s,e,t),n}function Gt(i){const e=new gi(i);return e.wrapS=Xi,e.wrapT=Xi,e.colorSpace=ct,e.needsUpdate=!0,e}function Sm(i,e,t){const n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#E8DCC3"),n.addColorStop(.18,"#C19A6B"),n.addColorStop(.28,"#FAF7E8"),n.addColorStop(.42,"#D4B896"),n.addColorStop(.55,"#8B7355"),n.addColorStop(.68,"#E6D5B8"),n.addColorStop(.78,"#A67C52"),n.addColorStop(1,"#E7D8B8"),i.fillStyle=n,i.fillRect(0,0,e,t);for(let s=0;s<1800;s++){const r=Math.random()*e,o=Math.random()*t,a=Math.random()*7+2;i.fillStyle=Math.random()>.5?"rgba(139,115,80,0.18)":"rgba(255,255,255,0.14)",i.beginPath(),i.ellipse(r,o,a,a*.5,0,0,Math.PI*2),i.fill(),s%12===0&&(i.strokeStyle="rgba(90,70,50,0.12)",i.lineWidth=1,i.beginPath(),i.moveTo(0,o),i.bezierCurveTo(e*.3,o+(Math.random()-.5)*6,e*.6,o+(Math.random()-.5)*6,e,o),i.stroke())}i.fillStyle="rgba(180, 60, 30, 0.85)",i.beginPath(),i.ellipse(e*.28,t*.42,48,28,-.15,0,Math.PI*2),i.fill(),i.fillStyle="rgba(220,90,45,0.5)",i.beginPath(),i.ellipse(e*.28,t*.42,36,18,-.15,0,Math.PI*2),i.fill();for(let s=0;s<5;s++)i.fillStyle="rgba(255,255,255,0.55)",i.beginPath(),i.ellipse(e*(.15+Math.random()*.6),t*(.25+Math.random()*.4),16,10,0,0,Math.PI*2),i.fill()}function bm(i,e,t){const n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#1a4d8f"),n.addColorStop(.3,"#2E86C1"),n.addColorStop(.6,"#3AA0E0"),n.addColorStop(1,"#1a4d8f"),i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="#2E8B57",[()=>{i.beginPath(),i.moveTo(e*.52,t*.25),i.bezierCurveTo(e*.6,t*.22,e*.62,t*.55,e*.56,t*.7),i.bezierCurveTo(e*.5,t*.72,e*.48,t*.5,e*.52,t*.25),i.fill(),i.fillStyle="#3CB371",i.beginPath(),i.ellipse(e*.54,t*.42,e*.04,t*.12,0,0,Math.PI*2),i.fill()},()=>{i.fillStyle="#228B22",i.beginPath(),i.moveTo(e*.18,t*.15),i.bezierCurveTo(e*.28,t*.12,e*.3,t*.4,e*.22,t*.68),i.bezierCurveTo(e*.18,t*.52,e*.15,t*.3,e*.18,t*.15),i.fill(),i.fillStyle="#32CD32",i.beginPath(),i.moveTo(e*.1,t*.78),i.ellipse(e*.12,t*.82,e*.05,t*.06,0,0,Math.PI*2),i.fill()},()=>{i.fillStyle="#2E8B57",i.beginPath(),i.moveTo(e*.68,t*.2),i.bezierCurveTo(e*.85,t*.18,e*.88,t*.45,e*.78,t*.5),i.bezierCurveTo(e*.7,t*.42,e*.66,t*.28,e*.68,t*.2),i.fill(),i.fillStyle="#D2B48C",i.beginPath(),i.ellipse(e*.82,t*.68,e*.06,t*.05,0,0,Math.PI*2),i.fill()}].forEach(r=>{i.fillStyle="#2E8B57",r()}),i.fillStyle="rgba(255,255,255,0.9)",i.fillRect(0,0,e,t*.08),i.fillRect(0,t*.92,e,t*.08);for(let r=0;r<900;r++)i.fillStyle=`rgba(255,255,255,${Math.random()*.15+.05})`,i.beginPath(),i.arc(Math.random()*e,Math.random()*t,Math.random()*5+2,0,Math.PI*2),i.fill()}function Em(i,e,t){i.fillStyle="#8B4513",i.fillRect(0,0,e,t);for(let n=0;n<2e3;n++){const s=Math.random()>.5?"#A0522D":"#CD5C2D";i.fillStyle=s,i.globalAlpha=.18,i.beginPath(),i.arc(Math.random()*e,Math.random()*t,Math.random()*10+3,0,Math.PI*2),i.fill()}i.globalAlpha=1,i.fillStyle="rgba(60,20,10,0.22)",i.beginPath(),i.ellipse(e*.4,t*.4,e*.18,t*.2,-.3,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(e*.7,t*.55,e*.12,t*.18,.2,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,255,255,0.85)",i.fillRect(0,0,e,t*.07),i.fillStyle="rgba(230,240,255,0.5)",i.fillRect(0,t*.93,e,t*.07),i.strokeStyle="rgba(40,15,5,0.3)",i.lineWidth=2,i.beginPath(),i.moveTo(e*.35,t*.45),i.lineTo(e*.62,t*.48),i.stroke()}function Tm(){const i={};{const e=kt((t,n,s)=>{const r=t.createRadialGradient(n/2,s/2,0,n/2,s/2,n/2.2);r.addColorStop(0,"#FFF8A0"),r.addColorStop(.25,"#FFD24D"),r.addColorStop(.6,"#FF8C00"),r.addColorStop(1,"#E25800"),t.fillStyle=r,t.fillRect(0,0,n,s);for(let o=0;o<1500;o++)t.fillStyle=`rgba(255,${200+Math.random()*55}, ${50+Math.random()*80}, ${.12+Math.random()*.2})`,t.beginPath(),t.arc(Math.random()*n,Math.random()*s,Math.random()*5+1,0,Math.PI*2),t.fill();for(let o=0;o<800;o++)t.fillStyle="rgba(255,150,0,0.15)",t.fillRect(Math.random()*n,Math.random()*s,2,2)},1024,512);i.sun={map:Gt(e)}}{const e=kt((t,n,s)=>{t.fillStyle="#9A9A9A",t.fillRect(0,0,n,s);for(let r=0;r<2500;r++){const o=Math.random()>.5?"#7A7A7A":"#B8B8B8";t.fillStyle=o,t.globalAlpha=.15+Math.random()*.15,t.beginPath(),t.arc(Math.random()*n,Math.random()*s,Math.random()*12+2,0,Math.PI*2),t.fill(),Math.random()>.98&&(t.strokeStyle="rgba(50,50,50,0.3)",t.lineWidth=1.5,t.beginPath(),t.arc(Math.random()*n,Math.random()*s,Math.random()*18+6,0,Math.PI*2),t.stroke(),t.fillStyle="rgba(40,40,40,0.18)",t.beginPath(),t.arc(Math.random()*n,Math.random()*s,Math.random()*8+3,0,Math.PI*2),t.fill())}t.globalAlpha=1});i.mercury={map:Gt(e)}}{const e=kt((t,n,s)=>{const r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,"#E9D5A8"),r.addColorStop(.5,"#D4B27A"),r.addColorStop(1,"#C7A36A"),t.fillStyle=r,t.fillRect(0,0,n,s);for(let o=0;o<1500;o++)t.fillStyle=`rgba(255,255,255,${.08+Math.random()*.12})`,t.beginPath(),t.ellipse(Math.random()*n,Math.random()*s,Math.random()*60+10,Math.random()*10+4,Math.random()*.3,0,Math.PI*2),t.fill();for(let o=0;o<60;o++)t.strokeStyle="rgba(180,150,100,0.18)",t.lineWidth=1,t.beginPath(),t.moveTo(0,Math.random()*s),t.bezierCurveTo(n*.3,Math.random()*s,n*.6,Math.random()*s,n,Math.random()*s),t.stroke()});i.venus={map:Gt(e)}}{const e=kt(bm,2048,1024),t=kt((n,s,r)=>{n.clearRect(0,0,s,r);for(let o=0;o<600;o++){n.fillStyle=`rgba(255,255,255,${.18+Math.random()*.35})`;const a=Math.random()*s,l=Math.random()*r;n.beginPath(),n.ellipse(a,l,Math.random()*28+12,Math.random()*14+6,Math.random()*Math.PI,0,Math.PI*2),n.fill(),n.beginPath(),n.ellipse(a+6,l,Math.random()*18+8,Math.random()*10+4,0,0,Math.PI*2),n.fill()}},1024,512);i.earth={map:Gt(e),clouds:Gt(t)}}{const e=kt(Em,1024,512);i.mars={map:Gt(e)}}{const e=kt(Sm,2048,1024);i.jupiter={map:Gt(e)}}{const e=kt((t,n,s)=>{const r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,"#F5E6B8"),r.addColorStop(.2,"#E8D5A0"),r.addColorStop(.4,"#D8C99A"),r.addColorStop(.6,"#E9D8B0"),r.addColorStop(.8,"#D4C18E"),r.addColorStop(1,"#EFE0B0"),t.fillStyle=r,t.fillRect(0,0,n,s);for(let o=0;o<1200;o++)t.fillStyle="rgba(140,120,90,0.12)",t.fillRect(0,Math.random()*s,n,Math.random()*3+1);t.fillStyle="rgba(0,0,0,0.12)",t.beginPath(),t.ellipse(n*.5,s*.52,n*.45,s*.02,0,0,Math.PI*2),t.fill()},1024,512);i.saturn={map:Gt(e)}}{const e=kt((t,n,s)=>{const r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,"#8AD9FF"),r.addColorStop(.5,"#43B0F1"),r.addColorStop(1,"#2A8AC0"),t.fillStyle=r,t.fillRect(0,0,n,s);for(let o=0;o<800;o++)t.fillStyle=`rgba(255,255,255,${.07+Math.random()*.08})`,t.beginPath(),t.ellipse(Math.random()*n,Math.random()*s,Math.random()*40+8,Math.random()*4+2,0,0,Math.PI*2),t.fill()},1024,512);i.uranus={map:Gt(e)}}{const e=kt((t,n,s)=>{const r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,"#2E68F7"),r.addColorStop(.5,"#1A3D9C"),r.addColorStop(1,"#2E68F7"),t.fillStyle=r,t.fillRect(0,0,n,s);for(let o=0;o<1e3;o++)t.fillStyle="rgba(255,255,255,0.10)",t.beginPath(),t.ellipse(Math.random()*n,Math.random()*s,Math.random()*30+10,Math.random()*6+2,0,0,Math.PI*2),t.fill();t.fillStyle="rgba(0,0,60,0.45)",t.beginPath(),t.ellipse(n*.35,s*.45,28,18,.2,0,Math.PI*2),t.fill()},1024,512);i.neptune={map:Gt(e)}}{const e=kt((t,n,s)=>{t.fillStyle="#CDBAAA",t.fillRect(0,0,n,s),t.fillStyle="rgba(255,240,220,0.95)",t.beginPath();const r=n*.32,o=s*.42;t.moveTo(r,o+20),t.bezierCurveTo(r-40,o-10,r-80,o+10,r,o+45),t.bezierCurveTo(r+80,o+10,r+40,o-10,r,o+20),t.fill();for(let a=0;a<800;a++)t.fillStyle=`rgba(120,90,70,${.1+Math.random()*.15})`,t.beginPath(),t.arc(Math.random()*n,Math.random()*s,Math.random()*4+1,0,Math.PI*2),t.fill();t.fillStyle="rgba(60,40,30,0.18)",t.beginPath(),t.ellipse(n*.65,s*.65,n*.14,s*.18,0,0,Math.PI*2),t.fill()},1024,512);i.pluto={map:Gt(e)}}{const e=kt((t,n,s)=>{t.fillStyle="#A0A0A0",t.fillRect(0,0,n,s);for(let r=0;r<1800;r++)t.fillStyle=Math.random()>.5?"#7D7D7D":"#BABABA",t.globalAlpha=.18,t.beginPath(),t.arc(Math.random()*n,Math.random()*s,Math.random()*8+2,0,Math.PI*2),t.fill();t.globalAlpha=1;for(let r=0;r<40;r++){const o=Math.random()*n,a=Math.random()*s,l=Math.random()*14+5;t.strokeStyle="rgba(50,50,50,0.25)",t.lineWidth=1,t.beginPath(),t.arc(o,a,l,0,Math.PI*2),t.stroke()}t.fillStyle="rgba(70,70,70,0.22)",t.beginPath(),t.ellipse(n*.45,s*.4,n*.12,s*.1,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(n*.6,s*.55,n*.08,s*.08,0,0,Math.PI*2),t.fill()},512,512);i.moon={map:Gt(e)}}return i}function wm(){const i=document.createElement("canvas");i.width=1024,i.height=64;const e=i.getContext("2d");e.clearRect(0,0,i.width,i.height),[{a:.02,b:.18,col:"rgba(180,160,140,0.0)"},{a:.18,b:.28,col:"rgba(210,200,180,0.55)"},{a:.28,b:.3,col:"rgba(0,0,0,0.65)"},{a:.3,b:.54,col:"rgba(230,220,200,0.75)"},{a:.54,b:.56,col:"rgba(0,0,0,0.4)"},{a:.56,b:.82,col:"rgba(200,190,170,0.35)"},{a:.82,b:1,col:"rgba(180,170,160,0.0)"}].forEach(s=>{const r=s.a*i.width,o=s.b*i.width,a=e.createLinearGradient(r,0,o,0);a.addColorStop(0,s.col.replace(/0\.\d+\)/,"0.15)")),a.addColorStop(.5,s.col),a.addColorStop(1,s.col.replace(/0\.\d+\)/,"0.12)")),e.fillStyle=a,e.fillRect(r,0,o-r,i.height)});for(let s=0;s<300;s++)e.fillStyle="rgba(0,0,0,0.22)",e.fillRect(Math.random()*i.width,0,1,i.height);const n=new gi(i);return n.colorSpace=ct,n.needsUpdate=!0,n}class Am{constructor(e){this.clock=new Mm,this.raycaster=new ym,this.mouse=new Ee,this.planets=new Map,this.planetGroups=new Map,this.moonMeshes=[],this.rings=new Map,this.orbitLines=new Map,this.timeScale=1,this.paused=!1,this.showOrbits=!0,this.showLabels=!0,this.isBeyond=!1,this.focusTarget=null,this.hoveredId=null,this.elapsed=0,this.labelSprites=new Map,this.target=new P(0,0,0),this.spherical=new xm(58,1.15,.9),this.isDragging=!1,this.lastDrag={x:0,y:0},this.distance=55,this.minDistance=6,this.maxDistance=220,this.animate=()=>{requestAnimationFrame(this.animate);const t=this.clock.getDelta();if(this.elapsed+=t,this.starfieldPoints&&(this.starfieldPoints.material.uniforms.time.value=this.elapsed,this.starfieldPoints.rotation.y+=t*.004*this.timeScale),this.sun&&(this.sun.rotation.y+=.0015*(this.paused?0:this.timeScale)),!this.paused){const n=t*this.timeScale;if(this.planetGroups.forEach(s=>{const r=s.userData;r.curAngle+=r.orbitSpeed*n*60;const o=s.children.find(a=>a.geometry instanceof st);if(o){o.position.x=Math.cos(r.curAngle)*r.orbitRadius,o.position.z=Math.sin(r.curAngle)*r.orbitRadius;const a=un.find(d=>d.id===r.id);a&&(o.rotation.y+=a.rotationSpeed*n*60);const l=o.userData.labelGroup;l&&l.position.copy(o.position);const h=o.userData.cloudMesh;if(h&&(h.rotation.y+=.008*n*60),o.userData.moonPivot){const d=o.userData.moonMesh,c=d.userData;c.curAngle+=c.orbitSpeed*n*60,d.position.x=Math.cos(c.curAngle)*c.orbitRadius,d.position.z=Math.sin(c.curAngle)*c.orbitRadius}const f=o.userData.marsMoons;f&&f.forEach(d=>{const c=d.mesh.userData;c.curAngle+=c.orbitSpeed*n*60,d.mesh.position.x=Math.cos(c.curAngle)*c.orbitRadius,d.mesh.position.z=Math.sin(c.curAngle)*c.orbitRadius});const p=o.userData.jupiterMoons;p&&p.forEach(d=>{const c=d.mesh.userData;c.curAngle+=c.orbitSpeed*n*60,d.mesh.position.x=Math.cos(c.curAngle)*c.orbitRadius,d.mesh.position.z=Math.sin(c.curAngle)*c.orbitRadius});const m=o.userData.saturnMoons;m&&m.forEach(d=>{const c=d.mesh.userData;c.curAngle+=c.orbitSpeed*n*60,d.mesh.position.x=Math.cos(c.curAngle)*c.orbitRadius,d.mesh.position.z=Math.sin(c.curAngle)*c.orbitRadius});const _=o.userData.neptuneMoons;_&&_.forEach(d=>{const c=d.mesh.userData;c.curAngle+=c.orbitSpeed*n*60,d.mesh.position.x=Math.cos(c.curAngle)*c.orbitRadius,d.mesh.position.z=Math.sin(c.curAngle)*c.orbitRadius});const g=o.userData.plutoMoons;g&&g.forEach(d=>{const c=d.mesh.userData;c.curAngle+=c.orbitSpeed*n*60,d.mesh.position.x=Math.cos(c.curAngle)*c.orbitRadius,d.mesh.position.z=Math.sin(c.curAngle)*c.orbitRadius})}}),this.asteroidGroup&&(this.asteroidGroup.rotation.y+=6e-4*n*60),this.focusTarget){const s=this.focusTarget==="sun"?this.sun:this.planets.get(this.focusTarget);if(s){const r=new P;s.getWorldPosition(r),this.target.lerp(r,.06),this.updateCameraPos()}}}this.renderer.render(this.scene,this.camera)},this.canvas=e,this.scene=new lm,this.scene.background=new Oe(132368),this.scene.fog=new $i(132368,.0022),this.camera=new Ft(58,window.innerWidth/window.innerHeight,.1,1200),this.updateCameraPos(),this.renderer=new Nl({canvas:e,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=rl,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=il,this.textures=Tm(),this.saturnRingTex=wm(),this.setupLights(),this.createStarfield(),this.createSun(),this.createPlanets(),this.createAsteroidBelt(),this.createKuiperBelt(),this.createBeyond(),this.createVoyager(),this.bindEvents(),this.animate()}setupLights(){const e=new vm(4210784,.55);this.scene.add(e);const t=new mm(16774864,650,400,1.8);t.position.set(0,0,0),t.castShadow=!1,this.scene.add(t);const n=new fm(6983167,132368,.22);this.scene.add(n);const s=new _m(16774864,1.6);s.position.set(60,20,40),this.scene.add(s)}createStarfield(){const t=new _t,n=new Float32Array(15e3*3),s=new Float32Array(15e3*3),r=new Float32Array(15e3);for(let m=0;m<15e3;m++){const _=380+Math.random()*460,g=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1);n[m*3]=_*Math.sin(d)*Math.cos(g),n[m*3+1]=_*Math.sin(d)*Math.sin(g),n[m*3+2]=_*Math.cos(d);const c=Math.random();c>.985?(s[m*3]=.6,s[m*3+1]=.75,s[m*3+2]=1):c>.97?(s[m*3]=1,s[m*3+1]=.85,s[m*3+2]=.6):c>.93?(s[m*3]=1,s[m*3+1]=.45,s[m*3+2]=.45):(s[m*3]=1,s[m*3+1]=1,s[m*3+2]=1),r[m]=Math.random()*1.4+.2,c>.998&&(r[m]*=2.5)}t.setAttribute("position",new lt(n,3)),t.setAttribute("color",new lt(s,3)),t.setAttribute("size",new lt(r,1));const o=new wn({uniforms:{time:{value:0}},vertexShader:`
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vSize;
        void main(){
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position,1.0);
          gl_PointSize = size * (420.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
          vSize = size;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vSize;
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float d = dot(c,c);
          if (d>0.25) discard;
          float alpha = 1.0 - smoothstep(0.15,0.25,d);
          // soft glow
          float glow = exp(-d*8.0);
          gl_FragColor = vec4(vColor * (0.8+ glow*0.6), alpha*0.95);
        }
      `,transparent:!0,depthWrite:!1,vertexColors:!0,blending:ln});this.starfieldPoints=new Ar(t,o),this.scene.add(this.starfieldPoints);const a=4e3,l=new _t,h=new Float32Array(a*3),u=new Float32Array(a*3);for(let m=0;m<a;m++){const _=200+Math.random()*180,g=Math.random()*Math.PI*2,d=(Math.random()-.5)*24+Math.sin(g*2)*8;h[m*3]=Math.cos(g)*_,h[m*3+1]=d,h[m*3+2]=Math.sin(g)*_,u[m*3]=.55,u[m*3+1]=.65,u[m*3+2]=1}l.setAttribute("position",new lt(h,3)),l.setAttribute("color",new lt(u,3));const f=new Gr({size:.55,vertexColors:!0,transparent:!0,opacity:.28,sizeAttenuation:!0,depthWrite:!1}),p=new Ar(l,f);this.scene.add(p)}createSun(){const e=new st(3.2,64,64),t=new St({map:this.textures.sun.map,emissive:new Oe(16756736),emissiveIntensity:1.15,emissiveMap:this.textures.sun.map,roughness:.8});this.sun=new Fe(e,t),this.sun.name="sun",this.sun.userData.id="sun",this.scene.add(this.sun);const n=new st(3.6,32,32),s=new bt({color:16756736,transparent:!0,opacity:.18,side:gt,depthWrite:!1}),r=new Fe(n,s);this.sun.add(r);const o=new st(4.3,32,32),a=new bt({color:16738816,transparent:!0,opacity:.08,side:gt,depthWrite:!1}),l=new Fe(o,a);this.sun.add(l);const h=new di(new Fn({map:this.createGlowTexture(),color:16764006,transparent:!0,opacity:.35,blending:ln,depthWrite:!1}));h.scale.set(14,14,1),this.sun.add(h)}createGlowTexture(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d"),n=t.createRadialGradient(128,128,0,128,128,128);n.addColorStop(0,"rgba(255,210,100,1)"),n.addColorStop(.2,"rgba(255,160,40,0.6)"),n.addColorStop(.5,"rgba(255,110,10,0.25)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,256,256);const s=new gi(e);return s.needsUpdate=!0,s}createPlanets(){for(const e of un){if(e.id==="sun")continue;const t=new vt;t.name=`orbit-${e.id}`,t.rotation.x=e.orbitInclination*.35;const n=un.indexOf(e)*47%360*Math.PI/180+Math.random()*.3;t.userData={orbitRadius:e.orbitRadius,orbitSpeed:e.orbitSpeed,curAngle:n,id:e.id};const s=new st(e.radiusScale,48,48);let r;const o=this.textures[e.id];e.id==="earth"&&o?r=new St({map:o.map,roughness:.65,metalness:.02}):e.id==="saturn"||e.id==="jupiter"?r=new St({map:o==null?void 0:o.map,roughness:.75}):r=new St({map:o==null?void 0:o.map,roughness:e.id==="venus"?.9:.85,metalness:.02});const a=new Fe(s,r);a.castShadow=!1,a.receiveShadow=!0,a.name=e.id,a.userData.id=e.id,a.position.set(e.orbitRadius*Math.cos(n),0,e.orbitRadius*Math.sin(n)),a.rotation.z=parseFloat(e.tilt)*Math.PI/180*.12,t.add(a),this.planets.set(e.id,a),this.planetGroups.set(e.id,t),this.scene.add(t);const l=new _t,h=128,u=new Float32Array((h+1)*3);for(let g=0;g<=h;g++){const d=g/h*Math.PI*2;u[g*3]=Math.cos(d)*e.orbitRadius,u[g*3+1]=0,u[g*3+2]=Math.sin(d)*e.orbitRadius}l.setAttribute("position",new lt(u,3));const f=new Ol({color:new Oe(e.color).multiplyScalar(.6),transparent:!0,opacity:e.id==="pluto"?.18:.32,depthWrite:!1}),p=new dm(l,f);if(p.rotation.x=t.rotation.x,this.orbitLines.set(e.id,p),this.scene.add(p),e.id==="earth"){new vt;const g=new st(.27,24,24),d=new St({map:this.textures.moon.map,roughness:.9}),c=new Fe(g,d);c.name="moon",c.userData.id="moon",c.userData={orbitRadius:1.85,orbitSpeed:.025,curAngle:0};const x=new vt;x.add(c),c.position.set(1.85,.15,0),t.add(x),a.userData.moonPivot=x,a.userData.moonMesh=c,this.moonMeshes.push(c);const v=new st(e.radiusScale*1.006,48,48),b=o==null?void 0:o.clouds;if(b){const O=new St({map:b,transparent:!0,opacity:.42,depthWrite:!1}),y=new Fe(v,O);y.name="earth-clouds",a.add(y),a.userData.cloudMesh=y}const R=new st(e.radiusScale*1.12,32,32),w=new bt({color:7057407,transparent:!0,opacity:.08,side:gt,depthWrite:!1}),A=new Fe(R,w);a.add(A)}else if(e.id==="mars"){const g=new st(.09,12,12),d=new St({color:9139029,roughness:1}),c=new Fe(g,d);c.position.set(.95,.08,0),c.userData={orbitRadius:.95,orbitSpeed:.04,curAngle:.6};const x=new vt;x.add(c),t.add(x),a.userData.marsMoons=[{mesh:c,pivot:x}];const v=new st(.07,12,12),b=new Fe(v,new St({color:10132122,roughness:1}));b.position.set(1.32,-.05,0),b.userData={orbitRadius:1.32,orbitSpeed:.022,curAngle:2.1};const R=new vt;R.add(b),t.add(R),a.userData.marsMoons.push({mesh:b,pivot:R})}else if(e.id==="jupiter"){const g=[{r:.08,dist:2.95,speed:.035,col:15258792},{r:.09,dist:3.45,speed:.022,col:11195647},{r:.14,dist:4.3,speed:.012,col:12759680},{r:.13,dist:5.4,speed:.007,col:9076075}],d=[];g.forEach(c=>{const x=new st(c.r,16,16),v=new Fe(x,new St({color:c.col,roughness:.85}));v.position.set(c.dist,(Math.random()-.5)*.2,0),v.userData={orbitRadius:c.dist,orbitSpeed:c.speed,curAngle:Math.random()*Math.PI*2};const b=new vt;b.add(v),t.add(b),d.push({mesh:v,pivot:b})}),a.userData.jupiterMoons=d}else if(e.id==="saturn"){const g=e.radiusScale*1.55,d=e.radiusScale*2.85,c=new _i(g,d,64,8),x=c.attributes.position,v=c.attributes.uv;for(let y=0;y<x.count;y++){const E=new P().fromBufferAttribute(x,y),G=(Math.sqrt(E.x*E.x+E.y*E.y)-g)/(d-g);v.setXY(y,G,0)}c.attributes.uv.needsUpdate=!0;const b=new bt({map:this.saturnRingTex,transparent:!0,side:Ot,depthWrite:!1,opacity:.9});b.alphaTest=.02;const R=new Fe(c,b);R.rotation.x=Math.PI/2+.18,R.rotation.y=.08,R.receiveShadow=!1,a.add(R),this.rings.set(e.id,R);const w=new st(.14,16,16),A=new Fe(w,new St({color:13936490,roughness:.8}));A.position.set(4.2,.12,0),A.userData={orbitRadius:4.2,orbitSpeed:.009,curAngle:1.2};const O=new vt;O.add(A),t.add(O),a.userData.saturnMoons=[{mesh:A,pivot:O}]}else if(e.id==="uranus"){const g=new _i(e.radiusScale*1.35,e.radiusScale*1.85,64,2),d=new bt({color:9415368,transparent:!0,opacity:.28,side:Ot,depthWrite:!1}),c=new Fe(g,d);c.rotation.x=Math.PI/2+1.35,a.add(c)}else if(e.id==="neptune"){const g=new _i(e.radiusScale*1.25,e.radiusScale*1.65,64,2),d=new bt({color:4878277,transparent:!0,opacity:.24,side:Ot,depthWrite:!1}),c=new Fe(g,d);c.rotation.x=Math.PI/2+.2,a.add(c);const x=new st(.18,16,16),v=new Fe(x,new St({color:13213872,roughness:.85}));v.position.set(2.8,.2,0),v.userData={orbitRadius:2.8,orbitSpeed:-.014,curAngle:.8};const b=new vt;b.add(v),t.add(b),a.userData.neptuneMoons=[{mesh:v,pivot:b}]}else if(e.id==="pluto"){const g=new st(.16,16,16),d=new Fe(g,new St({color:10526880,roughness:.9}));d.position.set(.82,.05,0),d.userData={orbitRadius:.82,orbitSpeed:.018,curAngle:0};const c=new vt;c.add(d),t.add(c),a.userData.plutoMoons=[{mesh:d,pivot:c}]}const m=this.makeLabel(e.name);m.position.set(0,e.radiusScale+.85,0);const _=new vt;_.position.copy(a.position),_.add(m),t.add(_),a.userData.labelGroup=_,this.labelSprites.set(e.id,m)}}makeLabel(e){const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle="rgba(10,15,40,0.72)",n.beginPath(),n.roundRect(16,22,480,84,18),n.fill(),n.strokeStyle="rgba(120,160,255,0.35)",n.lineWidth=1.5,n.stroke(),n.fillStyle="#E6EFFF",n.font='600 32px "Space Grotesk", Inter, system-ui, sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(e,256,64);const s=new gi(t);s.colorSpace=ct;const r=new Fn({map:s,transparent:!0,depthWrite:!1,depthTest:!1,sizeAttenuation:!0}),o=new di(r);return o.scale.set(3.2,.8,1),o.renderOrder=10,o}createAsteroidBelt(){this.asteroidGroup=new vt;const e=1100,t=new ra(.05,0),n=new St({color:7036495,roughness:.95}),s=new um(t,n,e),r=new at;for(let o=0;o<e;o++){const a=Math.random()*Math.PI*2,l=22.2+Math.random()*5.6+Math.sin(a*3)*.6,h=(Math.random()-.5)*1.4+(Math.random()-.5)*.7*Math.sin(a),u=.35+Math.random()*.9;r.position.set(Math.cos(a)*l,h,Math.sin(a)*l),r.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),r.scale.set(u,u,u),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}s.instanceMatrix.needsUpdate=!0,this.asteroidGroup.add(s),this.scene.add(this.asteroidGroup)}createKuiperBelt(){const t=new _t,n=new Float32Array(600*3),s=new Float32Array(600*3);for(let a=0;a<600;a++){const l=Math.random()*Math.PI*2,h=64+Math.random()*10;n[a*3]=Math.cos(l)*h,n[a*3+1]=(Math.random()-.5)*2.5,n[a*3+2]=Math.sin(l)*h,s[a*3]=.45,s[a*3+1]=.42,s[a*3+2]=.48}t.setAttribute("position",new lt(n,3)),t.setAttribute("color",new lt(s,3));const r=new Gr({size:.14,vertexColors:!0,transparent:!0,opacity:.55,sizeAttenuation:!0,depthWrite:!1}),o=new Ar(t,r);this.scene.add(o)}createBeyond(){this.beyondGroup=new vt;for(const e of Ps){const t=e.radius,n=e.theta*Math.PI*1.9,s=e.phi,r=t*Math.sin(s)*Math.cos(n),o=t*Math.cos(s),a=t*Math.sin(s)*Math.sin(n),l=new vt;l.position.set(r,o,a),l.userData.id=e.id,l.userData.color=e.color;let h;if(e.type==="Galaxy"){const f=new st(e.size*1.2,24,24),p=new bt({color:e.color,transparent:!0,opacity:.28,depthWrite:!1});h=new Fe(f,p);const m=new di(new Fn({map:this.createSpiralTexture(e.color),transparent:!0,opacity:.45,blending:ln,depthWrite:!1}));m.scale.set(6,6,1),l.add(m)}else if(e.type==="Nebula"){const f=new st(e.size,16,16),p=new bt({color:e.color,transparent:!0,opacity:.22,depthWrite:!1});h=new Fe(f,p);const m=new di(new Fn({map:this.createNebulaTexture(e.color),transparent:!0,opacity:.55,blending:ln,depthWrite:!1}));m.scale.set(7,7,1),l.add(m)}else if(e.type==="Black Hole"){const f=new st(1,20,20),p=new bt({color:0});h=new Fe(f,p);const m=new _i(1.25,2.2,32),_=new bt({color:16747520,transparent:!0,opacity:.65,side:Ot,depthWrite:!1,blending:ln}),g=new Fe(m,_);g.rotation.x=Math.PI/2,l.add(g);const d=new di(new Fn({map:this.createGlowTexture(),color:16733440,transparent:!0,opacity:.55,blending:ln,depthWrite:!1}));d.scale.set(6,6,1),l.add(d)}else if(e.type==="Probe"){const f=new En(.18,.18,.45),p=new St({color:e.color,emissive:e.color,emissiveIntensity:.6});h=new Fe(f,p);const m=new Fe(new ia(.12,.22,8),new bt({color:16777215}));m.position.z=.3,m.rotation.x=Math.PI,l.add(m)}else{const f=new st(e.size*.55,16,16),p=new bt({color:e.color});h=new Fe(f,p);const m=new di(new Fn({map:this.createGlowTexture(),color:e.color,transparent:!0,opacity:.55,blending:ln,depthWrite:!1}));if(m.scale.set(e.size*4.5,e.size*4.5,1),l.add(m),e.type==="Exoplanet")for(let _=0;_<3;_++){const g=new Fe(new st(.08,8,8),new bt({color:_===1?"#4B9CD3":"#C9C9C9"}));g.position.set((Math.random()-.5)*1.2,(Math.random()-.5)*1.2,(Math.random()-.5)*1.2),l.add(g)}}h.userData={id:e.id,isBeyond:!0},l.add(h);const u=this.makeLabel(e.name);u.scale.set(4.2,1.05,1),u.position.y=e.size+1.1,l.add(u),this.beyondGroup.add(l)}this.scene.add(this.beyondGroup),this.beyondGroup.visible=!1}createSpiralTexture(e){const t=document.createElement("canvas");t.width=256,t.height=256;const n=t.getContext("2d");n.clearRect(0,0,256,256),n.fillStyle=e,n.globalAlpha=.55,n.translate(128,128);for(let r=0;r<2;r++){n.rotate(Math.PI),n.beginPath();for(let o=0;o<300;o++){const a=o/300*Math.PI*4,l=o/300*100,h=Math.cos(a)*l,u=Math.sin(a)*l*.42;o===0?n.moveTo(h,u):n.lineTo(h,u)}n.lineWidth=14,n.strokeStyle=e,n.stroke()}const s=new gi(t);return s.needsUpdate=!0,s}createNebulaTexture(e){const t=document.createElement("canvas");t.width=256,t.height=256;const n=t.getContext("2d"),s=n.createRadialGradient(128,128,0,128,128,128);s.addColorStop(0,e),s.addColorStop(.3,e+"88"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,256,256);for(let o=0;o<12;o++)n.fillStyle="rgba(255,255,255,0.04)",n.beginPath(),n.ellipse(128+(Math.random()-.5)*60,128+(Math.random()-.5)*60,Math.random()*50+10,Math.random()*30+10,Math.random()*Math.PI,0,Math.PI*2),n.fill();const r=new gi(t);return r.needsUpdate=!0,r}createVoyager(){const e=new st(32,32,32),t=new bt({color:7186687,transparent:!0,opacity:.035,side:gt,depthWrite:!1,wireframe:!1});this.voyagerMarker=new Fe(e,t),this.scene.add(this.voyagerMarker);const n=new Fe(new En(.18,.12,.35),new St({color:16766720,emissive:16766720,emissiveIntensity:.7}));n.position.set(34,2.5,10),n.userData={id:"voyager1",isBeyond:!1},this.scene.add(n);const s=new Fe(new En(.18,.12,.35),new St({color:16766720}));s.position.set(31,-2,-12),this.scene.add(s)}bindEvents(){window.addEventListener("resize",()=>this.onResize()),this.canvas.addEventListener("pointerdown",e=>this.onPointerDown(e)),this.canvas.addEventListener("pointermove",e=>this.onPointerMove(e)),window.addEventListener("pointerup",()=>this.onPointerUp()),this.canvas.addEventListener("wheel",e=>this.onWheel(e),{passive:!1}),this.canvas.addEventListener("click",e=>this.onClick(e)),window.addEventListener("keydown",e=>{var t;e.key===" "&&(this.paused=!this.paused,e.preventDefault()),e.key==="o"&&(this.showOrbits=!this.showOrbits,this.orbitLines.forEach(n=>n.visible=this.showOrbits)),e.key==="Escape"&&(this.clearFocus(),(t=this.onPlanetClick)==null||t.call(this,null))})}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}onPointerDown(e){this.isDragging=!0,this.lastDrag={x:e.clientX,y:e.clientY},e.target.setPointerCapture(e.pointerId)}onPointerMove(e){var n,s,r;const t=this.canvas.getBoundingClientRect();if(this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.isDragging){const o=e.clientX-this.lastDrag.x,a=e.clientY-this.lastDrag.y;this.spherical.theta-=o*.0045,this.spherical.phi+=a*.0045,this.spherical.phi=Math.max(.08,Math.min(Math.PI-.08,this.spherical.phi)),this.lastDrag={x:e.clientX,y:e.clientY},this.updateCameraPos()}else{this.raycaster.setFromCamera(this.mouse,this.camera);const o=Array.from(this.planets.values()).concat([this.sun]),a=this.raycaster.intersectObjects(o,!1),l=[];if(this.isBeyond){this.beyondGroup.traverse(u=>{var f;(f=u.userData)!=null&&f.id&&u instanceof Fe&&l.push(u)});const h=this.raycaster.intersectObjects(l,!1);if(h.length){const u=h[0].object.userData.id;u!==this.hoveredId&&(this.hoveredId=u,(n=this.onHover)==null||n.call(this,u),this.canvas.style.cursor="pointer");return}}if(a.length){const h=a[0].object.userData.id;h!==this.hoveredId&&(this.hoveredId=h,(s=this.onHover)==null||s.call(this,h),this.canvas.style.cursor="pointer")}else this.hoveredId!==null&&(this.hoveredId=null,(r=this.onHover)==null||r.call(this,null),this.canvas.style.cursor="grab")}}onPointerUp(){this.isDragging=!1}onWheel(e){e.preventDefault();const t=e.deltaY*.015,n=qn.clamp(this.spherical.radius+t*(this.spherical.radius*.08),this.minDistance,this.maxDistance);this.spherical.radius=n,this.updateCameraPos()}onClick(e){var r,o;const t=this.canvas.getBoundingClientRect();if(this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera),this.isBeyond){const a=[];this.beyondGroup.traverse(h=>{var u;(u=h.userData)!=null&&u.id&&h instanceof Fe&&a.push(h)});const l=this.raycaster.intersectObjects(a,!1);if(l.length){const h=l[0].object.userData.id;(r=this.onPlanetClick)==null||r.call(this,h),this.focusBeyondObject(h);return}return}const n=Array.from(this.planets.values()).concat([this.sun]),s=this.raycaster.intersectObjects(n,!1);if(s.length){const a=s[0].object.userData.id;(o=this.onPlanetClick)==null||o.call(this,a),this.focusOnPlanet(a),this.pulsePlanet(a)}}pulsePlanet(e){const t=this.planets.get(e)||(e==="sun"?this.sun:void 0);if(!t)return;const n=t.scale.x;let s=0;const r=()=>{if(s+=.08,s>1){t.scale.set(n,n,n);return}const o=1+Math.sin(s*Math.PI)*.18;t.scale.set(n*o,n*o,n*o),requestAnimationFrame(r)};r()}updateCameraPos(){const e=new P().setFromSpherical(this.spherical).add(this.target);this.camera.position.copy(e),this.camera.lookAt(this.target)}focusOnPlanet(e){this.focusTarget=e;const t=e==="sun"?this.sun:this.planets.get(e);if(e==="sun"||this.planetGroups.get(e),!t)return;const n=new P;t.getWorldPosition(n);const s=this.target.clone(),r=this.spherical.radius,o=e==="sun"?12:Math.max(4.5,t.geometry.parameters.radius*5.5+3),a=n.clone();this.spherical.theta;const l=this.spherical.phi;let h=0;const u=()=>{if(h+=.025,h>=1){this.target.copy(a),this.spherical.radius=o,this.updateCameraPos();return}const f=1-Math.pow(1-h,3);this.target.lerpVectors(s,a,f),this.spherical.radius=qn.lerp(r,o,f),this.spherical.phi=qn.lerp(l,1.15,f*.6),this.updateCameraPos(),requestAnimationFrame(u)};u()}focusBeyondObject(e){if(!Ps.find(f=>f.id===e))return;let n;if(this.beyondGroup.children.forEach(f=>{f.userData.id===e&&(n=f)}),!n)return;const s=n.position.clone(),r=this.target.clone(),o=this.spherical.radius,a=s.clone(),l=8;let h=0;const u=()=>{if(h+=.03,h>=1){this.target.copy(a),this.spherical.radius=l,this.updateCameraPos();return}const f=1-Math.pow(1-h,3);this.target.lerpVectors(r,a,f),this.spherical.radius=qn.lerp(o,l,f),this.updateCameraPos(),requestAnimationFrame(u)};u()}clearFocus(){this.focusTarget=null;const e=this.target.clone(),t=this.spherical.radius,n=new P(0,0,0),s=this.isBeyond?95:58;let r=0;const o=()=>{if(r+=.025,r>=1){this.target.copy(n),this.spherical.radius=s,this.updateCameraPos();return}const a=1-Math.pow(1-r,3);this.target.lerpVectors(e,n,a),this.spherical.radius=qn.lerp(t,s,a),this.updateCameraPos(),requestAnimationFrame(o)};o()}toggleBeyond(e){this.isBeyond=e;let t=0;const n=this.spherical.radius,s=e?110:58,r=this.target.clone(),o=e?new P(0,-6,0):new P(0,0,0),a=()=>{if(t+=.02,t>=1){this.target.copy(o),this.spherical.radius=s,this.updateCameraPos(),this.beyondGroup.visible=e,this.planetGroups.forEach(u=>u.visible=!e||(e&&["sun"].includes(u.userData.id)?!1:!e)),this.sun.visible=!e,this.asteroidGroup.visible=!e,this.orbitLines.forEach(u=>u.visible=!e&&this.showOrbits),this.labelSprites.forEach(u=>u.visible=!e),e&&(this.beyondGroup.visible=!0);return}const l=1-Math.pow(1-t,3);this.target.lerpVectors(r,o,l*.7),this.spherical.radius=qn.lerp(n,s,l),this.updateCameraPos();const h=e?1-t:t;this.sun.material.opacity=h,requestAnimationFrame(a)};e||(this.sun.visible=!0,this.planetGroups.forEach(l=>l.visible=!0),this.orbitLines.forEach(l=>l.visible=this.showOrbits),this.labelSprites.forEach(l=>l.visible=!0),this.asteroidGroup.visible=!0),a(),this.scene.fog=new $i(e?526360:132368,e?.0012:.0022)}setTimeScale(e){this.timeScale=e}setPaused(e){this.paused=e}setShowOrbits(e){this.showOrbits=e,this.orbitLines.forEach(t=>t.visible=e)}setShowLabels(e){this.showLabels=e,this.labelSprites.forEach(t=>t.visible=e)}}const Rm=document.getElementById("spaceCanvas"),Cm=document.getElementById("hero"),Pm=document.getElementById("loader"),Ko=document.getElementById("loaderFill"),Lm=document.getElementById("btnExplore"),Dm=document.getElementById("btnHeroBeyond"),Wr=document.getElementById("btnBeyondTop"),Im=document.getElementById("btnAbout"),Um=document.getElementById("btnResetView"),Xr=document.getElementById("railList"),$o=document.getElementById("heroPeek");document.getElementById("leftRail");const Nm=document.getElementById("bottomBar"),aa=document.getElementById("factsheet"),Nt=document.getElementById("sheetScroll"),Fm=document.getElementById("btnCloseSheet"),zi=document.getElementById("btnPause"),jo=document.getElementById("chkOrbits"),Zo=document.getElementById("chkLabels"),Pr=document.getElementById("chkMotion");document.getElementById("topbarStats");const qr=document.getElementById("statFocus"),Jo=document.getElementById("statTime"),ki=document.getElementById("toast"),Qo=document.getElementById("beyondHud"),Om=document.getElementById("btnReturnSolar"),Gi=document.getElementById("btnRailBeyond"),Bm=document.getElementById("heroScroll"),el=document.getElementById("aboutDialog"),zm=document.getElementById("btnCloseAbout"),tl=document.getElementById("beyondLegend");let zs=!1,Zt="overview",He;function yi(i,e=2200){ki.textContent=i,ki.classList.add("is-visible"),clearTimeout(ki._t),ki._t=setTimeout(()=>ki.classList.remove("is-visible"),e)}const km={sun:"☀️",mercury:"☿",venus:"♀",earth:"🌍",mars:"♂",jupiter:"♃",saturn:"♄",uranus:"♅",neptune:"♆",pluto:"♇"};function Gm(i){return km[i]??"●"}function Hm(){Xr.innerHTML="";for(const i of un){const e=document.createElement("button");e.className="rail-btn",e.dataset.id=i.id,e.innerHTML=`
      <span class="rail-dot" style="background:${i.color}; color:${i.color}"></span>
      <b>${i.name==="The Sun"?"Sun":i.name}</b>
      <small>${i.type.split(" ")[0]}</small>
    `,e.addEventListener("click",()=>{Ti(),He.isBeyond&&hn(!1),He.focusOnPlanet(i.id),oa(i.id),Zi(i.id)}),Xr.appendChild(e)}}function Zi(i){Xr.querySelectorAll(".rail-btn").forEach(t=>{const n=t.dataset.id;t.classList.toggle("is-active",n===i)});const e=un.find(t=>t.id===i);qr.textContent=e?e.name:He!=null&&He.isBeyond?"Beyond — Interstellar Space":"Solar System"}function Vm(){$o.innerHTML="";const i=un.filter(e=>["earth","mars","jupiter","saturn","neptune","sun","uranus","pluto"].includes(e.id)).slice(0,8);for(const e of i){const t=document.createElement("button");t.className="peek-item",t.innerHTML=`<div class="peek-dot" style="background:${e.color}; color:${e.color}; ${e.id==="saturn"?"box-shadow:0 0 0 3px rgba(255,255,255,0.12), 0 0 12px "+e.color:""} "></div><b>${e.name.replace("The ","")}</b><span>${e.subtitle}</span>`,t.addEventListener("click",()=>{Ti(),He.isBeyond&&hn(!1),He.focusOnPlanet(e.id),oa(e.id),Zi(e.id)}),$o.appendChild(t)}}function Wm(){tl.innerHTML="",Object.entries({Star:{label:"Stars",color:"#FFD93D"},Exoplanet:{label:"Exoplanets",color:"#4B9CD3"},Nebula:{label:"Nebulae",color:"#DA70D6"},Galaxy:{label:"Galaxy",color:"#87CEEB"},"Black Hole":{label:"Black hole",color:"#FF6B6B"},Probe:{label:"Probes",color:"#FFD700"},Cluster:{label:"Clusters",color:"#B0E0E6"}}).forEach(([e,t])=>{const n=document.createElement("span");n.className="legend-item",n.innerHTML=`<i style="background:${t.color}; color:${t.color}"></i> ${t.label}`,tl.appendChild(n)})}function oa(i){const e=un.find(n=>n.id===i),t=Ps.find(n=>n.id===i);if(e)Yr(e);else if(t)Xm(t);else return;aa.classList.add("is-open"),Nt.scrollTop=0}function Lr(){aa.classList.remove("is-open"),Zi(null)}function Yr(i){Zi(i.id),Math.min(100,i.diameterKm/139820*100*1.1);const e=i.moons.length?i.moons.map(m=>`
    <div class="moon-card">
      <span style="font-size:20px">🌙</span>
      <div>
        <b>${m.name} <small style="color:var(--muted)">— ${m.diameterKm.toLocaleString()} km</small></b>
        <p>${m.fact} <br><small>Distance from ${i.name}: ${m.distanceKm.toLocaleString()} km • Discovered: ${m.discovered}</small></p>
      </div>
    </div>
  `).join(""):`<p style="color:var(--muted); font-size:13px">No moons — ${i.name} travels alone.</p>`,t=qm(i),n=t?`
    <div class="quiz-box" id="quizBox">
      <h4>🧠 Quick quiz</h4>
      <p>${t.q}</p>
      ${t.opts.map((m,_)=>`<button class="quiz-opt" data-qi="${_}">${m}</button>`).join("")}
      <div class="quiz-feedback" id="quizFeedback"></div>
    </div>
  `:"",s=`
    <p style="color:var(--muted); font-size:13px; line-height:1.6; margin:10px 0 10px">
      ${i.type} • ${i.classification} • Discovered: ${i.discovered}
      <br><span style="color:var(--text)">${i.compareEarth}</span>
    </p>
    <div class="kid-callout"><i>💡</i> <span><b>For kids:</b> ${i.kidWow}</span></div>
    <div style="margin-top:12px">
      <h4 style="margin:0 0 6px; font:700 12px 'Space Grotesk'; letter-spacing:0.08em; text-transform:uppercase; color:var(--muted)">What makes it special?</h4>
      <ul class="bullet-list">
        ${i.funFacts.slice(0,3).map(m=>`<li>${m}</li>`).join("")}
      </ul>
    </div>
    ${n}
    <div class="sheet-actions">
      <button class="sheet-btn primary" data-action="focus">🎯 Fly to ${i.name.replace("The ","")}</button>
      <button class="sheet-btn" data-action="compare">Compare to Earth</button>
    </div>
  `,r=`
    <div class="fact-grid">
      <div class="fact"><h4>Diameter</h4><p><b>${i.diameterKm.toLocaleString()} km</b><br><small>${i.compareEarth}</small></p>
        <div class="compare-bar"><div class="compare-fill" style="width:${(i.diameterKm/139820*100).toFixed(1)}%"></div></div><div class="compare-label"><span>vs Jupiter max</span><span>${(i.diameterKm/139820*100).toFixed(1)}%</span></div>
      </div>
      <div class="fact"><h4>Gravity</h4><p><b>${i.gravity} m/s²</b><br><small>${(i.gravity/9.81).toFixed(2)}× Earth — you’d weigh ${(i.gravity/9.81*100).toFixed(0)}%</small></p></div>
      <div class="fact"><h4>Distance from Sun</h4><p><b>${i.distanceKm}</b><br><small>${i.distanceAU} AU${i.distanceAU?` • Light: ${(i.distanceAU*8.3).toFixed(1)} min`:""}</small></p></div>
      <div class="fact"><h4>Year & Day</h4><p><b>${i.orbitPeriod}</b><br><small>Year • Day: ${i.dayLength}</small></p></div>
      <div class="fact"><h4>Temperature</h4><p><b>${i.avgTemp}</b><br><small>${i.tempRange}</small></p></div>
      <div class="fact"><h4>Tilt</h4><p><b>${i.tilt}</b><br><small>Axial tilt creates seasons (where atmosphere exists)</small></p></div>
    </div>
    <div style="margin-top:12px; background:rgba(255,255,255,0.06); border:1px solid var(--line); border-radius:12px; padding:10px">
      <h4 style="margin:0 0 4px; font:700 11px 'Space Grotesk'; letter-spacing:0.10em; text-transform:uppercase; color:var(--muted)">Composition</h4>
      <p style="margin:0; font-size:12px; color:var(--muted)">${i.composition.join(" • ")}</p>
      <h4 style="margin:10px 0 4px; font:700 11px 'Space Grotesk'; letter-spacing:0.10em; text-transform:uppercase; color:var(--muted)">Atmosphere</h4>
      <p style="margin:0; font-size:12px; color:var(--muted)">${i.atmosphere.join(" • ")}</p>
    </div>
  `,o=`
    <p style="color:var(--muted); font-size:13px; margin:0 0 8px">${i.name} has <b style="color:var(--text)">${i.moonsCount} moon${i.moonsCount===1?"":"s"}</b> confirmed. ${i.id==="earth"?"Our Moon stabilizes seasons and tides.":i.id==="jupiter"?"Four are Galilean giants visible with binoculars!":i.id==="saturn"?"146 and counting — more than any planet.":""}</p>
    ${e}
    ${i.hasRings?`<div style="margin-top:10px; background: rgba(255,210,100,0.10); border:1px solid rgba(255,210,100,0.22); border-radius:12px; padding:10px"><b>💍 Rings:</b> <span style="color:var(--muted); font-size:12px">${i.id==="saturn"?"Huge icy rings — wide enough for 23 Earths, thinner than a house!":i.id==="jupiter"?"Faint dusty rings found 1979 — dark and hard to see.":i.id==="uranus"?"Dark narrow rings, discovered 1977 by star occultation.":"Faint arcs that shouldn’t be stable — still mysterious."}</span></div>`:""}
  `,a=`
    <ul class="bullet-list">
      ${i.funFacts.map(m=>`<li>${m}</li>`).join("")}
    </ul>
    <div class="kid-callout" style="margin-top:12px"><i>🚀</i> <span><b>Try this:</b> Ask an adult to help you find ${i.name} in the night sky — ${i.id==="earth"?"look down! You’re standing on it.":i.id==="mercury"?"look low at sunset/sunrise — it’s tricky!":i.id==="venus"?"look at sunset or sunrise — brightest “star”.":i.id==="mars"?"look for a reddish star that doesn’t twinkle as much.":i.id==="jupiter"?"look for the brightest star-like object — that’s Jupiter. Binoculars show 4 moons!":i.id==="saturn"?"find it near Jupiter often — golden dot. Telescope shows rings!":i.id==="uranus"?"needs binoculars — pale blue-green dot.":i.id==="neptune"?"needs telescope — deep blue dot.":i.id==="pluto"?"needs big telescope — Pluto is super dim (mag 14).":"look with a star map app!"}</span></div>
  `;let l="";Zt==="overview"&&(l=s),Zt==="numbers"&&(l=r),Zt==="moons"&&(l=o),Zt==="fun"&&(l=a);const h=i.discoveredBy?`<p style="color:var(--muted); font-size:11px; margin-top:10px">Discovery: ${i.discovered} • ${i.discoveredBy}</p>`:"";Nt.innerHTML=`
    <div class="sheet-hero" style="--planet-color: ${i.color}">
      <div class="sheet-planet-icon" style="background: radial-gradient(circle at 30% 30%, ${i.color}, ${i.accent} 68%); color:${i.color}">${Gm(i.id)}</div>
      <div>
        <h2 class="sheet-title">${i.name}</h2>
        <p class="sheet-subtitle">${i.subtitle}</p>
        <div class="sheet-badges">
          <span class="badge accent">${i.classification}</span>
          <span class="badge">${i.type}</span>
          ${i.hasRings?'<span class="badge" style="border-color:rgba(255,210,100,0.35); color:#FFD166">Has rings</span>':""}
          <span class="badge">${i.moonsCount} moon${i.moonsCount===1?"":"s"}</span>
        </div>
      </div>
    </div>

    <div class="sheet-tabs" role="tablist">
      <button class="sheet-tab ${Zt==="overview"?"is-active":""}" data-tab="overview">Overview</button>
      <button class="sheet-tab ${Zt==="numbers"?"is-active":""}" data-tab="numbers">Numbers</button>
      <button class="sheet-tab ${Zt==="moons"?"is-active":""}" data-tab="moons">Moons${i.hasRings?" & Rings":""}</button>
      <button class="sheet-tab ${Zt==="fun"?"is-active":""}" data-tab="fun">All facts</button>
    </div>

    <div class="sheet-tab-panel" data-panel>
      ${l}
    </div>
    ${h}
  `,Nt.querySelectorAll(".sheet-tab").forEach(m=>{m.addEventListener("click",()=>{Zt=m.dataset.tab,Yr(i)})}),Nt.querySelector("#quizBox")&&Nt.querySelectorAll(".quiz-opt").forEach(m=>{m.addEventListener("click",()=>{const _=parseInt(m.dataset.qi),g=Nt.querySelector("#quizFeedback"),d=t.answer,c=_===d;Nt.querySelectorAll(".quiz-opt").forEach(x=>{const v=parseInt(x.dataset.qi);v===d?x.classList.add("is-correct"):v===_&&!c&&x.classList.add("is-wrong"),x.disabled=!0}),g.textContent=c?`✅ ${t.explain}`:`❌ Not quite. ${t.explain}`,c&&yi(`🌟 Correct! You know ${i.name} well!`)})});const f=Nt.querySelector('[data-action="focus"]');f&&f.addEventListener("click",()=>He.focusOnPlanet(i.id));const p=Nt.querySelector('[data-action="compare"]');p&&p.addEventListener("click",()=>{var m;Zt="numbers",Yr(i),(m=Nt.querySelector("[data-panel]"))==null||m.scrollIntoView({behavior:"smooth"})})}function Xm(i){var t,n;Zi(null);const e=`<span class="badge accent">${i.type}</span> <span class="badge">${i.distanceLy}</span>`;Nt.innerHTML=`
    <div class="sheet-hero">
      <div class="sheet-planet-icon" style="background: radial-gradient(circle at 30% 30%, ${i.color}, #0B1220 70%); color:${i.color}">◈</div>
      <div>
        <h2 class="sheet-title">${i.name}</h2>
        <p class="sheet-subtitle">${i.subtitle} ${i.constellation?`• ${i.constellation}`:""}</p>
        <div class="sheet-badges">${e}</div>
      </div>
    </div>
    <div class="kid-callout"><i>✦</i> <span><b>Kid wow:</b> ${i.kidWow}</span></div>
    <p style="color:var(--muted); font-size:12px; margin:10px 0 6px"><b style="color:var(--text)">${i.distanceNote}</b></p>
    <ul class="bullet-list">
      ${i.facts.map(s=>`<li>${s}</li>`).join("")}
    </ul>
    <div class="sheet-actions">
      <button class="sheet-btn primary" data-action="focusBeyond">🎯 Fly to ${i.name}</button>
      <button class="sheet-btn" data-action="backSolar">← Solar System</button>
    </div>
    <p style="color:var(--muted); font-size:11px; margin-top:10px">Tip: Distances in Beyond are compressed like a map — real space is vastly emptier.</p>
  `,(t=Nt.querySelector('[data-action="focusBeyond"]'))==null||t.addEventListener("click",()=>He.focusBeyondObject(i.id)),(n=Nt.querySelector('[data-action="backSolar"]'))==null||n.addEventListener("click",()=>hn(!1))}function qm(i){return{sun:{q:"How much of the Solar System's mass is the Sun?",opts:["99.86% — almost everything","About half","Only 10%"],answer:0,explain:"The Sun is 99.86% of total mass — everything else is dust by comparison."},mercury:{q:"How long is a year on Mercury vs a day?",opts:["Year (88d) shorter than day","Day shorter than year","They are equal"],answer:0,explain:"A year (88d) is shorter than a solar day (176d) — two sunrises per year!"},venus:{q:"Why is Venus hotter than Mercury even though Mercury is closer?",opts:["Venus CO₂ traps heat like a blanket","Venus is bigger","Venus is closer"],answer:0,explain:"Venus thick CO₂ creates runaway greenhouse — 462°C everywhere!"},earth:{q:"What stabilizes Earth's tilt and seasons?",opts:["The Moon","Mars","The Sun"],answer:0,explain:"The Moon keeps tilt steady at 23.5° — without it, seasons would swing wildly."},mars:{q:"What’s Olympus Mons on Mars?",opts:["Tallest volcano in Solar System","Largest ocean","Deepest canyon"],answer:0,explain:"Olympus Mons is 22km high, 3× Everest, as wide as France!"},jupiter:{q:"What is the Great Red Spot?",opts:["Storm bigger than Earth, 350+ years","A moon","An ocean"],answer:0,explain:"Great Red Spot is a giant storm 1.3× Earth, raging for centuries!"},saturn:{q:"What are Saturn's rings made of?",opts:["Mostly water ice chunks","Solid metal","Gas clouds"],answer:0,explain:"Rings are countless water-ice pieces, thin as a house, wide enough for 23 Earths!"},uranus:{q:"Why is Uranus tipped on its side?",opts:["Giant collision long ago","Its moons pulled it","It was born that way"],answer:0,explain:"Uranus rolls 98° sideways — likely hit by Earth-sized object early on."},neptune:{q:"How fast are Neptune's winds?",opts:["2,100 km/h — faster than sound","100 km/h","500 km/h"],answer:0,explain:"Neptune has fastest winds: 2,100 km/h — 6× Earth hurricane!"},pluto:{q:"What is Tombaugh Regio on Pluto?",opts:["Heart-shaped nitrogen glacier","A volcano","A crater"],answer:0,explain:"Pluto's heart (Tombaugh Regio) is 1,600km wide nitrogen ice plain!"}}[i.id]??null}function Ti(){zs||(zs=!0,Cm.classList.add("is-hidden"),yi("🚀 Engines on! Drag to look around, click a planet to board."))}function Ym(){Ti(),hn(!1),He.clearFocus()}function Km(){Ti(),hn(!0),yi("◈ Warp complete — welcome to interstellar space! Click a star to inspect.")}function hn(i){i!==He.isBeyond&&(He.toggleBeyond(i),i?(Qo.classList.add("is-visible"),Wr.classList.add("is-active"),Gi.textContent="← Solar System",Gi._beyond=!0,qr.textContent="Beyond — Interstellar Space"):(Qo.classList.remove("is-visible"),Wr.classList.remove("is-active"),Gi.innerHTML="<span>◈</span> Go Beyond <small>Voyager’s view</small>",Gi._beyond=!1,qr.textContent="Solar System"))}function $m(){let i=0;const e=setInterval(()=>{i+=Math.random()*18+6,i>=100?(i=100,clearInterval(e),Ko.style.width="100%",setTimeout(()=>Pm.classList.add("is-hidden"),400)):Ko.style.width=i+"%"},120);setTimeout(()=>{He=new Am(Rm),He.onPlanetClick=n=>{zs||Ti(),oa(n)},He.onHover=n=>{if(n){const s=un.find(a=>a.id===n),r=Ps.find(a=>a.id===n),o=s?s.name:r?r.name:n;Nm.querySelector("#bbHint").textContent=`◉ ${o} — click to inspect`}else document.getElementById("bbHint").textContent=zs?"☄︎ Tip: Click the Sun for its secrets, or Saturn for its 146 moons. Press O to hide orbits, Space to pause.":"Hover a planet and click — or press Explore Space to start."},He.spherical.radius=58,He.updateCameraPos(),Hm(),Vm(),Wm();const t=document.querySelectorAll(".tseg");t.forEach(n=>{n.addEventListener("click",()=>{t.forEach(r=>r.classList.remove("is-active")),n.classList.add("is-active");const s=parseFloat(n.dataset.speed);He.setTimeScale(s),Jo.textContent=s+"×"})}),zi.addEventListener("click",()=>{He.setPaused(!He.paused),zi.textContent=He.paused?"▶︎ Play":"⏸︎ Pause",zi.style.background=He.paused?"white":"",zi.style.color=He.paused?"#0B1220":"",yi(He.paused?"⏸︎ Paused — press Space or click Play":"▶︎ Resumed")}),jo.addEventListener("change",()=>He.setShowOrbits(jo.checked)),Zo.addEventListener("change",()=>He.setShowLabels(Zo.checked)),Pr.addEventListener("change",()=>{He.scene.fog=new $i(Pr.checked?132368:264216,Pr.checked?.0022:.0012)}),Lm.addEventListener("click",Ym),Dm.addEventListener("click",Km),Wr.addEventListener("click",()=>hn(!He.isBeyond)),Gi.addEventListener("click",()=>hn(!He.isBeyond)),Om.addEventListener("click",()=>hn(!1)),Um.addEventListener("click",()=>{He.clearFocus(),Lr(),yi("↺ View reset")}),Fm.addEventListener("click",Lr),Bm.addEventListener("click",()=>{Ti(),yi("Drag to look, scroll to zoom, click planets!")}),window.addEventListener("keydown",n=>{n.code==="Space"&&(He.setPaused(!He.paused),zi.textContent=He.paused?"▶︎ Play":"⏸︎ Pause",n.preventDefault()),(n.key==="r"||n.key==="R")&&He.clearFocus(),n.key==="Escape"&&(aa.classList.contains("is-open")?Lr():He.isBeyond&&hn(!1))}),Im.addEventListener("click",()=>el.showModal()),zm.addEventListener("click",()=>el.close()),Jo.textContent="1×"},500)}$m();
