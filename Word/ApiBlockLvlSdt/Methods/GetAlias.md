# GetAlias

Returns the alias attribute for the current container.

## Syntax

expression.GetAlias();

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get the alias attribute for the container.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with alias '№1'.");
oBlockLvlSdt.SetAlias("№1");
oDocument.AddElement(0, oBlockLvlSdt);
var oAlias = oBlockLvlSdt.GetAlias();
var oParagraph = oDocument.GetElement(1);
oParagraph.AddText("Alias: " + oAlias);
builder.SaveFile("docx", "GetAlias.docx");
builder.CloseFile();
```