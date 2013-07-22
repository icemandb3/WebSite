<%
Dim strgrpName, strconName, strconAddr, strconCity, strconState, strconZip, strconPhone
Dim strconEmail, strNumSkaters, strArrDate, strArrTime, strDepTime, strFullMessage 

strgrpName = request.form("groupname")
strconName = request.form("contactname")
strconAddr = request.form("contactaddress")
strconCity = request.form("contactcity")
strconState = request.form("contactstate")
strconZip = request.form("contactzip")
strconPhone = request.form("contactphone")
strconEmail = request.form("contactemail")
strNumSkaters = request.form("numskaters")
strArrDate = request.form("arrivaldate")
strArrTime = request.form("arrivaltime")
strDepTime = request.form("departtime")
strFullMessage = "Group Name: " & strgrpName & vbNewline & "Contact Name: " & strconName & vbNewline & "Contact Address: " &_
 strconAddr & vbNewline & "City: " & strconCity & vbNewline & "State: " & strconState & vbNewline & "Zip: " & strconZip & vbNewline &_
 "Phone: " & strconPhone & vbNewline & "Number of Skaters: " & strNumSkaters & vbNewline & "Arrival Date: " & strArrDate & vbNewline &_
 "Arrival Time: " & strArrTime & vbNewline & "Departure Time: " & strDepTime


Set myMail=CreateObject("CDO.Message")
myMail.Subject="Group Skate Request"
myMail.From=strconEmail
'myMail.To="m_ran66@hotmail.com"
myMail.To="don@lloydcenterice.com"
'myMail.To="Holly@LloydCenterIce.com"
'myMail.TextBody=Request.Form("lloydComments")
myMail.TextBody=strFullMessage
myMail.Send
set myMail=nothing
response.redirect("http://www.lloydcenterice.com/group/groupconf.html")
%>
