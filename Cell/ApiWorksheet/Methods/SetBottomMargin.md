# SetBottomMargin

Sets the bottom margin of the sheet.

## Syntax

expression.SetBottomMargin(nPoints);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPoints | Required | Number | The bottom margin size measured in points. |

## Returns

This method doesn't return any data.

## Example

This example sets the bottom margin of the sheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetBottomMargin(25.1);
var nBottomMargin = oWorksheet.GetBottomMargin();
oWorksheet.GetRange("A1").SetValue("Bottom margin: " + nBottomMargin  + " mm");
builder.SaveFile("xlsx", "SetBottomMargin.xlsx");
builder.CloseFile();
```