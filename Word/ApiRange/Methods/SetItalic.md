# SetItalic

Sets the italic property to the text character.

## Syntax

expression.SetItalic(isItalic);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isItalic | Required | Boolean | Specifies that the contents of the current paragraph are displayed italicized. |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if can't apply italic)

## Example

This example sets the italic property to the text character.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetItalic(true);
builder.SaveFile("docx", "SetItalic.docx");
builder.CloseFile();
```