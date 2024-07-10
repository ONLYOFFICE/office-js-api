# GetName

Returns the name property of the current user's information.

## Syntax

expression.GetName();

`expression` - A variable that represents a [ApiProtectedRangeUserInfo](../ApiProtectedRangeUserInfo.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String &#124; null


## Example

This example changes the the user protected range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var wsName = oWorksheet.GetName();
var protectedRange = Api.AddProtectedRange("protectedRange", wsName + "!$A$1:$B$1");
if (protectedRange) {
	protectedRange.AddUser("userId", "name", "CanView");
    var userInfo = protectedRange.GetUser("userId");
    var userName = userName && userInfo.GetName();
    oWorksheet.GetRange("A3").SetValue("Name: " + userName);
}
builder.SaveFile("xlsx", "changeProtectedRange.xlsx");
builder.CloseFile();
```