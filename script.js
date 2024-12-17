document.addEventListener('DOMContentLoaded', function() {
    populateDistricts();
    addEventListeners();
});

function addEventListeners() {
    document.getElementById('qualification').addEventListener('change', handleQualificationChange);
    document.getElementById('admission-form').addEventListener('submit', handleFormSubmit);
}

function handleQualificationChange() {
    const qualification = this.value;
    const percentageGroup = document.getElementById('percentage-group');
    const mhtcetGroup = document.getElementById('mhtcet-group');
    
    if (qualification === '12th') {
        mhtcetGroup.style.display = 'block';
        percentageGroup.style.display = 'none';
        document.getElementById('mhtcet').required = true;
        document.getElementById('percentage').required = false;
    } else if (qualification === 'Diploma') {
        percentageGroup.style.display = 'block';
        mhtcetGroup.style.display = 'none';
        document.getElementById('mhtcet').required = false;
        document.getElementById('percentage').required = true;
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const qualification = document.getElementById('qualification').value;
    const branch = document.getElementById('branch').value;
    const category = document.getElementById('category').value;
    const district = document.getElementById('district').value;
    let score;

    if (qualification === '12th') {
        score = parseFloat(document.getElementById('mhtcet').value);
    } else {
        score = parseFloat(document.getElementById('percentage').value);
    }

    const colleges = getColleges(qualification, score, branch, category, district);
    displayColleges(colleges);
}

function populateDistricts() {
    const districts = [
        "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule",
        "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban",
        "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri",
        "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"
    ];

    const districtDropdown = document.getElementById('district');
    districts.forEach(district => {
        const option = document.createElement('option');
        option.value = district;
        option.textContent = district;
        districtDropdown.appendChild(option);
    });
}

function getColleges(qualification, score, branch, category, district) {
    // Sample colleges data (replace with actual data or API call)
    const colleges = [
        "Government College of Engineering, Pune",
        "Veermata Jijabai Technological Institute, Mumbai",
        "College of Engineering, Pune",
        "Private University, City D"
    ];

    // Logic to filter colleges based on qualification, score, branch, category, and district
    // Replace with actual logic based on your data or API

    return colleges; // Return filtered colleges
}

function displayColleges(colleges) {
    const collegeList = document.getElementById('college-list');
    collegeList.innerHTML = '';
    colleges.forEach(college => {
        const listItem = document.createElement('li');
        listItem.textContent = college;
        collegeList.appendChild(listItem);
    });
    document.getElementById('results-section').style.display = 'block';
}
