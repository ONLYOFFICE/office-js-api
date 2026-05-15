// Retrieve all numbered paragraphs in a document.

// How do I collect every paragraph that has numbering applied in a document?

// Make the first numbered paragraph bold to draw attention to the opening list item.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let formatString = "";
	for (let tempLvl = 0; tempLvl <= lvl; ++tempLvl) formatString += "%" + tempLvl + ".";
	numLvl.SetCustomType("lowerRoman", formatString, "left");
	numLvl.SetStart(lvl + 1);
	numLvl.SetSuff("space");
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Custom numbered lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
let numberedParagraphs = doc.GetAllNumberedParagraphs();
numberedParagraphs[0].SetBold(true);