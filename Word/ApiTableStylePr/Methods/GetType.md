# GetType

Returns a type of the current table conditional style.

## Syntax

expression.GetType();

`expression` - A variable that represents a [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[TableStyleOverrideType](../../../Enumerations/TableStyleOverrideType.md)

## Example

This example shows how to get a type of the current table conditional style.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.GetStyle("Bordered");
oTableStyle.SetName("My Custom Style");
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
var oTableStylePr = oTableStyle.GetConditionalTableStyle("topLeftCell");
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var sTableStylePrType = oTableStylePr.GetType();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Style type = " + sTableStylePrType);
builder.SaveFile("docx", "GetType.docx");
builder.CloseFile();
```