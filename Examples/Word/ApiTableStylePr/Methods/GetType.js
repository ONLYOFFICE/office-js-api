// This example shows how to get a type of the current table conditional style.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.GetStyle("Bordered");
oTableStyle.SetName("My Custom Style");
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
var oTableStylePr = oTableStyle.GetConditionalTableStyle("topLeftCell");
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var sTableStylePrType = oTableStylePr.GetType();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Style type = " + sTableStylePrType);