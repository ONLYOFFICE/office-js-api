# GetCurrentPage

Returns the current page which is displayed for the page field (valid only for page fields).

## Syntax

```javascript
expression.GetCurrentPage();
```

`expression` - A variable that represents a [ApiPivotDataField](../ApiPivotDataField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| number

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
    pages: ['Style'],
    rows: 'Region',
});

pivotTable.AddDataField('Style');

let pivotWorksheet = Api.GetActiveSheet();
let pivotField = pivotTable.GetPivotFields('Style');

pivotWorksheet.GetRange('A13').SetValue('Current Page');
pivotWorksheet.GetRange('B13').SetValue(pivotField.GetCurrentPage());

```
