# SetRange

Sets a range to the current protected range.

## Syntax

expression.SetRange(sRange);

`expression` - A variable that represents a [ApiProtectedRange](../ApiProtectedRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sRange | Required | String | The cell range which will be set for the current protected range. |

## Returns

Boolean (Returns false if a user doesn't have permission to modify the protected range)

## Example

This example changes the the user protected range.

```javascript
builder.CreateFile("xlsx");
Api.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = Api.GetProtectedRange("protectedRange");
protectedRange.SetRange("Sheet1!$A$2:$B$2");
builder.SaveFile("xlsx", "changeProtectedRange.xlsx");
builder.CloseFile();
```