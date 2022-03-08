// items
const project = [
    {
      id: 1,
      title: "Thoughts on SAO",
      category: "reviews",
      img: "",
      id: "",
      desc: ``,

    },
    {
      id: 2,
      title: "Pick a Side YouTube",
      category: "blogs",
      img: "",
      id: "",
      desc: ``,
      
    }
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
  console.log(sidebar.classList);
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