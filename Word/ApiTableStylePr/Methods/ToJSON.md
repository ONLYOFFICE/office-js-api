# ToJSON

Converts the ApiTableStylePr object into the JSON object.

## Syntax

expression.ToJSON();

`expression` - A variable that represents a [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

JSON

## Example

This example converts the ApiTableStylePr object into the JSON object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableStylePr = oTableStyle.GetConditionalTableStyle();
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var json = oTableStylePr.ToJSON();
var oTableStylePrFromJSON = Api.FromJSON(json);
var sType = oTableStylePrFromJSON.GetClassType();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Class type = " + sType);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();
```