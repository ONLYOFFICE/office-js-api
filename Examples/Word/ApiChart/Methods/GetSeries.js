// This example gets the first series of ApiChart class and inserts its type into the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oChart = Api.CreateChart("comboBarLine", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
oChart.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart.SetHorAxisTitle("Year", 11);
oChart.SetLegendPos("bottom");
oChart.SetShowDataLabels(false, false, true, false);
oChart.SetTitle("Financial Overview", 13);
oParagraph.AddDrawing(oChart);
var oSeries = oChart.GetSeries(0);
var sSeriesType = oSeries.GetChartType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Series Type = " + sSeriesType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetSeries.docx");
builder.CloseFile();