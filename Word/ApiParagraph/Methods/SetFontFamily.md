# SetFontFamily

Sets all 4 font slots with the specified font family.

## Syntax

expression.SetFontFamily(sFontFamily);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sFontFamily | Required | String | The font family or families used for the current paragraph. |

## Returns

[ApiParagraph](../ApiParagraph.md) &#124; null

## Example

This example sets all 4 font slots with the specified font family.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the font family set to 'Consolas'.");
oParagraph.SetFontFamily("Consolas");
builder.SaveFile("docx", "SetFontFamily.docx");
builder.CloseFile();
```