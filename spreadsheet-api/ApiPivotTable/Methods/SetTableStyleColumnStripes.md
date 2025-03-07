# SetTableStyleColumnStripes

Sets the setting which specifies whether the background color alternation for odd and even columns will be enabled for the pivot table.

## Syntax

```javascript
expression.SetTableStyleColumnStripes(show);
```

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| show | Required | boolean |  | Specifies whether the background color alternation for odd and even columns will be enabled for the pivot table. |

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
	columns: ['Region', 'Style'],
});

pivotTable.AddDataField('Price');
pivotTable.SetTableStyleColumnStripes(true);

let pivotWorksheet = Api.GetActiveSheet();

pivotWorksheet.GetRange('A12').SetValue('Table Style Column Stripes');
pivotWorksheet.GetRange('B12').SetValue(pivotTable.GetTableStyleColumnStripes());

```
