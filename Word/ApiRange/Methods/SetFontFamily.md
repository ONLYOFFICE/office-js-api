# SetFontFamily

Sets all 4 font slots with the specified font family.

## Syntax

expression.SetFontFamily(sFontFamily);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sFontFamily | Required | String | The font family or families used for the current paragraph. |

## Returns

[ApiRange](../ApiRange.md) &#124; null
<br> Returns null if can't set font family.

## Example

This example sets all 4 font slots with the specified font family.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text. ");
oParagraph.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
var oRange = oDocument.GetRange(22, 71);
oRange.SetFontFamily("Consolas");
builder.SaveFile("docx", "SetFontFamily.docx");
builder.CloseFile();
```