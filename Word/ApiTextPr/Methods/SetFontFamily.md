# SetFontFamily

Sets all 4 font slots with the specified font family.

## Syntax

expression.SetFontFamily(sFontFamily);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sFontFamily | Required | String | The font family or families used for the current text run. |

## Returns

[ApiTextPr](../ApiTextPr.md)

## Example

This example sets all 4 font slots with the specified font family.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetFontFamily("Comic Sans MS");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text with the font family set to 'Comic Sans MS' using the text properties.");
builder.SaveFile("docx", "SetFontFamily.docx");
builder.CloseFile();
```