let telaDoFormulario = document.getElementById("criando-formulario");
        let btnCriandoFormulario = document.getElementById("btn-criando-formulario");
        let notasTela = document.getElementById("exibir-notas");
        var coletandoNotas = [];

        let notasSalvas = localStorage.getItem('notas');

        if (notasSalvas) {
            coletandoNotas = JSON.parse(notasSalvas);
        } else {
            // Se não houver dados salvos no localStorage, inicialize coletandoNotas como um novo array vazio
            coletandoNotas = [];
        }

        btnCriandoFormulario.addEventListener('click', function () {
            btnCriandoFormulario.style.display = 'none';
            telaDoFormulario.innerHTML = "";
            mostrarFormulario();
            atualizarNotas();
        });

        function mostrarFormulario() {

            const criandoFormularioTela = document.createElement("div");
            criandoFormularioTela.className = "criando-formulario-tela";
            criandoFormularioTela.innerHTML = `
                <h1>Novo Bloco</h1>
                <input type="text" id="titulo-tarefa">
                <textarea id="descricao-tarefa" cols="30" rows="10"></textarea>
                <input type="date" id="data-finalizacao-tarefa">
                <button id="enviar-fechar-formulario">Incluir Nota</button> `;

            const enviarFecharFormulario = criandoFormularioTela.querySelector("#enviar-fechar-formulario");
            enviarFecharFormulario.addEventListener('click', function () {
                coletarFormulario();
                telaDoFormulario.innerHTML = "";
                notasTela.innerHTML = "";
                btnCriandoFormulario.style.display = 'block';
                console.log(coletandoNotas);
                atualizarNotas();
            });

            telaDoFormulario.appendChild(criandoFormularioTela);
            atualizarNotas();
        }

        function coletarFormulario() {
            const tituloTarefa = document.getElementById("titulo-tarefa");
            const descricaoTarefa = document.getElementById("descricao-tarefa");
            const dataFinalizacaoTarefa = document.getElementById("data-finalizacao-tarefa");

            const dadosNota = {
                titulo: tituloTarefa.value,
                descricao: descricaoTarefa.value,
                finalizacao: dataFinalizacaoTarefa.value
            }

            coletandoNotas.push(dadosNota);
            localStorage.setItem('notas', JSON.stringify(coletandoNotas));
            atualizarNotas();
        }

        function atualizarNotas() {
            notasTela.innerHTML = "";
            const criandoNotas = document.getElementById("exibir-notas");
            coletandoNotas.forEach(function (item, index) {
                const exibirNotasTela = document.createElement("div");
                exibirNotasTela.className = "cards-nota";
                exibirNotasTela.innerHTML = `<h4>${item.titulo}</h4>
                    <p><b>Descrição:</b></P>
                        <span>${item.descricao}</span>
                    <p><b>Data de Entrega:</b>${item.finalizacao}<p>
                    <button class="excluir-nota" data-index="${index}">Tarefa Finalizada</button>`

                notasTela.appendChild(exibirNotasTela);
            });

            const finalizarTarefa = document.querySelectorAll(".excluir-nota");
            finalizarTarefa.forEach(function (botao) {
                botao.addEventListener('click', function () {
                    // Implemente a lógica para finalizar a tarefa aqui, se necessário
                    const index = parseInt(botao.getAttribute('data-index'));
                    coletandoNotas.splice(index, 1);
                    localStorage.setItem('notas', JSON.stringify(coletandoNotas));
                    atualizarNotas();
                });
            });
        }

        atualizarNotas();