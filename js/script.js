let loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (email == "" || password == "") {
            alert("Please enter email and password");
        }
        else if (email == "admin@gmail.com" && password == "12345") {
            alert("Login successful");
            window.location.href = "dashboard.html";
        }
        else {
            alert("Invalid email or password");
        }

    });

}

let form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (email == "" || password == "") {
            alert("Please enter email and password");
        }
        else if (email == "admin@gmail.com" && password == "12345") {
            alert("Login successful");
            window.location.href = "dashboard.html";
        }
        else {
            alert("Invalid email or password");
        }

    });

}

let searchStudent = document.getElementById("searchStudent");

if (searchStudent) {

    searchStudent.addEventListener("keyup", function () {

        let searchValue = searchStudent.value.toLowerCase();
        let rows = document.querySelectorAll("#studentTable tbody tr");

        rows.forEach(function (row) {

            let studentName = row.cells[1].textContent.toLowerCase();

            if (studentName.includes(searchValue)) {
                row.style.display = "";
            }
            else {
                row.style.display = "none";
            }

        });

    });

}

let addStudent = document.getElementById("addStudent");

if (addStudent) {

    addStudent.addEventListener("click", function () {

        let name = prompt("Enter student name:");
        let studentClass = prompt("Enter student class:");
        let email = prompt("Enter student email:");

        if (name != "" && studentClass != "" && email != "") {

            let table = document.querySelector("#studentTable tbody");

            let row = table.insertRow();

            let id = table.rows.length;

            row.innerHTML =
                "<td>00" + id + "</td>" +
                "<td>" + name + "</td>" +
                "<td>" + studentClass + "</td>" +
                "<td>" + email + "</td>" +
                "<td>Active</td>" +
                "<td>" +
                "<button onclick='editStudent(this)'>Edit</button> " +
                "<button onclick='deleteStudent(this)'>Delete</button>" +
                "</td>";

            alert("Student added successfully");

        }
        else {
            alert("Please enter all student information");
        }

    });

}

function deleteStudent(button) {

    let row = button.parentElement.parentElement;

    let answer = confirm("Do you want to delete this student?");

    if (answer) {
        row.remove();
        alert("Student deleted successfully");
    }

}

function editStudent(button) {

    let row = button.parentElement.parentElement;

    let name = prompt("Enter new student name:", row.cells[1].textContent);

    if (name != null && name != "") {

        row.cells[1].textContent = name;

        alert("Student updated successfully");

    }

}
