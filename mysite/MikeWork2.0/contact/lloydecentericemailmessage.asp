<%
Dim strEmail, strSubject, strComments
Set myMail=CreateObject("CDO.Message")
myMail.Subject="Lloyd Center Ice Rink Comments Form"
myMail.From=Request.Form("lloydEmail")
'myMail.To=Request.Form("lloydEmail")
myMail.To="don@lloydcenterice.com"
myMail.TextBody=Request.Form("lloydComments")
myMail.Send
set myMail=nothing
response.redirect("http://www.lloydcenterice.com/contact/contactconf.html")
%>


