// This example gets a class type and pastes it into the presentation.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableStylePr = oTableStyle.GetConditionalTableStyle();
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var sClassType = oTableStylePr.GetClassType();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Class Type = " + sClassType);