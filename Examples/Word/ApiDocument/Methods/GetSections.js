// This example shows how to get a collection of section objects in the document.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a new paragraph.");
oParagraph.AddLineBreak();
oParagraph.AddText("Scroll down to see the new section.");
var oSection1 = oDocument.CreateSection(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph in a new section");
oDocument.Push(oParagraph);
var aSections = oDocument.GetSections();
oParagraph = Api.CreateParagraph();
var sClassType = aSections[1].GetClassType();
oParagraph.AddText("Class type: " + sClassType);
oDocument.Push(oParagraph);