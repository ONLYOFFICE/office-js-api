// This example sets the text properties for all chart data labels.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const chart = Api.CreateChart('bar3D', [
	[200, 240, 280],
	[250, 260, 280]
], ['Projected Revenue', 'Estimated Costs'], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSeriesFill(Api.CreateSolidFill(Api.RGB(55, 71, 79)), 0, false);
chart.SetSeriesFill(Api.CreateSolidFill(Api.RGB(21, 101, 131)), 1, false);
chart.SetVerAxisTitle('USD In Hundred Thousands', 10);
chart.SetHorAxisTitle('Year', 11);
chart.SetLegendPos('bottom');
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle('Financial Overview', 13);

const textPr = Api.CreateTextPr();
textPr.SetFontSize(18);
textPr.SetBold(true);
textPr.SetFontFamily('Arial');
textPr.SetColor(Api.RGB(25, 80, 150));
chart.SetDataLabelsTextPr(textPr);

paragraph.AddDrawing(chart);
