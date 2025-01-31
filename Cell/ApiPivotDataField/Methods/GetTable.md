# GetTable

Returns the ApiPivotTable object which represents the pivot table for the current field.

## Syntax

```javascript
expression.GetTable();
```

`expression` - A variable that represents a [ApiPivotDataField](../ApiPivotDataField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiPivotTable](../../ApiPivotTable/ApiPivotTable.md)

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

pivotTable.AddDataField('Price');

var pivotWorksheet = Api.GetActiveSheet();
var pivotField = pivotTable.GetPivotFields('Style');

pivotField.GetTable().AddDataField('Region');
```
