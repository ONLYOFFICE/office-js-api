// This example shows how to get the shading applied to the contents of the paragraph.

// How to get the shading type of the paragraph.

// Get the paragraph shading and fill the drawing with it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a shade to a paragraph. ");
let paraPr = paragraph.GetParaPr();
paraPr.SetShd("clear", 255, 111, 61, false);
let shade = paraPr.GetShd();
paragraph = Api.CreateParagraph();
let fill = Api.CreateSolidFill(shade);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 10 * 36000, 3 * 36000, fill, stroke);
paragraph.AddText("Shade: ");
paragraph.AddDrawing(drawing);
doc.Push(paragraph);