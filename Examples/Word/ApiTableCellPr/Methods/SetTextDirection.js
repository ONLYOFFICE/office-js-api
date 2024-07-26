// This example specifies the direction of the text flow for this table cell.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableRow = oTable.GetRow(0);
oTableRow.SetHeight("atLeast", 1440);
var oTableCellPr = oTableStyle.GetTableCellPr();
oTableCellPr.SetTextDirection("btlr");
var oCell = oTable.GetRow(0).GetCell(0);
var oParagraph = oCell.GetContent().GetElement(0);
oParagraph.AddText("btlr");
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTextDirection.docx");
builder.CloseFile();