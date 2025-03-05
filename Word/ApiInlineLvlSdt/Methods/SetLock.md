# SetLock

Sets the lock to the current inline text content control:**"contentLocked"** - content cannot be edited.**"sdtContentLocked"** - content cannot be edited and the container cannot be deleted.**"sdtLocked"** - the container cannot be deleted.

## Syntax

```javascript
expression.SetLock(sLockType);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLockType | Required | "contentLocked" \| "sdtContentLocked" \| "sdtLocked" |  | The lock type applied to the inline text content control. |

## Returns

This method doesn't return any data.

## Example

This example sets the lock to the inline text content control.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control with the content lock set to it.");
inlineLvlSdt.SetLock("sdtContentLocked");
inlineLvlSdt.AddElement(run, 0);
let lock = inlineLvlSdt.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("Lock type: " + lock);
doc.Push(paragraph);
```
