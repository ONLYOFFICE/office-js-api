// Find out the class type of a numbering object in a document.

// How can I get the class type of a numbering in a document?

// Get the class type of a numbering and display it in the document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
for (let nLvl = 0; nLvl < 8; ++nLvl) {
	let numLvl = numbering.GetLevel(nLvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Default bullet lvl " + (nLvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
let classType = numbering.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);