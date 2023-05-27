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
const jackSketch = document.getElementById('jackSketch');
const queenSketch = document.getElementById('queenSketch');
const kingSketch = document.getElementById('kingSketch');

let cardValueColor = "redColor";
let naipe = "copas";
let naipeImage;
let naipeImageAlt;
let naipesOnValueQuantity;


function chooseNaipesQuantityOnValue(op, naipeImage, royalityClass) {
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
        case 11:
            naipesOnValueQuantity = 
            `<img class="drawledCard" src="${royalityClass}" alt="${naipeImageAlt}"></img>`
            break;
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 1;
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);

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
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);
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
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);
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
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);
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
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);
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
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);
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
naipeImage = `/images/naipes/Naipe_${naipe}.png`;;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);
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
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);
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
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);
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
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);
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

naipesOnValueQuantity = 11;
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
royalityClass = `/images/naipes/Jack_Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage, royalityClass);
const jackCard = document.createElement('div');

jackCard.innerHTML =
`<div class="card" style="position: absolute;"">
    <span class="card-value ${cardValueColor}" data-value="" data-naipe="">J</span>
    <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value ${cardValueColor} value-inverted" id="vira" data-value="" data-id="" data-naipe="">J</span>
    <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    ${naipesOnValueQuantity}
</div>`;
jackSketch.insertAdjacentElement("beforeend", jackCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 11;
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
royalityClass = `/images/naipes/Queen_Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage, royalityClass);
const queenCard = document.createElement('div');

queenCard.innerHTML =
`<div class="card" style="position: absolute;"">
    <span class="card-value ${cardValueColor}" data-value="" data-naipe="">Q</span>
    <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value ${cardValueColor} value-inverted" id="vira" data-value="" data-id="" data-naipe="">Q</span>
    <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    ${naipesOnValueQuantity}
</div>`;
queenSketch.insertAdjacentElement("beforeend", queenCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 11;
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
royalityClass = `/images/naipes/King_Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage, royalityClass);
const kingCard = document.createElement('div');

kingCard.innerHTML =
`<div class="card" style="position: absolute;"">
    <span class="card-value ${cardValueColor}" data-value="" data-naipe="">K</span>
    <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value ${cardValueColor} value-inverted" id="vira" data-value="" data-id="" data-naipe="">K</span>
    <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    ${naipesOnValueQuantity}
</div>`;
kingSketch.insertAdjacentElement("beforeend", kingCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

