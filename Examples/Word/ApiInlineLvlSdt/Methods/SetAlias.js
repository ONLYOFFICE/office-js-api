// This example sets the alias attribute to the container.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control with alias '№1'.");
oInlineLvlSdt.AddElement(oRun, 0);
oInlineLvlSdt.SetAlias("№1");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var sAlias = oInlineLvlSdt.GetAlias();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Alias: " + sAlias);
oDocument.Push(oParagraph);