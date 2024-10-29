// This example creates a copy of an block level content control.
let oDocument = Api.GetDocument();
let oParagraph = oDocument.GetElement(0);
let oBlockLvlSdt = Api.CreateBlockLvlSdt();
let oPara = oBlockLvlSdt.GetContent().GetElement(0);
oPara.AddText("This is an block level content control.");
oDocument.Push(oBlockLvlSdt);
let oCopyBlockLvlSdt = oBlockLvlSdt.Copy();
oDocument.Push(oCopyBlockLvlSdt);