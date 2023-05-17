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
    title: 'Video Player',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLink: '.https://kgomotso196.github.io/MyPortfolio/pngFiles/mobileSnapshoot.png',
    technologies: ['Ruby', 'Bootstrap', 'Javasctipt', 'Codekit', 'GitHub', 'Codepen'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 2,
    title: 'Awesome Book',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLink: 'https://kgomotso196.github.io/MyPortfolio/pngFiles/mobileSnapshoot',
    technologies: ['Ruby', 'Bootstrap', 'Javasctipt', 'Codekit', 'GitHub', 'Codepen'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 3,
    title: 'To-do List',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLink: 'https://kgomotso196.github.io/MyPortfolio/pngFiles/mobileSnapshoot',
    technologies: ['Ruby', 'Bootstrap', 'Javasctipt', 'Codekit', 'GitHub', 'Codepen'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 4,
    title: 'Netflix Clone',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLink: 'https://kgomotso196.github.io/MyPortfolio/pngFiles/mobileSnapshoot',
    technologies: ['Ruby', 'Bootstrap', 'Javasctipt', 'Codekit', 'GitHub', 'Codepen'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 5,
    title: 'Digital Clock',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLink: 'https://kgomotso196.github.io/MyPortfolio/pngFiles/mobileSnapshoot',
    technologies: ['Ruby', 'Bootstrap', 'Javasctipt', 'Codekit', 'GitHub', 'Codepen'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 6,
    title: 'Spotify Clone',
    discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageLink: 'https://kgomotso196.github.io/MyPortfolio/pngFiles/mobileSnapshoot',
    technologies: ['Ruby', 'Bootstrap', 'Javasctipt', 'Codekit', 'GitHub', 'Codepen'],
    liveLink: '#',
    sourceLink: '#',
  },
];

const htmlStructure = (id, title, technologies) => `<div class="container1">
        <div class="container2">
          <h3>${title}</h3>
          <ul class="list-language">
            <li class="languages">${technologies[0]}</li>
            <li class="languages">${technologies[1]}</li>
            <li class="languages">${technologies[2]}</li>
            <li class="languages">${technologies[3]}</li>
          </ul>
          <div class="container2-btn">
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

const popup = (id, title, discription, imageLink, technologies, liveLink, sourceLink) => `<div class="overlay" id="popup-${id}">
<div class="popupContainer">
  <div class="popupImgContainer1">
    <img class="popupImg" src="https://kgomotso196.github.io/MyPortfolio/pngFiles/mobileSnapshoot"/>
  </div>
  <div class="closeBtnContainer">
    <button class="closeBtn" id="closeBtn-${id}">&times</button>
    <img class="desktopCloseBtn" src="./svgFiles/crossArrow.svg" id="deskCloseBtn-${id}"/>
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
      <p class="popPara">${discription}</p>
    </div>
    <div class="popDiv3 popupBtnContainer">
      <button class="popupBtn">
        <a href="${liveLink}">See Live</a>
        <img src="https://kgomotso196.github.io/MyPortfolio/pngFiles/liveIcon"/>
      </button>
      <button class="popupBtn">
        <a href="${sourceLink}">See Source</a>
        <img src="https://kgomotso196.github.io/MyPortfolio/pngFiles/Vector"/>
      </button>
    </div>
  </div>
</div>
</div>`;

projectList.forEach((project) => {
  myWorksSection.innerHTML += popup(
    project.id,
    project.title,
    project.discription,
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
