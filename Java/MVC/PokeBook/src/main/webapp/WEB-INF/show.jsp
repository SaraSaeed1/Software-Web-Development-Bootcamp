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
<title>Show Expense</title>
</head>
<body>
    <div class="container col-6 ">
        <div class="m-4">
            <div class="d-flex justify-content-between">
                <h1 class="text-success">Expense Details</h1>
                <div><a class="badge bg-warning text-wrap" href="/expenses">Go Back</a></div>
            </div>
        </div>
        <div class="card w-75">
            <div class="card-body">
                <table class="table table-borderless">
                    <tr>
                        <td scope="col">
                            Expense Name:
                        </td>
                        <td class="text-primary">
                            <c:out value="${ex.expense}"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Expense Description:
                        </td>
                        <td class="text-primary">
                            <c:out value="${ex.description}"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Vendor:
                        </td>
                        <td class="text-primary">
                            <c:out value="${ex.vendor}"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Amount Spent:
                        </td>
                        <td class="text-primary">
                            <c:out value="${ex.amount}"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

</body>
</html>