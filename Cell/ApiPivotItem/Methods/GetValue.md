# GetValue

Returns a name of the specified item in the pivot table field.

## Syntax

```javascript
expression.GetValue();
```

`expression` - A variable that represents a [ApiPivotItem](../ApiPivotItem.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get a value of a pivot item.

```javascript editor-xlsx
// How to get a pivot item value.

// Create a pivot table, add data to it then get a value of a specified pivot item.

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
	columns: ['Style'],
	rows: 'Region',
});

pivotTable.AddDataField('Style');

var pivotWorksheet = Api.GetActiveSheet();
var pivotField = pivotTable.GetPivotFields('Style');
var pivotItems = pivotField.GetPivotItems();
pivotWorksheet.GetRangeByNumber(15, 0).SetValue('Style item values')

for (var i = 0; i < pivotItems.length; i += 1) {
    pivotWorksheet.GetRangeByNumber(15 + i, 1).SetValue(pivotItems[i].GetValue());
}

```
