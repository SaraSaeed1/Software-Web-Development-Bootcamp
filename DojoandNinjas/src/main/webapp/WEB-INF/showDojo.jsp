<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %> 
<%@ page isErrorPage="true" %>   

<!DOCTYPE html>
<html>
<head>
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">

<meta charset="UTF-8">
<title><c:out value="${dojo.name}"/></title>
</head>
<body>

    <div class="container-md">
        <div class="card p-4 text-center text-danger">
            <h1><c:out value="${dojo.name}"/></h1>
            <table class="table table-bordered table-hover mt-4">
                <thead class="table-dark">
                    <tr >
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <c:forEach var ="ninja" items="${dojo.ninjas}">
                        <tr>
                            <td><c:out value="${ninja.first_name}"></c:out></td>
                            <td><c:out value="${ninja.last_name}"></c:out></td>
                            <td><c:out value="${ninja.age}"></c:out></td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>