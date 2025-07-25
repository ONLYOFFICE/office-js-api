// This example gets a class type and inserts it into the document.

// How to get a class type of ApiNumberingLevel.

// Retrieve class type of ApiNumberingLevel object and insert it to the document.

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
