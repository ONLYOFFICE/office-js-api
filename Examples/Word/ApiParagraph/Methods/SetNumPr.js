// This example specifies that the current paragraph references a numbering definition instance in the current document.
let document = Api.GetDocument();
let myStyle = document.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
let numbering = document.CreateNumbering("bullet");
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Default bullet lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	document.Push(paragraph);
}
let paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.SetNumPr(numbering, 3);
paragraph.AddText("This is a paragraph styled as level 4 of a bulleted list.");
document.Push(paragraph);