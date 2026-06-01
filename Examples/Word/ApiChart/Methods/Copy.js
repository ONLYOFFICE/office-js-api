// Duplicate a chart and add the copy to the same paragraph in a document.

// How do I make a copy of a chart in a document?

// Clone a chart so that the duplicate appears alongside the original in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
    [200, 240, 280],
    [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595);
paragraph.AddDrawing(chart);

let copyChart = chart.Copy();
paragraph.AddDrawing(copyChart);
