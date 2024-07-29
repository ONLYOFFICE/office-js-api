// This example sets the bullet or numbering to the current paragraph.
var oDocument = oShape.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
var oBullet = Api.CreateBullet("-");
oParaPr.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the bulleted paragraph.");