# GetClassType

Returns a type of the ApiWatermarkSettings class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example gets a class type and pastes it into the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oWatermarkSettings = oDocument.GetWatermarkSettings();
var sClassType = oWatermarkSettings.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class Type = " + sClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();
```