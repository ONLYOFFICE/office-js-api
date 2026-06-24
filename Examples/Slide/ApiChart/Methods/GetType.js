// Identify the chart type using the chart type name in a presentation.

// Useful for confirming a chart's type before applying type-specific formatting in a presentation.

// Determine the chart type and display it as the title in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const chartWidth = 4051300;
const chartHeight = 2347595;
const chart = Api.CreateChart('3DColumnClustered', [
	[200, 240, 280],
	[250, 260, 280]
], ['Projected Revenue', 'Estimated Costs'], [2014, 2015, 2016], chartWidth, chartHeight, 24);

const solidGrey = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
const solidOrange = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(solidGrey, 0, false);
chart.SetSeriesFill(solidOrange, 1, false);
const chartType = chart.GetType();
chart.SetTitle('This chart is of the ' + chartType + ' type', 14);
chart.SetPosition((presentation.GetWidth() - chartWidth) / 2, (presentation.GetHeight() - chartHeight) / 2);

slide.RemoveAllObjects();
slide.AddObject(chart);
