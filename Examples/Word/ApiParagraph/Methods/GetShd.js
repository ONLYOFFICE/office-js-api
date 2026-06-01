// Read the background shading applied to a paragraph in a document.

// How do I get the shading color and type from a paragraph in a document?

// Copy the shading from one paragraph and apply the same background to another paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('This is the first paragraph with a custom shading applied.');
paragraph.SetShd('clear', Api.HexColor('#FF6F3D'));

let shd = paragraph.GetShd();

let paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This is the second paragraph. The shading from the first paragraph is applied here.');
paragraph2.SetShd(shd.Type, shd.Color);
doc.Push(paragraph2);