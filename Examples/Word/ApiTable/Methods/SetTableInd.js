// This example specifies the indentation which will be added before the leading edge of the table in the document.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We set the indent of 1 inch for the table:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 50);
oTable.SetStyle(oTableStyle);
oTable.SetTableInd(1440);
oDocument.Push(oTable);