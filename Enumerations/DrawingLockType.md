# DrawingLockType

Lock type in the string format.

## Type

String

## Properties

- "noGrp" 
- "noUngrp" 
- "noSelect" 
- "noRot" 
- "noChangeAspect" 
- "noMove" 
- "noResize" 
- "noEditPoints" 
- "noAdjustHandles" 
- "noChangeArrowheads" 
- "noChangeShapeType" 
- "noDrilldown" 
- "noTextEdit" 
- "noCrop" 
- "txBox"

## Example

This example shows how to get the lock value for the specified lock type of a drawing.

```javascript
var bLockValue = oDrawing.GetLockValue("noSelect");
```