// Get a type of a chart in a presentation.

// How can I get the chart type using a chart in a presentation?

// Get the chart type for a chart in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const chart = Api.CreateChart('bar3D', [
	[200, 240, 280],
	[250, 260, 280]
], ['Projected Revenue', 'Estimated Costs'], [2014, 2015, 2016], 4051300, 2347595, 24);

const solidGrey = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
const solidOrange = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(solidGrey, 0, false);
chart.SetSeriesFill(solidOrange, 1, false);
const chartType = chart.GetChartType();
chart.SetTitle('This chart is of the ' + chartType + ' type', 14);

slide.RemoveAllObjects();
slide.AddObject(chart);