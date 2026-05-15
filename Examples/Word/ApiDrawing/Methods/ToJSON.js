// Serialize a drawing to JSON and restore it as a new shape in a document.

// How do I convert a drawing object to JSON in a document?

// Duplicate a shape by exporting it to JSON and rebuilding it from that data in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 224, 204), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 164, 101), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
let json = drawing.ToJSON(false, true);
let drawingFromJSON = Api.FromJSON(json);
paragraph.AddDrawing(drawingFromJSON);