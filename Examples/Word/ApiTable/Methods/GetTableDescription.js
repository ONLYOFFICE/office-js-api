// This example shows how to get the table description.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetTableDescription("Empty table");
oTable.SetStyle(oTableStyle);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Table description: " + oTable.GetTableDescription());
oDocument.Push(oTable);