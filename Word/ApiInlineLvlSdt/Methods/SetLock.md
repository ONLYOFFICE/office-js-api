# SetLock

Sets the lock to the current inline text content control.

## Syntax

expression.SetLock(sLockType);

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sLockType | Required | [LockType](../../../Enumerations/LockType.md) | The type of the lock applied to the block text content control. |

## Returns

This method doesn't return any data.

## Example

This example sets the lock to the inline text content control.

```javascript
builder.CreateFile("docx");
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
builder.SaveFile("docx", "SetLock.docx");
builder.CloseFile();
```