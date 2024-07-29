# GetUser

Returns an object that represents a user from the current protected range.

## Syntax

expression.GetUser(sId);

`expression` - A variable that represents a [ApiProtectedRange](../ApiProtectedRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sId | Required | string |  | The user ID. |

## Returns

ApiProtectedRangeUserInfo, null

## Example

This example changes the user protected range.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
var protectedRange = oWorksheet.GetProtectedRange("protectedRange");
protectedRange.AddUser("userId", "name", "CanView");
var userInfo = protectedRange.GetUser("userId");
oWorksheet.GetRange("A3").SetValue("User name: ", userInfo.GetName());
```
