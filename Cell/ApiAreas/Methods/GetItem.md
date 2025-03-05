# GetItem

Returns a single object from a collection by its ID.

## Syntax

```javascript
expression.GetItem(ind);
```

`expression` - A variable that represents a [ApiAreas](../ApiAreas.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ind | Required | number |  | The index number of the object. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get a single object from a collection by its ID.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1:D1");
range.SetValue("1");
range.Select();
let areas = range.GetAreas();
let item = areas.GetItem(1);
range = worksheet.GetRange('A5');
range.SetValue("The first item from the areas: ");
range.AutoFit(false, true);
worksheet.GetRange('B5').Paste(item);
```
