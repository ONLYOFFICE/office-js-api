// This example shows how to get a collection of chart objects from the document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let chart1 = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
paragraph.AddDrawing(chart1);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart1.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart1.SetSeriesFill(fill, 1, false);
let chart2 = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart2.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart2.SetSeriesFill(fill, 1, false);
chart2.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart2.SetHorAxisTitle("Year", 11);
chart2.SetLegendPos("bottom");
chart2.SetShowDataLabels(false, false, true, false);
chart2.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart2);
let charts = document.GetAllCharts();
let stroke = Api.CreateStroke(1 * 150, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
charts[1].SetMinorHorizontalGridlines(stroke);