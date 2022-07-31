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
<title>Language</title>
</head>
<body>

    <div class="container col-6">
        <div class="d-flex row ">
            <h1 class="text-danger text-center" >Language</h1>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Creator</th>
                        <th scope="col">Version</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach var ="language" items="${lang}">
                        <tr>
                            <td><a href="/languages/${language.id}"><c:out value="${language.name}"/></a></td>
                            <td><c:out value="${language.creator}"/></td>
                            <td><c:out value="${language.currentVersion}"/></td>
                            <td>
                                <form action="/languages/${language.id}/edit" method="post">
                                    <input type="hidden" name="_method" value="put">
                                    <input  class=" btn btn-warning tme-md-2 text-wrap" type="submit" value="Edit">
                                </form>
                            </td>
                            <td>
                                <form action="/languages/${language.id}" method="post">
                                    <input type="hidden" name="_method" value="delete">
                                    <input  class=" btn btn-danger tme-md-2 text-wrap" type="submit" value="Delete">
                                </form>                      
                            </td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
        </div>
        <div class="m-4">
            <h1 class="text-primary">Add</h1>
            <form:form class ="align-items-center" action="/languages" method="post" modelAttribute="languages">
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