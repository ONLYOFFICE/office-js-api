# FillColor

Returns or sets the background color of the current cell range.

## Syntax

expression.FillColor; &#124; expression.FillColor = oColor;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oColor | Required | [ApiColor](../../ApiColor/ApiColor.md) | The color object which specifies the color to be set to the background in the cell / cell range. |

## Returns

[ApiColor](../../ApiColor/ApiColor.md) &#124; String (return 'No Fill' when the color to the background in the cell / cell range is null)

## Example

This example sets the background color to the cell range with the previously created color object.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetColumnWidth(0, 50);
oWorksheet.GetRange("A2").FillColor = Api.CreateColorFromRGB(255, 213, 191);
oWorksheet.GetRange("A2").SetValue("This is the cell with a color set to its background");
oWorksheet.GetRange("A4").SetValue("This is the cell with a default background color");
builder.SaveFile("xlsx", "FillColor.xlsx");
builder.CloseFile();
```