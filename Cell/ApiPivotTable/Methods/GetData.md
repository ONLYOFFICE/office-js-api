# GetData

Returns the value for the data field in a pivot table.

## Syntax

```javascript
expression.GetData(items);
```

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| items | Required | string[] |  | Describes a single cell in the pivot table report. For example, "'Estimated Costs' Tables May", which shows the estimated costs for tables in May (Data field = Costs, Product = Tables, Month = May). |

## Returns

number \| null

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

let value = pivotTable.GetData(['East', 'Tee']);
pivotWorksheet.GetRange('A9').SetValue('Value of East Tee Price:');
pivotWorksheet.GetRange('B9').SetValue(value);

```
