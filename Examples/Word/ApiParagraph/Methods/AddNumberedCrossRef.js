// This example adds a numbered cross-reference to the paragraph.
let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
for (let i = 0; i < 8; ++i) {
	let numLvl = numbering.GetLevel(i);
	let formatString = "";
	for (let nTempLvl = 0; nTempLvl <= i; ++nTempLvl) 
		formatString += "%" + nTempLvl + ".";
	numLvl.SetCustomType("lowerRoman", formatString, "left");
	numLvl.SetStart(i + 1);
	numLvl.SetSuff("space");
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Custom numbered lvl " + (i + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
let numberedParagraphs = doc.GetAllNumberedParagraphs();
let paragraph = Api.CreateParagraph();
paragraph.AddText("An example of the customized numbering type can be found in the paragraph № ");
doc.Push(paragraph);
paragraph.AddNumberedCrossRef("paraNum", numberedParagraphs[1], true, true);