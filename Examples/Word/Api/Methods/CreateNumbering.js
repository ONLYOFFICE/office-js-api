// This example creates a bullet for a paragraph with the specified numbering character or symbol.

// How to create the numbered bullet and apply it to the paragraph.

// Creates the ApiNumbering object and applies it to the ApiParagraph class.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
for (let lvl = 0; lvl < 2; ++lvl) 
{
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("This is an example of the bulleted paragraph № " + (lvl + 1));
	paragraph.SetNumbering(numbering.GetLevel(lvl));
	doc.Push(paragraph);
}