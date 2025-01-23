# GetSheet

Returns an object that represents a sheet.

## Syntax

expression.GetSheet(nameOrIndex);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nameOrIndex | Required | string | number |  | Sheet name or sheet index. |

## Returns

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md) | null

## Example

This example shows how to get an object that represents a sheet.

```javascript
var oWorksheet = Api.GetSheet("Sheet1");
oWorksheet.GetRange("A1").SetValue("This is a sample text on 'Sheet1'.");
```
