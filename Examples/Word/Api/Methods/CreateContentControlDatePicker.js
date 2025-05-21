// This example shows how to create a datepicker content control.
let doc = Api.GetDocument();
let cc = Api.CreateContentControlDatePicker({Date: new Date(), DateFormat: 'yyyy.mm.dd'});
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddInlineLvlSdt(cc);
doc.Push(infoParagraph);