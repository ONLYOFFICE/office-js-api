# SetLock

Sets the lock to the current inline text content control:**"contentLocked"** - content cannot be edited.**"sdtContentLocked"** - content cannot be edited and the container cannot be deleted.**"sdtLocked"** - the container cannot be deleted.

## Syntax

expression.SetLock(sLockType);

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLockType | Required | "contentLocked" &#124;"sdtContentLocked" &#124;"sdtLocked" |  | The lock type applied to the inline text content control. |

## Returns

This method doesn't return any data.

## Example

This example sets the lock to the inline text content control.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control with the content lock set to it.");
oInlineLvlSdt.SetLock("sdtContentLocked");
oInlineLvlSdt.AddElement(oRun, 0);
var sLock = oInlineLvlSdt.GetLock();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Lock type: " + sLock);
oDocument.Push(oParagraph);
```
