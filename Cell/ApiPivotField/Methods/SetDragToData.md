# SetDragToData

Sets the setting which specifies whether the specified field can be dragged to the data position.

## Syntax

```javascript
expression.SetDragToData(flag);
```

`expression` - A variable that represents a [ApiPivotField](../ApiPivotField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| flag | Required | boolean |  | Specifies whether the specified field can be dragged to the data position. |

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
    rows: ['Style'],
    columns: 'Region',
});

pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();
let pivotField = pivotTable.GetPivotFields('Region');

pivotField.SetDragToData(false);

pivotWorksheet.GetRange('A13').SetValue('Drag to data');
pivotWorksheet.GetRange('B13').SetValue(pivotField.GetDragToData());
pivotWorksheet.GetRange('A14').SetValue('Try drag Region to data!');

```
