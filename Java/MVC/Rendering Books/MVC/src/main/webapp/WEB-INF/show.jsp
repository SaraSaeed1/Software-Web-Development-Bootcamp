<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Rendering Books</title>
    </head>
    <body>
        <div class="container">
            <h1><c:out value="${book.title}"/></h1>
            <h4>Description: <c:out value="${book.description}"/> </h4>
            <h4>Language: <c:out value="${book.language}"/> </h4>
            <h4>Number of pages: <c:out value="${book.numberOfPages}"/> </h4>
        </div>
    </body>
</html>
