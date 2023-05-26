const asSketch = document.getElementById('asSketch');
const doisSketch = document.getElementById('doisSketch');
const tresSketch = document.getElementById('tresSketch');
const quatroSketch = document.getElementById('quatroSketch');
const cincoSketch = document.getElementById('cincoSketch');
const seisSketch = document.getElementById('seisSketch');
const seteSketch = document.getElementById('seteSketch');
const oitoSketch = document.getElementById('oitoSketch');
const noveSketch = document.getElementById('noveSketch');
const dezSketch = document.getElementById('dezSketch');
const kingSketch = document.getElementById('kingSketch');

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
        case 6:
            naipesOnValueQuantity = 
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; align-self: center;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; align-self: center;"></img>`
            break;
        case 7:
            naipesOnValueQuantity = 
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; align-self: center;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; align-self: center;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; top: 30%;;"></img>`
            break;
        case 8:
            naipesOnValueQuantity = 
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; align-self: center;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; align-self: center;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; top: 30%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; bottom: 30%;"></img>`
            break;
        case 9:
            naipesOnValueQuantity = 
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 35%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; top: 35%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; bottom: 35%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; align-self: center;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; bottom: 35%;"></img>`
            break;
        case 10:
            naipesOnValueQuantity = 
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 35%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; top: 35%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; bottom: 35%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; top: 30%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; bottom: 30%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; bottom: 35%;"></img>`
            break;
        case 13:
            naipesOnValueQuantity = 
            `<img class="drawledCard" src="/images/naipes/King_Naipe_ouros.png" alt="${naipeImageAlt}"></img>`
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

naipesOnValueQuantity = 6;
chooseNaipesQuantityOnValue(naipesOnValueQuantity);
const seisCard = document.createElement('div');

seisCard.innerHTML =
`<div class="card" style="position: absolute;"">
    <span class="card-value ${cardValueColor}" data-value="" data-naipe="">6</span>
    <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value ${cardValueColor} value-inverted" id="vira" data-value="" data-id="" data-naipe="">6</span>
    <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    ${naipesOnValueQuantity}
</div>`;
seisSketch.insertAdjacentElement("beforeend", seisCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 7;
chooseNaipesQuantityOnValue(naipesOnValueQuantity);
const seteCard = document.createElement('div');

seteCard.innerHTML =
`<div class="card" style="position: absolute;"">
    <span class="card-value ${cardValueColor}" data-value="" data-naipe="">7</span>
    <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value ${cardValueColor} value-inverted" id="vira" data-value="" data-id="" data-naipe="">7</span>
    <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    ${naipesOnValueQuantity}
</div>`;
seteSketch.insertAdjacentElement("beforeend", seteCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 8;
chooseNaipesQuantityOnValue(naipesOnValueQuantity);
const oitoCard = document.createElement('div');

oitoCard.innerHTML =
`<div class="card" style="position: absolute;"">
    <span class="card-value ${cardValueColor}" data-value="" data-naipe="">8</span>
    <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value ${cardValueColor} value-inverted" id="vira" data-value="" data-id="" data-naipe="">8</span>
    <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    ${naipesOnValueQuantity}
</div>`;
oitoSketch.insertAdjacentElement("beforeend", oitoCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 9;
chooseNaipesQuantityOnValue(naipesOnValueQuantity);
const noveCard = document.createElement('div');

noveCard.innerHTML =
`<div class="card" style="position: absolute;"">
    <span class="card-value ${cardValueColor}" data-value="" data-naipe="">9</span>
    <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value ${cardValueColor} value-inverted" id="vira" data-value="" data-id="" data-naipe="">9</span>
    <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    ${naipesOnValueQuantity}
</div>`;
noveSketch.insertAdjacentElement("beforeend", noveCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 10;
chooseNaipesQuantityOnValue(naipesOnValueQuantity);
const dezCard = document.createElement('div');

dezCard.innerHTML =
`<div class="card" style="position: absolute;"">
    <span class="card-value ${cardValueColor}" data-value="" data-naipe="">10</span>
    <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value ${cardValueColor} value-inverted" id="vira" data-value="" data-id="" data-naipe="">10</span>
    <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    ${naipesOnValueQuantity}
</div>`;
dezSketch.insertAdjacentElement("beforeend", dezCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 13;
chooseNaipesQuantityOnValue(naipesOnValueQuantity);
const kingCard = document.createElement('div');

kingCard.innerHTML =
`<div class="card" style="position: absolute;"">
    <span class="card-value ${cardValueColor}" data-value="" data-naipe="">10</span>
    <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value ${cardValueColor} value-inverted" id="vira" data-value="" data-id="" data-naipe="">10</span>
    <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    ${naipesOnValueQuantity}
</div>`;
kingSketch.insertAdjacentElement("beforeend", kingCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

