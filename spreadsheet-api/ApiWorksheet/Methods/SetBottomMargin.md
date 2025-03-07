# SetBottomMargin

Sets the bottom margin of the sheet.

## Syntax

```javascript
expression.SetBottomMargin(nPoints);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPoints | Required | number |  | The bottom margin size measured in points. |

## Returns

This method doesn't return any data.

## Example

This example sets the bottom margin of the sheet.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.SetBottomMargin(25.1);
let bottomMargin = worksheet.GetBottomMargin();
worksheet.GetRange("A1").SetValue("Bottom margin: " + bottomMargin + " mm");
```
