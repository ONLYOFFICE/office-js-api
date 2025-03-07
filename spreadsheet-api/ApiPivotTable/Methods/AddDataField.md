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
| field | Required | number \| string |  | The index number or name of the data field. |

## Returns

[ApiPivotDataField](../../ApiPivotDataField/ApiPivotDataField.md)

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.MoveField('Region', 'Rows');

let dataField = pivotTable.AddDataField('Price');
dataField.SetName('Regional prices');

```
