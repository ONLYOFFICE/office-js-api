# IRR

Returns the internal rate of return for a series of cash flows.

## Syntax

```javascript
expression.IRR(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number[] \| [ApiRange](../../ApiRange/ApiRange.md) |  | A range or array of cells that contain numbers for which the internal rate of return will be calculated. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An estimate at what the internal rate of return will be. If it is omitted, the function will assume guess to be 0.1 (10 percent). |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let values = ["Values", "-$40,000.00", "$10,000.00", "$15,000.00", "$20,000.00"];

for (let i = 0; i < values.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(values[i]);
}

let range = worksheet.GetRange("A2:A5");
worksheet.GetRange("B5").SetValue(func.IRR(range));
```
