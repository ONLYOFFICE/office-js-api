# GetRows

Returns the ApiRange object that represents all the cells on the rows range.

## Syntax

```javascript
expression.GetRows(value);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | Required | string \| number |  | Specifies the rows range in the string or number format. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example shows how to get the ApiRange object that represents all the cells on the rows range.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRows("1:4").SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
