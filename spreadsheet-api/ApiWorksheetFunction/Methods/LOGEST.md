# LOGEST

Returns statistics that describe an exponential curve matching known data points.

## Syntax

```javascript
expression.LOGEST(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| [ApiRange](../../ApiRange/ApiRange.md) |  | The set of y-values from the &lt;em&gt;y = b*m^x&lt;/em&gt; equation. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| [ApiRange](../../ApiRange/ApiRange.md) |  | An optional set of x-values from the &lt;em&gt;y = b*m^x&lt;/em&gt; equation. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | A logical value: the constant &lt;em&gt;b&lt;/em&gt; is calculated normally if this parameter is set to -**true** or omitted,\ and &lt;em&gt;b&lt;/em&gt; is set equal to 1 if the parameter is -**false**. |
| arg4 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | A logical value: return additional regression statistics if this parameter is set to -**true**,\ and return m-coefficients and the constant &lt;em&gt;b&lt;/em&gt; if the parameter is -**false** or omitted. |

## Returns

number

## Example



```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

//configure function parameters
let yValues = [1500, 1230, 1700, 1000, 980, 1470, 1560, 1640, 1420, 1100];
let xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let constant = true;
let stats = false;

//set values in cells
for (let i = 0; i < yValues.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(yValues[i]);
}
for (let i = 0; i < xValues.length; i++) {
  worksheet.GetRange("B" + (i + 1)).SetValue(xValues[i]);
}

//get x and y ranges
let yRange = worksheet.GetRange("A1:A10");
let xRange = worksheet.GetRange("B1:B10");

let func = Api.GetWorksheetFunction();
//invoke LOGEST method
let ans = func.LOGEST(yRange, xRange, constant, stats);

//print answer
worksheet.GetRange("D1").SetValue(ans);

```
