# GetId

Returns the ID property of the current user's information.

## Syntax

expression.GetId();

`expression` - A variable that represents a [ApiProtectedRangeUserInfo](../ApiProtectedRangeUserInfo.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String &#124; null


## Example

This example changes the user protected range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var wsName = oWorksheet.GetName();
var protectedRange = Api.AddProtectedRange("protectedRange", wsName + "!$A$1:$B$1");
protectedRange.AddUser("userId", "name", "CanView");
var userInfo = protectedRange.GetUser("userId");
var userId = userInfo.GetId();
oWorksheet.GetRange("A3").SetValue("Id: " + userId);
builder.SaveFile("xlsx", "changeProtectedRangeInfo.xlsx");
builder.CloseFile();
```