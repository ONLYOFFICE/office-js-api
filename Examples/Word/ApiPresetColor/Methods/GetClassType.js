// Check what category a named color belongs to in a document.

// How do I find out the type of a named color used for a shape fill in a document?

// Confirm the color category before reusing a named color value in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let presetColor = Api.CreatePresetColor("peachPuff");
let gs1 = Api.CreateGradientStop(presetColor, 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(drawing);
let classType = presetColor.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);