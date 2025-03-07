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
let worksheet = Api.GetActiveSheet();
worksheet.SetRightMargin(20.8);
let rightMargin = worksheet.GetRightMargin();
worksheet.GetRange("A1").SetValue("Right margin: " + rightMargin + " mm");
```
