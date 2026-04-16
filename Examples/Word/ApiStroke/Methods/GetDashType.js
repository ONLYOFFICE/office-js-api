// Get the dash type of a stroke. Creates a shape with a solid border and display its dash type. Returns string value: "dash", "dashDot", "dot", "lgDash", "lgDashDot", "lgDashDotDot", "solid", "sysDash", "sysDashDot", "sysDashDotDot", "sysDot" in a document.

// How can I get the dash type using a stroke in a document?

// Get the dash type for a stroke in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
paragraph.AddLineBreak();
let retrievedStroke = shape.GetLine();
let dashType = retrievedStroke.GetDashType();
paragraph.AddText("Dash type: " + (dashType ? dashType : "not set"));