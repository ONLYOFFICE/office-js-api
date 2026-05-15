// Serialize a fill object to JSON and apply it to a new shape in a document.

// How do I convert a fill to JSON and reuse it in a document?

// Transfer a gradient fill from one context to another by saving it as JSON and rebuilding it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let json = fill.ToJSON();
let fillFromJSON = Api.FromJSON(json);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fillFromJSON, stroke);
paragraph.AddDrawing(drawing);