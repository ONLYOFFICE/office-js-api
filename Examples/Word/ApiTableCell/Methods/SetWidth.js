// This example sets the preferred width to the current table cell.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oCell = oTable.GetRow(0).GetCell(0);
oCell.SetWidth("twips", 2880);
var oParagraph = oCell.GetContent().GetElement(0);
oParagraph.AddText("2 inches");
oCell = oTable.GetRow(0).GetCell(1);
oCell.SetWidth("twips", 1440);
oParagraph = oCell.GetContent().GetElement(0);
oParagraph.AddText("1 inch");
oCell = oTable.GetRow(0).GetCell(2);
oCell.SetWidth("twips", 4320);
oParagraph = oCell.GetContent().GetElement(0);
oParagraph.AddText("3 inches");
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);