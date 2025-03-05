# GetPivotField

Returns the pivot field from which the data field was created.

## Syntax

```javascript
expression.GetPivotField();
```

`expression` - A variable that represents a [ApiPivotDataField](../ApiPivotDataField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiPivotField](../../ApiPivotField/ApiPivotField.md)

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
    rows: ['Region', 'Style'],
});

pivotTable.AddDataField('Price');
pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();
let dataField = pivotTable.GetDataFields('Sum of Price');

pivotWorksheet.GetRange('A15').SetValue('Sum of Price position:');
pivotWorksheet.GetRange('B15').SetValue(dataField.GetIndex());

pivotWorksheet.GetRange('A16').SetValue('Price position:');
pivotWorksheet.GetRange('B16').SetValue(dataField.GetPivotField().GetIndex());
```
