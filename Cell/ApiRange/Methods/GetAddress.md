# GetAddress

Returns the range address.

## Syntax

expression.GetAddress(RowAbs, ColAbs, RefStyle, External, RelativeTo);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| RowAbs | Required | boolean |  | Defines if the link to the row is absolute or not. |
| ColAbs | Required | boolean |  | Defines if the link to the column is absolute or not. |
| RefStyle | Required | string |  | The reference style. |
| External | Required | boolean |  | Defines if the range is in the current file or not. |
| RelativeTo | Required | range |  | The range which the current range is relative to. |

## Returns

string | null

## Example

This example shows how to get the range address.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
var sAddress = oWorksheet.GetRange("A1").GetAddress(true, true, "xlA1", false);
oWorksheet.GetRange("A3").SetValue("Address: ");
oWorksheet.GetRange("B3").SetValue(sAddress);
```
