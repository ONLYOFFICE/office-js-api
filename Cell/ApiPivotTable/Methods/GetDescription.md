# GetDescription

Returns the pivot table description.

## Syntax

```javascript
expression.GetDescription();
```

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get description of a pivot table.

```javascript editor-xlsx
// How to get pivot table description.

// Create a pivot table, add data to it then get its description.

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
	rows: 'Region',
	columns: 'Style',
});

pivotTable.AddDataField('Price');

var pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange('A9').SetValue('Default description');
pivotWorksheet.GetRange('B9').SetValue(pivotTable.GetDescription());

pivotWorksheet.GetRange('A11').SetValue('My description');
pivotTable.SetDescription('Awesome description');
pivotWorksheet.GetRange('B11').SetValue(pivotTable.GetDescription());
```
