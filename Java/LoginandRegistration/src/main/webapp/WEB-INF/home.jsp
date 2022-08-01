<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

    
    <div class="container">
        <h1>Welcome, <c:out value="${user.userName}" /></h1>
        <h4>This is your dashboard. Nothing to see here yet.</h4>
        <a href="logout">Log Out</a>
    </div>
    
</body>
</html>