# GetName

Returns the name property of the current user's information.

## Syntax

expression.GetName();

`expression` - A variable that represents a [ApiProtectedRangeUserInfo](../ApiProtectedRangeUserInfo.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string, null

## Example

This example changes the user protected range.

```javascript
var oWorksheet = Api.GetActiveSheet();
var wsName = oWorksheet.GetName();
var protectedRange = Api.AddProtectedRange("protectedRange", wsName + "!$A$1:$B$1");
protectedRange.AddUser("userId", "name", "CanView");
var userInfo = protectedRange.GetUser("userId");
var userName = userInfo.GetName();
oWorksheet.GetRange("A3").SetValue("Name: " + userName);
```
