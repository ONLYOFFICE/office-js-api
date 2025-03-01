# GetParent

Returns a parent of the pivot item.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiPivotItem](../ApiPivotItem.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiPivotField](../../ApiPivotField/ApiPivotField.md)

## Example

This example shows how to get a parent of a pivot item.

```javascript editor-xlsx
// How to get a pivot item parent.

// Create a pivot table, add data to it then get a parent of a specified pivot item.

var oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange('B1').SetValue('Region');
oWorksheet.GetRange('C1').SetValue('Style');
oWorksheet.GetRange('D1').SetValue('Price');

oWorksheet.GetRange('B2').SetValue('East');
oWorksheet.GetRange('B3').SetValue('West');
oWorksheet.GetRange('B4').SetValue('East');
oWorksheet.GetRange('B5').SetValue('West');

oWorksheet.GetRange('C2').SetValue('Fancy');
oWorksheet.GetRange('C3').SetValue('Fancy');
oWorksheet.GetRange('C4').SetValue('Tee');
oWorksheet.GetRange('C5').SetValue('Tee');

oWorksheet.GetRange('D2').SetValue(42.5);
oWorksheet.GetRange('D3').SetValue(35.2);
oWorksheet.GetRange('D4').SetValue(12.3);
oWorksheet.GetRange('D5').SetValue(24.8);

var dataRef = Api.GetRange("'Sheet1'!$B$1:$D$5");
var pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.AddFields({
	pages: ['Style'],
	rows: 'Region',
});

pivotTable.AddDataField('Style');

var pivotWorksheet = Api.GetActiveSheet();
var pivotField = pivotTable.GetPivotFields('Style');
var pivotItem = pivotField.GetPivotItems()[0];

pivotWorksheet.GetRange('A15').SetValue(pivotItem.GetName() + ' parent:');
pivotWorksheet.GetRange('B15').SetValue(pivotItem.GetParent().GetName());

```
