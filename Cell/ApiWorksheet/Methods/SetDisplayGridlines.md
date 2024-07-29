# SetDisplayGridlines

Specifies whether the current sheet gridlines must be displayed or not.

## Syntax

expression.SetDisplayGridlines(isDisplayed);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isDisplayed | Required | boolean |  | Specifies whether the current sheet gridlines must be displayed or not. The default value is **true**. |

## Returns

This method doesn't return any data.

## Example

This example specifies whether the sheet gridlines must be displayed or not.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("The sheet settings make it display no gridlines");
oWorksheet.SetDisplayGridlines(false);
```
