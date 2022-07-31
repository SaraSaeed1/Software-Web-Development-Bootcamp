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
<title><c:out value="${song.title}"/></title>
</head>
<body>
    <nav class="navbar bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-white"><c:out value="${song.title}"/> </a>
            <div class="d-flex">
                <a class="btn btn-outline-light" href="/dashboard">Dashboard</a>
            </div>
        </div>
    </nav>
    <div class="container bg-light mt-4">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <td><c:out value="${song.title}"/></a></td>
                </tr>
                <tr>
                    <th scope="col">Artist</th>
                    <td><c:out value="${song.artist}"/></a></td>
                </tr>
                <tr>
                    <th scope="col">Rating</th>
                    <td><c:out value="${song.rating}"/></a></td>
                </tr>
                <tr>
                    <th scope="col">Action</th>
                    <td>
                        <form action="/delete/${song.id}" method="post">
                            <input type="hidden" name="_method" value="delete">
                            <input  class=" btn btn-danger tme-md-2 text-wrap" type="submit" value="Delete">
                        </form>                      
                    </td>
                </tr>
            </thead>
        </table>
    </div>
</body>
</html>