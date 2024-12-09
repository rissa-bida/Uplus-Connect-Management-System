<?php
// Database connection settings
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from POST request
$fullname = $_POST['fullname'];
$telephone = $_POST['telephone'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$birthday = $_POST['birthday'];
$IC = $_POST['IC'];
$age = $_POST['age'];
$school_name = $_POST['school-name'];
$school_type = $_POST['school-type'];
$school_grade = $_POST['school-grade'];
$password = $_POST['password'];
$house_no = $_POST['house-no'];
$street = $_POST['street'];
$city = $_POST['city'];
$state = $_POST['state'];
$country = $_POST['country'];
$postcode = $_POST['postcode'];
$guardian_name = $_POST['guardian-name'];
$relationship = $_POST['relationship'];
$occupation = $_POST['occupation'];
$guardian_contact = $_POST['guardian-contact'];
$date_enrolled = date("d-m-Y");

// Insert data into database
$sql = "INSERT INTO students (fullname, telephone, email, gender, birthday, IC, age, school_name, school_type, school_grade, password, house_no, street, city, state, country, postcode, guardian_name, relationship, occupation, guardian_contact, date_enrolled)
VALUES ('$fullname', '$telephone', '$email', '$gender', '$birthday', '$IC', '$age', '$school_name', '$school_type', '$school_grade', '$password', '$house_no', '$street', '$city', '$state', '$country', '$postcode', '$guardian_name', '$relationship', '$occupation', '$guardian_contact', '$date_enrolled')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection to the database
$conn->close();
?>
