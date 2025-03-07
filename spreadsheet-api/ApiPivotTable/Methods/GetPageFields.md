# GetPageFields

Returns a collection that represents either a single pivot table page field\
or a collection of all visible page fields.

## Syntax

```javascript
expression.GetPageFields(field);
```

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| field | Required | number \| string \| undefined |  | The name or index of the field to be returned. |

## Returns

[ApiPivotField](../../ApiPivotField/ApiPivotField.md)[]

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
	columns: 'Region',
	pages: 'Style'
});

pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange('A9').SetValue('Page Fields');

let pageFields = pivotTable.GetPageFields();
for (let i = 0; i < pageFields.length; i += 1) {
	let cell = pivotWorksheet.GetRangeByNumber(8 + i, 1);
	cell.SetValue(pageFields[i].GetName());
}

```
