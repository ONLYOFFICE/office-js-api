# CreateColorFromRGB

Creates an RGB color setting the appropriate values for the red, green and blue color components.

## Syntax

expression.CreateColorFromRGB(r, g, b);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

This example creates an RGB color setting the appropriate values for the red, green and blue color components.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oColor = Api.CreateColorFromRGB(255, 111, 61);
oWorksheet.GetRange("A2").SetValue("Text with color");
oWorksheet.GetRange("A2").SetFontColor(oColor);
builder.SaveFile("xlsx", "CreateColorFromRGB.xlsx");
builder.CloseFile();
```