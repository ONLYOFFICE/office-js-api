# RefreshAllPivots

Refreshes all pivot tables.

## Syntax

```javascript
expression.RefreshAllPivots();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

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

Api.GetPivotByName(pivotTable.GetName()).AddFields({
    rows: 'Region',
});

Api.GetPivotByName(pivotTable.GetName()).AddDataField('Price');
Api.RefreshAllPivots();

```
