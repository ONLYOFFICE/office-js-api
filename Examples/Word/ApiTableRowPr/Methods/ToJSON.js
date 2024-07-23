// This example converts the ApiTableRowPr object into the JSON object.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableRowPr = oTableStyle.GetTableRowPr();
oTableRowPr.SetHeight("atLeast", 720);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var json = oTableRowPr.ToJSON();
var oTableRowPrFromJSON = Api.FromJSON(json);
var sType = oTableRowPrFromJSON.GetClassType();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Class type = " + sType);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();