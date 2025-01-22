// This example sets your own customized numbering type.
let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let formatString = "";
	for (let nTempLvl = 1; nTempLvl <= (lvl + 1); ++nTempLvl) formatString += "%" + nTempLvl + ".";
	numLvl.SetCustomType("lowerRoman", formatString, "left");
	numLvl.SetStart(lvl + 1);
	numLvl.SetSuff("space");
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Custom numbered lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}