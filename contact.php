<?php

    if (isset($_POST['submit'])) {
        if (empty($_POST["name"])) {
            $nameErr = "Name is required";
        } else {
            $name = test_input($_POST["name"]);
            // check if name only contains letters and whitespace
            if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
              $nameErr = "Only letters and white space allowed"; 
            }
        }
        if (empty($_POST["email"])) {
            $emailErr = "Email is required";
        } else {
            $mailFrom = test_input($_POST["email"]);
            // check if e-mail address is well-formed
            if (!filter_var($mailFrom, FILTER_VALIDATE_EMAIL)) {
              $emailErr = "Invalid email format"; 
            }
        }
        if (empty($_POST["message"])) {
            $messageErr = "Message is required";
        } else {
            $message = test_input($_POST["message"]);
        }
        
        $subject = "New Message From Portfolio Website";
        $mailTo = "sgm_1997@hotmail.com";
        $headers = "From: ".$mailFrom;
        $txt = "You have received an e-mail from ".$name.".\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);

        header("Location: index.html");
    }

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>