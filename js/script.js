$(document).ready(function(){
    // Manipulação no gráfico 1 principal
    const ctx = document.getElementById("myChart").getContext('2d');
    const config = {
        type: 'line',
        data: {
            labels: ["Hoje", "Ontem" , "Três dias Atrás", "Quatro dias atrás", "Cinco dias Atrás"],
            datasets: [{
                label: 'Preço da Ação',
                data: [0,0,0,0,0],
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
    
    const getPastFiveArray = array => {
        let pastFiveArray = array.filter((item, index) => index < 5);
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
                // $("#txtPreco").val(Object.entries(data['Time Series (15min)']).shift()[1]['2. high']);
                // $("#txtUltimoPreco").val(Object.entries(data['Time Series (15min)']).pop()[1]['2. high']);
                // $("#txtUltimo").val(Object.entries(data['Time Series (15min)']).pop()[0]);

                // var options = {year: 'numeric', month: 'short', day: 'numeric' };
                // var ultimoData = new Date(Object.entries(data['Time Series (15min)']).pop()[0]).toLocaleDateString('pt-BR', options);
                // var dataHoje = new Date(Object.entries(data['Time Series (15min)']).shift()[0]).toLocaleDateString('pt-BR', options);

                const variationObject = convertVariationObjectToArray(Object.entries(data['Time Series (15min)']));

                // Atualização de Gráfico
                updateChart([1,2,5,6,4]);

                // Comparação de campos
                var precoAtual = document.getElementById("txtPreco").value;
                var preco1 = document.getElementById("txtPreco1").value;
                var preco2 = document.getElementById("txtPreco2").value;
                var preco3 = document.getElementById("txtPreco3").value;
                var preco4 = document.getElementById("txtPreco4").value;
                var preco5 = document.getElementById("txtPreco5").value;
                var precoUltimo = document.getElementById("txtUltimoPreco").value;

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











