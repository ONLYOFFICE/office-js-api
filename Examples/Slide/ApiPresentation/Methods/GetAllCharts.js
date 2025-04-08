// This example shows how to get all chart objects from the current presentation.

const oPresentation = Api.GetPresentation();
const oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();

// Create a 3D bar chart
const aSeries = [[200, 240, 280], [250, 260, 280]];
const aSeriesNames = ['Category A', 'Category B'];
const aCatNames = [2024, 2025, 2026];
const oChart = Api.CreateChart(
	'bar3D',
	aSeries, aSeriesNames, aCatNames,
	200 * 36000, 150 * 36000, 24,
	['0', '0.00']
);
oChart.SetPosition(36000, 36000);
oSlide.AddObject(oChart);

// Create a label shape with the number of charts in the presentation
const oLabelFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 230, 150));
const oLabelStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oLabel = Api.CreateShape('rect', 60 * 36000, 20 * 36000, oLabelFill, oLabelStroke);
const oDocContent = oLabel.GetDocContent();
const oParagraph = oDocContent.GetElement(0);
const nChartsCount = oPresentation.GetAllCharts().length;
oParagraph.AddText('Charts: ' + nChartsCount);
oLabel.SetPosition(36000, 170 * 36000);
oSlide.AddObject(oLabel);
