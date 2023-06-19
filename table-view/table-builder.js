const fs = require("fs");

const rawData = fs.readFileSync("./data", "utf-8");
const data = rawData.split("\n").map(tr => {
  const tds = tr.split("|");
  tds[1] = tds[1][0].toUpperCase() + tds[1].slice(1)
  tds[2] = tds[2].split(",").map((type) => `<span class="${type}">${type}</span>`).join("");
  return tds;
});

const wrapWithTr = trs => `<tr>${trs.join("")}</tr>`;
const wrapWithTd = tds => `<td>${tds}</td>`;

const html = data.map(tr => wrapWithTr(tr.map(wrapWithTd))).join("\n");
console.log(html);