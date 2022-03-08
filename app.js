// items
const project = [
  {
    id: 1,
    title: "hi",
    category: "cases",
    img: "",
    desc: ``,
  },
  {
    id: 2,
    title: "Junko Furuta",
    category: "cases",
    img: "",
    desc: ``
  },
  {
    id: 3,
    title: "How to play the C chord",
    category: "tutorials",
    img: "",
    desc: ``,
  },
  {
    id: 4,
    title: "Thoughts on SAO",
    category: "blogs",
    img: "",
    desc: ``,
  },
  {
    id: 5,
    title: "sister",
    category: "portfolio",
    img: "",
    desc: ``,
  },
  {
    id: 6,
    title: "criminal cases",
    category: "cases",
    img: "",
    desc: ``,
  },
  {
    id: 7,
    title: "sister's portfolio",
    category: "portfolio",
    img: "",
    desc: ``,
  },
  {
    id: 8,
    title: "instrument tutorials",
    category: "tutorials",
    img: "",
    desc: ``,
  },
  {
    id: 9,
    title: "instrument tutorials",
    category: "tutorials",
    img: "",
    desc: ``,
  },
  {
    id: 10,
    title: "all",
    category: "all",
    img: "",
    desc: ``,
  },
];
  
  const sectionCenter = document.querySelector(".section-center");
  const container = document.querySelector(".btn-container");
  
  // load items
  window.addEventListener("DOMContentLoaded", function () {
    displayProjectItems(project);
    displayProjectButtons();
  });
  
  function displayProjectItems(projectItems) {
    let displayProject = projectItems.map(function (item) {
      // console.log(item);
  
      return `<article class="project-item">
            <img src=${item.img} class="photo" alt="${item.title}" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayProject = displayProject.join("");
  
    sectionCenter.innerHTML = displayProject;
  }
  
  function displayProjectButtons() {
    const categories = project.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      }, 
      ["all"]
    );
    const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
            ${category}
          </button>`;
        })
        .join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
    // filter items
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const projectCategory = project.filter(function (projectItem) {
          // console.log(projectItem.category);
          if (projectItem.category === category) {
            return projectItem;
          }
        });
        // console.log(projectCategory);
        if (category === "all") {
          displayProjectItems(project)
        } else {
          displayProjectItems(projectCategory);
        }
      });
    });
  }


//toggle
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

//page transitions
window.onload = () => {
  const transition_el = document.querySelector('.transition');
  const anchors = document.querySelectorAll('a');

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;
      transition_el.classList.add('is-active');

      setTimeout(() => {
        window.location.href = target;
      }, 500);
    })
  }
}

//making the scroll
let sun = document.getElementById("sun");
let mountains_behind = document.getElementById("mountains_behind");
let mountains_front = document.getElementById("mountains_front");
let text = document.getElementById("text");
let anothercontainer = document.querySelector("anothercontainer");
window.addEventListener("scroll", function() {
  let value = window.scrollY;
  sun.style.top = value * 0.5 + 'px';
  mountains_behind.style.top = value * 0.05 + 'px';
  mountains_front.style.top = value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value * 1 + 'px';
  anothercontainer.style.top = value * 0.5 + 'px';
})

