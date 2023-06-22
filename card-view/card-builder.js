const fs = require("fs");

const rawData = fs.readFileSync("./data", "utf-8");
const data = rawData.split("\n").map((div) => {
  const divs = div.split("|");
  divs[1] = divs[1][0].toUpperCase() + divs[1].slice(1);
  divs[2] = divs[2]
    .split(",")
    .map(
      (type) =>
        `<span class="${type}">${
          type[0].toLocaleUpperCase() + type.slice(1)
        }</span>`
    )
    .join("");
  return divs;
});

const html = `
${data
  .map(([id, name, types, speed, hp, xp, attack, defense, weight], index) => {
    let cardDetails = [];
    cardDetails.push(`<div class="pokemon-card">`);
    cardDetails.push(`<div class="pokemon-image-container">
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
      index + 1
    )
      .toString()
      .padStart(3, "0")}.png">
    </div>`);
    cardDetails.push(`<p class="pokemon-name">${name}</p>`);
    cardDetails.push(`<div class="pokemon-details">`);
    cardDetails.push(`<div class="pokemon-property">`);
    cardDetails.push(`<div class="pokemon-property-name">Types</div>`);
    cardDetails.push(`<div class="pokemon-property-value">${types}</div>`);
    cardDetails.push(`</div>`);
    cardDetails.push(`<div class="pokemon-property">`);
    cardDetails.push(`<div class="pokemon-property-name">Weight</div>`);
    cardDetails.push(`<div class="pokemon-property-value">${weight}</div>`);
    cardDetails.push(`</div>`);
    cardDetails.push(`<div class="pokemon-property">`);
    cardDetails.push(`<div class="pokemon-property-name">HP</div>`);
    cardDetails.push(`<div class="pokemon-property-value">${hp}</div>`);
    cardDetails.push(`</div>`);
    cardDetails.push(`<div class="pokemon-property">`);
    cardDetails.push(`<div class="pokemon-property-name">XP</div>`);
    cardDetails.push(`<div class="pokemon-property-value">${xp}</div>`);
    cardDetails.push(`</div>`);
    cardDetails.push(`<div class="pokemon-property">`);
    cardDetails.push(`<div class="pokemon-property-name">Attack</div>`);
    cardDetails.push(`<div class="pokemon-property-value">${attack}</div>`);
    cardDetails.push(`</div>`);
    cardDetails.push(`<div class="pokemon-property">`);
    cardDetails.push(`<div class="pokemon-property-name">Defense</div>`);
    cardDetails.push(`<div class="pokemon-property-value">${defense}</div>`);
    cardDetails.push(`</div>`);
    cardDetails.push(`</div>`);
    cardDetails.push(`</div>`);
    return cardDetails.join("\n");
  })
  .join("\n")}
  `;

console.log(html);
