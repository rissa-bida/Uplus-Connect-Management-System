function updateSchoolGrades() {
    const schoolType = document.getElementById('school-type').value;
    const schoolGrade = document.getElementById('school-grade');

    // Clear existing options
    schoolGrade.innerHTML = '<option value="" disabled selected>Select School Grade</option>';

    if (schoolType === 'sk' || schoolType === 'sjkc') {
        // Populate Year 1 to Year 6
        for (let i = 1; i <= 6; i++) {
            const option = document.createElement('option');
            option.value = `year${i}`;
            option.text = `Year ${i}`;
            schoolGrade.add(option);
        }
    } else if (schoolType === 'smk') {
        // Populate Form 1 to Form 5
        for (let i = 1; i <= 5; i++) {
            const option = document.createElement('option');
            option.value = `form${i}`;
            option.text = `Form ${i}`;
            schoolGrade.add(option);
        }
    }
}
