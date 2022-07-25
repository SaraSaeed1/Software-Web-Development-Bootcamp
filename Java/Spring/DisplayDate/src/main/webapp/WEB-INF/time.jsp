<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%> 
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
<script type="text/javascript" src="/js/js2.js"></script>

<meta charset="UTF-8">
<title>Time</title>
</head>
<body>
	<div class="container m-4 d-flex row justify-content-center">
		<div class="btn-group" role="group" aria-label="Basic outlined example">
		  <a type="button" class="btn btn-outline-primary" href="/date" >Date Template</a>
		  <a type="button" class="btn btn-primary" href="/time" >Time Template</a>
		  <a type="button" class="btn btn-outline-primary" href="/" >Home</a>
		</div>
		<br>
		<h1 class=" position-absolute top-50 start-50 translate-middle text-success text-center"><c:out value="${time}"/> </h1>
	</div>
</body>
</html>