function convertRomano(romanos){
    let n = 0;
    let res = document.getElementById('result');
    if(romanos){
      
    
  let numeros = {
  	'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D': 500,
    'M':1000
  }
  let romanosUpper = romanos.toUpperCase();

  if(!validadeIfRomano(romanosUpper)){
    toastr.error('Informe um valor válido!');
   
    return n = "";
  }else{
    for(let i =0; i < romanosUpper.length;i++){
      let atual = romanosUpper[i];
     let prox = romanosUpper[i+1];
   
       if(prox && numeros[prox] > numeros[atual]){
         n -= numeros[atual];
       }else{
         n += numeros[atual];
       }
    
    }
  }

 
    }
    if(romanos == null || romanos === ""){
      toastr.error("Informe um valor!");
        return n = "";
    }
	
    resetValue();
 return res.value = n;

}

function validadeIfRomano(dado){
 
  let romanos = ['I','V','X','L','C','D','M'];

  let cont = 0;

  for(let i = 0; i< dado.length; i++){
    if(romanos.indexOf(dado[i]) != -1){
        cont++;
    }
  }
  return cont == dado.length;
}

function reset(){
    let valor = document.getElementById('valueRomano');
    let res = document.getElementById('result');

    valor.value = "";
    res.value = "";
}

function resetValue(){
    let valor = document.getElementById('valueRomano');
    valor.value = "";
}

