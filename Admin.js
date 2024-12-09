// Function to show content based on button click
function showContent(type) {
    const mainDisplay = document.getElementById('main-display');

    if (type === 'teacher') {
        // Make an AJAX request to fetch teacher data
        fetch('fetch_teachers.php')
            .then(response => response.json())
            .then(data => {
                let tableContent = `
                    <h2>Teacher Configuration</h2>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Gender</th>
                            <th>Date Enrolled</th>
                        </tr>
                `;

                data.forEach(teacher => {
                    tableContent += `
                        <tr>
                            <td>${teacher.name}</td>
                            <td>${teacher.phone}</td>
                            <td>${teacher.gender}</td>
                            <td>${teacher.date_enrolled}</td>
                        </tr>
                    `;
                });

                tableContent += '</table>';
                mainDisplay.innerHTML = tableContent;
            })
            .catch(error => console.error('Error fetching teacher data:', error));
    } else if (type === 'student') {
        // Make an AJAX request to fetch student data
        fetch('Fetch_Students.php')
            .then(response => response.json())
            .then(data => {
                let tableContent = `
                    <h2>Student Configuration</h2>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>House Number</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Postcode</th>
                            <th>Guardian Name</th>
                            <th>Relationship</th>
                            <th>Occupation</th>
                            <th>Guardian Contact</th>
                            <th>Date Enrolled (dd/mm/yy)</th>
                        </tr>
                `;

                data.forEach(student => {
                    tableContent += `
                        <tr>
                            <td>${student.fullname}</td>
                            <td>${student.telephone}</td>
                            <td>${student.email}</td>
                            <td>${student.gender}</td>
                            <td>${student.house_no}</td>
                            <td>${student.street}</td>
                            <td>${student.city}</td>
                            <td>${student.state}</td>
                            <td>${student.country}</td>
                            <td>${student.postcode}</td>
                            <td>${student.guardian_name}</td>
                            <td>${student.relationship}</td>
                            <td>${student.occupation}</td>
                            <td>${student.guardian_contact}</td>
                            <td>${student.date_enrolled}</td>
                        </tr>
                    `;
                });

                tableContent += '</table>';
                mainDisplay.innerHTML = tableContent;
            })
            .catch(error => console.error('Error fetching student data:', error));
    } else if (type === 'tuition') {
        mainDisplay.innerHTML = `
            <h2>Tuition Package</h2>
            <p>Tuition package data goes here...</p>
        `;
    } else if (type === 'other') {
        mainDisplay.innerHTML = `
            <h2>Other</h2>
            <p>Other data goes here...</p>
        `;
    }
}
