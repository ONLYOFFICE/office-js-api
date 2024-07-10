# SetAnyoneType

Sets the type of the "Anyone" user to the current protected range.

## Syntax

expression.SetAnyoneType(protectedRangeUserType);

`expression` - A variable that represents a [ApiProtectedRange](../ApiProtectedRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| ProtectedRangeUserType | Required | [ProtectedRangeUserType](../../../Enumerations/ProtectedRangeUserType.md) | The user type of the protected range. |

## Returns

[ApiProtectedRangeUserInfo](../../ApiProtectedRangeUserInfo/ApiProtectedRangeUserInfo.md) &#124; null

## Example

This example changes the the user protected range.

```javascript
builder.CreateFile("xlsx");
Api.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = Api.GetProtectedRange("protectedRange");
protectedRange.SetAnyoneType("CanView");
builder.SaveFile("xlsx", "changeProtectedRange.xlsx");
builder.CloseFile();
```