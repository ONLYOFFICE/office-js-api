# GetAddress

Returns the range address.

## Syntax

```javascript
expression.GetAddress(RowAbs, ColAbs, RefStyle, External, RelativeTo);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| RowAbs | Required | boolean |  | Defines if the link to the row is absolute or not. |
| ColAbs | Required | boolean |  | Defines if the link to the column is absolute or not. |
| RefStyle | Required | string |  | The reference style. |
| External | Required | boolean |  | Defines if the range is in the current file or not. |
| RelativeTo | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The range which the current range is relative to. |

## Returns

string \| null

## Example

This example shows how to get the range address.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
let address = worksheet.GetRange("A1").GetAddress(true, true, "xlA1", false);
worksheet.GetRange("A3").SetValue("Address: ");
worksheet.GetRange("B3").SetValue(address);
```
