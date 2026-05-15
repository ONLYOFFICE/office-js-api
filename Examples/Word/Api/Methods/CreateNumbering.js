// Add bulleted paragraphs at multiple indent levels to a document.

// How do I create a bulleted list with nested indent levels in a document?

// Format several paragraphs as a structured bullet list with increasing indentation in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
for (let lvl = 0; lvl < 2; ++lvl) 
{
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("This is an example of the bulleted paragraph № " + (lvl + 1));
	paragraph.SetNumbering(numbering.GetLevel(lvl));
	doc.Push(paragraph);
}