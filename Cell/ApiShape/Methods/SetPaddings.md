# SetPaddings

Sets the text paddings to the current shape.

## Syntax

expression.SetPaddings(nLeft, nTop, nRight, nBottom);

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nLeft | Required | [EMU](../../../Enumerations/Emu.md) | Left padding. |
| nTop | Required | [EMU](../../../Enumerations/Emu.md) | Top padding. |
| nRight | Required | [EMU](../../../Enumerations/Emu.md) | Right padding. |
| nBottom | Required | [EMU](../../../Enumerations/Emu.md) | Bottom padding. |

## Returns

This method doesn't return any data.

## Example

This example sets the text paddings to the current shape.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("rect", 3212465, 963295, oFill, oStroke, 0, 3212465, 0, 963295);
oShape.SetPaddings(20 * 36000, 5 * 36000, 5 * 36000, 3 * 36000);
builder.SaveFile("xlsx", "SetPaddings.xlsx");
builder.CloseFile();
```