<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>See Picks</title>
<script src="js/jquery-3.1.1.js"></script>
<script src="js/bootstrap.js"></script>
<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="stylesheet" type="text/css" href="css/navBar.css" />
<script src="https://www.gstatic.com/firebasejs/3.6.4/firebase.js"></script>
<script>
	$(function() {
		$("#navBarImport").load("navBar.html");
	});
	function addScript(filename)
	{;
		 var scriptBlock=document.createElement('script');
		 scriptBlock.setAttribute("type","text/javascript");
		 scriptBlock.setAttribute("src", filename);
		 document.getElementsByTagName("head")[0].appendChild(scriptBlock);
	};
</script>
</head>
<body onload="addScript('js/login.js')">
	<div id="navBarImport"></div>

</body>
</html>