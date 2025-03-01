# SetSubtotals

Sets an object that represents all subtotals.

## Syntax

```javascript
expression.SetSubtotals(subtotals);
```

`expression` - A variable that represents a [ApiPivotDataField](../ApiPivotDataField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| subtotals | Required | [PivotFieldSubtotals](../../Enumeration/PivotFieldSubtotals.md) |  | An object that represents all subtotals or some of them. |

## Returns

This method doesn't return any data.

## Example

This example shows how to set subtotals of a pivot field.

```javascript editor-xlsx
// How to change a pivot field subtotals.

// Create a pivot table, add data to it then set subtotals of a specified pivot.

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

pivotTable.AddDataField('Price');

var pivotWorksheet = Api.GetActiveSheet();
var pivotField = pivotTable.GetPivotFields('Region');

pivotField.SetSubtotals({
	Count: true,
});

var subtotals = pivotField.GetSubtotals();
pivotWorksheet.GetRange('A11').SetValue('Region subtotals');
let k = 12;
for (var i in subtotals) {
	pivotWorksheet.GetRangeByNumber(k, 0).SetValue(i);
	pivotWorksheet.GetRangeByNumber(k++, 1).SetValue(subtotals[i]);
}

```
