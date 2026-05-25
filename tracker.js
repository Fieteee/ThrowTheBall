let currentView = "game";
let pokemonDex = [];

const transparentPixel =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

const storyLocations = [
  "Starter",
  "Aspertia City",
  "Route 19",
  "Floccesy Town",
  "Route 20",
  "Floccesy Ranch",
  "Virbank City",
  "Virbank Complex",
  "Castelia City",
  "Castelia Sewers",
  "Relic Passage",
  "Route 4",
  "Desert Resort",
  "Relic Castle",
  "Route 16",
  "Lostlorn Forest",
  "Route 5",
  "Driftveil Drawbridge",
  "Driftveil City",
  "Route 6",
  "Mistralton Cave",
  "Chargestone Cave",
  "Route 7",
  "Celestial Tower",
  "Reversal Mountain",
  "Strange House",
  "Undella Town",
  "Undella Bay",
  "Route 13",
  "Route 12",
  "Village Bridge",
  "Route 11",
  "Route 9",
  "Seaside Cave",
  "Route 21",
  "Humilau City",
  "Route 22",
  "Giant Chasm",
  "Route 23",
  "Victory Road",
  "Marvelous Bridge",
  "Route 15",
  "Route 14",
  "Abundant Shrine",
  "Moor of Icirrus",
  "Icirrus City",
  "Dragonspiral Tower",
  "Twist Mountain",
  "Clay Tunnel",
  "Underground Ruins",
  "Pinwheel Forest",
  "Nacrene City",
  "Route 3",
  "Wellspring Cave",
  "Striaton City",
  "Dreamyard",
  "Route 2",
  "Accumula Town",
  "Route 1",
  "Route 17",
  "Route 18",
  "P2 Laboratory",
  "Nature Preserve"
];

const bossFights = [
  { name: "Matisse", location: "Aspertia City", place: "Aspertia City", image: "Bilder/matisse.png", levelCap: 6 },
  { name: "Matisse", location: "Floccesy Ranch", place: "Floccesy Ranch", image: "Bilder/matisse.png", levelCap: 8 },
  { name: "Top 2", location: "Floccesy Ranch", place: "Floccesy Ranch", image: "Bilder/gregor.png", levelCap: 8 },
  { name: "Cheren", location: "Floccesy Ranch", place: "Aspertia City Gym", image: "Bilder/cheren.png", levelCap: 13 },
  { name: "Mica", location: "Virbank City", place: "Virbank City Gym", image: "Bilder/mica.png", levelCap: 18 },
  { name: "Artie", location: "Castelia Sewers", place: "Castelia City Gym", image: "Bilder/artie.png", levelCap: 24 },
  { name: "Achromas", location: "Route 4", place: "Route 4", image: "Bilder/achromas.png", levelCap: 27 },
  { name: "Kamilla", location: "Relic Castle", place: "Nimbasa City Gym", image: "Bilder/kamilla.png", levelCap: 30 },
  { name: "Turner", location: "Driftveil City", place: "Driftveil City Gym", image: "Bilder/turner.png", levelCap: 33 },
  { name: "Geraldine", location: "Mistralton Cave", place: "Mistralton City Gym", image: "Bilder/geraldine.png", levelCap: 39 },
  { name: "Matisse", location: "Undella Town", place: "Undella Town", image: "Bilder/matisse.png", levelCap: 41 },
  { name: "Violaceus", location: "Route 13", place: "Lacunosa Town", image: "Bilder/violaceus.png", levelCap: 46 },
  { name: "Lysander", location: "Route 9", place: "Opelucid City Gym", image: "Bilder/lysander.png", levelCap: 48 },
  { name: "Violaceus", location: "Route 9", place: "Opelucid City", image: "Bilder/violaceus.png", levelCap: 49 },
  { name: "Shadow", location: "Route 9", place: "Opelucid City", image: "Bilder/shadow.png", levelCap: 49 },
  { name: "Benson", location: "Humilau City", place: "Humilau City Gym", image: "Bilder/benson.png", levelCap: 51 },
  { name: "Violaceus", location: "Route 22", place: "Command Center", image: "Bilder/violaceus.png", levelCap: 52 },
  { name: "Violaceus", location: "Route 22", place: "Kyurem's Location", image: "Bilder/violaceus.png", levelCap: 52 },
  { name: "Achromas", location: "Route 22", place: "Control Room", image: "Bilder/achromas.png", levelCap: 53 },
  { name: "Ghetsis", location: "Giant Chasm", place: "Giant Chasm", image: "Bilder/ghetsis.png", levelCap: 52 },
  { name: "Matisse", location: "Victory Road", place: "Victory Road", image: "Bilder/Matisse.png", levelCap: 55 },
  { name: "Anissa", location: "Victory Road", place: "Pokémon League W Room", image: "Bilder/anissa.png", levelCap: 58 },
  { name: "Astor", location: "Victory Road", place: "Pokémon League NW Room", image: "Bilder/astor.png", levelCap: 58 },
  { name: "Kattalea", location: "Victory Road", place: "Pokémon League NE Room", image: "Bilder/kattalea.png", levelCap: 58 },
  { name: "Eugen", location: "Victory Road", place: "Pokémon League E Room", image: "Bilder/eugen.png", levelCap: 58 },
  { name: "Lilia", location: "Victory Road", place: "Pokémon League Champion", image: "Bilder/lillia.png", levelCap: 59 }
];

function esc(text) {
  return String(text || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getPlayers() {
  return JSON.parse(localStorage.getItem("nuzlockePlayers")) || [];
}

function savePlayers(players) {
  localStorage.setItem("nuzlockePlayers", JSON.stringify(players));
}

function getTrackerData() {
  return JSON.parse(localStorage.getItem("nuzlockeTracker")) || {};
}

function saveTrackerData(data) {
  localStorage.setItem("nuzlockeTracker", JSON.stringify(data));
}

function normalizePokemonName(name) {
  return String(name || "").toLowerCase().trim();
}

function findPokemon(name) {
  return pokemonDex.find(p =>
    normalizePokemonName(p.name) === normalizePokemonName(name)
  );
}

function getPokemonSprite(name) {
  const pokemon = findPokemon(name);

  if (!pokemon) {
    return transparentPixel;
  }

  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
}

function renderPlayerSetup() {
  const players = getPlayers();

  let html = `
    <div class="player-settings">
      <h2>Spieler</h2>

      <input id="newPlayerName" type="text" placeholder="z.B. Fiete">

      <button onclick="addPlayer()">Spieler hinzufügen</button>
  `;

  if (players.length > 0) {
    html += `<h3>Aktuelle Spieler:</h3><div class="player-list">`;

    players.forEach((player, index) => {
      html += `
        <div class="player-entry">
          <span>${esc(player)}</span>
          <button class="remove-player-btn" onclick="removePlayer(${index})">X</button>
        </div>
      `;
    });

    html += `</div>`;
  }

  html += `</div>`;

  document.getElementById("playerSetup").innerHTML = html;
}

function addPlayer() {
  const input = document.getElementById("newPlayerName");
  const name = input.value.trim();

  if (!name) {
    alert("Bitte Namen eingeben.");
    return;
  }

  const players = getPlayers();
  players.push(name);
  savePlayers(players);
  renderTracker();
}

function removePlayer(index) {
  const players = getPlayers();
  players.splice(index, 1);
  savePlayers(players);
  renderTracker();
}

function showView(view) {
  currentView = view;
  renderTracker();
}

function saveLocation(location, locationIndex) {
  const players = getPlayers();
  const trackerData = getTrackerData();

  const encounters = players.map((player, playerIndex) => {
    return {
      player: player,
      pokemon: document.getElementById(`loc-${locationIndex}-player-${playerIndex}-pokemon`)?.value.trim() || "",
      nickname: document.getElementById(`loc-${locationIndex}-player-${playerIndex}-nickname`)?.value.trim() || "",
      status: document.getElementById(`loc-${locationIndex}-player-${playerIndex}-status`)?.value || "Offen"
    };
  });

  trackerData[location] = {
    location: location,
    encounters: encounters
  };

  saveTrackerData(trackerData);
}

function handlePokemonInput(location, locationIndex, playerIndex) {
  saveLocation(location, locationIndex);

  const input = document.getElementById(`loc-${locationIndex}-player-${playerIndex}-pokemon`);
  const sprite = document.getElementById(`sprite-${locationIndex}-${playerIndex}`);
  const suggestions = document.getElementById(`suggestions-${locationIndex}-${playerIndex}`);

  const value = input.value.trim();

  sprite.src = getPokemonSprite(value);

  if (value.length < 2 || pokemonDex.length === 0) {
    suggestions.innerHTML = "";
    return;
  }

  const matches = pokemonDex
    .filter(p => normalizePokemonName(p.name).includes(normalizePokemonName(value)))
    .slice(0, 8);

  suggestions.innerHTML = matches.map(p => `
    <div
      class="tracker-suggestion"
      onclick='selectPokemon(${JSON.stringify(location)}, ${locationIndex}, ${playerIndex}, ${JSON.stringify(p.name)})'
    >
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png" alt="">
      <span>${esc(p.name)}</span>
    </div>
  `).join("");
}

function selectPokemon(location, locationIndex, playerIndex, name) {
  const input = document.getElementById(`loc-${locationIndex}-player-${playerIndex}-pokemon`);
  const sprite = document.getElementById(`sprite-${locationIndex}-${playerIndex}`);

  input.value = name;
  sprite.src = getPokemonSprite(name);

  closeSuggestions();
  saveLocation(location, locationIndex);
}

function closeSuggestions() {
  document.querySelectorAll(".tracker-suggestions").forEach(box => {
    box.innerHTML = "";
  });
}

function renderGameView() {
  const players = getPlayers();
  const trackerData = getTrackerData();

  if (players.length === 0) {
    document.getElementById("trackerView").innerHTML =
      "<p>Bitte füge zuerst mindestens einen Spieler hinzu.</p>";
    return;
  }

  let html = `<div class="timeline-view">`;

  storyLocations.forEach((location, locationIndex) => {
    const entry = trackerData[location] || { encounters: [] };
    const bossesHere = bossFights.filter(boss => boss.location === location);

    html += `
      <div class="timeline-section">
        <div class="timeline-header">${esc(location)}</div>
    `;

    players.forEach((player, playerIndex) => {
      const encounter =
        entry.encounters.find(e => e.player === player) || {
          pokemon: "",
          nickname: "",
          status: "Offen"
        };

      html += `
        <div class="timeline-encounter">
          <div class="timeline-player">${esc(player)}</div>

          <div class="pokemon-input-wrap">
            <img
              class="tracker-sprite"
              id="sprite-${locationIndex}-${playerIndex}"
              src="${getPokemonSprite(encounter.pokemon)}"
              alt=""
            >

            <input
              id="loc-${locationIndex}-player-${playerIndex}-pokemon"
              type="text"
              value="${esc(encounter.pokemon)}"
              placeholder="Pokémon"
              autocomplete="off"
              oninput='handlePokemonInput(${JSON.stringify(location)}, ${locationIndex}, ${playerIndex})'
              onblur="setTimeout(closeSuggestions, 150)"
            >

            <div
              class="tracker-suggestions"
              id="suggestions-${locationIndex}-${playerIndex}"
            ></div>
          </div>

          <input
            id="loc-${locationIndex}-player-${playerIndex}-nickname"
            type="text"
            value="${esc(encounter.nickname)}"
            placeholder="Spitzname"
            oninput='saveLocation(${JSON.stringify(location)}, ${locationIndex})'
          >

          <select
            id="loc-${locationIndex}-player-${playerIndex}-status"
            onchange='saveLocation(${JSON.stringify(location)}, ${locationIndex})'
          >
            <option value="Offen" ${encounter.status === "Offen" ? "selected" : ""}>Offen</option>
            <option value="Lebt" ${encounter.status === "Lebt" ? "selected" : ""}>Lebt</option>
            <option value="Box" ${encounter.status === "Box" ? "selected" : ""}>Box</option>
            <option value="Tot" ${encounter.status === "Tot" ? "selected" : ""}>Tot</option>
            <option value="Verpasst" ${encounter.status === "Verpasst" ? "selected" : ""}>Verpasst</option>
          </select>
        </div>
      `;
    });

    bossesHere.forEach(boss => {
      html += `
        <div class="timeline-boss">
          <img
            class="timeline-boss-img"
            src="${boss.image}"
            alt="${esc(boss.name)}"
            onerror="this.src='${transparentPixel}'"
          >

          <div class="timeline-boss-info">
            <div class="timeline-boss-name">${esc(boss.name)}</div>
            <div class="timeline-boss-place">${esc(boss.place)}</div>
          </div>

          <div class="timeline-level-cap">
            Lvl Cap
            <strong>${boss.levelCap}</strong>
          </div>
        </div>
      `;
    });

    html += `</div>`;
  });

  html += `</div>`;

  document.getElementById("trackerView").innerHTML = html;
}

function renderBoxView(type) {
  const trackerData = getTrackerData();

  let html = `<div class="box-grid">`;
  let hasEntries = false;

  Object.values(trackerData).forEach(location => {
    location.encounters.forEach(encounter => {
      if (!encounter.pokemon) return;

      const isDead = encounter.status === "Tot";
      const isAlive = encounter.status === "Lebt" || encounter.status === "Box";

      if (type === "box" && !isAlive) return;
      if (type === "grave" && !isDead) return;

      hasEntries = true;

      html += `
        <div class="box-entry">
          <img src="${getPokemonSprite(encounter.pokemon)}" alt="">
          <br>
          <strong>${esc(encounter.pokemon)}</strong>
          <br>
          ${esc(encounter.nickname || "-")}
          <br>
          ${esc(encounter.player)}
          <br>
          ${esc(location.location)}
          <br>
          ${esc(encounter.status)}
        </div>
      `;
    });
  });

  html += `</div>`;

  document.getElementById("trackerView").innerHTML =
    hasEntries ? html : "<p>Noch keine Pokémon eingetragen.</p>";
}

function renderTracker() {
  renderPlayerSetup();

  if (currentView === "game") {
    renderGameView();
  }

  if (currentView === "box") {
    renderBoxView("box");
  }

  if (currentView === "grave") {
    renderBoxView("grave");
  }
}

function clearTracker() {
  if (confirm("Willst du wirklich alles löschen?")) {
    localStorage.removeItem("nuzlockeTracker");
    localStorage.removeItem("nuzlockePlayers");
    renderTracker();
  }
}

async function loadPokemonDex() {
  const cached = localStorage.getItem("pokemonDexGerman");

  if (cached) {
    pokemonDex = JSON.parse(cached);
    renderTracker();
    return;
  }

  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon-species?limit=649");
    const data = await res.json();

    pokemonDex = await Promise.all(
      data.results.map(async (pokemon, index) => {
        const speciesRes = await fetch(pokemon.url);
        const species = await speciesRes.json();

        const germanName =
          species.names.find(n => n.language.name === "de")?.name ||
          species.name;

        return {
          id: index + 1,
          name: germanName
        };
      })
    );

    localStorage.setItem("pokemonDexGerman", JSON.stringify(pokemonDex));
    renderTracker();
  } catch (error) {
    console.log("Pokémon-Dex konnte nicht geladen werden:", error);
  }
}

window.onload = function () {
  renderTracker();
  loadPokemonDex();
};