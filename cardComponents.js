const asOuros = document.createElement('div');
asOuros.innerHTML = `<div style="top: 41%; left: 20%; position: absolute;">
<div class="card">
    <span class="card-value" id="vira" data-value="" data-id="" data-naipe="">A</span>
    <img class="card-naipe" src="/images/naipes/Naipe_ouros.png" alt="" style="width: 16px; height: 18px">
    <span class="cardDesing"></span>
    <span class="card-value value-inverted" id="vira" data-value="" data-id="" data-naipe="">A</span>
    <img class="naipe-inverted" src="/images/naipes/Naipe_ouros.png" alt="" style="width: 16px; height: 18px">
    <img class="naipe-middle" src="/images/naipes/Naipe_ouros.png" alt="" style="width: 16px; height: 18px">
</div>
</div>`;

const component = document.getElementById('component');

component.insertAdjacentElement("beforeend", asOuros.firstChild);
