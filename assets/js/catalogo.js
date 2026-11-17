// Filtra os jogos por gênero sem alterar o conteúdo original do HTML.
const filtros = document.querySelectorAll('[data-filtro]');
const jogos = document.querySelectorAll('[data-genero]');
const contador = document.getElementById('contador-jogos');

filtros.forEach((botao) => {
    botao.addEventListener('click', () => {
        const genero = botao.dataset.filtro;
        let quantidade = 0;

        filtros.forEach((item) => {
            item.setAttribute('aria-pressed', String(item === botao));
        });

        jogos.forEach((jogo) => {
            const exibir = genero === 'todos' || jogo.dataset.genero.split(' ').includes(genero);
            jogo.hidden = !exibir;
            if (exibir) quantidade++;
        });

        contador.textContent = quantidade === 1 ? '1 jogo encontrado' : `${quantidade} jogos encontrados`;
    });
});
