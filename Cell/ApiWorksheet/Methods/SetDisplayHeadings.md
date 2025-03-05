# SetDisplayHeadings

Specifies whether the current sheet row/column headers must be displayed or not.

## Syntax

```javascript
expression.SetDisplayHeadings(isDisplayed);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isDisplayed | Required | boolean |  | Specifies whether the current sheet row/column headers must be displayed or not. The default value is **true**. |

## Returns

This method doesn't return any data.

## Example

This example specifies whether the sheet row/column headers must be displayed or not.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The sheet settings make it display no row/column headers");
worksheet.SetDisplayHeadings(false);
```
