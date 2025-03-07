# GetCols

Returns the ApiRange object that represents all the cells on the columns range.

## Syntax

```javascript
expression.GetCols(sRange);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | Required | string |  | Specifies the columns range in the string format. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get the ApiRange object that represents all the cells on the columns range.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let cols = worksheet.GetCols("A1:C1");
cols.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
