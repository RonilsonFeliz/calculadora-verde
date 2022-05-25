alert("Tuts tuts quero ver")//notificação de interação na página
function mudartextoeacao()
{
    document.getElementById("botao").innerHTML = "Carlos Joshua" //aqui estamos modificando o botão via Id
    alert("Mentira bobo")
    createImageBitmap
}
var btn = document.querySelectorAll(".key li"),

input = document.querySelector(".input-valor"),

operador = document.querySelectorAll(".operador");



for(var i = 0; i < btn.length; i++ ) {

    document.onkeypress = function(event){

        for(var e=0; e <= 10; e++){

            if(key === (48+e)){

                input.innerHTML += e;

            }

        }
        
        switch(key){

            case 42:

                input.innerHTML += "*";

                break;

            case 43:

                input.innerHTML += "+";

                break;

            case 45:

                input.innerHTML += "-";

                break;

            case 46:

                input.innerHTML += ".";

                break;

            case 47:

                input.innerHTML += "/";

                break;

            case 13:

            case 61:

                var equacao = input.innerHTML;
if(equacao){
     try{
         input.innerHTML = eval (equacao);
     } catch (e){
         alert('erro na expressão');
     }
}
break;
case 67:
case 99:
       input.innerHTML = "";
       break;
       default:
       break;
        }
    
};
btn [i].addEventListener('click', function(){
     var btnVal = this.innerHTML,
          inputVal = input.innerHTML;
     console.log(btnVal);



switch(btnVal){
    case "C":
        input.innerHTML = "";
        break;
        case"=":

        var equacao = inputVal;

        if(equacao){
            try{
                input.innerHTML = eval(equacao);
      }catch(e){
          alert('erro na expressão')
      }
}
break;
default:
      input.innerHTML += btnVal
      break;
   }
});


}