# GetFunction

Returns a function performed in the data field.

## Syntax

```javascript
expression.GetFunction();
```

`expression` - A variable that represents a [ApiPivotDataField](../ApiPivotDataField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[DataConsolidateFunctionType](../../Enumeration/DataConsolidateFunctionType.md)

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

let sumDataField = pivotTable.AddDataField('Price');
let countDataField = pivotTable.AddDataField('Price');
countDataField.SetFunction('Count');

let pivotWorksheet = Api.GetActiveSheet();

pivotWorksheet.GetRange('A15').SetValue('Functions:');
pivotWorksheet.GetRange('B15').SetValue(sumDataField.GetFunction());
pivotWorksheet.GetRange('B16').SetValue(countDataField.GetFunction());
```
