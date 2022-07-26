<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
<meta charset="UTF-8">
<title>IOmikuji Form</title>
</head>
<body>
    <div class="container mt-4">
        <div class="position-absolute top-50 start-50 translate-middle">
            <h1 class="text-center">Here's Your Omikuji!</h1>
            <div class="card mt-4 p-4" style="width: 50rem; background-color: cornflowerblue;">
                <p>
                    In <c:out value="${num}"/> years, you will live in <c:out value="${city}"/> with <c:out value="${person}"/> as your roommate, <c:out value="${hobby}"/> for a living. The next time you see a <c:out value="${living}"/>, you will have good luck. Also, <c:out value="${desc}"/>
                </p>
            </div>
            <a type="button" class=" mt-4 btn btn-outline-primary" href="/omikuji">Go Back</a>
        </div>
    </div>

</body>
</html>