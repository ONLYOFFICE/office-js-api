# PasteSpecialOperation

The mathematical operation which will be applied to the copied data.

## Type

Enumeration

## Values

- "xlPasteSpecialOperationAdd"
- "xlPasteSpecialOperationDivide"
- "xlPasteSpecialOperationMultiply"
- "xlPasteSpecialOperationNone"
- "xlPasteSpecialOperationSubtract"


## Example

This example paste data with paste all option and add operation.

```javascript
range.PasteSpecial("xlPasteAll", "xlPasteSpecialOperationAdd");
```
