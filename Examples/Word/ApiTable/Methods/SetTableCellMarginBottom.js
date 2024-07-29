// This example sSpecifies an amount of space which will be left between the bottom extent of the cell contents and the border of all table cells within the parent.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var oCell = oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text to show that the bottom cell margin is 36 points.");
oTable.SetTableCellMarginBottom(720);
oDocument.Push(oTable);