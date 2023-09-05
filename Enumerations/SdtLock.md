# SdtLock

The lock type of the content control.

## Type

String

## Properties

- "unlocked" 
- "contentLocked" 
- "sdtContentLocked" 
- "sdtLocked"

## Example

This example set the "sdtContentLocked" lock to the current inline text content control which means that the content cannot be edited and the container cannot be deleted.

```javascript
oInlineLvlSdt.SetLock("sdtContentLocked");
```