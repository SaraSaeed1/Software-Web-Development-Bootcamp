
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Ninja Gold</title>
<link rel="stylesheet" type="text/css" href="/style.css">
</head>
<body>
    <div class="main">

        <div class="num-gold">
            <label for="gold">Your Gold:</label>
            <input type="hidden" name="gold"/><c:out value="${gold}"/>
        </div>

        <div class="places">
            <div class="places-div">

                <h3>Farm</h3>
                <h5>(earns 10-20 gold)</h5>
                <form action="/farm" method="post">
                    <input type="hidden"/>
                    <button type="submit">Find Gold!</button>
                </form>
            </div>

            <div class="places-div">
                <h3>Cave</h3>
                <h5>(earns 5-10 gold)</h5>
                <form action="/cave" method="post">
                    <input type="hidden"/>
                    <button type="submit"> Find Gold!</button>
                </form>
            </div>

            <div class="places-div">
                <h3>House</h3>
                <h5>(earns 2-5 gold)</h5>
                <form action="/house" method="post">
                    <input type="hidden" />
                    <button type="submit"> Find Gold!</button>
                </form>
            </div>

            <div class="places-div">
                <h3>Casino</h3>
                <h5>(earns/ takes 0-50 gold)</h5>
                <form action="/casino" method="post">
                    <input type="hidden" />
                    <button type="submit"> Find Gold!</button>
            </div>

        </div>

        <div class="activities">
            <p>Activities:</p>
            <div name=" activity" class="activ">
                <!-- https://metamug.com/article/jsp/if-else-condition-in-jsp.html -->
                <c:forEach var="i" items="${activities}">
                    <c:choose>
                        <c:when test = "${i.contains('failed')}">
                            <p style="color: red ;"><c:out value="${i}"></c:out></p>
                        </c:when>
                        <c:otherwise>
                            <p style="color: green ;"><c:out value="${i}"></c:out></p>
                        </c:otherwise>
                    </c:choose>
                </c:forEach>
            </div>
        </div>
        <br>
            <a href="/reset">Reset</a>
    </div>


</body>
</html>

