# AddUser

Sets a user to the current protected range.

## Syntax

expression.AddUser(sId, sName, protectedRangeUserType);

`expression` - A variable that represents a [ApiProtectedRange](../ApiProtectedRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sId | Required | String | The user ID. |
| sName | Required | String | The user name. |
| ProtectedRangeUserType | Required | [ProtectedRangeUserType](../../../Enumerations/ProtectedRangeUserType.md) | The user type of the protected range. |

## Returns

[ApiProtectedRangeUserInfo](../../ApiProtectedRangeUserInfo/ApiProtectedRangeUserInfo.md) &#124; null

## Example

This example changes the the user protected range.

```javascript
builder.CreateFile("xlsx");
Api.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = Api.GetProtectedRange("protectedRange");
protectedRange.AddUser("userId", "name", "CanView");
builder.SaveFile("xlsx", "changeProtectedRange.xlsx");
builder.CloseFile();
```