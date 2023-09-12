# LeftMargin

Returns or sets the size of the sheet left margin measured in points.

## Syntax

expression.LeftMargin; &#124; expression.LeftMargin = nPoints;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPoints | Required | Number | The left margin size measured in points. |

## Returns

Number

## Example

This example sets the left margin of the sheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.LeftMargin = 20.8;
var nLeftMargin = oWorksheet.LeftMargin;
oWorksheet.GetRange("A1").SetValue("Left margin: " + nLeftMargin + " mm");
builder.SaveFile("xlsx", "LeftMargin.xlsx");
builder.CloseFile();
```