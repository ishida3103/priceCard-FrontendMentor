// Declaração de variáveis

var btn = document.getElementById('btnPeriod')
var basicPrice = document.getElementById('basicPrice')
var proPrice = document.getElementById('proPrice')
var masterPrice = document.getElementById('masterPrice')

// eventListeners

btn.addEventListener('click', troca)

// funções

// Monthly --> true

// Annually --> false
function troca(){
    if(btn.checked == false){
        basicPrice.innerText = "$199.99"
        proPrice.innerText = "$249.99"
        masterPrice.innerText = "$399.99"
    }else{
        basicPrice.innerText = "$19.99"
        proPrice.innerText = "$24.99"
        masterPrice.innerText = "$39.99"
    }
}