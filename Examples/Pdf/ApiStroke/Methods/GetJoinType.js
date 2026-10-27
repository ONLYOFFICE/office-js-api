// Read the join type of a shape border in a PDF.

// Get the join type to find out how the stroke corners are drawn.

// Apply a miter join to a rectangle's stroke, then read back its join type in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(8 * 12700, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let shape = Api.CreateShape("rect", 50 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(2000000, 1000000);
page.AddObject(shape);
let retrievedStroke = shape.GetLine();
retrievedStroke.SetJoinType("miter");
let joinType = retrievedStroke.GetJoinType();

let label = Api.CreateShape("rect", 120 * 36000, 30 * 36000, fill, Api.CreateStroke(0, Api.CreateNoFill()));
label.SetPosition(2000000, 3000000);
page.AddObject(label);
label.GetContent().GetElement(0).AddText("Join type: " + joinType);
