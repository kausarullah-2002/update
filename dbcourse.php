<?php
    include "db.php";
    global $connection;

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $program = $_POST['program'];
        $campus = $_POST['campus'];
   
        // checking your variable from database table 
            $courdatainsert = " INSERT INTO  course (`programName`,`campusName`) VALUE ('".$program."', '".$campus."')";
            $collect = mysqli_query($connection , $courdatainsert);

    if($collect){
        header("Location: course.html?error= your data submit and successfully thank you ");
    }
    else{
        echo "not submit your data ";
    }
}
?>