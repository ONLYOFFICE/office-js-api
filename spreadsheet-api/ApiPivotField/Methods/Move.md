# Move

Moves the current pivot field inside the category.

## Syntax

```javascript
expression.Move(type, index);
```

`expression` - A variable that represents a [ApiPivotField](../ApiPivotField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [PivotMoveFieldType](../../Enumeration/PivotMoveFieldType.md) \| [PivotFieldOrientationType](../../Enumeration/PivotFieldOrientationType.md) |  | The direction to move the pivot table field,\ or the pivot field orientation type. |
| index | Required | number \| undefined |  | The field index in a new category. |

## Returns

This method doesn't return any data.

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Style');
worksheet.GetRange('D1').SetValue('Price');

worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('B4').SetValue('East');
worksheet.GetRange('B5').SetValue('West');

worksheet.GetRange('C2').SetValue('Fancy');
worksheet.GetRange('C3').SetValue('Fancy');
worksheet.GetRange('C4').SetValue('Tee');
worksheet.GetRange('C5').SetValue('Tee');

worksheet.GetRange('D2').SetValue(42.5);
worksheet.GetRange('D3').SetValue(35.2);
worksheet.GetRange('D4').SetValue(12.3);
worksheet.GetRange('D5').SetValue(24.8);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$D$5");
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.AddFields({
	rows: 'Region',
	columns: 'Style',
});

let pivotWorksheet = Api.GetActiveSheet();
pivotTable.AddDataField('Price');
let pivotField = pivotTable.GetPivotFields('Region');
pivotWorksheet.GetRange('A10').SetValue('The Region field will be moved soon');

setTimeout(function () {
	pivotField.Move('Columns');
}, 5000);

```
