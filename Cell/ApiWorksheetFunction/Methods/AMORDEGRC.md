# AMORDEGRC

Returns the prorated linear depreciation of an asset for each accounting period..

## Syntax

expression.AMORDEGRC(arg1., arg2., arg3., arg4., arg5., arg6., arg7.);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1. | Required | any |  | No description provided. |
| arg2. | Required | any |  | No description provided. |
| arg3. | Required | any |  | No description provided. |
| arg4. | Required | any |  | No description provided. |
| arg5. | Required | any |  | No description provided. |
| arg6. | Required | any |  | No description provided. |
| arg7. | Required | any |  | No description provided. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.AMORDEGRC(3500, "1/1/2018", "3/1/2018", 500, 1, 0.25, 1));
```
