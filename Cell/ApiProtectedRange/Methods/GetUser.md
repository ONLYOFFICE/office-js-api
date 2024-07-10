# GetUser

Returns an object that represents a user from the current protected range.

## Syntax

expression.GetUser(sId);

`expression` - A variable that represents a [ApiProtectedRange](../ApiProtectedRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sId | Required | String | The user ID. |

## Returns

[ApiProtectedRangeUserInfo](../../ApiProtectedRangeUserInfo/ApiProtectedRangeUserInfo.md) &#124; null

## Example

This example changes the the user protected range.

```javascript
builder.CreateFile("xlsx");
Api.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = Api.GetProtectedRange("protectedRange");
protectedRange.AddUser("userId", "name", "CanView");
var userInfo = protectedRange.GetUser("userId");
builder.SaveFile("xlsx", "changeProtectedRange.xlsx");
builder.CloseFile();
```