# RightMargin

Returns or sets the size of the sheet right margin measured in points.

## Syntax

expression.RightMargin; &#124; expression.RightMargin = nPoints;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPoints | Required | Number | The right margin size measured in points. |

## Returns

Number

## Example

This example sets the right margin of the sheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.RightMargin = 20.8;
var nRightMargin = oWorksheet.RightMargin;
oWorksheet.GetRange("A1").SetValue("Right margin: " + nRightMargin + " mm");
builder.SaveFile("xlsx", "RightMargin.xlsx");
builder.CloseFile();
```