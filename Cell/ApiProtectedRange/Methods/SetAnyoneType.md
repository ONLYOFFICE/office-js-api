# SetAnyoneType

Sets the type of the "Anyone" user to the current protected range.

## Syntax

```javascript
expression.SetAnyoneType(protectedRangeUserType);
```

`expression` - A variable that represents a [ApiProtectedRange](../ApiProtectedRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| protectedRangeUserType | Required | [ProtectedRangeUserType](../../Enumeration/ProtectedRangeUserType.md) |  | The user type of the protected range. |

## Returns

bool

## Example

This example changes access type for anyone for protected range.

```javascript editor-xlsx
// How to set access type to the "can view" one.

// Make a protected range viewable for anyone.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = oWorksheet.GetProtectedRange("protectedRange");
protectedRange.SetAnyoneType("CanView");
```
