# GetId

Returns the ID property of the current user's information.

## Syntax

```javascript
expression.GetId();
```

`expression` - A variable that represents a [ApiProtectedRangeUserInfo](../ApiProtectedRangeUserInfo.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string | null

## Example

This example changes the user protected range.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
var protectedRange = oWorksheet.GetProtectedRange("protectedRange");
var userInfo = protectedRange.GetUser("userId");
var userId = userInfo.GetId();
oWorksheet.GetRange("A3").SetValue("Id: " + userId);
```
