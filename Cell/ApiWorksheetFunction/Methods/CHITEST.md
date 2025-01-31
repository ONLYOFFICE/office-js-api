# CHITEST

Returns the test for independence: the value from the chi-squared distribution for the statistic and the appropriate degrees of freedom.

## Syntax

```javascript
expression.CHITEST(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number | string | boolean |  | The range of data that contains observations to test against expected values. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number | string | boolean |  | The range of data that contains the ratio of the product of row totals and column totals to the grand total. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var actual1 = ["Actual", 58, 11, 10];
var actual2 = ["Actual", 35, 25, 23];
var expected1 = ["Expected", 45.35, 17.56, 16.09];
var expected2 = ["Expected", 47.65, 18.44, 16.91];

for (var i = 0; i < actual1.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(actual1[i]);
}
for (var j = 0; j < actual2.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(actual2[j]);
}
for (var n = 0; n < expected1.length; n++) {
    oWorksheet.GetRange("C" + (n + 1)).SetValue(expected1[n]);
}
for (var m = 0; m < expected2.length; m++) {
    oWorksheet.GetRange("D" + (m + 1)).SetValue(expected2[m]);
}

var oRange1 = oWorksheet.GetRange("A2:B4");
var oRange2 = oWorksheet.GetRange("C2:D4");
oWorksheet.GetRange("D6").SetValue(oFunction.CHITEST(oRange1, oRange2));
```
