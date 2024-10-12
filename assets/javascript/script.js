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
  "about-me": `<h1 class="section-title">About me</h1><p>Hi! I'm Lucas, a 15 year old passionate programmer from Brazil. Welcome to my website!</p><p>Test</p>`,
  "my-projects": `<h1 class="section-title">My projects</h1><p>Here are some of my personal projects. Explore my <a href='https://github.com/lucmsilva651' target='_blank'>GitHub</a> for more!</p>`,
  "friends": `<h1 class="section-title">Friends</h1><p>These are my friends and collaborators who inspire me every day.<br>(sorry if I have forgot someone)</p><ul><li><a href="https://github.com/GiovaniFZ">Giovani Finazzi (aka. Giv)</li><li><a href="https://github.com/skye-pa1n">Skye</li><li><a href="https://github.com/VegaBobo">VegaBobo/VegaData (aka. Vega)</li><li><a href="https://github.com/oByteszOficial">Daniel (aka. Byt3z)</a></ul>`,
  "support-me": `<h1 class="section-title">Support me</h1><p>If you'd like to support my work, consider donating or following me on social media!</p>`
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

  const url = `?tab=${tabId}`;
  history.pushState({ tabId }, '', url);
}

function addHoverEffect(tab, icon) {
  tab.addEventListener('mouseenter', function() {
    if (!tab.classList.contains('active')) {
      tab.style.color = '#059ad3';
      icon.style.color = '#059ad3';
    }
  });

  tab.addEventListener('mouseleave', function() {
    if (!tab.classList.contains('active')) {
      tab.style.color = '#445156';
      icon.style.color = '#445156';
    }
  });
}

aboutMeBtn.addEventListener('click', () => activateTab('about-me', 'section-ico-1'));
myProjectsBtn.addEventListener('click', () => activateTab('my-projects', 'section-ico-2'));
friendsBtn.addEventListener('click', () => activateTab('friends', 'section-ico-3'));
supportBtn.addEventListener('click', () => activateTab('support-me', 'section-ico-4'));
bioBtn.addEventListener('click', () => window.open("https://bio.eleu.me", '_blank'));

addHoverEffect(aboutMeBtn, mIcon1);
addHoverEffect(myProjectsBtn, mIcon2);
addHoverEffect(friendsBtn, mIcon3);
addHoverEffect(supportBtn, mIcon4);
addHoverEffect(bioBtn, mIcon5);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const randomValue = getRandomInt(100000000 + 1); // 100000000

if (randomValue == 40028922) {
  document.getElementById("logo").style.fontFamily = "Comic Sans MS";
}

window.addEventListener('popstate', (event) => {
  if (event.state && event.state.tabId) {
    activateTab(event.state.tabId, `section-ico-${Object.keys(tabContents).indexOf(event.state.tabId) + 1}`);
  } else {
    activateTab('about-me', 'section-ico-1'); 
  }
});

window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const tabFromUrl = params.get('tab') || 'about-me';
  activateTab(tabFromUrl, `section-ico-${Object.keys(tabContents).indexOf(tabFromUrl) + 1}`);
};
