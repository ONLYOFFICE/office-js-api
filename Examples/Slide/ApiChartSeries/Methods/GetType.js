// Retrieve the chart type name of a series from a combo chart in a presentation.

// Extract and display the chart series type information in a presentation.

// Get the chart type of the first series and show it as slide title text.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("ComboColumnClusteredLine", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);

const series = chart.GetSeries(0);
const seriesType = series.GetType();
const title = "Series Type = " + seriesType + "\n";
chart.SetTitle(title, 20);
const chartWidth = 300 * 36000;
const chartHeight = 130 * 36000;
chart.SetSize(chartWidth, chartHeight);
chart.SetPosition((presentation.GetWidth() - chartWidth) / 2, (presentation.GetHeight() - chartHeight) / 2);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
slide.AddObject(chart);
