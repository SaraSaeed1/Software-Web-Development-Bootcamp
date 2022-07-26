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
        <h1>Send an Omikuji!</h1>
        <form class="mt-4" action="/send" method="post">
            <div>
                <label for="num">Pick any number from 5 to 25</label>
                <input type="number" name="num" min="5" max="25">
            </div>
            <div class="mb-3">
                <label for="city" class="form-label">Enter the name of any city</label>
                <input type="text" name="city" class="form-control" >
            </div>
            <div class="mb-3">
                <label for="person" class="form-label">Enter the name of any real person</label>
                <input type="text" name="person" class="form-control" >
            </div>
            <div class="mb-3">
                <label for="hobby" class="form-label">Enter professional endeavor or hobby:</label>
                <input type="text" name="hobby" class="form-control" >
            </div>
            <div class="mb-3">
                <label for="living" class="form-label">Enter any type of living thing.</label>
                <input type="text" name="living" class="form-control" >
            </div>
            <div class="mb-3">
                <label for="desc" class="form-label">Say something nice to someone:</label>
                <textarea name="desc" class="form-control" ></textarea>
            </div>
            <div class="mb-3">
                <label for="send" class="form-label">Send and show a friend</label>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </div>

</body>
</html>
