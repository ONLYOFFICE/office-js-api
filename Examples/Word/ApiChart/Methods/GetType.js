// Read the chart type using the chart type name in a document.

// Useful for confirming a chart's type before applying type-specific formatting in a document.

// Confirm a chart's type at runtime by showing its name in the chart title in a document.

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);

const chart = Api.CreateChart('3DColumnClustered', [
	[200, 240, 280],
	[250, 260, 280]
], ['Projected Revenue', 'Estimated Costs'], [2014, 2015, 2016], 4051300, 2347595, 24);

const solidGrey = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
const solidOrange = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(solidGrey, 0, false);
chart.SetSeriesFill(solidOrange, 1, false);
const chartType = chart.GetType();
chart.SetTitle('This chart is of the ' + chartType + ' type', 14);

firstParagraph.AddDrawing(chart);
