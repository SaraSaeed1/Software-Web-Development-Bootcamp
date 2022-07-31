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
<title>Edit</title>
</head>
<body>
    <div class="container col-6">
        <div class="m-4">
            <div class="d-flex justify-content-between">
                <h1 class="text-primary">Edit expense:</h1>
                <div><a class="btn btn-secondary tme-md-2 text-wrap" href="/languages">Go Back</a></div>
                <form action="/languages/${language.id}" method="post">
                    <input type="hidden" name="_method" value="delete">
                    <input  class=" btn btn-danger tme-md-2 text-wrap" type="submit" value="Delete">
                </form>
            </div>
        </div>
        <div class="m-4">
            <form:form class ="align-items-center" action="/languages/${language.id}" method="put" modelAttribute="language">
                <input type="hidden" name="_method" value="put">
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <form:label class="col-form-label" path="name">name</form:label>
                    </div>
                    <div class="col-auto">
                        <form:input path="name"/>
                        <form:errors class="col-form-label text-danger" path="name"/>
                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <form:label class="col-form-label" path="creator">creator</form:label>
                    </div>
                    <div class="col-auto">
                        <form:input path="creator"/>
                        <form:errors class="col-form-label text-danger" path="creator"/>
                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <form:label class="col-form-label" path="currentVersion">Version </form:label>
                    </div>
                    <div class="col-auto">
                        <form:input path="currentVersion"/>
                        <form:errors class="col-form-label text-danger" path="currentVersion"/>
                    </div>
                </div>
                <button class="badge bg-primary text-wrap" type="submit"> Submit</button>
            </form:form>  
        </div>
    </div>
</body>
</html>