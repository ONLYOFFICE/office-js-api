# SetLeftMargin

Sets the left margin of the sheet.

## Syntax

expression.SetLeftMargin(nPoints);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPoints | Required | Number | The left margin size measured in points. |

## Returns

This method doesn't return any data.

## Example

This example sets the left margin of the sheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetLeftMargin(20.8);
var nLeftMargin = oWorksheet.GetLeftMargin();
oWorksheet.GetRange("A1").SetValue("Left margin: " + nLeftMargin + " mm");
builder.SaveFile("xlsx", "SetLeftMargin.xlsx");
builder.CloseFile();
```