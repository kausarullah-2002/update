<?php
    include "db.php";
    global $connection;

    
            $filename = $_FILES["uploadfile"] ["name"];
            $tempname = $_FILES["uploadfile"] ["tmp_name"];
            $foder = "uploadfile/".$filename;
            move_uploaded_file($tempname, $foder);

            $filename = $_FILES["uploadfile2"] ["name"];
            $tempname = $_FILES["uploadfile2"] ["tmp_name"];
            $foder2 = "uploadfile/".$filename;
            move_uploaded_file($tempname, $foder);

            if($filename != ""){
                $query = " INSERT INTO payment (`fileupload`, `uploadfile2`) value ('".$foder."' , '".$foder2."')";
                $count = mysqli_query($connection , $query);
            
            if($count){
                header("Location: payment3.php");
            }
        }
        else{
            header("Location: payment.html");
        }

?>