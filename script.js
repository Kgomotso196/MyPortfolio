const menu = document.querySelector('.hamItems');
const mobileNav = document.querySelector('.mobNav');
const ham = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.closeBtn');
const hide = document.querySelector('.footerSocialIconsContainer');

menu.classList.add('invisible');

ham.addEventListener('click', () => {
  menu.classList.remove('invisible');
  mobileNav.classList.add('invisible');
  hide.classList.add('invisible');
});

closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('invisible');
  menu.classList.add('invisible');
  hide.classList.remove('invisible');
});

menu.addEventListener('click', () => {
  menu.classList.add('invisible');
  mobileNav.classList.remove('invisible');
  hide.classList.remove('invisible');
});

const myWorksSection = document.querySelector('.workContainer');
const projectList = [
  {
    id: 1,
    title: 'First Capstone - Music Concert',
    description: "FirstCapstoneProject is a two page website designed for Music Festal in Newtown.It has been designed using HTML, CSS, JS and some parts are designed dynamically like the 'the speakers' section' part, and has the functionality for both mobile-first and desktop-first versions.",
    imageLink: './pngFiles/Capstone.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    liveLink: 'https://kgomotso196.github.io/FirstCapstoneProject/',
    sourceLink: 'https://github.com/Kgomotso196/FirstCapstoneProject',
  },
  {
    id: 2,
    title: 'Awesome-Book-ES6',
    description: 'Awesome Books is an app code used to enhance its organization by incorporating modules.It focuses on utilizing ES6 modules to write JavaScript code in a modular manner.',
    imageLink: './pngFiles/AwesomeBooks.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'WebPack'],
    liveLink: 'https://kgomotso196.github.io/Awesome-Books-ES6/',
    sourceLink: 'https://github.com/Kgomotso196/Awesome-Books-ES6',
  },
  {
    id: 3,
    title: 'To-do List',
    description: 'To-do List is a tool used by developers to keep track of work that needs to be done, track progress, and prioritize tasks,Unit testing done using jest library.',
    imageLink: './pngFiles/ToDos.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'WebPack'],
    liveLink: 'https://kgomotso196.github.io/Testing-To-Do-List/dist',
    sourceLink: 'https://github.com/Kgomotso196/Testing-To-Do-List',
  },
];

const htmlStructure = (id, title, technologies) => `<div class="firstContainer">
        <div class="secondContainer">
          <h3>${title}</h3>
          <ul class="listLanguage">
            <li class="languages">${technologies[0]}</li>
            <li class="languages">${technologies[1]}</li>
            <li class="languages">${technologies[2]}</li>
            <li class="languages">${technologies[3]}</li>
          </ul>
          <div class="secondContainerBtn">
            <button type="button" id="project-${id}" class="see-project click">See Project</button>
          </div>
        </div>
      </div>`;
projectList.forEach((project) => {
  myWorksSection.innerHTML += htmlStructure(
    project.id,
    project.title,
    project.technologies,
  );
});

const popup = (id, title, description, imageLink, technologies, liveLink, sourceLink) => `<div class="overlay" id="popup-${id}">
<div class="popupContainer">
  <div class="popupImgContainer1">
    <img class="popupImg" src="./pngFiles/Capstone.png"/>
  </div>
  <div class="closeBtnContainer">
    <button class="closeBtn" id="closeBtn-${id}">&times</button>
    <img class="desktopCloseBtn" src="./pngFiles/crossArrow.png" id="deskCloseBtn-${id}"/>
  </div>
  <div class="popDiv">
    <div class="popDiv1">
      <h1 class="popHeading">${title}</h1>
      <ul class="techList">
        <li class="techItem">${technologies[0]}</li>
        <li class="techItem">${technologies[1]}</li>
        <li class="techItem">${technologies[2]}</li>
      </ul>
    </div>
    <div class="popDiv2">
      <p class="popPara">${description}</p>
    </div>
    <div class="popDiv3 popupBtnContainer">
      <button class="popupBtn">
        <a href="${liveLink}">See Live</a>
        <img src="./pngFiles/liveIcon.png"/>
      </button>
      <button class="popupBtn">
        <a href="${sourceLink}">See Source</a>
        <img src="./pngFiles/Vector.png"/>
      </button>
    </div>
  </div>
</div>
</div>`;

projectList.forEach((project) => {
  myWorksSection.innerHTML += popup(
    project.id,
    project.title,
    project.description,
    project.imageLink,
    project.technologies,
    project.liveLink,
    project.sourceLink,
  );
});

projectList.forEach((project) => {
  const showBtn = document.getElementById(`project-${project.id}`);
  showBtn.addEventListener('click', () => {
    const showPop = document.getElementById(`popup-${project.id}`);
    showPop.style.display = 'flex';
  });
});

projectList.forEach((project) => {
  const closeBtn = document.getElementById(`closeBtn-${project.id}`);
  closeBtn.addEventListener('click', () => {
    const showpop2 = document.getElementById(`popup-${project.id}`);
    showpop2.style.display = 'none';
  });
});

projectList.forEach((project) => {
  const deskCloseBtn = document.getElementById(`deskCloseBtn-${project.id}`);
  deskCloseBtn.addEventListener('click', () => {
    const showpop3 = document.getElementById(`popup-${project.id}`);
    showpop3.style.display = 'none';
  });
});

const form = document.querySelector('.contactForm');
const email = document.querySelector('.fEmail');
const errorMsg = document.querySelector('.errorMsg');
form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    errorMsg.textContent = 'Your email should be in lowercase';
  }
});

const uName = document.querySelector('.fText');
const textArea = document.querySelector('.fTextArea');

function storeData() {
  const userData = {
    userName: uName.value,
    userEmail: email.value,
    userTextMsg: textArea.value,
  };
  localStorage.setItem('userInfo', JSON.stringify(userData));
}

uName.addEventListener('focusout', storeData);
email.addEventListener('focusout', storeData);
textArea.addEventListener('focusout', storeData);

const uData = JSON.parse(localStorage.getItem('userInfo'));

if (uData) {
  uName.value = uData.userName;
  email.value = uData.userEmail;
  textArea.value = uData.userTextMsg;
}
