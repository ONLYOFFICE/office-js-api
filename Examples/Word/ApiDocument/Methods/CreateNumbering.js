// This example creates an abstract multilevel numbering with a "bullet" type.
let document = Api.GetDocument();
let numbering = document.CreateNumbering("bullet");
for (let nLvl = 0; nLvl < 8; ++nLvl) {
	let numLvl = numbering.GetLevel(nLvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Default numbered lvl " + (nLvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	document.Push(paragraph);
}