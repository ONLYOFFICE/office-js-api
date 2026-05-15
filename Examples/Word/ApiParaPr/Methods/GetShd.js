// Read the shading settings of a paragraph and copy them to another paragraph in a document.

// How do I get the shading type and color of a paragraph in a document?

// Reuse a paragraph's background shading by applying the retrieved values to a second paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('This is the first paragraph with a custom shading applied.');

let paraPr = paragraph.GetParaPr();
paraPr.SetShd('clear', Api.HexColor('#ff6f3d'));

let shd = paraPr.GetShd();

let paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This is the second paragraph. The shading from the first paragraph is applied here.');
let paraPr2 = paragraph2.GetParaPr();
paraPr2.SetShd(shd.Type, shd.Color);
doc.Push(paragraph2);