# GetFunction

Returns a function performed in the data field.

## Syntax

```javascript
expression.GetFunction();
```

`expression` - A variable that represents a [ApiPivotDataField](../ApiPivotDataField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[DataConsolidateFunctionType](../../Enumeration/DataConsolidateFunctionType.md)

## Example

This example shows how to get a function of a data field.

```javascript editor-xlsx
// How to get a table element function.

// Create a pivot table, add data to it then display a custom data field's function.

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

var sumDataField = pivotTable.AddDataField('Price');
var countDataField = pivotTable.AddDataField('Price');
countDataField.SetFunction('Count');

var pivotWorksheet = Api.GetActiveSheet();

pivotWorksheet.GetRange('A15').SetValue('Functions:');
pivotWorksheet.GetRange('B15').SetValue(sumDataField.GetFunction());
pivotWorksheet.GetRange('B16').SetValue(countDataField.GetFunction());
```
