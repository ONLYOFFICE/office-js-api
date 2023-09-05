# SetRightMargin

Sets the right margin of the sheet.

## Syntax

expression.SetRightMargin(nPoints);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPoints | Required | Number | The right margin size measured in points. |

## Returns

This method doesn't return any data.

## Example

This example sets the right margin of the sheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetRightMargin(20.8);
var nRightMargin = oWorksheet.GetRightMargin();
oWorksheet.GetRange("A1").SetValue("Right margin: " + nRightMargin + " mm");
builder.SaveFile("xlsx", "SetRightMargin.xlsx");
builder.CloseFile();
```