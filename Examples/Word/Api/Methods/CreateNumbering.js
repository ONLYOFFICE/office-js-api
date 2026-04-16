// Create a bullet for a paragraph with the specified numbering character or symbol in a document.

// How to create the numbered bullet and apply it to the paragraph in a document.

// Create the numbering object and apply it to the paragraph class in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
for (let lvl = 0; lvl < 2; ++lvl) 
{
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("This is an example of the bulleted paragraph № " + (lvl + 1));
	paragraph.SetNumbering(numbering.GetLevel(lvl));
	doc.Push(paragraph);
}