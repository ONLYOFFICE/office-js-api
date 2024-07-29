// This example sets the text properties to the current row.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var oRow = oTable.GetRow(0);
var oTextPr = Api.CreateTextPr();
oTextPr.SetBold(true);
oRow.GetCell(0).GetContent().GetElement(0).AddText("First row");
oRow.SetTextPr(oTextPr);
oDocument.Push(oTable);