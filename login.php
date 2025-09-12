<?php
session_start();
$users_file = 'users.json';

// Load existing users
$users = file_exists($users_file) ? json_decode(file_get_contents($users_file), true) : [];

// LOGIN
if (isset($_POST['email']) && isset($_POST['password']) && !isset($_POST['name'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    foreach ($users as $user) {
        if ($user['email'] === $email && password_verify($password, $user['password'])) {
            $_SESSION['user'] = $user;
            echo "Login successful!";
            exit;
        }
    }
    echo "Invalid email or password!";
    exit;
}

// SIGNUP
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['confirm_password'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    if ($password !== $confirm_password) {
        echo "Passwords do not match!";
        exit;
    }

    // Prevent duplicate email
    foreach ($users as $user) {
        if ($user['email'] === $email) {
            echo "Email already registered!";
            exit;
        }
    }

    $users[] = [
        'name' => $name,
        'email' => $email,
        'password' => password_hash($password, PASSWORD_DEFAULT)
    ];

    file_put_contents($users_file, json_encode($users, JSON_PRETTY_PRINT));
    echo "Signup successful! You can now login.";
    exit;
}
?>
