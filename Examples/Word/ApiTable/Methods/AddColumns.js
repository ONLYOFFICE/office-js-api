// This example adds the new columns to the table.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oCell = oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Two new columns were added after this cell.");
oTable.AddColumns(oCell, 2, false);