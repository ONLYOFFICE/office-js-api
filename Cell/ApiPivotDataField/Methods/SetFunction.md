# SetFunction

Sets a function to the current data field.

## Syntax

```javascript
expression.SetFunction(func);
```

`expression` - A variable that represents a [ApiPivotDataField](../ApiPivotDataField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| func | Required | [DataConsolidateFunctionType](../../Enumeration/DataConsolidateFunctionType.md) |  | The function to perform in the added data field. |

## Returns

This method doesn't return any data.

## Example

This example shows how to set a function for data field.

```javascript editor-xlsx
// How to change a function of a table element.

// Create a pivot table, add data to it then set a custom data field's function.

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
	rows: ['Region', 'Style'],
});

pivotTable.AddDataField('Price');
pivotTable.AddDataField('Price');

var pivotWorksheet = Api.GetActiveSheet();
var dataField = pivotTable.GetDataFields('Sum of Price');
dataField.SetFunction('Count');

```
