const asSketch = document.getElementById('asSketch');
const doisSketch = document.getElementById('doisSketch');
const tresSketch = document.getElementById('tresSketch');
const quatroSketch = document.getElementById('quatroSketch');
const cincoSketch = document.getElementById('cincoSketch');

let cardValueColor = "redColor";
let naipeImage = "/images/naipes/Naipe_copas.png";
let naipeImageAlt;

let naipesOnValueQuantity;


function chooseNaipesQuantityOnValue(op) {
    switch(op) {
        case 1:
            naipesOnValueQuantity =
            `<img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; align-self: center;"></img>`;
            break;
        case 2:
            naipesOnValueQuantity = 
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 48px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 48px; top: 20%;"></img>`
            break;
        case 3:
            naipesOnValueQuantity = 
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 48px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 48px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; align-self: center;"></img>`
            break;
        case 4:
            naipesOnValueQuantity = 
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>`
            break;
        case 5:
            naipesOnValueQuantity = 
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; align-self: center;"></img>`
            break;
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 1;
chooseNaipesQuantityOnValue(naipesOnValueQuantity);

const asCard = document.createElement('div');
asCard.innerHTML =
`<div class="card" style="position: absolute;"">
    <span class="card-value ${cardValueColor}" data-value="" data-naipe="">A</span>
    <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value ${cardValueColor} value-inverted" id="vira" data-value="" data-id="" data-naipe="">A</span>
    <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    ${naipesOnValueQuantity}
</div>`;
asSketch.insertAdjacentElement("beforeend", asCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//
    
naipesOnValueQuantity = 2;
chooseNaipesQuantityOnValue(naipesOnValueQuantity);
const doisCard = document.createElement('div');

doisCard.innerHTML =
`<div class="card" style="position: absolute;"">
    <span class="card-value ${cardValueColor}" data-value="" data-naipe="">2</span>
    <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value ${cardValueColor} value-inverted" id="vira" data-value="" data-id="" data-naipe="">2</span>
    <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    ${naipesOnValueQuantity}
</div>`;
doisSketch.insertAdjacentElement("beforeend", doisCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 3;
chooseNaipesQuantityOnValue(naipesOnValueQuantity);
const tresCard = document.createElement('div');

tresCard.innerHTML =
`<div class="card" style="position: absolute;"">
    <span class="card-value ${cardValueColor}" data-value="" data-naipe="">3</span>
    <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value ${cardValueColor} value-inverted" id="vira" data-value="" data-id="" data-naipe="">3</span>
    <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    ${naipesOnValueQuantity}
</div>`;
tresSketch.insertAdjacentElement("beforeend", tresCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 4;
chooseNaipesQuantityOnValue(naipesOnValueQuantity);
const quatroCard = document.createElement('div');

quatroCard.innerHTML =
`<div class="card" style="position: absolute;"">
    <span class="card-value ${cardValueColor}" data-value="" data-naipe="">4</span>
    <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value ${cardValueColor} value-inverted" id="vira" data-value="" data-id="" data-naipe="">4</span>
    <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    ${naipesOnValueQuantity}
</div>`;
quatroSketch.insertAdjacentElement("beforeend", quatroCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 5;
chooseNaipesQuantityOnValue(naipesOnValueQuantity);
const cincoCard = document.createElement('div');

cincoCard.innerHTML =
`<div class="card" style="position: absolute;"">
    <span class="card-value ${cardValueColor}" data-value="" data-naipe="">5</span>
    <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value ${cardValueColor} value-inverted" id="vira" data-value="" data-id="" data-naipe="">5</span>
    <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    ${naipesOnValueQuantity}
</div>`;
cincoSketch.insertAdjacentElement("beforeend", cincoCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//