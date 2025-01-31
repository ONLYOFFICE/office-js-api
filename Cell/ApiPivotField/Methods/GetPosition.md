# GetPosition

Returns a value that represents the position of the field (first, second, third, and so on)
among all the fields in its orientation (Rows, Columns, Pages, Data).

## Syntax

```javascript
expression.GetPosition();
```

`expression` - A variable that represents a [ApiPivotField](../ApiPivotField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example



```javascript
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
	rows: ['Region', 'Style'],
});

var pivotWorksheet = Api.GetActiveSheet();
pivotTable.AddDataField('Price');
var pivotField = pivotTable.GetPivotFields('Style');
pivotWorksheet.GetRange('A12').SetValue('Style field position');
pivotWorksheet.GetRange('B12').SetValue(pivotField.GetPosition());


```
