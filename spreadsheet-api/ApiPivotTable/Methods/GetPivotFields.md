# GetPivotFields

Returns a collection that represents either a single pivot table field\
or a collection of both the visible and hidden fields in the pivot table report.

## Syntax

```javascript
expression.GetPivotFields(field);
```

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| field | Optional | string \| number |  | The name or index of the field to be returned. |

## Returns

[ApiPivotField](../../ApiPivotField/ApiPivotField.md)[] \| [ApiPivotField](../../ApiPivotField/ApiPivotField.md) \| [ApiPivotDataField](../../ApiPivotDataField/ApiPivotDataField.md) \| null

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
pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange('A9').SetValue('Pivot Fields');

let pivotFields = pivotTable.GetPivotFields();
for (let i = 0; i < pivotFields.length; i += 1) {
	let cell = pivotWorksheet.GetRangeByNumber(8 + i, 1);
	cell.SetValue(pivotFields[i].GetName());
}

```
