# GetType

Returns the type property of the current user's information.

## Syntax

expression.GetType();

`expression` - A variable that represents a [ApiProtectedRangeUserInfo](../ApiProtectedRangeUserInfo.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ProtectedRangeUserType](../../Enumeration/ProtectedRangeUserType.md)

## Example

This example changes the user protected range.

```javascript
var oWorksheet = Api.GetActiveSheet();
var wsName = oWorksheet.GetName();
var protectedRange = Api.AddProtectedRange("protectedRange", wsName + "!$A$1:$B$1");
protectedRange.AddUser("userId", "name", "CanView");
var userInfo = protectedRange.GetUser("userId");
var userType = userInfo.GetType();
oWorksheet.GetRange("A3").SetValue("Type: " + userType);
```
