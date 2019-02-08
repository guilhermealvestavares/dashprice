$(document).ready(function(){

    let papeis=[
        "ABCB4", "AZUL4", "ABEV3", "AGRO3", "ALPA3", "ALPA4", "ALSC3", "ALUP11", "AMAR3", "ARZZ3", "ATOM3", "BAHI3", "BAZA3", "BBAS3", "BBSE3", "BBDC4", "BBRK3", "BIDI4", "ANIM3", "BEEF3", "BMEB3", "BMEB4", "BMIN4", "BMTO4", "BOBR4", "BOVA11", "BPHA3", "BRAP3", "BRAP4", "BRFS3", "BRGE11", "BRGE3", "BRGE8", "BRIN3", "BRIV4", "BRKM3", "BRKM5", "BRML3", "BRPR3", "BRSR6", "BSLI3", "BTOW3", "BTTL3", "BTTL4", "BVMF3", "CALI4", "CARD3", "CCRO3", "CCXC3", "CELP3", "CELP6", "CESP6", "CGAS5", "CIEL3", "CLSC4", "CMIG3", "CMIG4", "COCE5", "CPFE3", "CPLE3", "CPLE6", "CRDE3", "CSAN3", "CSMG3", "CSNA3", "CSRN5", "CTAX3", "CTIP3", "CTKA4", "CVCB3", "CYRE3", "DASA3", "DIRR3", "DIVO11", "DTEX3", "ECOR3", "EEEL3", "ELET3", "ELET6", "ELPL4", "EMAE4", "EMBR3", "ENBR3", "ENGI11", "EQTL3", "ESTC3", "ESTR4", "ETER3", "EUCA4", "EVEN3", "EZTC3", "FESA4", "FHER3", "FIBR3", "FJTA4", "FLRY3", "FRAS3", "FRIO3", "GFSA3", "GGBR3", "GGBR4", "GOAU3", "GOAU4", "GOLL4", "GOVE11", "GPCP3", "GRND3", "GSHP3", "GUAR3", "GUAR4", "HAGA4", "HBOR3", "HGTX3", "HYPE3", "IDNT3", "IGTA3", "IMBI4", "INEP3", "INEP4", "ISUS11", "ITSA3", "ITSA4", "ITUB4", "JBSS3", "JHSF3", "JSLG3", "KEPL3", "KLBN11", "KROT3", "LAME3", "LAME4", "LCAM3", "LEVE3", "LIGT3", "LLIS3", "LOGN3", "LPSB3", "LREN3", "LUPA3", "LUXM3", "LUXM4", "MAGG3", "MDIA3", "MGEL4", "MGLU3", "MILS3", "MLFT4", "MNDL3", "MOAR3", "MPLU3", "MRFG3", "MRVE3", "MULT3", "MYPK3", "NAFG4", "NATU3", "ODPV3", "OGXP3", "OIBR3", "OIBR4", "PARC3", "PATI3", "PCAR4", "PDGR3", "PEAB3", "PETR3", "PETR4", "PFRM3", "PIBB11", "PINE4", "PMAM3", "POMO3", "POMO4", "POSI3", "PSSA3", "PTBL3", "PTNT3", "QGEP3", "QUAL3", "RADL3", "RAPT3", "RAPT4", "RCSL3", "RDNI3", "RENT3", "RNEW11", "ROMI3", "RPMG3", "RAIL3", "SANB11", "SANB3", "SANB4", "SAPR4", "SBSP3", "SCAR3", "SEER3", "SMLS3", "SGAS4", "SGPS3", "SHOW3", "SHUL4", "SLCE3", "SLED4", "SMLE3", "SMTO3", "SSBR3", "SULA11", "SUZB5", "SUZB6", "TAEE11", "TCNO4", "TCSA3", "TECN3", "TELB4", "TENE7", "TGMA3", "TIMP3", "TOTS3", "TOYB3", "TRIS3", "TRPL3", "TRPL4", "TRPN3", "TUPY3", "UCAS3", "UGPA3", "UNIP5", "UNIP6", "USIM3", "USIM5", "TIET11", "VALE3", "VALE5", "VIVR3", "VIVT3", "VIVT4", "VLID3", "VULC3", "VVAR11", "WEGE3", "WHRL3", "WSON33"
        ];
         $("#txtCodigo").autocomplete({
           source: papeis
        });
           
    
    // Manipulação no gráfico 1 principal
    const ctx = document.getElementById("myChart").getContext('2d');
    const config = {
        type: 'line',
        data: {
            labels: ["Ultima data captada","Cinco dias atrás","Quatro dias atrás" ,"Três dias atrás" , "Dois dias atrás", "Um dias atrás", "Hoje"],
            datasets: [{
                label: 'Preço da Ação',
                data: [0,0,0,0,0,0,0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    }

    const myChart = new Chart(ctx, config);

    window.chart = myChart;

    /**
     * Função para atualizar os dados do Chart
     * @param {array} data - dados para atualizar o chart. Exemplo: [0,5,3,4,5]
     */
    const updateChart = function(dataChart) {
        myChart.data.datasets.forEach(function(dataset) {
            dataset.data = dataChart;
        });

        myChart.update();
    }

    const convertArrayToObject = array => {
        return {
            date: array[0],
            entries: array[1]
        }
    }

    const getLastArray = array => {
        let lastArray = array[array.length-1];
        
        return convertArrayToObject(lastArray);
    };
    
    const getFirstArray = array => {
        let firstArray = array[0];
        
        return convertArrayToObject(firstArray);
    };
    
    const getPastArray = array => {
        let pastFiveArray = array.filter((item, index) => index < 6);
        let pastFiveArrayToObject = pastFiveArray.map(item => convertArrayToObject(item));

        return pastFiveArrayToObject;
    };
    
    const convertVariationObjectToArray = (variationsObject) => {
        let valueDateConvertion = [];
        
        variationsObject.map(thisVariation => {
            let currentDate = thisVariation[0].slice(0, 10);
            let currentHour = thisVariation[0].slice(11, thisVariation[0].lenght);
            let formatedHour = convertArrayToObject([currentHour, thisVariation[1]]);

            if (valueDateConvertion[currentDate] == undefined) {
                valueDateConvertion[currentDate] = [];
            }

            valueDateConvertion[currentDate].push(formatedHour);
        });

        return Object.entries(valueDateConvertion);
    }
    

    // const valueVariationsArray = convertVariationObjectToArray(valueVariationsObject);
    
    $("#form-submit").on("submit", function(e){
        e.preventDefault(); //cancela o evento padrão dos elementos
        var codBolsa = $("#txtCodigo").val();
        var urlStr = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+ codBolsa +".SA&interval=15min&outputsize=full&apikey=CGSKMEPWKG8Y4ZS2";
        
        $.ajax({
            url : urlStr,
            type : "get",
            dataType : "json",
            success : function(data){
            
                var options = {year: 'numeric', month: 'short', day: 'numeric' };
                var ultimoData = new Date(Object.entries(data['Time Series (15min)']).pop()[0]).toLocaleDateString('pt-BR', options);
                var dataHoje = new Date(Object.entries(data['Time Series (15min)']).shift()[0]).toLocaleDateString('pt-BR', options);

                const variationObject = convertVariationObjectToArray(Object.entries(data['Time Series (15min)']));
               
                $("#txtPreco").val(getFirstArray(variationObject).entries[0].entries["2. high"]);
                $("#txtPreco1").val(getPastArray(variationObject)[1].entries[0].entries["2. high"]);
                $("#txtPreco2").val(getPastArray(variationObject)[2].entries[0].entries["2. high"]);
                $("#txtPreco3").val(getPastArray(variationObject)[3].entries[0].entries["2. high"]);
                $("#txtPreco4").val(getPastArray(variationObject)[4].entries[0].entries["2. high"]);
                $("#txtPreco5").val(getPastArray(variationObject)[5].entries[0].entries["2. high"]);
                
               
                $("#txtUltimoPreco").val(Object.entries(data['Time Series (15min)']).pop()[1]['2. high']);
                $("#txtUltimo").val(Object.entries(data['Time Series (15min)']).pop()[0]);
               

                 // Comparação de campos
                 var precoAtual = document.getElementById("txtPreco").value;
                 var preco1 = document.getElementById("txtPreco1").value;
                 var preco2 = document.getElementById("txtPreco2").value;
                 var preco3 = document.getElementById("txtPreco3").value;
                 var preco4 = document.getElementById("txtPreco4").value;
                 var preco5 = document.getElementById("txtPreco5").value;
                 var precoUltimo = document.getElementById("txtUltimoPreco").value;

                var maiorValor = Math.max(precoAtual, preco1,preco2,preco3,preco4,preco5,precoUltimo);
                document.getElementById("highest-value").innerHTML = maiorValor;

                var menorValor = Math.min(precoAtual, preco1,preco2,preco3,preco4,preco5,precoUltimo);
                document.getElementById("lower-value").innerHTML = menorValor;

                var percentLow = (menorValor/precoUltimo);
                var percentHigh = (maiorValor/precoUltimo);
                if(percentLow != 1){
                 document.getElementById("percent-low").innerHTML = percentLow;
                }else{
                    document.getElementById("percent-low").innerHTML = "Mesmo valor que o último captado";
                }

                if(percentHigh != 1){
                    document.getElementById("percent-high").innerHTML = percentHigh;
                   }else{
                    document.getElementById("percent-high").innerHTML = "Mesmo valor que o último captado";
                   }
                
               
                 



                // Atualização de Gráfico
                updateChart([precoUltimo,preco1,preco2,preco3,preco4,preco5,precoAtual]);

               

                if(precoAtual > preco1){
                document.getElementById('txtPreco').style.backgroundColor ='#2ecc71';  // verde
                }else if(precoAtual == preco1){
                document.getElementById('txtPreco').style.backgroundColor ='#3498db'; // azul
                }else{
                document.getElementById('txtPreco').style.backgroundColor ='#e74c3c'; // vermelho
                }

                if(preco1 > preco2){  
                document.getElementById('txtPreco1').style.backgroundColor ='#2ecc71';  // verde
                }else if(preco1 == preco2){
                document.getElementById('txtPreco1').style.backgroundColor ='#3498db'; // azul
                }else{
                document.getElementById('txtPreco1').style.backgroundColor ='#e74c3c'; // vermelho
                }

                if(preco2 > preco3){  
                document.getElementById('txtPreco2').style.backgroundColor ='#2ecc71';  // verde
                }else if(preco2 == preco3){
                document.getElementById('txtPreco2').style.backgroundColor ='#3498db'; // azul
                }else{
                document.getElementById('txtPreco2').style.backgroundColor ='#e74c3c'; // vermelho
                }

                if(preco3 > preco4){  
                document.getElementById('txtPreco3').style.backgroundColor ='#2ecc71';  // verde
                }else if(preco3 == preco4){
                document.getElementById('txtPreco3').style.backgroundColor ='#3498db'; // azul
                }else{
                document.getElementById('txtPreco3').style.backgroundColor ='#e74c3c'; // vermelho
                }

                if(preco4 > preco5){  
                document.getElementById('txtPreco4').style.backgroundColor ='#2ecc71';  // verde
                }else if(preco3 == preco4){
                document.getElementById('txtPreco4').style.backgroundColor ='#3498db'; // azul
                }else{
                document.getElementById('txtPreco4').style.backgroundColor ='#e74c3c'; // vermelho
                }

                if(preco5 > precoUltimo){  
                document.getElementById('txtPreco5').style.backgroundColor ='#2ecc71';  // verde
                }else if(preco3 == precoUltimo){
                document.getElementById('txtPreco5').style.backgroundColor ='#3498db'; // azul
                }else{
                document.getElementById('txtPreco5').style.backgroundColor ='#e74c3c'; // vermelho
                }
            },
            error : function(erro){
                console.log(erro);
            }
        });
    });
});











