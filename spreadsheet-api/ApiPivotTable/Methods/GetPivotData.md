# GetPivotData

Returns a Range object with information about a data item in the pivot table report.

## Syntax

```javascript
expression.GetPivotData(dataField, fieldItemsArray);
```

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| dataField | Optional | string |  | The name of the field containing the data for the PivotTable. |
| fieldItemsArray | Optional | string[] |  | An array of field items from the pivot table. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

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
let dataField = pivotTable.AddDataField('Price');
dataField.SetName('Regional prices');
pivotTable.AddFields({
	rows: 'Region',
	columns: 'Style',
});

let pivotWorksheet = Api.GetActiveSheet();

pivotWorksheet.GetRange('A9').SetValue('East Total:');

let range = pivotTable.GetPivotData('Price', ['Region', 'East']);
let value = range.GetValue();
pivotWorksheet.GetRange('B9').SetValue(value);

```
