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
<title>Lookify</title>
</head>
<body>

    <ul class="navbar navbar-inverse nav-fill bg-dark h-50">
        <li class="nav-item">
            <a class="btn btn-outline-light" href="songs/new">Add New</a>
        </li>
        <li class="nav-item">
            <a class="btn btn-outline-light" href="/search/topTen">Top Songs</a>
        </li>
        <li class="nav-item">
            <div class="flex-sm-fill text-sm-center">
                <form action ="/search" class="d-flex my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" name="artist" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </li>
    </ul>
    
    <div class="container mt-4 ">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach var ="x" items="${lookify}">
                        <tr>
                            <td><a href="/songs/${x.id}"><c:out value="${x.title}"/></a></td>
                            <td><c:out value="${x.rating}"/></td>
                            <td>
                                <form action="/delete/${x.id}" method="post">
                                    <input type="hidden" name="_method" value="delete">
                                    <input  class=" btn btn-danger tme-md-2 text-wrap" type="submit" value="Delete">
                                </form>                      
                            </td>
                        </tr>
                    </c:forEach>
            </tbody>
        </table>
    </div>
</body>
</html>