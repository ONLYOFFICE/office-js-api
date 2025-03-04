# SetDisplayFieldsInReportFilterArea

Sets the pivot table display fields in the report filter area settings.

## Syntax

```javascript
expression.SetDisplayFieldsInReportFilterArea(type, fields);
```

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [FieldsInReportFilterType](../../Enumeration/FieldsInReportFilterType.md) |  | Specifies how the report filter fields are located. |
| fields | Required | number |  | A number of the report filter fields. |

## Returns

This method doesn't return any data.

## Example

This example shows how to set display fields in report filter area value of a table.

```javascript editor-xlsx
// How to set a display fields in report filter area of a table.

// Create a pivot table, add data to it then set a display fields in report filter area.

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

pivotTable.AddDataField('Price');

pivotTable.AddFields({
	pages: ['Region','Style', 'Price'],
});

pivotTable.SetDisplayFieldsInReportFilterArea('OverThenDown', 3);
const info = pivotTable.GetDisplayFieldsInReportFilterArea();

var pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange('A9').SetValue('Type');
pivotWorksheet.GetRange('B9').SetValue(info.Type);

pivotWorksheet.GetRange('A10').SetValue('ReportFilterFields');
pivotWorksheet.GetRange('B10').SetValue(info.ReportFilterFields);
```
