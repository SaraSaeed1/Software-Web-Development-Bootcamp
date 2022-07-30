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
<title>Edit My Task</title>
</head>
<body>
    <div class="container col-6">
        <div class="m-4">
            <div class="d-flex justify-content-between">
                <h1 class="text-primary">Edit expense:</h1>
                <div><a class="badge bg-warning text-wrap" href="/expenses">Go Back</a>
                </div>
            </div>
                <form:form class ="align-items-center" action="/expenses/edit/${ex.id}" method="put" modelAttribute="ex">
                    <input type="hidden" name="_method" value="put">
                    <div class="row g-3 align-items-center">
                        <div class="col-auto">
                            <form:label class="col-form-label" path="expense">Expense</form:label>
                        </div>
                        <div class="col-auto">
                            <form:input path="expense"/>
                            <form:errors class="col-form-label text-danger" path="expense"/>
                        </div>
                    </div>
                    <div class="row g-3 align-items-center">
                        <div class="col-auto">
                            <form:label class="col-form-label" path="vendor">Vendor</form:label>
                        </div>
                        <div class="col-auto">
                            <form:input path="vendor"/>
                            <form:errors class="col-form-label text-danger" path="vendor"/>
                        </div>
                    </div>
                    <div class="row g-3 align-items-center">
                        <div class="col-auto">
                            <form:label class="col-form-label" path="amount">Amount </form:label>
                        </div>
                        <div class="col-auto">
                            <form:input path="amount"/>
                            <form:errors class="col-form-label text-danger" path="amount"/>
                        </div>
                    </div>
                    <div class="row g-3 align-items-center">
                        <div class="col-auto">
                            <form:label class="col-form-label" path="description">Description </form:label>
                        </div>
                        <div class="col-auto">
                            <form:input path="description"/>
                            <form:errors class="col-form-label text-danger" path="description"/>
                        </div>
                    </div>
                    <button class="badge bg-primary text-wrap" type="submit"> Submit</button>
                </form:form>  
            </div>
        </div>
    </div>
</body>
</html>