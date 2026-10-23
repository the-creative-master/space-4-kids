# Space for Kids — Explore the Solar System in 3D

> A clean, kid-friendly, no-AI-gimmicks interactive Solar System. Built in TypeScript + Three.js. Click planets for **tons** of real facts, then dare to go *beyond*.

![Space for Kids](https://img.shields.io/badge/Three.js-0.160-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue) ![Vite](https://img.shields.io/badge/Vite-5.2-purple)

### ✨ What you get
- **Living Solar System** — 8 planets + Sun, Moon, Pluto, asteroid belt, Kuiper hints. All 3D spheres with procedural textures (no external images).
- **Real physics, kid-scale** — distances/orbits compressed so you can *see* Mercury vs Jupiter, but periods/tilts/rotations use real NASA data. Time-warp 1× → 200×.
- **Saturn rings, Earth clouds, Galilean moons, Titan, Triton, Charon** — instanced moons with real orbital vibes. Orbit controls: drag to orbit, scroll to zoom.
- **Click = Facts** — every world has: diameter, mass, gravity, temperature, composition, atmosphere, discovery, 7+ fun facts, kid-wow line, comparison to Earth, moons & quiz.
- **Beyond** — warp outside the heliopause (120 AU) to a star map: Proxima Centauri, Alpha Centauri, TRAPPIST-1 (7 worlds), Kepler-452b, Betelgeuse, Orion Nebula, Andromeda Galaxy, Sagittarius A* black hole, Voyager 1, Pleiades, Crab Nebula. All clickable.
- **Clean classroom-ready UI** — starry background, vignette, topbar + left rail + bottom time controls + right fact sheet. Works offline after load.

### 🚀 Run locally
```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # tsc + vite build → dist/
npm run preview
```

### 🎮 Controls
| Action | How |
|--------|-----|
| Look around | drag |
| Zoom | scroll / pinch |
| Inspect planet | click planet |
| Warp Beyond | `Go Beyond` (top, left rail, or hero) |
| Pause | `Space` or Pause button |
| Hide orbits | `O` or toggle |
| Reset view | ⟲ Reset / `R` / `Esc` |

### 🧒 Kid facts at a glance
- Sun is 99.86% of system mass (1.3M Earths fit).
- Mercury has 2 sunrises per year.
- Venus rotates backwards, hotter than Mercury (462°C).
- Earth’s day lengthens 1.7 ms/century (Moon stealing spin).
- Mars sunset is **blue**.
- Jupiter could float in water; Great Red Spot 1.3× Earth.
- Saturn’s rings wide enough for 23 Earths, thinner than a house.
- Uranus rolls sideways (98° tilt).
- Neptune winds 2,100 km/h.
- Pluto’s heart glacier > Texas.

### 🛰 Tech
- **TypeScript + Vite + Three.js 0.160** — one canvas, ~15k star points with custom shaders, additive glows, fog, tone mapping.
- Procedural CanvasTexture for every planet (Earth continents, Mars rust, Jupiter bands + GRS, Saturn banding, etc.).
- RingGeometry with Cassini Division opacity map, InstanceMesh asteroid belt (1.1k).
- Manually tuned orbital radii/speeds; logarithmic Beyond sphere.

### 📚 Data
NASA Planetary Fact Sheets, JPL Small-Body Database, Gaia DR3, EHT (Sgr A* 2022). All copy by humans, checked 2024.

### No AI slop
No generated “AI elements”, no LLM chat widget — just space, beautifully rendered.

— Made for curious kids and adults who never stopped looking up.
