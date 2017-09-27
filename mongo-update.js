<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1404.47">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">var MongoClient = require('mongodb').MongoClient;</p>
<p class="p1">var url = "mongodb://localhost:27017/mydb";</p>
<p class="p2"><br></p>
<p class="p1">MongoClient.connect(url, function(err, db) {</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (err) throw err;</p>
<p class="p1"><span class="Apple-converted-space">  </span>var myquery = { address: "Valley 345" };</p>
<p class="p1"><span class="Apple-converted-space">  </span>var newvalues = { name: "Michael", address: "Canyon 123" };</p>
<p class="p1"><span class="Apple-converted-space">  </span>db.collection("customers").updateOne(myquery, newvalues, function(err, res) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (err) throw err;</p>
<p class="p1"><span class="Apple-converted-space">    </span>console.log("1 document updated");</p>
<p class="p1"><span class="Apple-converted-space">    </span>db.close();</p>
<p class="p1"><span class="Apple-converted-space">  </span>});</p>
<p class="p1">});</p>
</body>
</html>
