# ToJSON

Converts the ApiTablePr object into the JSON object.

## Syntax

expression.ToJSON();

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

JSON

## Example

This example converts the table object into the JSON object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
var json = oTablePr.ToJSON();
var oTablePrFromJSON = Api.FromJSON(json);
var sType = oTablePrFromJSON.GetClassType();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Class type = " + sType);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();
```