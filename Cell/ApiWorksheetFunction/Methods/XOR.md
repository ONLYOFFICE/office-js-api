# XOR

Returns the logical **Exclusive Or** value of all arguments. The function returns **true** when the number of **true** inputs is odd and **false** when the number of **true** inputs is even.

## Syntax

```javascript
expression.XOR(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean \| array |  | The conditions to check. |

## Returns

boolean

## Example

This example shows how to return the logical Exclusive Or value of all arguments. The function returns true when the number of true inputs is odd and false when the number of true inputs is even.

```javascript editor-xlsx
// How to return the logical Exclusive Or value of all arguments.

// Use a function to calculate Exclusive Or.

const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.TRUE(); //returns TRUE, doesnt require arguments

oWorksheet.GetRange("A1").SetValue(ans);

```
