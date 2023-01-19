const campos=(endere)=>{
   document.getElementById('lograduro').value=endere.logradouro
   document.getElementById('complemento').value=endere.complemento
   document.getElementById('bairro').value=endere.bairro
   document.getElementById('localidade').value=endere.localidade
}
const legal=async()=>{
 let cep= document.getElementById('cep').value
 if(cep.length===8 && isNaN(cep)===false){
    
    document.getElementById('cep').style.border=''
    let url =' http://viacep.com.br/ws/'+ cep+ '/json/'
    let dados=await fetch(url)
    let endereco=await dados.json()
    campos(endereco)

 }else{
    document.getElementById('cep').value='';
    document.getElementById('cep').placeholder='cep incorreto'
    document.getElementById('cep').style.border='1px solid red'
 }
}

document.getElementById('cep').addEventListener('focusout',legal)

