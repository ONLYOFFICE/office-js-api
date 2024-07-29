// This example sets the preferred width to the current table cell.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("All cells are at least 2 inches wide:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
var oTableCellPr = oTableStyle.GetTableCellPr();
oTableCellPr.SetWidth("twips", 2880);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);