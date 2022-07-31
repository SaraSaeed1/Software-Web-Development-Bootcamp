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
<title>Add Song</title>
</head>
<body>

    <nav class="navbar bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-white">Add Song </a>
            <div class="d-flex">
                <a class="btn btn-outline-light" href="/dashboard">Dashboard</a>
            </div>
        </div>
    </nav>
    <div class="container d-flex bg-light justify-content-center ">
        <div class="my-4">
            <h1 class="text-primary">Add</h1>
            <form:form class ="align-items-center" action="/new" method="post" modelAttribute="lookify">
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <form:label class="col-form-label" path="title">Title</form:label>
                    </div>
                    <div class="row">
                        <form:input class="form-control" path="title"/>
                        <form:errors class="col-form-label text-danger" path="title"/>
                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <form:label class="col-form-label" path="artist">Artist</form:label>
                    </div>
                    <div class="row">
                        <form:input class="form-control" path="artist"/>
                        <form:errors class="col-form-label text-danger" path="artist"/>
                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <form:label class="col-form-label" path="rating">Rating</form:label>
                    </div>
                    <div class="row">
                        <form:input class="form-control" type="number"  min="1" max="10" path="rating"/>
                        <form:errors class="col-form-label text-danger" path="rating"/>
                    </div>
                </div>
                <button class="mt-4 btn btn-outline-success" type="submit"> Add Song</button>
            </form:form> 
        </div>
    </div>
</body>
</html>