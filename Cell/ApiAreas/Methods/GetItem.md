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
// How to find an object by its ID from the collection.

// Get element from an array by its ID.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1:D1");
oRange.SetValue("1");
oRange.Select();
var oAreas = oRange.GetAreas();
var oItem = oAreas.GetItem(1);
oRange = oWorksheet.GetRange('A5');
oRange.SetValue("The first item from the areas: ");
oRange.AutoFit(false, true);
oWorksheet.GetRange('B5').Paste(oItem);
```
