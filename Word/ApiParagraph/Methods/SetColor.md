# SetColor

Sets the text color to the current paragraph in the RGB format.

## Syntax

expression.SetColor(r, g, b, isAuto?);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |
| isAuto | Optional | Boolean | If this parameter is set to "true", then r,g,b parameters will be ignored. Default value is "false". |

## Returns

[ApiParagraph](../ApiParagraph.md)

## Example

This example sets the text color to the current paragraph in the RGB format.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the font color set to orange.");
oParagraph.SetColor(255, 111, 61);
builder.SaveFile("docx", "SetColor.docx");
builder.CloseFile();
```