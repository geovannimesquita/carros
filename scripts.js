let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container'); // Adicionado o ponto para referenciar a classe
let items = container.querySelectorAll('.list .item'); // Corrigido o seletor
let indicator = document.querySelector('.indicators'); // Corrigido o seletor
let dots = indicator.querySelectorAll('ul li');

let active = 0; // Índice do item ativo
let firstPosition = 0;
let lastPosition = items.length - 1; // Última posição do carrossel

// Botão "Próximo"
nextButton.onclick = () => {
    // Remove a classe "active" do item atual
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) itemOld.classList.remove('active');

    // Atualiza o índice do item ativo
    active = active + 1 > lastPosition ? 0 : active + 1;
    items[active].classList.add('active'); // Adiciona "active" ao novo item

    // Atualiza o indicador (dots)
    let dotsOld = indicator.querySelector('ul li.active');
    if (dotsOld) dotsOld.classList.remove('active');
    dots[active].classList.add('active');

    // Atualiza o número do indicador
    indicator.querySelector('.number').innerHTML = `0${active + 1}`; // Ajustado para manter 2 dígitos
};

// Botão "Anterior"
prevButton.onclick = () => {
    // Remove a classe "active" do item atual
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) itemOld.classList.remove('active');

    // Atualiza o índice do item ativo
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    items[active].classList.add('active'); // Adiciona "active" ao novo item

    // Atualiza o indicador (dots)
    let dotsOld = indicator.querySelector('ul li.active');
    if (dotsOld) dotsOld.classList.remove('active');
    dots[active].classList.add('active');

    // Atualiza o número do indicador
    indicator.querySelector('.number').innerHTML = `0${active + 1}`; // Ajustado para manter 2 dígitos
};
