# ApiDrawing

Represents the ApiDrawing class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddBreak](./Methods/AddBreak.md) | boolean | Inserts a break at the specified location in the main document. |
| [Copy](./Methods/Copy.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Copies the current graphic object. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the current graphic object. |
| [Fill](./Methods/Fill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [GetClassType](./Methods/GetClassType.md) | "drawing" | Returns a type of the ApiDrawing class. |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Returns the drawing inner contents where a paragraph or text runs can be inserted if it exists. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the height of the current drawing. |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | Returns the lock value for the specified lock type of the current drawing. |
| [GetNextDrawing](./Methods/GetNextDrawing.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| null | Returns the next inline drawing object if exists. |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null | Returns a parent content control that contains the graphic object. |
| [GetParentParagraph](./Methods/GetParentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Returns a parent paragraph that contains the graphic object. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns a parent table that contains the graphic object. |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns a parent table cell that contains the graphic object. |
| [GetPrevDrawing](./Methods/GetPrevDrawing.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| null | Returns the previous inline drawing object if exists. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the width of the current drawing. |
| [InsertInContentControl](./Methods/InsertInContentControl.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | Wraps the graphic object with a rich text content control. |
| [InsertParagraph](./Methods/InsertParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Inserts a paragraph at the specified position. |
| [ScaleHeight](./Methods/ScaleHeight.md) | boolean | Scales the height of the figure using the specified coefficient. |
| [ScaleWidth](./Methods/ScaleWidth.md) | boolean | Scales the width of the figure using the specified coefficient. |
| [Select](./Methods/Select.md) | None | Selects the current graphic object. |
| [SetDistances](./Methods/SetDistances.md) | None | Specifies the minimum distance which will be maintained between the edges of the current drawing object and any\nsubsequent text. |
| [SetDrawingPrFromDrawing](./Methods/SetDrawingPrFromDrawing.md) | boolean | Sets the properties from another drawing to the current drawing.\nThe following properties will be copied: horizontal and vertical alignment, distance between the edges of the current drawing object and any subsequent text, wrapping style, drawing name, title and description. |
| [SetHorAlign](./Methods/SetHorAlign.md) | None | Specifies how the floating object will be horizontally aligned. |
| [SetHorFlip](./Methods/SetHorFlip.md) | None | Flips the current drawing horizontally. |
| [SetHorPosition](./Methods/SetHorPosition.md) | None | Sets the absolute measurement for the horizontal positioning of the floating object. |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | Sets the lock value to the specified lock type of the current drawing. |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | Sets the outline properties to the specified graphic object. |
| [SetSize](./Methods/SetSize.md) | None | Sets the size of the object (image, shape, chart) bounding box. |
| [SetVerAlign](./Methods/SetVerAlign.md) | None | Specifies how the floating object will be vertically aligned. |
| [SetVerPosition](./Methods/SetVerPosition.md) | None | Sets the absolute measurement for the vertical positioning of the floating object. |
| [SetVertFlip](./Methods/SetVertFlip.md) | boolean | Flips the current drawing vertically. |
| [SetWrappingStyle](./Methods/SetWrappingStyle.md) | None | Sets the wrapping type of the current object (image, shape, chart). One of the following wrapping style types can be set:\n-**"inline"** - the object is considered to be a part of the text, like a character, so when the text moves, the object moves as well. In this case the positioning options are inaccessible.\nIf one of the following styles is selected, the object can be moved independently of the text and positioned on the page exactly:\n-**"square"** - the text wraps the rectangular box that bounds the object.\n-**"tight"** - the text wraps the actual object edges.\n-**"through"** - the text wraps around the object edges and fills in the open white space within the object.\n-**"topAndBottom"** - the text is only above and below the object.\n-**"behind"** - the text overlaps the object.\n-**"inFront"** - the object overlaps the text. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiDrawing object into the JSON object. |
