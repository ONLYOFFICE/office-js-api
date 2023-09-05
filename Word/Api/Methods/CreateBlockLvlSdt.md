# CreateBlockLvlSdt

Creates a new block level container.

## Syntax

expression.CreateBlockLvlSdt();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## Example

This example shows how to add a block level conteiner into the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdt);
builder.SaveFile("docx", "CreateBlockLvlSdt.docx");
builder.CloseFile();
```