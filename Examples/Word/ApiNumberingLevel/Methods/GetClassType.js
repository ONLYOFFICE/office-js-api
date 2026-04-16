// Check the class type returned by a numbering level in a document.

// How do I check what type a numbering level object is in a document?

// Retrieve and output the class type string for a numbering level in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Default bullet lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + numbering.GetLevel(0).GetClassType());