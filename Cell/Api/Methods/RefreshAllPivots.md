# RefreshAllPivots

Refreshes all pivot tables.

## Syntax

```javascript
expression.RefreshAllPivots();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example how to refresh all pivot tables in the active workbook.

```javascript editor-xlsx
// How to refresh all pivot tables in a worksheet.

// Refresh all values from the pivot table using a method.

var oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange('B1').SetValue('Region');
oWorksheet.GetRange('C1').SetValue('Price');
oWorksheet.GetRange('B2').SetValue('East');
oWorksheet.GetRange('B3').SetValue('West');
oWorksheet.GetRange('C2').SetValue(42.5);
oWorksheet.GetRange('C3').SetValue(35.2);

var dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
var pivotTable = Api.InsertPivotNewWorksheet(dataRef);

Api.GetPivotByName(pivotTable.GetName()).AddFields({
	rows: 'Region',
});

Api.GetPivotByName(pivotTable.GetName()).AddDataField('Price');

Api.RefreshAllPivots();

```
