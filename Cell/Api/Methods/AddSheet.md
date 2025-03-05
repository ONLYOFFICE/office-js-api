# AddSheet

Creates a new worksheet. The new worksheet becomes the active sheet.

## Syntax

```javascript
expression.AddSheet(sName);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The name of a new worksheet. |

## Returns

This method doesn't return any data.

## Example

This example creates a new worksheet.

```javascript editor-xlsx
let sheet = Api.AddSheet("New sheet");
```
