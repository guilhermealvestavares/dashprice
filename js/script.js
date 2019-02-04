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
                
                    console.log(Object.entries(data['Time Series (15min)']).shift()[0]);

                    var d = new Date();
                    var dia = d.getUTCDate();
                    var mes = d.getUTCMonth();
                    var ano = d.getUTCFullYear();

                    console.log(dia);
                    console.log(mes);
                    console.log(ano);
                    var dataCompleta = ano+"-"+mes+"-"+dia;
                    console.log(dataCompleta);

                },
                error : function(erro){
                    console.log(erro);
                }
            });
    });
});

