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

number | null

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
var dataField = pivotTable.AddDataField('Price');
dataField.SetName('Regional prices');
pivotTable.AddFields({
	rows: 'Region',
	columns: 'Style',
});

var pivotWorksheet = Api.GetActiveSheet();

var value = pivotTable.GetData(['East', 'Tee']);
pivotWorksheet.GetRange('A9').SetValue('Value of East Tee Price:');
pivotWorksheet.GetRange('B9').SetValue(value);

```
