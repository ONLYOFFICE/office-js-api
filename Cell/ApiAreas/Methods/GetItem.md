# GetItem

Returns a single object from a collection by its ID.

## Syntax

expression.GetItem(ind);

`expression` - A variable that represents a [ApiAreas](../ApiAreas.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| ind | Required | Number | The index number of the object. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) &#124; null (returs null if index isn't correct)

## Example

This example shows how to get a single object from a collection by its ID.

```javascript
builder.CreateFile("xlsx");
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
builder.SaveFile("xlsx", "GetItem.xlsx");
builder.CloseFile();
```