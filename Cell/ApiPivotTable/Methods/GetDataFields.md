# GetDataFields

Returns a collection that represents either a single pivot table data field
or a collection of all visible data fields.

## Syntax

```javascript
expression.GetDataFields(field);
```

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| field | Required | number | string | undefined |  | The name or index of the field to be returned. |

## Returns

[ApiPivotDataField[]](../../ApiPivotDataField/ApiPivotDataField.md) | [ApiPivotDataField](../../ApiPivotDataField/ApiPivotDataField.md) | null

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange('B1').SetValue('Region');
oWorksheet.GetRange('C1').SetValue('Style');
oWorksheet.GetRange('D1').SetValue('Price');

oWorksheet.GetRange('B2').SetValue('East');
oWorksheet.GetRange('B3').SetValue('West');
oWorksheet.GetRange('B4').SetValue('East');
oWorksheet.GetRange('B5').SetValue('West');

oWorksheet.GetRange('C2').SetValue('Fancy');
oWorksheet.GetRange('C3').SetValue('Fancy');
oWorksheet.GetRange('C4').SetValue('Tee');
oWorksheet.GetRange('C5').SetValue('Tee');

oWorksheet.GetRange('D2').SetValue(42.5);
oWorksheet.GetRange('D3').SetValue(35.2);
oWorksheet.GetRange('D4').SetValue(12.3);
oWorksheet.GetRange('D5').SetValue(24.8);

var dataRef = Api.GetRange("'Sheet1'!$B$1:$D$5");
var pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.AddFields({
	columns: 'Region',
	rows: 'Style',
});

pivotTable.AddDataField('Price');
pivotTable.AddDataField('Price');

var dataFields = pivotTable.GetDataFields();
for (var i = 0; i < dataFields.length; i += 1) {
	dataFields[i].SetName('Count of Price' + (i + 1));
	dataFields[i].SetFunction('Count');
}


```
