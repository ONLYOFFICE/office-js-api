// Apply the created style (set shadow) to the top left cell of the table.

// How do I change the style of a specific part of a table?

// Get table part style by condition and update it.

tableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd(Api.CreateShd("clear", Api.Color(255, 0, 0)));