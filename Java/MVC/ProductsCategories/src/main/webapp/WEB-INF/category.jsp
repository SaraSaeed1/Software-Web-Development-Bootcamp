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
<title>${category.name}</title>
</head>
<body>
    <div class="container">
        <div class="mt-4 text-center">
            <h1>${category.name}</h1>
            <a href="/products/new">Add Product</a> |
            <a href="/categories/new">Add Category</a>
        </div>
        <div class="container d-flex justify-content-between bg-light p-5 my-4 " >
            <div class="col-md-4">
                <h2>Products:</h2>
                <c:forEach var="product" items="${category.products}">
                    <li><c:out value="${product.name}"></c:out></li>
                </c:forEach>
            </div>

            <div class="col-md-4">
                <form action="/categories/${category.id}" method="post">
                    <label>Category</label>
                    <select name="product" class="form-control">
                        <c:forEach var="product" items="${products}">
                            <option value="${product.id}">
                                <c:out value="${product.name}" />
                            </option>
                        </c:forEach>
                    </select>
                    <input type="submit" value="Add" class="btn btn-success mt-4" />
                </form>
            </div>
        </div>
    </div>
</body>
</html>