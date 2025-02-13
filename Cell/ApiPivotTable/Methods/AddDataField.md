# AddDataField

Adds a data field to the pivot table report.

## Syntax

```javascript
expression.AddDataField(field);
```

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| field | Required | number | string |  | The index number or name of the data field. |

## Returns

[ApiPivotDataField](../../ApiPivotDataField/ApiPivotDataField.md)

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange('B1').SetValue('Region');
oWorksheet.GetRange('C1').SetValue('Price');
oWorksheet.GetRange('B2').SetValue('East');
oWorksheet.GetRange('B3').SetValue('West');
oWorksheet.GetRange('C2').SetValue(42.5);
oWorksheet.GetRange('C3').SetValue(35.2);

var dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
var pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.MoveField('Region', 'Rows');

var dataField = pivotTable.AddDataField('Price');
dataField.SetName('Regional prices');

```
