# ToJSON

Converts the ApiTableCellPr object into the JSON object.

## Syntax

expression.ToJSON();

`expression` - A variable that represents a [ApiTableCellPr](../ApiTableCellPr.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

JSON

## Example

This example converts the ApiTableCellPr object into the JSON object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableCellPr = oTableStyle.GetTableCellPr();
oTableCellPr.SetCellBorderBottom("single", 32, 0, 51, 51, 51);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var json = oTableCellPr.ToJSON();
var oTableCellPrFromJSON = Api.FromJSON(json);
var sType = oTableCellPrFromJSON.GetClassType();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Class type = " + sType);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();
```