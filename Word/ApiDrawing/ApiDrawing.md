# ApiDrawing

Represents the ApiDrawing class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "drawing" | Returns a type of the ApiDrawing class. |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Returns the drawing inner contents where a paragraph or text runs can be inserted if it exists. |
| [SetSize](./Methods/SetSize.md) | None | Sets the size of the object (image, shape, chart) bounding box. |
| [SetWrappingStyle](./Methods/SetWrappingStyle.md) | None | Sets the wrapping type of the current object (image, shape, chart). One of the following wrapping style types can be set: **"inline"** - the object is considered to be a part of the text, like a character, so when the text moves, the object moves as well. In this case the positioning options are inaccessible. If one of the following styles is selected, the object can be moved independently of the text and positioned on the page exactly: **"square"** - the text wraps the rectangular box that bounds the object. **"tight"** - the text wraps the actual object edges. **"through"** - the text wraps around the object edges and fills in the open white space within the object. **"topAndBottom"** - the text is only above and below the object. **"behind"** - the text overlaps the object. **"inFront"** - the object overlaps the text. |
| [SetHorAlign](./Methods/SetHorAlign.md) | None | Specifies how the floating object will be horizontally aligned. |
| [SetVerAlign](./Methods/SetVerAlign.md) | None | Specifies how the floating object will be vertically aligned. |
| [SetHorPosition](./Methods/SetHorPosition.md) | None | Sets the absolute measurement for the horizontal positioning of the floating object. |
| [SetVerPosition](./Methods/SetVerPosition.md) | None | Sets the absolute measurement for the vertical positioning of the floating object. |
| [SetDistances](./Methods/SetDistances.md) | None | Specifies the minimum distance which will be maintained between the edges of the current drawing object and any subsequent text. |
| [GetParentParagraph](./Methods/GetParentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Returns a parent paragraph that contains the graphic object. |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null | Returns a parent content control that contains the graphic object. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns a parent table that contains the graphic object. |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns a parent table cell that contains the graphic object. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the current graphic object. |
| [Copy](./Methods/Copy.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Copies the current graphic object. |
| [InsertInContentControl](./Methods/InsertInContentControl.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | Wraps the graphic object with a rich text content control. |
| [InsertParagraph](./Methods/InsertParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Inserts a paragraph at the specified position. |
| [Select](./Methods/Select.md) | None | Selects the current graphic object. |
| [AddBreak](./Methods/AddBreak.md) | boolean | Inserts a break at the specified location in the main document. |
| [SetHorFlip](./Methods/SetHorFlip.md) | None | Flips the current drawing horizontally. |
| [SetVertFlip](./Methods/SetVertFlip.md) | boolean | Flips the current drawing vertically. |
| [ScaleHeight](./Methods/ScaleHeight.md) | boolean | Scales the height of the figure using the specified coefficient. |
| [ScaleWidth](./Methods/ScaleWidth.md) | boolean | Scales the width of the figure using the specified coefficient. |
| [Fill](./Methods/Fill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | Sets the outline properties to the specified graphic object. |
| [GetNextDrawing](./Methods/GetNextDrawing.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| null | Returns the next inline drawing object if exists. |
| [GetPrevDrawing](./Methods/GetPrevDrawing.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| null | Returns the previous inline drawing object if exists. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiDrawing object into the JSON object. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the width of the current drawing. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the height of the current drawing. |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | Returns the lock value for the specified lock type of the current drawing. |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | Sets the lock value to the specified lock type of the current drawing. |
| [SetDrawingPrFromDrawing](./Methods/SetDrawingPrFromDrawing.md) | boolean | Sets the properties from another drawing to the current drawing. The following properties will be copied: horizontal and vertical alignment, distance between the edges of the current drawing object and any subsequent text, wrapping style, drawing name, title and description. |
