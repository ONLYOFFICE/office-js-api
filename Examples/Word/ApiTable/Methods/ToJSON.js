// This example converts the table object into the JSON object.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTable = Api.CreateTable(3, 3);
var json = oTable.ToJSON(false, true);
var oTableFromJSON = Api.FromJSON(json);
oTableFromJSON.SetTableBorderTop("single", 32, 0, 51, 51, 51);
oTableFromJSON.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
oTableFromJSON.SetTableBorderLeft("single", 32, 0, 51, 51, 51);
oTableFromJSON.SetTableBorderRight("single", 32, 0, 51, 51, 51);
oTableFromJSON.SetTableBorderInsideV("single", 32, 0, 255, 111, 6);
oTableFromJSON.SetTableBorderInsideH("single", 32, 0, 255, 111, 6);
oTableFromJSON.SetWidth("percent", 100);
oDocument.Push(oTableFromJSON);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();