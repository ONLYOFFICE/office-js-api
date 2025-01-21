// This example specifies that the current paragraph references a numbering definition instance in the current document.
let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
let numbering = doc.CreateNumbering("bullet");
paraPr.SetNumPr(numbering);
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
paragraph.AddText("This is a paragraph styled as a bulleted list.");
doc.Push(paragraph);