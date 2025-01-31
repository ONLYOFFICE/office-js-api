# GetPivotItems

Returns an object that represents either a single pivot table item (the ApiPivotItem object)
or a collection of all the visible and hidden items (an array of the ApiPivotItem objects) in the specified field.

## Syntax

```javascript
expression.GetPivotItems(index);
```

`expression` - A variable that represents a [ApiPivotField](../ApiPivotField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | Optional | number |  | The item index. |

## Returns

[ApiPivotItem[]](../../ApiPivotItem/ApiPivotItem.md) | [ApiPivotItem](../../ApiPivotItem/ApiPivotItem.md) | null

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
	rows: 'Region',
	columns: 'Style',
});

var pivotWorksheet = Api.GetActiveSheet();
pivotTable.AddDataField('Price');

var pivotField = pivotTable.GetPivotFields('Region');
var pivotItems = pivotField.GetPivotItems();
pivotWorksheet.GetRange('A10').SetValue('Region pivot items')

for (var i = 0; i < pivotItems.length; i += 1) {
	pivotWorksheet.GetRangeByNumber(9 + i, 1).SetValue(pivotItems[i].GetName());
}
```
