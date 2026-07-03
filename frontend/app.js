let currentLang = "en";

const dictionary = {
  en: {
    title: "Grama Suvidha",
    subtitle: "Digital Notice Board",
    budget: "Budget",
    completion: "Expected Completion",
    contractor: "Contractor",
    complete: "Complete",
    back: "Back",
    viewDetails: "View Details",
    sitePhotos: "Site Photos",
    citizenFeedback: "Citizen Feedback"
  },
  kn: {
    title: "ಗ್ರಾಮ ಸುವಿಧಾ",
    subtitle: "ಡಿಜಿಟಲ್ ಮಾಹಿತಿ ಫಲಕ",
    budget: "ಅಂದಾಜು ವೆಚ್ಚ",
    completion: "ಪೂರ್ಣಗೊಳ್ಳುವ ದಿನಾಂಕ",
    contractor: "ಗುತ್ತಿಗೆದಾರರು",
    complete: "ಪೂರ್ಣಗೊಂಡಿದೆ",
    back: "ಹಿಂದಕ್ಕೆ",
    viewDetails: "ವಿವರಗಳನ್ನು ನೋಡಿ",
    sitePhotos: "ಸ್ಥಳದ ಚಿತ್ರಗಳು",
    citizenFeedback: "ಸಾರ್ವಜನಿಕರ ಅಭಿಪ್ರಾಯ"
  }
};

const projects = [
  {
    id: 1,
    name: { en: "Main Road Repair", kn: "ಮುಖ್ಯ ರಸ್ತೆ ದುರಸ್ತಿ" },
    location: { en: "Basavanahalli Ward 2", kn: "ಬಸವನಹಳ್ಳಿ ವಾರ್ಡ್ ೨" },
    budget: "₹18,50,000",
    contractor: { en: "Sri Nandi Civil Works", kn: "ಶ್ರೀ ನಂದಿ ಸಿವಿಲ್ ವರ್ಕ್ಸ್" },
    completionDate: "30 Jun 2026",
    progress: 72,
    status: { 
      en: "Drainage and base layer completed. Final asphalt work is pending.", 
      kn: "ಚರಂಡಿ ಮತ್ತು ತಳಪಾಯದ ಕೆಲಸ ಪೂರ್ಣಗೊಂಡಿದೆ. ಅಂತಿಮ ಡಾಂಬರು ಕೆಲಸ ಬಾಕಿ ಇದೆ." 
    }
  },
  {
    id: 2,
    name: { en: "Borewell Installation", kn: "ಬೋರ್‌ವೆಲ್ ಅಳವಡಿಕೆ" },
    location: { en: "Kere Kodi Street", kn: "ಕೆರೆ ಕೋಡಿ ರಸ್ತೆ" },
    budget: "₹6,20,000",
    contractor: { en: "Aqua Rural Services", kn: "ಆಕ್ವಾ ರೂರಲ್ ಸರ್ವಿಸಸ್" },
    completionDate: "18 May 2026",
    progress: 45,
    status: { 
      en: "Drilling is complete. Pump fitting and water testing are next.", 
      kn: "ಕೊರೆಯುವಿಕೆ ಪೂರ್ಣಗೊಂಡಿದೆ. ಪಂಪ್ ಅಳವಡಿಕೆ ಮತ್ತು ನೀರಿನ ಪರೀಕ್ಷೆ ಬಾಕಿ ಇದೆ." 
    }
  }
];
// Back section variables
const projectList = document.getElementById("projectList");
const projectListSection = document.getElementById("projectList");
const individualDetailsSection = document.getElementById("projectDetails");
const detailsContent = document.getElementById("detailsContent");
const backBtn = document.getElementById("backBtn");
const langBtn = document.getElementById("langBtn");

function renderProjects() {
  projectList.innerHTML = ""; // Clear existing cards before re-rendering
  
  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <h2>${project.name[currentLang]}</h2>
      <p>${project.location[currentLang]}</p>
      <p><strong>${project.progress}% ${dictionary[currentLang].complete}</strong></p>
      <div class="progress-bar-bg">
        <div class="progress-bar-fill" style="width: ${project.progress}%"></div>
      </div>
      <p>${project.status[currentLang]}</p>
      <button class="view-btn" data-id="${project.id}">${dictionary[currentLang].viewDetails}</button>
    `;

    projectList.appendChild(card);
  });

  // Re-attach event listeners to the fresh buttons
  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const project = projects.find(p => p.id == id); //This is just like searching a list and returning the first matching object
      showDetails(project);
    });
  });  
    // let project;
    // for(let p of projects){
    //   if(p.id == id){
    //    project=p;
    //    break;
    //   }
    // }
}

function showDetails(project) {
  detailsContent.innerHTML = `
    <h2>${project.name[currentLang]}</h2>
    <p>${project.location[currentLang]}</p>
    <p>${dictionary[currentLang].budget}: ${project.budget}</p>
    <p>${dictionary[currentLang].completion}: ${project.completionDate}</p>
    <p>${dictionary[currentLang].contractor}: ${project.contractor[currentLang]}</p>
    <p><strong>${project.progress}% ${dictionary[currentLang].complete}</strong></p>
    <div class="progress-bar-bg">
      <div class="progress-bar-fill" style="width: ${project.progress}%"></div>
    </div>
    <p>${project.status[currentLang]}</p>

    <h3 class="details-section-title">${dictionary[currentLang].sitePhotos}</h3>
    <div class="photo-grid">
      <div class="photo-placeholder">Before Photo</div>
      <div class="photo-placeholder">In-Progress Photo</div>
    </div>

    <h3 class="details-section-title">${dictionary[currentLang].citizenFeedback}</h3>
    <div class="feedback-card">
      <p><strong>⭐ 4.5/5</strong> - Great initiative.</p>
    </div>
  `;

  projectListSection.classList.add("hidden");
  individualDetailsSection.classList.remove("hidden");
}

backBtn.addEventListener("click", () => {
  individualDetailsSection.classList.add("hidden");
  projectListSection.classList.remove("hidden");
});

// Update the language toggle button listener to trigger the re-render
langBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "kn" : "en";
  langBtn.innerText = currentLang === "en" ? "ಕನ್ನಡ" : "English";
  
  // Translate static header elements
  document.querySelectorAll("[data-key]").forEach(element => {
    const key = element.getAttribute("data-key");
    element.innerText = dictionary[currentLang][key];//dob
  });

  // Update back button text
  backBtn.innerText = dictionary[currentLang].back;
  // Re-render the dynamic project cards in the new language
  renderProjects();
});
// Initial run to display the cards when the page first loads
renderProjects();