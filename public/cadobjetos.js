let dadosCliente = {};
let listaObjetos = [];
let objetosRemovidos = [];

const tipoInput       = document.getElementById('tipo');
const marcaInput      = document.getElementById('marca');
const modeloInput     = document.getElementById('modelo');
const anoInput        = document.getElementById('ano');
const corInput        = document.getElementById('cor');
const serieInput      = document.getElementById('serie');
const observacaoInput = document.getElementById('observacao');


const btnAlterarX = document.getElementById('alterartodo');
btnAlterarX.addEventListener('click', () => {  
  if(swos){
    controleaux = controleSelecionadoos
  }
  atualizarTudo(controleaux)    
});

function salvarDadosClienteTemp() {    
  window.scrollTo(0, 0);  
  limparObjetos();
  document.getElementById("tbodyObjetos").innerHTML = "";
  listaObjetos = [];
  Passar()    
  dadosCliente = {
    cliente: document.getElementById('cliente').value.trim().toUpperCase(),
    cidade: document.getElementById('cidade').value.trim().toUpperCase(),
    cep: document.getElementById('cep').value.trim(),
    endereco: document.getElementById('logradouro').value.trim().toUpperCase(),
    bairro: document.getElementById('bairro').value.trim().toUpperCase(),
    numero: document.getElementById('numero').value.trim(),
    pais: document.getElementById('pais').value.trim().toUpperCase(),
    uf: document.getElementById('estados').value.trim().toUpperCase(),
    ativo: ativoaux,
    telefone: document.getElementById('telefone').value.trim(),
    celular: document.getElementById('celular').value.trim(),
    datanascimento: document.getElementById('datanascimento').value,
    datahoracadastro: new Date().toISOString(),
    naturalidade: document.getElementById('naturalidade').value.trim().toUpperCase(),
    nacionalidade: document.getElementById('nacionalidade').value.trim().toUpperCase(),
    rg: document.getElementById('rg').value.trim(),
    sexo: sexoaux,
    estadocivil: civilaux,
    cpf: document.getElementById('cpf').value.trim(),
    tipocliente: document.querySelector('input[name="radtip"]:checked')?.value || '',
    cnpj: document.getElementById('cnpj').value.trim(),
    e_mail: document.getElementById('email').value.trim(),
    ie: document.getElementById('ie').value.trim(),
    im: document.getElementById('im').value.trim(),
    fantasia: document.getElementById('fantasia').value.trim().toUpperCase(),
    limite: document.getElementById('limite').value.trim()
  }; 
   
  if(dadosCliente.tipocliente == 'fisica')
      {
        dadosCliente.tipocliente = 'Pessoa Física'
        if (!dadosCliente.cpf ||!dadosCliente.cliente || !dadosCliente.cep || !dadosCliente.numero  ) {
           resul = "⚠️Preencha os campos obrigatórios: * CPF, Cliente, CEP e Numero.";            
           showToast(resul, 2500);                                     
           if(!dadosCliente.cpf){document.getElementById("cpf").focus();  return }        
           if(!dadosCliente.cliente){document.getElementById("cliente").focus();  return }        
           if(!dadosCliente.cep){document.getElementById("cep").focus(); return }        
           if(!dadosCliente.numero){document.getElementById("numero").focus(); return }                              
         }
       }
         if(dadosCliente.tipocliente === 'juridica')
         {
         dadosCliente.tipocliente = 'Pessoa Jurídica'
         if (!dadosCliente.cnpj || !dadosCliente.cliente || !dadosCliente.ie  || !dadosCliente.cep || !dadosCliente.numero ) {
           resul = "⚠️Preencha os campos obrigatórios: * CNPJ, Cliente, IE, CEP e Numero.";   
           showToast(resul, 2500);                                                         
           if(!dadosCliente.cnpj)
           {document.getElementById("cnpj").focus();  return }
           if(!dadosCliente.cliente)
           {document.getElementById("cliente").focus(); return}
           if(!dadosCliente.ie)
           { document.getElementById("ie").focus(); return }
           if(!dadosCliente.cep){document.getElementById("cep").focus(); return }
           if(!dadosCliente.numero){document.getElementById("numero").focus(); return}                                
         }
        }         
  
  document.getElementById('formCliente').style.display = 'none';
  document.getElementById('formObjetos').style.display = 'block';      
  if (salva == 1) {
  document.getElementById('salvartodo').style.display = 'in-block';
  document.getElementById('alterartodo').style.display = 'none';
} else {
  document.getElementById('salvartodo').style.display = 'none';
  document.getElementById('alterartodo').style.display = 'in-block';
}

  if(controleaux!=null)
  {    
    carregarObjetosCliente(controleaux);
  }
}

function adicionarObjeto() {
  listaObjetos.push({
    id: null,
    tipo: tipoInput.value.trim(),
    marca: marcaInput.value.trim().toUpperCase(),
    modelo: modeloInput.value.trim().toUpperCase(),
    ano: ano.value,
    cor: cor.value,
    serie: serie.value,
    observacao: observacao.value,
    vinculado: false
  });

  atualizarTabelaObjetos();
  limparObjetos();
}

function limparObjetos()
{
  const tipoSelect = document.getElementById('tipo');  
  if (tipoSelect) {
    tipoSelect.value = 'VEÍCULO';
  }  
  document.getElementById('marcao').value = '';
  document.getElementById('modelo').value = '';
  document.getElementById('ano').value = '';
  document.getElementById('cor').value = '';
  document.getElementById('serie').value = '';
  document.getElementById('observacao').value = '';
}

function atualizarTabelaObjetos() {
  const tbody = document.getElementById('tbodyObjetos');
  tbody.innerHTML = '';

  listaObjetos.forEach((obj, i) => {
    tbody.innerHTML += `
      <tr ${obj.vinculado ? 'style="opacity:0.5"' : ''}>
        <td>${obj.tipo}</td>
        <td>${obj.marca}</td>
        <td>${obj.modelo}</td>
        <td>${obj.ano}</td>
        <td>${obj.cor}</td>
        <td>${obj.serie}</td>
        <td>${obj.observacao}</td>
        <td>
          <button onclick="removerObjeto(${i})" ${obj.vinculado ? 'disabled' : ''}>
            🗑️
          </button>
        </td>
      </tr>
    `;
  });
}

async function salvarTudo() {
  Passar();

  const dadosCliente = {
    cliente: document.getElementById('cliente').value.trim().toUpperCase(),
    cidade: document.getElementById('cidade').value.trim().toUpperCase(),
    cep: document.getElementById('cep').value.trim(),
    endereco: document.getElementById('logradouro').value.trim().toUpperCase(),
    bairro: document.getElementById('bairro').value.trim().toUpperCase(),
    numero: document.getElementById('numero').value.trim(),
    pais: document.getElementById('pais').value.trim().toUpperCase(),
    uf: document.getElementById('estados').value.trim().toUpperCase(),
    ativo: ativoaux,
    telefone: document.getElementById('telefone').value.trim(),
    celular: document.getElementById('celular').value.trim(),
    datanascimento: document.getElementById('datanascimento').value,
    datahoracadastro: new Date().toISOString(),
    naturalidade: document.getElementById('naturalidade').value.trim().toUpperCase(),
    nacionalidade: document.getElementById('nacionalidade').value.trim().toUpperCase(),
    rg: document.getElementById('rg').value.trim(),
    sexo: sexoaux,
    estadocivil: civilaux,
    cpf: document.getElementById('cpf').value.trim(),
    tipocliente: document.querySelector('input[name="radtip"]:checked')?.value || '',
    cnpj: document.getElementById('cnpj').value.trim(),
    e_mail: document.getElementById('email').value.trim(),
    ie: document.getElementById('ie').value.trim(),
    im: document.getElementById('im').value.trim(),
    fantasia: document.getElementById('fantasia').value.trim().toUpperCase(),
    limite: document.getElementById('limite').value.trim()
  };

  try {
    // 🔹 Salva cliente
    const resCliente = await fetch('/clientes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dadosCliente)
    });

    if (!resCliente.ok) {
      throw new Error(await resCliente.text());
    }

    const clienteCriado = await resCliente.json();
    const clienteId = clienteCriado.id;

    // 🔹 Salva objetos
    if (listaObjetos.length > 0) {
      await Promise.all(
        listaObjetos.map(obj =>
          fetch(`/clientes/${clienteId}/objetos-veiculos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              tipo: obj.tipo || 'OUTRO',
              marca: obj.marca || '',
              modelo: obj.modelo || '',
              ano: obj.ano || '',
              cor: obj.cor || '',
              placaSerie: obj.serie || '',
              numeroSerie: obj.numeroSerie || '',
              observacoes: obj.observacao || ''
            })
          })
        )
      );
    }

    // 🔹 BUSCA objetos recém-salvos (AQUI ESTÁ A CHAVE)
    const resObjetos = await fetch(`/clientes/${clienteId}/objetos-veiculos`);
    listaObjetos = await resObjetos.json();

    atualizarTabelaObjetos();

    showToast('✅ Cliente e objetos cadastrados com sucesso!', 2500);
    limparNome();

  } catch (err) {
    alert('Erro ao salvar: ' + err.message);
  }
}


async function atualizarTudo(clienteId) {
  // 1️⃣ Atualiza cliente
  await fetch(`/clientes/${clienteId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dadosCliente)
  });

  // 2️⃣ Remove objetos marcados
  if (objetosRemovidos.length > 0) {
    const resp = await fetch(`/clientes/${clienteId}/objetos-veiculos`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids: objetosRemovidos })
    });

    if (!resp.ok) {
      const r = await resp.json();
      showToast(r.erro, 3500);
      return;
    }
  }

  // 3️⃣ Insere apenas objetos novos
  for (const obj of listaObjetos) {
    if (!obj.id) {
      await fetch(`/clientes/${clienteId}/objetos-veiculos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      });
    }
  }

  objetosRemovidos = [];
  showToast('✅ Cliente atualizado com sucesso!', 2500);
}

function carregarObjetosCliente(clienteId) {
  fetch(`/clientes/${clienteId}/objetos-veiculos`)
    .then(res => res.json())
    .then(dados => {
      listaObjetos = dados.map(o => ({
        id: o.id,
        tipo: o.tipo,
        marca: o.marca,
        modelo: o.modelo,
        ano: o.ano,
        cor: o.cor,
        serie: o.placaSerie,
        observacao: o.observacoes,
        vinculado: !!o.vinculado
      }));
      atualizarTabelaObjetos();
    });
}

document.addEventListener('DOMContentLoaded', function () {
  const campos2 = [
    ["tipo", "marcao"],
    ["marcao", "modelo"],
    ["modelo", "ano"],
    ["ano", "cor"],
    ["cor", "serie"],    
    ["serie", "observacao"],    
    ["observacao", "adicob"]    
  ];

  campos2.forEach(([de, para]) => {
    const elemDe = document.getElementById(de);
    const elemPara = document.getElementById(para);
    if (elemDe && elemPara) {
      elemDe.addEventListener("keydown", function (event) {
        if (event.key === "Enter") elemPara.focus();
      });
    }
  });  
});

async function removerObjeto(index) {
  const obj = listaObjetos[index];

  // 🚫 Não pode remover se vinculado à OS
  if (obj.vinculado) {
    showToast('❌ Objeto vinculado à Ordem de Serviço', 3000);
    return;
  }

  // 🧠 Já existe no banco → marcar para remoção
  if (obj.id) {
    objetosRemovidos.push(obj.id);
  }

  listaObjetos.splice(index, 1);
  atualizarTabelaObjetos();
}


