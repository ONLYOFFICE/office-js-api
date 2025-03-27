# Insert

Inserts a cell or a range of cells into the worksheet or macro sheet and shifts other cells away to make space.

## Syntax

```javascript
expression.Insert(shift);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shift | Optional | string |  | Specifies which way to shift the cells ("right", "down"). |

## Returns

This method doesn't return any data.

## Example

This example inserts a cell or a range of cells into the worksheet or macro sheet and shifts other cells away to make space.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B4").SetValue("1");
worksheet.GetRange("C4").SetValue("2");
worksheet.GetRange("D4").SetValue("3");
worksheet.GetRange("C5").SetValue("5");
let range = worksheet.GetRange("C4");
range.Insert("down");
```
