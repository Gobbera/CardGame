const asSketch = document.getElementById('asSketch');
const doisSketch = document.getElementById('doisSketch');

let naipesOnValueQuantity = '<img class="naipe-middle" src="/images/naipes/Naipe_copas.png" alt="${naipeImageAlt}" style="width: 16px; height: 18px"></img>';
let cardValueColor = "redColor";
let naipeImage = "/images/naipes/Naipe_copas.png";
let naipeImageAlt;

const asCard = document.createElement('div');
asCard.innerHTML =
`<div class="card" style="position: absolute;"">
    <span class="card-value ${cardValueColor}" data-value="" data-naipe="">A</span>
    <img class="card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value ${cardValueColor} value-inverted" id="vira" data-value="" data-id="" data-naipe="">A</span>
    <img class="naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    ${naipesOnValueQuantity}
</div>`;
    
    
    asSketch.insertAdjacentElement("beforeend", asCard.firstChild);

const doisCard = document.createElement('div');
doisCard.innerHTML =
`<div class="card" style="position: absolute;"">
    <span class="card-value" id="vira" data-value="" data-id="" data-naipe="">2</span>
    <img class="card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value value-inverted" id="vira" data-value="" data-id="" data-naipe="">2</span>
    <img class="naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <img class="naipe-middle" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
</div>`;


doisSketch.insertAdjacentElement("beforeend", doisCard.firstChild);
