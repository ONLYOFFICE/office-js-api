// This example sets the end position of a given range object.
let oDocument = Api.GetDocument();
let oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
let oRange = oParagraph.GetRange();
oRange.SetEndPos(12);
oRange.SetBold(true);