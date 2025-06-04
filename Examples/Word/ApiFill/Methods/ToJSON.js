// This example converts the ApiFill object into the JSON object.

// How to get a JSON object from the fill object.

// Convert the radial gradient fill to json and add it to the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let json = fill.ToJSON();
let fillFromJSON = Api.FromJSON(json);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fillFromJSON, stroke);
paragraph.AddDrawing(drawing);