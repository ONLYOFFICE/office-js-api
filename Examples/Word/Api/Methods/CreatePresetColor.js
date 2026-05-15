// Use a named preset color as one of the stops in a gradient-filled shape in a document.

// How do I pick a preset color by name and use it as the start of a gradient fill in a document?

// Build a radial gradient that blends from a named color to an orange tone on a shape in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.CreatePresetColor("peachPuff"), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);