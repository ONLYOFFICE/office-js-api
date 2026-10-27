// Read the cap type of a shape border in a presentation.

// Get the cap type to find out how the stroke ends are drawn.

// Apply a round cap to a line's stroke, then read back its cap type in a presentation.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(8 * 12700, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let line = Api.CreateShape("line", 100 * 36000, 50 * 36000, fill, stroke);
line.SetPosition(2000000, 1000000);
slide.AddObject(line);
let retrievedStroke = line.GetLine();
retrievedStroke.SetCapType("round");
let capType = retrievedStroke.GetCapType();

let label = Api.CreateShape("rect", 120 * 36000, 30 * 36000, fill, Api.CreateStroke(0, Api.CreateNoFill()));
label.SetPosition(2000000, 3000000);
slide.AddObject(label);
label.GetDocContent().GetElement(0).AddText("Cap type: " + capType);
