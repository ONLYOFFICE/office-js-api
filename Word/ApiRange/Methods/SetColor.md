# SetColor

Sets the text color to the current text Range in the RGB format.

## Syntax

expression.SetColor(r, g, b, isAuto?);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |
| isAuto | Optional | Boolean | If this parameter is set to "true", then r,g,b parameters will be ignored. Default value is "false". |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if can't apply color)

## Example

This example sets the text color to the text Range in the RGB format.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetColor(255, 111, 61);
builder.SaveFile("docx", "SetColor.docx");
builder.CloseFile();
```