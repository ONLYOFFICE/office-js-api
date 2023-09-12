# SetColor

Sets the text color to the current text run in the RGB format.

## Syntax

expression.SetColor(r, g, b, isAuto?);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |
| isAuto | Optional | Boolean | If this parameter is set to "true", then r,g,b parameters will be ignored. Default values is "false". |

## Returns

[ApiTextPr](../ApiTextPr.md)

## Example

This example sets the text color for the current text run in the RGB format.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetColor(255, 111, 61, false);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text with the color set to orange using the text properties.");
builder.SaveFile("docx", "SetColor.docx");
builder.CloseFile();
```