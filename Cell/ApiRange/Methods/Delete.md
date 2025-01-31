# Delete

Deletes the Range object.

## Syntax

```javascript
expression.Delete(shift);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shift | Required | [DeleteShiftDirection](../../Enumeration/DeleteShiftDirection.md) |  | Specifies how to shift cells to replace the deleted cells. |

## Returns

This method doesn't return any data.

## Example

This example deletes the Range object.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B4").SetValue("1");
oWorksheet.GetRange("C4").SetValue("2");
oWorksheet.GetRange("D4").SetValue("3");
oWorksheet.GetRange("C5").SetValue("5");
var oRange = oWorksheet.GetRange("C4");
oRange.Delete("up");
```
