// This example shows how to get the shading applied to the contents of the paragraph.

// How to get the shading type of the paragraph.

// Get the paragraph shading and apply it to another paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('This is the first paragraph with a custom shading applied.');
paragraph.SetShd('clear', Api.HexColor('#FF6F3D'));

let shd = paragraph.GetShd();

let paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This is the second paragraph. The shading from the first paragraph is applied here.');
paragraph2.SetShd(shd.Type, shd.Color);
doc.Push(paragraph2);