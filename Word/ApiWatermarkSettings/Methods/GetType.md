# GetType

Returns the type of the watermark in the document.

## Syntax

expression.GetType();

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example gets a watermark type and pastes it into the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oWatermarkSettings = oDocument.GetWatermarkSettings();
var sClassType = oWatermarkSettings.GetType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Watermark Type = " + sClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetType.docx");
builder.CloseFile();
```