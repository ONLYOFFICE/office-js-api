// Assign a specific numbering level from an existing list to a paragraph in a document.

// How do I link a paragraph to a particular level of a numbered or bulleted list in a document?

// Place a paragraph at a chosen depth within a list hierarchy in a document.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
let numbering = doc.CreateNumbering("bullet");
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Default bullet lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
let paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.SetNumPr(numbering, 3);
paragraph.AddText("This is a paragraph styled as level 4 of a bulleted list.");
doc.Push(paragraph);