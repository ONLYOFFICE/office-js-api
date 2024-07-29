// This example shows how to make search in table cell.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1. This cell is in the first row.");
oDocument.Push(oTable);
var aSearch = oTable.GetCell(0, 0).Search("Cell");
aSearch[1].SetBold(true);