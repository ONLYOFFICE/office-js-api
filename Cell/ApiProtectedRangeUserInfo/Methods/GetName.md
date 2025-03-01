# GetName

Returns the name property of the current user's information.

## Syntax

```javascript
expression.GetName();
```

`expression` - A variable that represents a [ApiProtectedRangeUserInfo](../ApiProtectedRangeUserInfo.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null

## Example

This example gets name of a protected range user.

```javascript editor-xlsx
// How to get a user info of a protected range and show its name.

// Get a user name of a protected range and add it to the worksheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
var protectedRange = oWorksheet.GetProtectedRange("protectedRange");
var userInfo = protectedRange.GetUser("userId");
var userName = userInfo.GetName();
oWorksheet.GetRange("A3").SetValue("Name: " + userName);
```
