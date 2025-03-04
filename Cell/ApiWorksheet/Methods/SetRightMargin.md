# SetRightMargin

Sets the right margin of the sheet.

## Syntax

```javascript
expression.SetRightMargin(nPoints);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPoints | Required | number |  | The right margin size measured in points. |

## Returns

This method doesn't return any data.

## Example

This example sets the right margin of the sheet.

```javascript editor-xlsx
// How to set margin of the right side.

// Resize the right margin of the sheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetRightMargin(20.8);
var nRightMargin = oWorksheet.GetRightMargin();
oWorksheet.GetRange("A1").SetValue("Right margin: " + nRightMargin + " mm");
```
