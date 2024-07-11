# SetTitle

Sets a title to the current protected range.

## Syntax

expression.SetTitle(sTitle);

`expression` - A variable that represents a [ApiProtectedRange](../ApiProtectedRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sTitle | Required | String | The title which will be displayed for the current protected range. |

## Returns

Boolean (returns false if a user doesn't have permission to modify the protected range)

## Example

This example changes the the user protected range title.

```javascript
builder.CreateFile("xlsx");
Api.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = Api.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");
builder.SaveFile("xlsx", "changeProtectedRange.xlsx");
builder.CloseFile();
```