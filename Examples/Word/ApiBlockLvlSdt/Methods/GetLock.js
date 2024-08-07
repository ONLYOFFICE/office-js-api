// This example shows how to get the lock type of the container.
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with the content lock set to it.");
oBlockLvlSdt.SetLock("sdtContentLocked");
oDocument.AddElement(0, oBlockLvlSdt);
var oLock = oBlockLvlSdt.GetLock();
var oParagraph = oDocument.GetElement(1);
oParagraph.AddText("Lock type: " + oLock);