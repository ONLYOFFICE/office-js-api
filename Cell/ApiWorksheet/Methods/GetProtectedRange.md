# GetProtectedRange

Returns a protected range object by its title.

## Syntax

```javascript
expression.GetProtectedRange(sTitle);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | Required | string |  | The title of the protected range that will be returned. |

## Returns

[ApiProtectedRange](../../ApiProtectedRange/ApiProtectedRange.md) | null

## Example

This example shows how to get an object that represents the protected range.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = oWorksheet.GetProtectedRange("protectedRange");
protectedRange.SetTitle("protectedRangeNew");
```
