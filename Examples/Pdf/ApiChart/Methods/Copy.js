// Duplicate a chart and place the copy on another page in a PDF.

// Make a copy of a chart in a PDF.

// Create an exact duplicate of a chart and add it to a new page in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("bar3D", [
    [200, 240, 280],
    [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595);
chart.SetPosition(608400, 1267200);
page.AddObject(chart);

const copyChart = chart.Copy();
const newPage = doc.AddPage(0);
newPage.AddObject(copyChart);
