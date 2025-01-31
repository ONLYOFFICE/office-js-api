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
| data | Required | string | bool | number | Array[] | Array[][] |  | The general value for the cell or cell range. |

## Returns

boolean

## Example

This example sets a value to cells.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("B2").SetValue("2");
oWorksheet.GetRange("A3").SetValue("2x2=");
oWorksheet.GetRange("B3").SetValue("=B1*B2");
```
