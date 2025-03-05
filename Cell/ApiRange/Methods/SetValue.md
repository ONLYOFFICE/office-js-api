# SetValue

Sets a value to the current cell or cell range.

## Syntax

```javascript
expression.SetValue(data);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | Required | string \| boolean \| number \| (string \| boolean \| number)[] \| (string \| boolean \| number)[][] |  | The general value for the cell or cell range. |

## Returns

boolean

## Example

This example sets a value to cells.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("B2").SetValue("2");
worksheet.GetRange("A3").SetValue("2x2=");
worksheet.GetRange("B3").SetValue("=B1*B2");
```
