// Get the dash type of a stroke. Creates a shape with a solid border and display its dash type. Returns string value: "dash", "dashDot", "dot", "lgDash", "lgDashDot", "lgDashDotDot", "solid", "sysDash", "sysDashDot", "sysDashDotDot", "sysDot" in a PDF document.

// How to get the dash type for a stroke in a PDF document?

// Get the dash type and display the result in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(2000000, 1000000);
page.AddObject(shape);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let retrievedStroke = shape.GetLine();
let dashType = retrievedStroke.GetDashType();
paragraph.AddText("Dash type: " + (dashType ? dashType : "not set"));