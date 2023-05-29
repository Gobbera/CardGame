

let cardValueColor = "redColor";
let naipe = "copas";
let naipeImage;
let naipeImageAlt;
let naipesOnValueQuantity;


function chooseNaipesQuantityOnValue(op, naipeImage, royalityClass) {
    let cardBody = `<div class="card" style="position: absolute;"">
    <span class="card-value ${cardValueColor}" data-value="" data-naipe="">A</span>
    <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value ${cardValueColor} value-inverted" id="vira" data-value="" data-id="" data-naipe="">A</span>
    <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="width: 16px; height: 18px">`;
    switch(op) {
        case 1:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; align-self: center;"></img>
            </div>`;
            break;
        case 2:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 48px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 48px; top: 20%;"></img>
            </div>`
            break;
        case 3:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 48px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 48px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; align-self: center;"></img>
            </div>`
            break;
        case 4:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            </div>`
            break;
        case 5:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; align-self: center;"></img>
            </div>`
            break;
        case 6:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; align-self: center;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; align-self: center;"></img>
            </div>`
            break;
        case 7:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; align-self: center;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; align-self: center;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; top: 30%;;"></img>
            </div>`
            break;
        case 8:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; align-self: center;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; align-self: center;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; top: 30%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; bottom: 30%;"></img>
            </div>`
            break;
        case 9:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 35%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; top: 35%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; bottom: 35%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; align-self: center;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; bottom: 35%;"></img>
            </div>`
            break;
        case 10:
            naipesOnValueQuantity = cardBody +
            `<img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; bottom: 20%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}"style="right: 26px; bottom: 20%;"></img>
            <img class="naipe-default card-naipe" src="${naipeImage}" alt="${naipeImageAlt}"style="left: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 20%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; top: 35%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; top: 35%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 26px; bottom: 35%;"></img>
            <img class="naipe-default" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; top: 30%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="left: 48px; bottom: 30%;"></img>
            <img class="naipe-default naipe-inverted" src="${naipeImage}" alt="${naipeImageAlt}" style="right: 26px; bottom: 35%;"></img>
            </div>`
            break;
        case 11:
            naipesOnValueQuantity = cardBody +
            `<img class="drawledCard" src="${royalityClass}" alt="${naipeImageAlt}"></img>
            </div>`
            break;
    }
}










///Examples
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

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 1;
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);

const asCard = document.createElement('div');
asCard.innerHTML = naipesOnValueQuantity;
asSketch.insertAdjacentElement("beforeend", asCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//
    
naipesOnValueQuantity = 2;
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);

const doisCard = document.createElement('div');
doisCard.innerHTML = naipesOnValueQuantity;
doisSketch.insertAdjacentElement("beforeend", doisCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 3;
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);
const tresCard = document.createElement('div');

tresCard.innerHTML = naipesOnValueQuantity;
tresSketch.insertAdjacentElement("beforeend", tresCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 4;
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);
const quatroCard = document.createElement('div');

quatroCard.innerHTML = naipesOnValueQuantity;
quatroSketch.insertAdjacentElement("beforeend", quatroCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 5;
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);
const cincoCard = document.createElement('div');

cincoCard.innerHTML = naipesOnValueQuantity;
cincoSketch.insertAdjacentElement("beforeend", cincoCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 6;
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);
const seisCard = document.createElement('div');

seisCard.innerHTML = naipesOnValueQuantity;
seisSketch.insertAdjacentElement("beforeend", seisCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 7;
naipeImage = `/images/naipes/Naipe_${naipe}.png`;;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);
const seteCard = document.createElement('div');

seteCard.innerHTML = naipesOnValueQuantity;
seteSketch.insertAdjacentElement("beforeend", seteCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 8;
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);
const oitoCard = document.createElement('div');

oitoCard.innerHTML = naipesOnValueQuantity;
oitoSketch.insertAdjacentElement("beforeend", oitoCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 9;
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);
const noveCard = document.createElement('div');

noveCard.innerHTML = naipesOnValueQuantity;
noveSketch.insertAdjacentElement("beforeend", noveCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 10;
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage);
const dezCard = document.createElement('div');

dezCard.innerHTML = naipesOnValueQuantity;
dezSketch.insertAdjacentElement("beforeend", dezCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 11;
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
royalityClass = `/images/naipes/Jack_Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage, royalityClass);
const jackCard = document.createElement('div');

jackCard.innerHTML = naipesOnValueQuantity;
jackSketch.insertAdjacentElement("beforeend", jackCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 11;
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
royalityClass = `/images/naipes/Queen_Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage, royalityClass);
const queenCard = document.createElement('div');

queenCard.innerHTML = naipesOnValueQuantity;
queenSketch.insertAdjacentElement("beforeend", queenCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

naipesOnValueQuantity = 11;
naipeImage = `/images/naipes/Naipe_${naipe}.png`;
royalityClass = `/images/naipes/King_Naipe_${naipe}.png`;
chooseNaipesQuantityOnValue(naipesOnValueQuantity, naipeImage, royalityClass);
const kingCard = document.createElement('div');

kingCard.innerHTML = naipesOnValueQuantity;
kingSketch.insertAdjacentElement("beforeend", kingCard.firstChild);

//----------------------------------------------------------------------------------------------------------------------------------------//

