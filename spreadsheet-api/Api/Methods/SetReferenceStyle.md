# SetReferenceStyle

Sets the cell reference style.

## Syntax

```javascript
expression.SetReferenceStyle(sReferenceStyle);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sReferenceStyle | Required | [ReferenceStyle](../../Enumeration/ReferenceStyle.md) |  | The cell reference style. |

## Returns

This method doesn't return any data.

## Example

This example sets reference style.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
Api.SetReferenceStyle("xlR1C1");
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
```
