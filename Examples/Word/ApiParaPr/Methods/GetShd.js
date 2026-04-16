// Get the shading applied to the contents of the paragraph in a document.

// How to get the shading type of the paragraph in a document.

// Get the paragraph shading and fill the drawing with it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('This is an example of setting a shade to a paragraph. ');

let paraPr = paragraph.GetParaPr();
paraPr.SetShd('clear', Api.HexColor('#ff6f3d'));

let shade = paraPr.GetShd();
let fill = Api.CreateSolidFill(shade);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape('rect', 10 * 36000, 3 * 36000, fill, stroke);

paragraph = Api.CreateParagraph();
paragraph.AddText('Shade: ');
paragraph.AddDrawing(drawing);
doc.Push(paragraph);