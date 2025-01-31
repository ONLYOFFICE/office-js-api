# GetRows

Returns a Range object that represents the rows in the specified range. If the specified row is outside the Range object, a new Range will be returned that represents the cells between the columns of the original range in the specified row.

## Syntax

```javascript
expression.GetRows(nRow);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRow | Required | number |  | The row number (starts counting from 1, the 0 value returns an error). |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) | null

## Example

This example shows how to get a Range object that represents the rows in the specified range.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("1:3");
for (var i=1; i <= 3; i++) {
	var oRows = oRange.GetRows(i);    
	oRows.SetValue(i);
}
```
