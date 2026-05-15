// Add a multilevel bulleted list across eight indent levels in a document.

// How do I create a numbered or bulleted list with multiple levels in a document?

// Apply a consistent bullet style to every level so readers can follow nested structure at a glance in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Default numbered lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}