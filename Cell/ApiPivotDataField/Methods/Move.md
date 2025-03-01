# Move

Moves the current pivot field inside the category.

## Syntax

```javascript
expression.Move(type, index);
```

`expression` - A variable that represents a [ApiPivotDataField](../ApiPivotDataField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [PivotMoveFieldType](../../Enumeration/PivotMoveFieldType.md) \| [PivotFieldOrientationType](../../Enumeration/PivotFieldOrientationType.md) |  | The direction to move the pivot table field, or the pivot field orientation type. |
| index | Required | number \| undefined |  | The field index in a new category. |

## Returns

This method doesn't return any data.

## Example

This example shows how to move a pivot field.

```javascript editor-xlsx
// How to change the position a pivot field.

// Create a pivot table, add data to it then move a specified pivot field by columns.

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

var pivotWorksheet = Api.GetActiveSheet();
pivotTable.AddDataField('Price');
var pivotField = pivotTable.GetPivotFields('Region');
pivotWorksheet.GetRange('A10').SetValue('The Region field will be moved soon');

setTimeout(function () {
	pivotField.Move('Columns');
}, 5000);

```
