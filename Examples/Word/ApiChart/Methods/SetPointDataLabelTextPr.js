// This example sets the text properties for a specific chart point data label.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const chart = Api.CreateChart(
	'bar3D',
	[
		[200, 240, 280],
		[250, 260, 280]
	],
	['Projected Revenue', 'Estimated Costs'],
	[2014, 2015, 2016],
	4051300, 2347595, 24
);
chart.SetSeriesFill(Api.CreateSolidFill(Api.RGB(69, 90, 100)), 0, false);
chart.SetSeriesFill(Api.CreateSolidFill(Api.RGB(38, 80, 109)), 1, false);
chart.SetVerAxisTitle('USD In Hundred Thousands', 10);
chart.SetHorAxisTitle('Year', 11);
chart.SetLegendPos('bottom');
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle('Financial Overview', 13);

const textPr = Api.CreateTextPr();
textPr.SetFontSize(24);
textPr.SetBold(true);
textPr.SetItalic(true);
textPr.SetFontFamily('Arial');
textPr.SetColor(Api.RGB(210, 105, 30));
chart.SetPointDataLabelTextPr(1, 0, textPr);

paragraph.AddDrawing(chart);
