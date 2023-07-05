<?php 
include "db.php";
global $connection;
// send request to connect database 
if($_SERVER["REQUEST_METHOD"] == "POST"){
        $sdtname = $_POST["fullname"];
        $fathername = $_POST["fathername"];
        $sdtemail = $_POST["stdemail"];
        $sdtcontact = $_POST["contact"];
        $sdtcnic = $_POST["stdCNIC"];
        $CNICnumber = $_POST["fCNIC"];
        $sdtage = $_POST["age"];
        $sdtgender = $_POST["gender"];
        $sdtaddress = $_POST["address"];
        $sdtcity = $_POST["city"]; 
        
            
            $sdteducation = $_POST["state"];

// checking your variable from database table
$query = "SELECT stdCNIC  FROM student WHERE stdCNIC =  '" . $sdtcnic ."' ";
$result = mysqli_query($connection , $query);
$count = mysqli_num_rows($result);
$result -> free();
// check user cnic 
if($count >=  1){
    header("Location: alert.html");
    exit();
} 
else{
        $insertvalue =" INSERT INTO student (`stdFullName`,`stdFatherName`,`stdEmail`,`stdContact`,`stdCNIC`,`stdFatherCNIC`,`stdAge`,`stdGender`,`stdCity`,`stdAddress`) VALUE ('".$sdtname."', '".$fathername."', '".$sdtemail."', '".$sdtcontact."', '".$sdtcnic."', '".$CNICnumber."', '".$sdtage."', '".$sdtgender."', '".$sdtaddress."', '".$sdtcity."')";
        $insertquery = mysqli_query($connection , $insertvalue);

        if($insertquery){
                header("Location: profile1.php?error = you are already registered thank you ! ");
                exit();
        }
}
exit();
}
?>