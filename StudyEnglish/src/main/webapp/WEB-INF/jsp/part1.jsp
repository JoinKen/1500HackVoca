
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <link rel="apple-touch-icon" sizes="76x76" href="assets/img/favicon.ico" />

  <title>Material Bootstrap Wizard by Creative Tim</title>

  <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
  <meta name="viewport" content="width=device-width" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
  <!-- index page -->
  <link href="static/index/css/bootstrap.css" rel="stylesheet" />

  <link href="static/index/css/pe-icon-7-stroke.css" rel="stylesheet" />
  <link href="static/index/css/ct-navbar.css" rel="stylesheet" />
  <link href="static/index/css/musicplay.css" rel="stylesheet" />

  <!-- end -->
  <link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png" />
  <link rel="icon" type="image/png" href="assets/img/favicon.png" />

  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />

  <!-- CSS Files -->
  <link href="static/assets/css/bootstrap.min.css" rel="stylesheet" />
  <link href="static/assets/css/material-bootstrap-wizard.css" rel="stylesheet" />

  <!-- CSS Just for demo purpose, don't include it in your project -->
  <link href="static/assets/css/demo.css" rel="stylesheet" />
  <link href="static/assets/css/voca-style.css" rel="stylesheet" />

  <!-- index page -->
  <style>
  </style>
  <!-- end index -->

</head>

<body>
<c:forEach var="task1" items="${task1}" >
<label>${task1.name}</label><label>${task1.contentenglish}</label>
</c:forEach>
		
		
		
</body>

</html>