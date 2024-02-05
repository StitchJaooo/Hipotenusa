    function AtualizacaoDados() {            
        var cat1 = document.getElementById("testeUm").value;
        var cat2 = document.getElementById("testeDois").value;
        var hipo = document.getElementById("testeTres").value;
        var hipo1 = document.getElementById("hipo");
        var cat3 = document.getElementById("cat1");
        var cat4 = document.getElementById("cat2");
        cat4.style.transform="rotate(0deg)";
        if (cat1!==0) {
            cat3.innerHTML=cat1;
        }if (cat1==0){
            cat3.innerHTML="x²";
        }
        if (cat2!==0){
            cat4.innerHTML=cat2;
        }if(cat2==0){
            cat4.innerHTML="x²"
        }
        if (hipo!==0) {
            hipo1.innerHTML=hipo;
        }if(hipo==0){
            hipo1.innerHTML="x²";
        }
    }
    function botaopressionado(){
        var cat1 = document.getElementById("testeUm").value;
        var cat2 = document.getElementById("testeDois").value;
        var hipo = document.getElementById("testeTres").value;
        var hipo1 = document.getElementById("hipo");
        var cat3 = document.getElementById("cat1");
        var cat4 = document.getElementById("cat2");
    if(cat1==0){
    cat4.innerHTML = cat2;
    hipo1.innerHTML = hipo;
    cat3.innerHTML = "x²";
    var contaUm = document.getElementById("contaUM");
        contaUm.innerHTML = hipo+"² = "+cat2+"² + x²</h1>";
    var contaDois = document.getElementById("contaDois");
    hipo = hipo*hipo;
    cat2 = cat2*cat2;
        contaDois.innerHTML ="x² = "+hipo+" - "+cat2;     
    var contaTres = document.getElementById("contaTres");
    cat1 = hipo-cat2;
        contaTres.innerHTML ="x = √"+cat1;  
    var contaFinal = document.getElementById("contaFinal");
        contaFinal.innerHTML = "x = "+Math.sqrt(cat1);
    }
    else if(cat2==0){
    cat3.innerHTML = cat1;
    hipo1.innerHTML = hipo;
    cat4.innerHTML = "x²";
    var contaUm = document.getElementById("contaUM");
        contaUm.innerHTML = hipo+"² = "+cat1+"² + x²</h1>";
    var contaDois = document.getElementById("contaDois");
    hipo = hipo*hipo;
    cat1 = cat1*cat1;
        contaDois.innerHTML ="x² = "+hipo+" - "+cat1;
    var contaTres = document.getElementById("contaTres")
    cat2 = hipo-cat1;
        contaTres.innerHTML ="x = √"+cat2;
    var contaFinal = document.getElementById("contaFinal");
        contaFinal.innerHTML = "x = "+Math.sqrt(cat2);
    }else if(hipo==0){
    cat3.innerHTML = cat1;
    cat4.innerHTML = cat2;
    hipo1.innerHTML = "x²";
    var contaUm = document.getElementById("contaUM");
        contaUm.innerHTML = "x² = "+cat1+"² + "+cat2+"²";
    var contaDois = document.getElementById("contaDois");
        cat2 = cat2*cat2;
        cat1 = cat1*cat1;
        contaDois.innerHTML ="x² = "+cat2+" + "+cat1;
        hipo = cat2+cat1;
    var contaTres = document.getElementById("contaTres");
        contaTres.innerHTML = "x = √"+hipo;
    var contaFinal = document.getElementById("contaFinal");
        contaFinal.innerHTML = "x = "+Math.sqrt(hipo);
    }};
    document.addEventListener("keyup", AtualizacaoDados);
    document.addEventListener('keypress', function(event){
        if(event.key==='Enter'){
            botaopressionado();
        }
    });