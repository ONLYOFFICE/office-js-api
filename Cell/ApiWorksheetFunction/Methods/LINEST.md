# LINEST

Returns statistics that describe a linear trend matching known data points, by fitting a straight line using the least squares method.

## Syntax

expression.LINEST(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | The set of y-values from the &lt;em&gt;y = mx + b&lt;/em&gt; equation. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) |  | An optional set of x-values from the &lt;em&gt;y = mx + b&lt;/em&gt; equation. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | boolean |  | A logical value: the constant &lt;em&gt;b&lt;/em&gt; is calculated normally if this parameter is set to **true** or omitted, and &lt;em&gt;b&lt;/em&gt; is set equal to 0 if the parameter is **false**. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | boolean |  | A logical value: return additional regression statistics if this parameter is set to **true**, and return m-coefficients and the constant &lt;em&gt;b&lt;/em&gt; if the parameter is **false** or omitted. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

//configure function parameters
var yValues = [1.5, 2, 3];
var xValues = [2, 3.1, 3.5];
var constant = true;
var stats = true;

//set values in cells
for (var i = 0; i < yValues.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(yValues[i]);
}
for (var n = 0; n < xValues.length; n++) {
  oWorksheet.GetRange("B" + (n + 1)).SetValue(xValues[n]);
}

//get x and y ranges
var yRange = oWorksheet.GetRange("A1:A3");
var xRange = oWorksheet.GetRange("B1:B3");
var oFunction = Api.GetWorksheetFunction();

//invoke LINEST method
var ans = oFunction.LINEST(yRange, xRange, constant, stats);
console.log(ans)

//print answer 
 oWorksheet.GetRange("D1").SetValue(ans);


```
