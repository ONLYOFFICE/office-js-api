// This example specifies an amount of space which will be left between the bottom extent of the cell contents and the border of a specific table cell within a table.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
var oCell = oTable.GetRow(0).GetCell(0);
oCell.GetContent().GetElement(0).AddText("This is just a sample text to show that the bottom margin for all the table cells is 36 points.");
oTable.SetWidth("percent", 100);
var oTableCellPr = oTableStyle.GetTableCellPr();
oTableCellPr.SetCellMarginBottom(720);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);