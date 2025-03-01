# GetRowFields

Returns a collection that is currently displayed as row fields in the pivot table.

## Syntax

```javascript
expression.GetRowFields(field);
```

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| field | Required | number \| string \| undefined |  | The name or index of the field to be returned. |

## Returns

[ApiPivotField[]](../../ApiPivotField/ApiPivotField.md)

## Example

This example shows how to get row fields of a pivot table.

```javascript editor-xlsx
// How to get table row fields as an array of fields.

// Create a pivot table, add data to it then get its row fields.

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
pivotWorksheet.GetRange('A9').SetValue('Row Fields');

var rowFields = pivotTable.GetRowFields();
for (var i = 0; i < rowFields.length; i += 1) {
	var cell = pivotWorksheet.GetRangeByNumber(8 + i, 1);
	cell.SetValue(rowFields[i].GetName());
}

```
