// Duplicate a chart and place the copy on another slide in a presentation.

// How do I make a copy of a chart in a presentation?

// Clone a chart and add the duplicate to a new slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("bar3D", [
    [200, 240, 280],
    [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595);
slide.AddObject(chart);

const copyChart = chart.Copy();
const newSlide = Api.CreateSlide();
presentation.AddSlide(newSlide);
newSlide.AddObject(copyChart);
