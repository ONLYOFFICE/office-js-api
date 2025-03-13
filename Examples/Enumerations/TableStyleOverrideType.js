// This example applys the created style (set shadow) to the top left cell of the table.

// How to change a style of the specific part of the table.

// Get table part style by condition and update it.

tableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 0, 0);