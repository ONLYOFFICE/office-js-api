// This example shows how to get the shading applied to the contents of the paragraph.

// How to get the shading type of the paragraph.

// Get the paragraph shading and apply it to another paragraph.

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
