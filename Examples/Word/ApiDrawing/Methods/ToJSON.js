// This example converts the ApiDrawing object into the JSON object.

// How to get a JSON object from the drawing.

// Convert the shape to json and add it to the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 224, 204), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 164, 101), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
let json = drawing.ToJSON(false, true);
let drawingFromJSON = Api.FromJSON(json);
paragraph.AddDrawing(drawingFromJSON);