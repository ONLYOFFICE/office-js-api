# GetProtectedRange

Returns a protected range object by its title.

## Syntax

expression.GetProtectedRange();

`expression` - A variable that represents a [Api](../Api.md) class.


## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sTitle | Required | Number | The title of the protected range that will be returned. |


## Returns

[ApiProtectedRange](../../ApiProtectedRange/ApiProtectedRange.md) &#124; null

## Example

This example shows how to get an object that represents the protected range.

```javascript
builder.CreateFile("xlsx");
Api.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = Api.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");
builder.SaveFile("xlsx", "getProtectedRange.xlsx");
builder.CloseFile();
```