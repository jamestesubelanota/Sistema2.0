window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	exportEnabled: true,
	animationEnabled: true,
	title:{
		text: "State Operating Funds"
	},
	legend:{
		cursor: "pointer",
		itemclick: explodePie
	},
	data: [{
		type: "pie",
		showInLegend: true,
		toolTipContent: "{name}: <strong>{y}%</strong>",
		indexLabel: "{name} - {y}%",
		dataPoints: [
			{ y: 60, name: "Transacción_Cancelada", exploded: true },
			{ y: 40, name: "Transacción_Cancelar" },
			{ y: 40, name: "Tipo-Pago_Efectivo" },
			{ y: 60, name: "Tipo-Pago_Credito" },
			{ y: 40, name: "Servicio_Infantil" },
			{ y: 50, name: "Servicio_empresarial" },
			{ y: 10, name: "Servicio_Personalizada"}
		]
	}]
});
chart.render();
}

function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();

}
