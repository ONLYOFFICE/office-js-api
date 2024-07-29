// This example specifies that the current table row will be repeated at the top of each new page wherever this table is displayed.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and set all table rows as the table headers:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetTableLook(true, true, true, true, false, false);
var oTableRowPr = oTableStyle.GetTableRowPr();
oTableRowPr.SetTableHeader(true);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);