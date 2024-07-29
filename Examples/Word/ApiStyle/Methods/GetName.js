// This example shows how to get a name of the current style.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.GetStyle("Bordered");
oTableStyle.SetName("My Custom Style");
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var sTableStyleName = oTableStyle.GetName();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Table style name = " + sTableStyleName);