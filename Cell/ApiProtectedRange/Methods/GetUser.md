# GetUser

Returns an object that represents a user from the current protected range.

## Syntax

```javascript
expression.GetUser(sId);
```

`expression` - A variable that represents a [ApiProtectedRange](../ApiProtectedRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sId | Required | string |  | The user ID. |

## Returns

[ApiProtectedRangeUserInfo](../../ApiProtectedRangeUserInfo/ApiProtectedRangeUserInfo.md) \| null

## Example

This example gets a user of a protected range.

```javascript editor-xlsx
// How to get a user information of the protected range.

// Get an active sheet, add protected range to it, add user with rights and get user info. 

var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
var protectedRange = oWorksheet.GetProtectedRange("protectedRange");
var userInfo = protectedRange.GetUser("userId");
var userName = userInfo.GetName();
oWorksheet.GetRange("A3").SetValue("User name: " + userName);
```
