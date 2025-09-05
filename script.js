// Passo 1: Encontrar os elementos do HTML que vamos usar
const timeTogetherElement = document.getElementById('time-together');
const buttonNo = document.querySelector('.button-no');

// Passo 2: Definir a data de início do namoro
// IMPORTANTE: Mude essa data para a data de início real do casal
const startDate = new Date('YYYY-MM-DD'); // Exemplo: new Date('2023-08-15')

// Passo 3: Fazer o contador funcionar em tempo real
function updateTime() {
    const now = new Date();
    const difference = now - startDate;

    if (difference < 0) {
        timeTogetherElement.innerHTML = "Ainda não começamos!";
        return;
    }

    // Calculando a diferença em dias, horas, minutos e segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Mostrando o tempo na tela
    timeTogetherElement.innerHTML = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Chamar a função a cada segundo (1000 milissegundos)
setInterval(updateTime, 1000);

// Chamar a função uma vez no início para não ter atraso
updateTime();

// Passo 4: Fazer o botão "Não" se mover
buttonNo.onmouseover = () => {
    // Calculamos posições aleatórias na tela
    const x = Math.random() * (window.innerWidth - buttonNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - buttonNo.offsetHeight);

    // Mudamos a posição do botão
    buttonNo.style.position = 'absolute';
    buttonNo.style.left = `${x}px`;
    buttonNo.style.top = `${y}px`;
};
