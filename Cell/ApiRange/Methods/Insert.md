# Insert

Inserts a cell or a range of cells into the worksheet or macro sheet and shifts other cells away to make space.

## Syntax

expression.Insert(shift);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shift | Required | string |  | Specifies which way to shift the cells ("right", "down"). |

## Returns

This method doesn't return any data.

## Example

This example inserts a cell or a range of cells into the worksheet or macro sheet and shifts other cells away to make space.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B4").SetValue("1");
oWorksheet.GetRange("C4").SetValue("2");
oWorksheet.GetRange("D4").SetValue("3");
oWorksheet.GetRange("C5").SetValue("5");
var oRange = oWorksheet.GetRange("C4");
oRange.Insert("down");
```
