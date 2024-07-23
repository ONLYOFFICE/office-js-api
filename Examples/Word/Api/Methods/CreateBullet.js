// description
let oBullet = Api.CreateBullet('*');
let oDocument = Api.GetDocument();
let oParagraph = Api.CreateParagraph();
oParagraph.AddText('The first paragraph.');
let oPr = oParagraph.GetParaPr();
oPr.SetBullet(oBullet);
oParagraph.OnChangeParaPr(oPr);
oDocument.AddElement(0, oParagraph);