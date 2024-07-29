# SetTitle

Sets a title to the current protected range.

## Syntax

expression.SetTitle(sTitle);

`expression` - A variable that represents a [ApiProtectedRange](../ApiProtectedRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | Required | string |  | The title which will be displayed for the current protected range. |

## Returns

boolean

## Example

This example changes the the user protected range title.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = oWorksheet.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");
```
