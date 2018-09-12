<?php
//logout.php
session_start(); 
session_destroy(); 
header("location: /business_opportunities.php"); 
?>