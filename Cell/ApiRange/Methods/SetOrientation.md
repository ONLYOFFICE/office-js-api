# SetOrientation

Sets an angle to the current cell range.

## Syntax

```javascript
expression.SetOrientation(angle);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| angle | Required | [Angle](../../Enumeration/Angle.md) |  | Specifies the range angle. |

## Returns

This method doesn't return any data.

## Example

This example sets an angle to the cell range.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
var oRange = oWorksheet.GetRange("A1:B1");
oRange.SetOrientation("xlUpward");
```
