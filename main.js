import { Earth, Mars, Moon, Position, RotatedPlanet, Sun } from '@/solar-system.js';

const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = '#f1f1f1';

document.getElementById('app').append(canvas);

const ctx = canvas.getContext('2d');

const sun = new Sun(new Position(canvas.width / 2, canvas.height / 2));
const earth = new Earth(sun.position, sun.size + 100);
const mars = new Mars(sun.position, sun.size + 250);
const moon = new Moon(earth.position, earth.size + 30);

const planets = [sun, earth, moon, mars];

window.requestAnimationFrame(renderPlanets);

function renderPlanets() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  planets.forEach((item) => {
    if (item instanceof RotatedPlanet) {
      item.rotate();
    }
    item.render(ctx);
  });

  window.requestAnimationFrame(renderPlanets);
}
