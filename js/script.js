$(document).ready(function(){
    $("#form-submit").on("submit", function(e){
        e.preventDefault(); //cancela o evento padrão dos elementos
            var codBolsa = $("#txtCodigo").val();
            var urlStr = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+ codBolsa +".SA&interval=15min&outputsize=full&apikey=CGSKMEPWKG8Y4ZS2";
         
            $.ajax({
                url : urlStr,
                type : "get",
                dataType : "json",
                success : function(data){
                
 
                    $("#txtPreco").val(Object.entries(data['Time Series (15min)']).shift()[1]['2. high']);
                    $("#txtUltimoPreco").val(Object.entries(data['Time Series (15min)']).pop()[1]['2. high']);
                    $("#txtUltimo").val(Object.entries(data['Time Series (15min)']).pop()[0]);

                    var options = {year: 'numeric', month: 'short', day: 'numeric' };
                    var ultimoData = new Date(Object.entries(data['Time Series (15min)']).pop()[0]).toLocaleDateString('pt-BR', options);
                    var dataHoje = new Date(Object.entries(data['Time Series (15min)']).shift()[0]).toLocaleDateString('pt-BR', options);
            
                    // comparação de campos

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









                    //manipulação no gráfico 1 principal
                    var ctx = document.getElementById("myChart").getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: [ultimoData, "Blue", "Yellow", "Green", "Purple", dataHoje],
                            datasets: [{
                                label: 'Preço da Ação',
                                data: [precoUltimo,0,0,0,0,precoAtual],
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
                    });



                    
                },
                error : function(erro){
                    console.log(erro);
                }
            });
    });


// fim manupilação do gráfico




var config = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: [10, 30, 39, 20, 25, 34, -10],
            fill: false,
        }, {
            label: 'My Second dataset',
            fill: false,
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            data: [18, 33, 22, 19, 11, 39, 30],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Min and Max Settings'
        },
        scales: {
            yAxes: [{
                ticks: {
                    // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
                    suggestedMin: 10,

                    // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
                    suggestedMax: 50
                }
            }]
        }
    }
};






});











