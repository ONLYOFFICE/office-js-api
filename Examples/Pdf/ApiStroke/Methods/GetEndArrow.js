// Read the ending arrow of a line in a PDF.

// How do I find out which arrow is applied to the end of a line in a PDF?

// Apply an ending arrow to a line's stroke, read it back, and label the result in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let line = Api.CreateShape("line", 100 * 36000, 50 * 36000, fill, stroke);
line.SetPosition(2000000, 1000000);
page.AddObject(line);
let retrievedStroke = line.GetLine();
retrievedStroke.SetEndArrow("stealth", "medium", "large");
let arrow = retrievedStroke.GetEndArrow();

let label = Api.CreateShape("rect", 120 * 36000, 30 * 36000, fill, Api.CreateStroke(0, Api.CreateNoFill()));
label.SetPosition(2000000, 3000000);
page.AddObject(label);
label.GetContent().GetElement(0).AddText("End arrow type: " + (arrow ? arrow.Type : "not set"));
