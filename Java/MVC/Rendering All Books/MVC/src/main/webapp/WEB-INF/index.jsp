<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
    <head>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <meta charset="UTF-8" />
        <title>All Books</title>
    </head>
    <body>
        <div class="container">
            <div class="d-flex row ">
                <h1 class="text-danger text-center" >All Books</h1>
                
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Language</th>
                            <th scope="col">Number of pages</th>
                        </tr>
                    </thead>
                    <tbody>
                        <c:forEach var ="book" items="${books}">
                            <tr>
                                <td><c:out value="${book.id}"/></td>
                                <td><a href="/books/${book.id}"><c:out value="${book.title}"/></a></td>
                                <td><c:out value="${book.description}"/></td>
                                <td><c:out value="${book.language}"/></td>
                                <td><c:out value="${book.numberOfPages}"/></td>
                            </tr>
                        </c:forEach>
                    </tbody>
                </table>
            </div>
        </div>
    
    </body>
</html>