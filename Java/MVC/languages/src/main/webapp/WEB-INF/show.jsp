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

    <div class="container col-6 ">
        <div class="m-4">
            <div class="d-flex justify-content-between">
                <h1 class="text-success">Details</h1>
                <div><a lass="btn btn-secondary tme-md-2 text-wrap" href="/languages">Go Back</a></div>
                <form action="/languages/${language.id}" method="post">
                    <input type="hidden" name="_method" value="delete">
                    <input  class=" btn btn-danger tme-md-2 text-wrap" type="submit" value="Delete">
                </form>
                <form action="/languages/${language.id}/edit" method="post">
                    <input type="hidden" name="_method" value="put">
                    <input  class=" btn btn-warning tme-md-2 text-wrap" type="submit" value="Edit">
                </form>
            </div>
        </div>
        <div class="card w-75">
            <div class="card-body">
                <table class="table table-borderless">
                    <tr>
                        <td scope="col">
                            Name:
                        </td>
                        <td class="text-primary">
                            <c:out value="${language.name}"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Creator:
                        </td>
                        <td class="text-primary">
                            <c:out value="${language.creator}"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Version:
                        </td>
                        <td class="text-primary">
                            <c:out value="${language.currentVersion}"/>
                        </td>
                    </tr>
                    <tr>
                    </tr>
                </table>
            </div>
        </div>
    </div>


</body>
</html>