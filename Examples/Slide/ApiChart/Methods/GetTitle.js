// This example shows how to get the chart title text.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart(
	'bar3D',
	[[200, 240, 280], [250, 260, 280]],
	['Projected Revenue', 'Estimated Costs'],
	[2014, 2015, 2016],
	300 * 36000, 130 * 36000,
	24
);
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle('Financial Overview', 13);

let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);

slide.AddObject(chart);

const chartTitle = chart.GetTitle();
const shape = Api.CreateShape('rect', 200 * 36000, 30 * 36000, Api.HexColor('#deadd8'), Api.CreateStroke(0, Api.CreateNoFill()));
shape.SetPosition(0, 140 * 36000);
const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Chart Title: ' + chartTitle);
slide.AddObject(shape);
