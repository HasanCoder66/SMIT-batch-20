let fullName = document.querySelector(".fullName");
let cnic = document.querySelector(".cnic");
let course = document.querySelector(".course");
let campus = document.querySelector(".campus");
let image = document.querySelector(".image");

// id card elements neechy walyyy

// ====>

let idCardParent = document.querySelector("#cardParent")



let studentData = {};

function generateIdCard() {

  if (!fullName.value.trim() || !cnic.value.trim()) {
    return sweety("error", "Oops..", "Please fill all the fields.");
  }

  if (course.value == "Select your course") {
    return sweety("error", "Oops..", "Please Select your course");
  }

  if (campus.value == "Select your campus") {
    return sweety("error", "Oops..", "Please Select your campus");
  }

  if (!image.files[0]) {
    return sweety("error", "Oops..", "Please Upload Image");
  }

  let imageKaUrl = createImageUrl(image.files);
  let rollNum = rollNumGenerator();

  studentData.fullName = fullName.value;
  studentData.cnic = cnic.value;
  studentData.campus = campus.value;
  studentData.course = course.value;
  studentData.profileImg = imageKaUrl;
  studentData.rollNum = `S-${rollNum}`;
  // console.log(studentData);

  idCardGenerator(studentData);

  fullName.value = ""
  cnic.value = ""
  campus.selectIndex = "select your campus"
  course.value = "select your course"
  image.value = ""

}

function idCardGenerator(data) {
  console.log("id card banadiyaa...", data);

  idCardParent.innerHTML = `<div id="id-card">

  <div class="card-header">
    <h2>Student ID Card</h2>
    <p>University / Institute Name</p>
  </div>

  <div class="profile-section">
    <img src=${data.profileImg} alt="Student Profile">
  </div>

  <div class="info">

    <div class="info-row">
      <span class="label">Full Name</span>
      <span class="value">${data.fullName}</span>
    </div>

    <div class="info-row">
      <span class="label">CNIC</span>
      <span class="value">${data.cnic}</span>
    </div>

    <div class="info-row">
      <span class="label">Course</span>
      <span class="value">${data.course}</span>
    </div>

    <div class="info-row">
      <span class="label">Campus</span>
      <span class="value">${data.campus}</span>
    </div>

    <div class="info-row">
      <span class="label">Roll Number</span>
      <span class="value">${data.rollNum}</span>
    </div>

  </div>



</div>`
}



function createImageUrl(file) {
  console.log(file);
  if (file) {
    const imageUrl = URL.createObjectURL(file[0]);
    return imageUrl;
  }
}




function rollNumGenerator() {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  let rollNum = "";
  for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * nums.length);

    rollNum += nums[randomNum];
  }

  return rollNum;
}


function sweety(icon, title, text) {
  return Swal.fire({
    icon,
    title,
    text,
  });
}
