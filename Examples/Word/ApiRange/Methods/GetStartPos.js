// This example gets the start position of a given range object.
let oDocument = Api.GetDocument();
let oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
let oRange = oParagraph.GetRange();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("We used range in previous paragraph with start position: " + oRange.GetStartPos());
oDocument.Push(oParagraph);