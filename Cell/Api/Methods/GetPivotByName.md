# GetPivotByName

Returns a pivot table by its name, or null if it does not exist.

## Syntax

```javascript
expression.GetPivotByName(name);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The pivot table name. |

## Returns

[ApiPivotTable](../../ApiPivotTable/ApiPivotTable.md) | null

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

Api.GetPivotByName(pivotTable.GetName()).AddFields({
	rows: 'Region',
});

Api.GetPivotByName(pivotTable.GetName()).AddDataField('Price');

```
