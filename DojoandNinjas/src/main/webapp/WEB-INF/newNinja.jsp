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
<title>New Ninja</title>
</head>
<body>
    <div class="container-md">
        <h1 class="text-primary mt-4">New Ninja</h1>
        <div class="card p-4 " style="width: 30rem;">
            <form:form action="/create/ninja" method="post" modelAttribute="ninja">
                <table>
                    <tr>
                        <th>
                            <form:label class="col-form-label" path="dojo">Dojo</form:label>
                        </th>
                        <td>
                            <form:select path="dojo">
                                <c:forEach items="${dojos}" var="d">
                                    <form:option  value ="${d.id}" class="form-control">
                                        <c:out value="${d.name}"/>
                                    </form:option>
                                </c:forEach>
                            </form:select>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>
                            <form:label class="col-form-label" path="first_name">First Name</form:label>
                        </th>
                        <td>
                            <form:input class="form-control" path="first_name"/>
                        </td>
                        <td>
                            <form:errors class="col-form-label text-danger" path="first_name"/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <form:label class="col-form-label" path="last_name">Last Name</form:label>
                        </th>
                        <td>
                            <form:input class="form-control" path="last_name"/>
                        </td>
                        <td>
                            <form:errors class="col-form-label text-danger" path="last_name"/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <form:label class="col-form-label" path="age">Age</form:label>
                        </th>
                        <td>
                            <form:input class="form-control" path="age"/>
                        </td>
                        <td>
                            <form:errors class="col-form-label text-danger" path="age"/>
                        </td>
                    </tr>
                    <tr>
                    <tr>
                        <td></td>
                        <td><button class="mt-4 btn btn-outline-success" type="submit"> Create</button></td>
                        <td></td>
                    </tr>
                </table>
            </form:form> 
        </div>
    </div>
</body>
</html>