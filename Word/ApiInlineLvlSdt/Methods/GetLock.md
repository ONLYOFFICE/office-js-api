# GetLock

Returns the lock type of the current container.

## Syntax

```javascript
expression.GetLock();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[SdtLock](../../Enumeration/SdtLock.md)

## Example

This example shows hpw to get the lock type of the container.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with the content lock set to it.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetLock("sdtContentLocked");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let lock = inlineLvlSdt.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("Lock type: " + lock);
doc.Push(paragraph);
```
