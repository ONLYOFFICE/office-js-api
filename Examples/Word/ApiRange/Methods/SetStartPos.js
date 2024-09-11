// This example sets the start position of a given range object.
let oDocument = Api.GetDocument();
let oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
let oRange = oParagraph.GetRange();
oRange.SetStartPos(12);
oRange.SetBold(true);