# SetTopMargin

Sets the top margin of the sheet.

## Syntax

expression.SetTopMargin(nPoints);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPoints | Required | number |  | The top margin size measured in points. |

## Returns

This method doesn't return any data.

## Example

This example sets the top margin of the sheet.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetTopMargin(25.1);
var nTopMargin = oWorksheet.GetTopMargin();
oWorksheet.GetRange("A1").SetValue("Top margin: " + nTopMargin + " mm");
```
