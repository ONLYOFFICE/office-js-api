// Save a named color as a portable data structure in a document.

// How do I export a named color so it can be restored later in a document?

// Preserve a named color value by serializing it for later reuse in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let presetColor = Api.CreatePresetColor("peachPuff");
let json = presetColor.ToJSON();
let presetColorFromJSON = Api.FromJSON(json);
let gs1 = Api.CreateGradientStop(presetColor, 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(drawing);
doc.Push(paragraph);