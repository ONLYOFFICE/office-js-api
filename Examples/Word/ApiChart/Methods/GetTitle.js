// This example shows how to get the chart title text.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

const chart = Api.CreateChart(
	'bar3D',
	[[200, 240, 280], [250, 260, 280]],
	['Projected Revenue', 'Estimated Costs'],
	[2014, 2015, 2016],
	4051300, 2347595,
	24
);
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle('Financial Overview', 13);

let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);

paragraph.AddDrawing(chart);

const chartTitle = chart.GetTitle();
paragraph = Api.CreateParagraph();
paragraph.AddText('Chart Title: ' + chartTitle);
doc.Push(paragraph);

