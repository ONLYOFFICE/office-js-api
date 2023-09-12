# SetItalic

Sets the italic property to the text character.

## Syntax

expression.SetItalic(isItalic);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isItalic | Required | Boolean | Specifies that the contents of the current run are displayed italicized. |

## Returns

[ApiTextPr](../ApiTextPr.md)

## Example

This example sets the italic property to the text character.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetItalic(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text with the font set to italicized letters using the text properties.");
builder.SaveFile("docx", "SetItalic.docx");
builder.CloseFile();
```