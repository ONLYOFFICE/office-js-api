// This example gets a class type and inserts it into the document.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var sClassType = oTable.GetClassType();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Class Type = " + sClassType);