# AddFields

Adds the row, column, and page fields to the pivot table report.

## Syntax

expression.AddFields(options, options.rows, options.columns, options.pages, options.addToTable);

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | Required | Object |  | The settings for adding row, column, and page fields to the pivot table report. |
| options.rows | Optional | number &#124; string &#124; Array.&lt;number&gt; &#124; Array.&lt;string&gt; |  | An array of field names or IDs to be added as rows or added to the category axis. |
| options.columns | Optional | number &#124; string &#124; Array.&lt;number&gt; &#124; Array.&lt;string&gt; |  | An array of field names or IDs to be added as columns or added to the series axis. |
| options.pages | Optional | number &#124; string &#124; Array.&lt;number&gt; &#124; Array.&lt;string&gt; |  | An array of field names or IDs to be added as pages or added to the page area. |
| options.addToTable | Optional | boolean |  | Specifies whether to apply fields only to the pivot table reports. If this parameter is set to **true**, the specified fields will be added to the report (none of the existing fields are replaced). If **false**, the existing fields will be replaced with the new fields. The default value is **false**. |

## Returns

This method doesn't return any data.

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


```
