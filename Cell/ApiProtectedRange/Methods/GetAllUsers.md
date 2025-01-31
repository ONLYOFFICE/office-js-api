# GetAllUsers

Returns all users from the current protected range.

## Syntax

```javascript
expression.GetAllUsers();
```

`expression` - A variable that represents a [ApiProtectedRange](../ApiProtectedRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiProtectedRangeUserInfo[]](../../ApiProtectedRangeUserInfo/ApiProtectedRangeUserInfo.md) | null

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("C1").SetValue("3");
oWorksheet.AddProtectedRange("Protected range", "$A$1:$C$1");
var oProtectedRange = oWorksheet.GetProtectedRange("Protected range");
oProtectedRange.AddUser("uid-1", "John Smith", "CanEdit");
oProtectedRange.AddUser("uid-2", "Mark Potato", "CanView");
var aUsers = oProtectedRange.GetAllUsers();
oWorksheet.GetRange("A3").SetValue(aUsers[0].GetName());

```
