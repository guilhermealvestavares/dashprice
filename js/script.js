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
            


                    var precoAtual = document.getElementById("txtPreco").value;
                    var precoUltimo = document.getElementById("txtUltimoPreco").value;








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






