# SetFontSize

Sets the font size to the characters of the current paragraph.

## Syntax

expression.SetFontSize(nSize);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nSize | Required | [hps](../../../Enumerations/hps.md) | The text size value measured in half-points (1/144 of an inch). |

## Returns

[ApiParagraph](../ApiParagraph.md)

## Example

This example sets the font size to the characters of the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample paragraph with the font size set to 24 points.");
oParagraph.SetFontSize(48);
builder.SaveFile("docx", "SetFontSize.docx");
builder.CloseFile();
```