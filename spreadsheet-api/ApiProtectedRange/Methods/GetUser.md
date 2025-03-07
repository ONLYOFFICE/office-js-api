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

This example changes the user protected range.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
let userInfo = protectedRange.GetUser("userId");
let userName = userInfo.GetName();
worksheet.GetRange("A3").SetValue("User name: " + userName);
```
