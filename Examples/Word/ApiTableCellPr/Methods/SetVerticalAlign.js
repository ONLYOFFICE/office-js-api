// This example specifies the vertical alignment for the text contents within the table cell.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableRow = oTable.GetRow(0);
oTableRow.SetHeight("atLeast", 1440);
var oTableCellPr = oTableStyle.GetTableCellPr();
oTableCellPr.SetVerticalAlign("bottom");
var oCell = oTable.GetRow(0).GetCell(0);
var oParagraph = oCell.GetContent().GetElement(0);
oParagraph.AddText("Align bottom");
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);