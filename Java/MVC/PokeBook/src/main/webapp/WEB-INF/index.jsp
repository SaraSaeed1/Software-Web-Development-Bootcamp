<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %> 
<%@ page isErrorPage="true" %>   

<html>
    <!DOCTYPE html>
<html>
<head>
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">

<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

    <div class="container">
        <div class="d-flex row ">
            <h1 class="text-danger text-center" >PokeBook</h1>
            
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Expense</th>
                        <th scope="col">Vendor</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach var ="expense" items="${expenses}">
                        <tr>
                            <td><c:out value="${expense.expense}"/></a></td>
                            <td><c:out value="${expense.vendor}"/></td>
                            <td><c:out value="${expense.amount}"/></td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
        </div>
        <div class="m-4">
            <h1 class="text-primary">Track an expense:</h1>
            <form:form class ="align-items-center" action="/expense" method="post" modelAttribute="ex">
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
</body>
</html>