# SetBold

Sets the bold property to the text characters in the current cell or cell range.

## Syntax

expression.SetBold(isBold);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | Required | boolean |  | Specifies that the contents of the current cell / cell range are displayed bold. |

## Returns

This method doesn't return any data.

## Example

This example sets the bold property to the text characters in the current cell or cell range.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("Bold text");
oWorksheet.GetRange("A2").SetBold(true);
oWorksheet.GetRange("A3").SetValue("Normal text");
```
