# GetDisplayFieldsInReportFilterArea

Returns the pivot table display fields in the report filter area settings.

## Syntax

```javascript
expression.GetDisplayFieldsInReportFilterArea();
```

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[PivotTableFilterAreaInfo](../../Enumeration/PivotTableFilterAreaInfo.md)

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

pivotTable.AddDataField('Price');

pivotTable.AddFields({
	pages: ['Style', 'Region']
});

const info = pivotTable.GetDisplayFieldsInReportFilterArea();

let pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange('A9').SetValue('Type');
pivotWorksheet.GetRange('B9').SetValue(info.Type);

pivotWorksheet.GetRange('A10').SetValue('ReportFilterFields');
pivotWorksheet.GetRange('B10').SetValue(info.ReportFilterFields);
```
