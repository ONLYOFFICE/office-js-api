// This example shows how to get the shading applied to the contents of the paragraph.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is an example of setting a shade to a paragraph. ");
paragraph.SetShd("clear", 255, 111, 61, false);
let shade = paragraph.GetShd();
paragraph = Api.CreateParagraph();
let fill = Api.CreateSolidFill(shade);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 10 * 36000, 3 * 36000, fill, stroke);
paragraph.AddText("Shade: ");
paragraph.AddDrawing(drawing);
document.Push(paragraph);