// This example sSpecifies an amount of space which will be left between the top extent of the cell contents and the top border of all table cells within the parent table.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var oCell = oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text to show that the top cell margin is 36 points.");
oTable.SetTableCellMarginTop(720);
oDocument.Push(oTable);