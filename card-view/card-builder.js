const fs = require("fs");

const rawData = fs.readFileSync("./data", "utf-8");
const data = rawData.split("\n").map((tr) => {
  const tds = tr.split("|");
  tds[1] = tds[1][0].toUpperCase() + tds[1].slice(1);
  tds[2] = tds[2]
    .split(",")
    .map(
      (type) =>
        `<span class="${type}">${
          type[0].toLocaleUpperCase() + type.slice(1)
        }</span>`
    )
    .join("");
  return tds;
});

const html = `<section class="pokedex">
<div class="pokedex-row">
${data
  .map(([id, name, types, speed, hp, xp, attack, defense, weight], index) => {
    let cardDetails = [];
    cardDetails.push(`<div class="pokemon-card">`);
    cardDetails.push(`<div class="pokemon-image">
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(index+1).toString().padStart(3, "0")}.png">
    </div>`);
    cardDetails.push(`<p class="pokemon-name">${name}</p>`);
    cardDetails.push(`<table class="pokemon-details">`);
    cardDetails.push(`<tr class="pokemon-property">`);
    cardDetails.push(`<td class="pokemon-property-name">Types</td>`);
    cardDetails.push(`<td class="pokemon-property-value">${types}</td>`);
    cardDetails.push(`</tr>`);
    cardDetails.push(`<tr class="pokemon-property">`);
    cardDetails.push(`<td class="pokemon-property-name">Weight</td>`);
    cardDetails.push(`<td class="pokemon-property-value">${weight}</td>`);
    cardDetails.push(`</tr>`);
    cardDetails.push(`<tr class="pokemon-property">`);
    cardDetails.push(`<td class="pokemon-property-name">HP</td>`);
    cardDetails.push(`<td class="pokemon-property-value">${hp}</td>`);
    cardDetails.push(`</tr>`);
    cardDetails.push(`<tr class="pokemon-property">`);
    cardDetails.push(`<td class="pokemon-property-name">XP</td>`);
    cardDetails.push(`<td class="pokemon-property-value">${xp}</td>`);
    cardDetails.push(`</tr>`);
    cardDetails.push(`<tr class="pokemon-property">`);
    cardDetails.push(`<td class="pokemon-property-name">Attack</td>`);
    cardDetails.push(`<td class="pokemon-property-value">${attack}</td>`);
    cardDetails.push(`</tr>`);
    cardDetails.push(`<tr class="pokemon-property">`);
    cardDetails.push(`<td class="pokemon-property-name">Defense</td>`);
    cardDetails.push(`<td class="pokemon-property-value">${defense}</td>`);
    cardDetails.push(`</tr>`);
    cardDetails.push(`</table>`);
    cardDetails.push(`</div>`);
    if ((index + 1) % 4 === 0) {
      cardDetails.push(`</div>\n<div class="pokedex-row">`);
    }
    return cardDetails.join("\n");
  })
  .join("\n")}
</div>
</section>`;

console.log(html);
