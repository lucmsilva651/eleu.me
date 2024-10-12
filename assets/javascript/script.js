const header = document.getElementById("header");
const headerCloseBtn = document.getElementById("header-close");

headerCloseBtn.addEventListener('click', function() {
  header.style.display = "none";
});

const aboutMeBtn = document.getElementById("about-me");
const myProjectsBtn = document.getElementById("my-projects");
const friendsBtn = document.getElementById("friends");
const bioBtn = document.getElementById("full-bio");
const supportBtn = document.getElementById("support-me");

const mIcon1 = document.getElementById("section-ico-1");
const mIcon2 = document.getElementById("section-ico-2");
const mIcon3 = document.getElementById("section-ico-3");
const mIcon4 = document.getElementById("section-ico-4");
const mIcon5 = document.getElementById("section-ico-5");

const contentBox = document.getElementById("content-box");

const tabContents = {
  "about-me": `<h1 class="section-title">About me</h1>Hi! I'm Lucas, a 15 year old passionate programmer from Brazil. Welcome to my personal website!`,
  "my-projects": "Here are some of my personal projects. Explore my <a href='https://github.com/lucmsilva651' target='_blank'>GitHub</a> for more!",
  "friends": "These are my friends and collaborators who inspire me every day.",
  "support-me": "If you'd like to support my work, consider donating or following me on social media!"
};

function activateTab(tabId, iconId) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
    tab.style.color = '#445156';
  });
  
  document.querySelectorAll('.section-icon').forEach(icon => {
    icon.style.color = '#445156';
  });
  
  const activeTab = document.getElementById(tabId);
  const activeIcon = document.getElementById(iconId);

  activeTab.classList.add('active');
  activeTab.style.color = '#ffffff';
  activeIcon.style.color = '#ffffff';
  
  const sanitizedContent = DOMPurify.sanitize(tabContents[tabId]);
  contentBox.innerHTML = sanitizedContent;
};

function addHoverEffect(tab, icon) {
  tab.addEventListener('mouseenter', function() {
    if (!tab.classList.contains('active')) {
      tab.style.color = '#059ad3';
      icon.style.color = '#059ad3';
    };
  });

  tab.addEventListener('mouseleave', function() {
    if (!tab.classList.contains('active')) {
      tab.style.color = '#445156';
      icon.style.color = '#445156';
    };
  });
};

aboutMeBtn.addEventListener('click', () => activateTab('about-me', 'section-ico-1'));
myProjectsBtn.addEventListener('click', () => activateTab('my-projects', 'section-ico-2'));
friendsBtn.addEventListener('click', () => activateTab('friends', 'section-ico-3'));
bioBtn.addEventListener('click', () => location.href ="https://bio.eleu.me");
supportBtn.addEventListener('click', () => activateTab('support-me', 'section-ico-5'));

addHoverEffect(aboutMeBtn, mIcon1);
addHoverEffect(myProjectsBtn, mIcon2);
addHoverEffect(friendsBtn, mIcon3);
addHoverEffect(bioBtn, mIcon4);
addHoverEffect(supportBtn, mIcon5);

window.onload = () => {
  activateTab('about-me', 'section-ico-1');
};
