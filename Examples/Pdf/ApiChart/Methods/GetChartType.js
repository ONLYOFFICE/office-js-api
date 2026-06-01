// Determine what kind of chart is displayed in a PDF.

// How do I find out if a chart is a bar chart or line chart in a PDF?

// Retrieve the chart type and show it as text in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart('bar3D', [
	[200, 240, 280],
	[250, 260, 280]
], ['Projected Revenue', 'Estimated Costs'], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetPosition(608400, 1267200);

const solidGrey = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
const solidOrange = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(solidGrey, 0, false);
chart.SetSeriesFill(solidOrange, 1, false);
const chartType = chart.GetChartType();
chart.SetTitle('This chart is of the ' + chartType + ' type', 14);

page.AddObject(chart);