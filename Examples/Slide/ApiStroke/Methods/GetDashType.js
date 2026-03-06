// Gets the dash type of a stroke.
// Creates a shape with a solid border and displays its dash type.
// Returns string value: "dash", "dashDot", "dot", "lgDash", "lgDashDot",
// "lgDashDotDot", "solid", "sysDash", "sysDashDot", "sysDashDotDot", "sysDot"
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(2000000, 1000000);
slide.AddObject(shape);
let content = shape.GetDocContent();
let paragraph = content.GetElement(0);
let retrievedStroke = shape.GetLine();
let dashType = retrievedStroke.GetDashType();
paragraph.AddText("Dash type: " + (dashType ? dashType : "not set"));
