function calcularPreco() {
      // validar campos
      let precoAlcool = document.getElementById("alcool").value
      let precoGasolina = document.getElementById("gasolina").value
      if (precoAlcool != "") {
        if(precoGasolina != ""){

          //calcular se é melhor usar alcool ou gasolia
          let razao = precoAlcool / precoGasolina
          if (razao >= 0.7){
            //alert("Melhor usar gasolina")
            document.getElementById('resultado').innerHTML ="Melhor usar gasolina"
          }else{
            //alert("Melhor usar álcool")
            document.getElementById('resultado').innerHTML ="Melhor usar álcool"
          }
        }else{
          alert("Insira preço da Gasolina")
        }
        
      }else{
        alert("Insira preço do Álcool")
      }



    }
