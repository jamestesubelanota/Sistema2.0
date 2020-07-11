window.onload = function() {



        var chart = new CanvasJS.Chart("chartContainer1", {
            theme: "light2",
            animationEnabled: true,
            title: {
                text: "Tipos de eventos"
            },
            subtitles: [{
                text: "Mensual",
                fontSize: 16
            }],
            data: [{
                type: "pie",
                indexLabelFontSize: 18,
                radius: 80,
                indexLabel: "{label} - {y}",
                yValueFormatString: "###0.0\"%\"",
                click: explodePie,
                dataPoints: [
                    { y: 80, label: "Infantil" },
                    { y: 10, label: "Empresarial"},
                    { y: 10, label: "Peticion especial" },

                ]
            }]
        });
        chart.render();
        
        function explodePie(e) {
            for(var i = 0; i < e.dataSeries.dataPoints.length; i++) {
                if(i !== e.dataPointIndex)
                    e.dataSeries.dataPoints[i].exploded = false;
            }
        }
    
    }
    var chart = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Inventario"
        },
        axisY: {
            title: "Cantidad"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "Disponible",
            dataPoints: [      
                { y: 300878, label: "Disfraz payaso" },
                { y: 266455,  label: "Disfraz Mickey" },
                { y: 169709,  label: "Disfraz Capitan America" },
                { y: 158400,  label: "Confeti" },
                { y: 142503,  label: "Espuma" },
                { y: 101500, label: "Consolas DJ" },
                { y: 97800,  label: "Altavoces" },
                { y: 80000,  label: "Dulces" }
            ]
        }]
    });
    chart.render();
    
    
    


        var dataPoints = [];
        
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            exportEnabled: true,
            title: {
                text: "Ventas"
            },
            subtitles: [{
                text: "Mensuales"
            }],
            axisX: {
                interval: 1,
                valueFormatString: "MMM"
            },
            axisY: {
                includeZero: false,
                prefix: "$",
                title: "Price"
            },
            toolTip: {
                content: "Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[3]}<br />High: {y[1]}, Low: {y[2]}"
            },
            data: [{
                type: "candlestick",
                yValueFormatString: "$##0.00",
                dataPoints: dataPoints
            }]
        });
        
        $.get("https://canvasjs.com/data/gallery/javascript/netflix-stock-price.csv", getDataPointsFromCSV);
        
        function getDataPointsFromCSV(csv) {
            var csvLines = points = [];
            csvLines = csv.split(/[\r?\n|\r|\n]+/);
            for (var i = 0; i < csvLines.length; i++) {
                if (csvLines[i].length > 0) {
                    points = csvLines[i].split(",");
                    dataPoints.push({
                        x: new Date(
                            parseInt(points[0].split("-")[0]),
                            parseInt(points[0].split("-")[1]),
                            parseInt(points[0].split("-")[2])
                        ),
                        y: [
                            parseFloat(points[1]),
                            parseFloat(points[2]),
                            parseFloat(points[3]),
                            parseFloat(points[4])
                        ]
                    });
                }
            }
            
            chart.render();

        }
        