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
<title>New Dojo</title>
</head>
<body>
    <div class="container-md">
        <h1 class="text-primary mt-4">New Dojo</h1>
        <div class="card p-4 " style="width: 40rem;">
            <form:form action="/create/dojo" method="post" modelAttribute="dojo">
                <table>
                    <tr>
                        <th>
                            <form:label class="col-form-label" path="name">Name</form:label>
                        </th>
                        <td>
                            <form:input class="form-control" path="name"/>
                        </td>
                        <td>
                            <form:errors class="col-form-label text-danger" path="name"/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><button class="mt-4 btn btn-outline-success" type="submit"> Create</button></td>
                    </tr>
                </table>
            </form:form> 
        </div>
    </div>
</body>
</html>