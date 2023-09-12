# BottomMargin

Returns or sets the size of the sheet bottom margin measured in points.

## Syntax

expression.BottomMargin; &#124; expression.BottomMargin = nPoints;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPoints | Required | Number | The bottom margin size measured in points. |

## Returns

Number

## Example

This example sets the bottom margin of the sheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.BottomMargin = 25.1;
var nBottomMargin = oWorksheet.BottomMargin;
oWorksheet.GetRange("A1").SetValue("Bottom margin: " + nBottomMargin  + " mm");
builder.SaveFile("xlsx", "BottomMargin.xlsx");
builder.CloseFile();
```