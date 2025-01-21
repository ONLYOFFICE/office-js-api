// This example shows how to get all numbered paragraphs from the current document.
let document = Api.GetDocument();
let numbering = document.CreateNumbering("numbered");
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
	document.Push(paragraph);
}
let numberedParagraphs = document.GetAllNumberedParagraphs();
numberedParagraphs[0].SetBold(true);