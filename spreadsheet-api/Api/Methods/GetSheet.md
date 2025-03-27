# GetSheet

Returns an object that represents a sheet.

## Syntax

```javascript
expression.GetSheet(nameOrIndex);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nameOrIndex | Required | string \| number |  | Sheet name or sheet index. |

## Returns

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md) \| null

## Example

This example shows how to get an object that represents a sheet.

```javascript editor-xlsx
let worksheet = Api.GetSheet("Sheet1");
worksheet.GetRange("A1").SetValue("This is a sample text on 'Sheet1'.");
```
