<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %> 
<%@ page isErrorPage="true" %>   

 <!DOCTYPE html>
<head>
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">

<meta charset="UTF-8">
<title>New category</title>
</head>
<body>
    <div class="container">
        <div class="mt-4 text-center">
            <h1>New category..</h1>
            <a href="/products/new">Add Product</a>
        </div>
        <div class="container bg-light p-5 my-4 " >
            <table class="table table-responsive-ms col-6">
                <thead>
                    <tr>
                        <th>
                            <form:form action="/categories/new" method="post" modelAttribute="newCategory">
                                <form:errors path="name" class="text-danger" />
                            <div class="form-group">
                                <label>Name:</label>
                                <form:input path="name" class="form-control" />
                            </div>
                            <input type="submit" value="Create" class="btn btn-primary mt-4" />
                            </form:form>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</body>
</html>