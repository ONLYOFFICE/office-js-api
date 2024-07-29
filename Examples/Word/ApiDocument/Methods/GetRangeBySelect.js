// This example shows how to get a range object by the selection.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun1 = Api.CreateRun();
oRun1.AddText("ONLYOFFICE Document Builder.");
oParagraph.AddElement(oRun1);
var oRun2 = Api.CreateRun();
oRun2.AddText(" ONLYOFFICE for developers.");
oParagraph.AddElement(oRun2);
oRun1.Select();
var oRange = oDocument.GetRangeBySelect();
oRange.SetBold(true);