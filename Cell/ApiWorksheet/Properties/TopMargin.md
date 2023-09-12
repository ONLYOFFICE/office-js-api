# TopMargin

Returns or sets the size of the sheet top margin measured in points.

## Syntax

expression.TopMargin; &#124; expression.TopMargin = nPoints;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPoints | Required | Number | The top margin size measured in points. |

## Returns

Number

## Example

This example sets the top margin of the sheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.TopMargin = 25.1;
var nTopMargin = oWorksheet.TopMargin;
oWorksheet.GetRange("A1").SetValue("Top margin: " + nTopMargin + " mm");
builder.SaveFile("xlsx", "TopMargin.xlsx");
builder.CloseFile();
```