calculadora(9)




function calculadora(pesoin){

  if (pesoin<30){
    holliday(pesoin)
}else {
    superficie(pesoin)

}
}







function holliday(pesoin){
    if (pesoin > 20){
      let e1  = ((pesoin -20)*20)+ 1500
      console.log(e1)
    }
      
      else if (pesoin <= 20 && pesoin > 10){
        let e1 =(((pesoin-10)*50)+1000)
        console.log(e1)
      }
      
      else {
        let e1 =(pesoin*100)
        console.log(e1)
        }
}


function superficie(pesoin){
  if(pesoin >= 30){
   let e1 = ((pesoin*4)+7 ) / (pesoin +90)
   console.log(e1*1500)
   console.log(e1*2000)
    }
  }

    