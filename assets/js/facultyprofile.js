// Faculty data array - matches your design
// Faculty data extracted from the HTML file
const facultyData = [
  // PROFESSORS
  {
    id: 1,
    name: "Paluga, Rolando N.",
    position: "Professor",
    title: "University Professor",
    institution: "Caraga State University",
    additionalInfo: "President, CSU Faculty Association",
    image: "/assets/images/facultyprofiles/CMNS_MATH_PALUGA,ROLANDO,.JPG",
    email: "rolando.paluga@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: [
      "PhD in Mathematics (MSU IIT, 2002)",
      "MS in Mathematics (MSU IIT, 1996)",
      "BS in Mathematics (MSU IIT, 1987)",
    ],
    specialization: "Graph Theory, Topology, Mathematical Modeling",
  },
  {
    id: 2,
    name: "Arcede, Jayrold P.",
    position: "Professor",
    title: "Professor VI",
    institution: "Caraga State University",
    additionalInfo: "Center Chief, MSCRC",
    image: "/assets/images/facultyprofiles/CMNS_ARCEDE J..JPG",
    email: "jayrold.arcede@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: [
      "PostDoc in Math (UEvora, Portugal 2015)",
      "PhD in Mathematics (Sandwich Program : ADMU & NUS, 2010)",
      "MS in Mathematics (MSU IIT, 2004)",
    ],
    specialization: "Mathematical Modeling, Integration Theory",
  },
  {
    id: 3,
    name: "Herrera, Miraluna L.",
    position: "Professor",
    title: "Professor VI",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/herreramiraluna.jpg",
    email: "miraluna.herrera@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: ["PhD in Mathematics (MSU IIT, 2005)", "MS in Mathematics (MUST, 2000)", "BSEd Mathematics (MSU Main)"],
    specialization: "Combinatorics, Mathematics Education",
  },
  {
    id: 4,
    name: "Paluga, Esamel M.",
    position: "Professor",
    title: "Professor VI",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/CMNS_PALUGA,E..JPG",
    email: "esamel.paluga@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: [
      "PhD in Mathematics (MSU IIT, 2005)",
      "MS in Mathematics (MSU IIT, 1997)",
      "BS in Mathematics (MSU Main, 1993)",
    ],
    specialization: "Graph Theory",
  },
  {
    id: 5,
    name: "Herrera, Fernando T.",
    position: "Professor",
    title: "Professor V",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/herrera.jpg",
    email: "fernando.herrera@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: [
      "PhD in Mathematical Sciences (MUST, 2007)",
      "MST in Mathematics (MUST, 2003)",
      "BS in Civil Engineering (MSU Main, 1992)",
    ],
    specialization: "Mathematics Education",
  },
  {
    id: 6,
    name: "Libao, Merliza F.",
    position: "Professor",
    title: "Professor I",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/CMNS_math_ LIBAO.JPG",
    email: "merliza.libao@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: [
      "PhD in Math Sci - Applied Mathematics (USTP, 2018)",
      "MS in Mathematics (UP Baguio, 2008)",
      "BS in Electrical Engineering (DMMSU, 1998)",
    ],
    specialization: "Dynamical System",
  },

  // ASSOCIATE PROFESSORS
  {
    id: 7,
    name: "Latayada, Mary Joy R.",
    position: "Associate Professor",
    title: "Associate Professor V",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/CMNS_MATH_LATAYADA.JPG",
    email: "maryjoy.latayada@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: [
      "PhD in Mathematics (MSU IIT, 2019)",
      "MS in Statistics (MSU IIT, 2014)",
      "BS in Mathematics (MSU Main, 2000)",
    ],
    specialization: "Combinatorics",
  },
  {
    id: 8,
    name: "Macalalag, Jay Michael R.",
    position: "Associate Professor",
    title: "Associate Professor V",
    institution: "Caraga State University",
    additionalInfo: "Department Head, Mathematics",
    image: "/assets/images/facultyprofiles/CMNS_MATH _MACALALAG.JPG",
    email: "jaymichael.macalalag@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: ["PhD in Mathematics (ADMU, 2019)", "MS in Mathematics (CSU, 2013)", "BS in Mathematics (CSU, 2010)"],
    specialization: "Mathematical Modeling, Topology",
  },
  {
    id: 9,
    name: "Ocarez, Felix R.",
    position: "Associate Professor",
    title: "Associate Professor V",
    institution: "Caraga State University",
    additionalInfo: "OIC-Chief, Monitoring and Evaluation, Head, Procurement Planning and Purchasing Unit",
    image: "/assets/images/facultyprofiles/CMNS_Ocarez.JPG",
    email: "felix.ocarez@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: [
      "PhD in Educational Management and Supervision (CSU, 2013)",
      "MS in Mathematics (MSU IIT, 2002)",
      "BS in Mathematics (MSU Main, 1989)",
    ],
    specialization: "Graph Theory, Mathematics Education",
  },
  {
    id: 10,
    name: "Domingo, Job H.",
    position: "Associate Professor",
    title: "Associate Professor IV",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/CMNS_MATH_DOMINGO.JPG",
    email: "job.domingo@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: [
      "PhD in Mathematics (MSU IIT, 2013)",
      "MS in Mathematics (DLSU, 1997)",
      "BS in Mathematics (MSU Main, 1990)",
    ],
    specialization: "Linear Programming",
  },
  {
    id: 11,
    name: "Agua, Breix Michael G.",
    position: "Associate Professor",
    title: "Associate Professor IV",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/breixagua.jpg",
    email: "breixmichael.agua@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: ["MS in Mathematics (CSU, 2016)", "BS in Mathematics (CSU, 2012)"],
    specialization: "Topology, Applied Statistics, Mathematics Education",
  },
  {
    id: 12,
    name: "Burdeos, Karen B.",
    position: "Associate Professor",
    title: "Associate Professor IV",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/burdeoskaren.jpg",
    email: "karen.burdeos@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: [
      "PhD in Applied Mathematics (University of Picardie Jules Verne, France, Ongoing)",
      "MS Statistics (UPLB, 2014)",
      "BS Mathematics (CSU, 2011)",
    ],
    specialization: "Statistics, Environmental Statistics, Educational Statistics",
  },
  {
    id: 13,
    name: "Albia, Jake A.",
    position: "Associate Professor",
    title: "Associate Professor III",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/CMNS_MATH_ALBIA.JPG",
    email: "jake.albia@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: [
      "PhD in Mathematics (ADMU, CAR)",
      "MS in Mathematics (MSU IIT, 2006)",
      "BS in Mathematics (MSU IIT, 2003)",
    ],
    specialization: "Graph Theory",
  },
  {
    id: 14,
    name: "Mentuda, Cheryl Q.",
    position: "Associate Professor",
    title: "Associate Professor III",
    institution: "Caraga State University",
    additionalInfo: "Graduate Program Chair, MSMath and PhD Math",
    image: "/assets/images/facultyprofiles/CMNS_MENTUDA.JPG",
    email: "cheryl.mentuda@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: [
      "PHD in Mathematics (University of Picardie Jules Verne, France, 2022)",
      "MS in Mathematics (MSU Main 2015)",
      "BS in Mathematics (MSU Main 2010)",
    ],
    specialization: "Topology, Mathematical Modeling",
  },
  {
    id: 15,
    name: "Tinio, Jan Niño G.",
    position: "Associate Professor",
    title: "Associate Professor II",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/jantinio.jpg",
    email: "jannino.tinio@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: ["MS in Statistics (MSU-IIT, 2016)", "BS in Statistics (MSU-IIT, 2014)"],
    specialization: "Statistics, Time Series Modelling, Bayesian Analysis",
  },
  {
    id: 16,
    name: "Arlan, Erwin N.",
    position: "Associate Professor",
    title: "Associate Professor I",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/CMNS_MATH_ARLAN.JPG",
    email: "erwin.arlan@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: [
      "BS Civil Engineering (SJIT, 2021)",
      "MS in Mathematics (MSU Main 2015)",
      "BS in Mathematics (MSU Main 2010)",
    ],
    specialization: "Number Theory, Combinatorics",
  },
  {
    id: 17,
    name: "Permanes, Sheila Rae E.",
    position: "Associate Professor",
    title: "Associate Professor I",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/sheilamae.jpg",
    email: "sheilarae.permanes@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: [
      "PHD in Mathematics (University of Picardie Jules Verne, France, Ongoing)",
      "MS in Mathematics (CSU, 2016)",
      "BS in Mathematics (CSU, 2011)",
    ],
    specialization: "Topology",
  },
  {
    id: 18,
    name: "Jumonong, Airish P.",
    position: "Associate Professor",
    title: "Associate Professor I",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/CMNS_JUMONONG.JPG",
    email: "airish.jumonong@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: ["MS in Mathematics (CSU, 2016)", "BS in Mathematics (CSU, 2010)"],
    specialization: "Topology, Graph Theory",
  },
  {
    id: 19,
    name: "Nepa, Marilou T.",
    position: "Associate Professor",
    title: "Associate Professor I",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/CMNS_MATH_NEPA.JPG",
    email: "marilou.nepa@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: [
      "PhD in Mathematics (MSU-IIT, CAR)",
      "MS in Mathematics (CSU, 2016)",
      "BS in Mathematics (MSU Main, 2000)",
    ],
    specialization: "Copula",
  },
  {
    id: 20,
    name: "Gamalo, Angela Fel P.",
    position: "Associate Professor",
    title: "Associate Professor I",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/CMNS_MATH_GAMALO.JPG",
    email: "angelafel.gamalo@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: [
      "PhD in Statistics (UPLB, CAR)",
      "MS in Statistics (MSU IIT, 2013)",
      "BS in Mathematics (MSU IIT, 2011)",
    ],
    specialization: "Statistics",
  },

  // ASSISTANT PROFESSORS
  {
    id: 21,
    name: "Cuaresma, Edilberto Jr. C.",
    position: "Assistant Professor",
    title: "Assistant Professor III",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/CMNS_MATH_CUARESMA.JPG",
    email: "edilberto.cuaresma@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: [
      "PhD in Mathematics (ADMU, CAR)",
      "MS in Mathematics (CSU, 2014)",
      "BS in Mathematics (MSU Main, 2007)",
    ],
    specialization: "Graph Theory",
  },
  {
    id: 22,
    name: "Dangate, Abigael J.",
    position: "Assistant Professor",
    title: "Assistant Professor III",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/abigael.jpg",
    email: "abigael.dangate@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: ["MS Mathematics (CSU, 2016)", "BS Mathematics (MSU Main, 2004)"],
    specialization: "Copula",
  },

  // INSTRUCTORS
  {
    id: 23,
    name: "Apdo, Rachel B.",
    position: "Instructor",
    title: "Instructor I",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/CMNS_MATH_APDO,R..JPG",
    email: "rachel.apdo@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: ["MS in Mathematics (CSU, 2019)", "BS in Mathematics (CSU, 2014)"],
    specialization: "Mathematical Modeling",
  },
  {
    id: 24,
    name: "Engalan-Quisto, Genevieve B.",
    position: "Instructor",
    title: "Instructor I",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/CMNS_QUISTO.JPG",
    email: "genevieve.quisto@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: [
      "MS Mathematics (CSU, CAR)",
      "BS Mathematics (CSU, 2016)",
      "Diploma in Mechanical Engineering Technology (MSU-IIT, 2012)",
    ],
    specialization: "Linear Programming",
  },
  {
    id: 25,
    name: "Lingo, Junar T.",
    position: "Instructor",
    title: "Instructor I",
    institution: "Caraga State University",
    additionalInfo: "College Extension Coordinator, CMNS",
    image: "/assets/images/facultyprofiles/CMNS_MATH_LINGO.JPG",
    email: "junar.lingo@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: ["MS in Mathematics (CSU, 2019)", "BS in Mathematics Major in Applied Statistics (CSU,2013)"],
    specialization: "Mathematical Modeling, Statistics",
  },
  {
    id: 26,
    name: "Macalos, Milburn O.",
    position: "Instructor",
    title: "Instructor I",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/CMNS_MATH_MACALOS.JPG",
    email: "milburn.macalos@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: ["MS in Mathematics (CSU, 2021)", "BS in Mathematics (CSU, 2015)"],
    specialization: "Copula",
  },
  {
    id: 27,
    name: "Pajaron, Kaye Y.",
    position: "Instructor",
    title: "Instructor I",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/kayepajaron.jpg",
    email: "kaye.pajaron@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: ["MS Mathematics (CSU, CAR)", "BS Mathematics (MSU-IIT, 2016)"],
    specialization: "Graph Theory",
  },
  {
    id: 28,
    name: "Rendeza, Jeriel S.",
    position: "Instructor",
    title: "Instructor I",
    institution: "Caraga State University",
    additionalInfo: "",
    image: "/assets/images/facultyprofiles/CMNS_MATH_RENDEZA.JPG",
    email: "jeriel.rendeza@csu.edu.ph",
    linkedin: "#",
    facebook: "#",
    education: ["MS in Mathematics (CSU, 2019)", "BS in Mathematics (MSU-Main, 2014)"],
    specialization: "Mathematical Modeling",
  },
]

// Display summary statistics
console.log("=== FACULTY DATA EXTRACTION COMPLETE ===")
console.log(`Total Faculty Members: ${facultyData.length}`)








































































































































































// Count by position
const positionCounts = facultyData.reduce((acc, faculty) => {
  acc[faculty.position] = (acc[faculty.position] || 0) + 1
  return acc
}, {})

console.log("\nFaculty by Position:")
Object.entries(positionCounts).forEach(([position, count]) => {
  console.log(`  ${position}: ${count}`)
})

// Display the complete data structure
console.log("\n=== COMPLETE FACULTY DATA ARRAY ===")
console.log("const facultyData = [")
facultyData.forEach((faculty, index) => {
  console.log("  {")
  console.log(`    id: ${faculty.id},`)
  console.log(`    name: "${faculty.name}",`)
  console.log(`    position: "${faculty.position}",`)
  console.log(`    title: "${faculty.title}",`)
  console.log(`    institution: "${faculty.institution}",`)
  console.log(`    additionalInfo: "${faculty.additionalInfo}",`)
  console.log(`    image: "${faculty.image}",`)
  console.log(`    email: "${faculty.email}",`)
  console.log(`    linkedin: "${faculty.linkedin}",`)
  console.log(`    facebook: "${faculty.facebook}",`)
  console.log(`    education: [`)
  faculty.education.forEach((edu) => {
    console.log(`      "${edu}"`)
  })
  console.log(`    ],`)
  console.log(`    specialization: "${faculty.specialization}"`)
  console.log(`  }${index < facultyData.length - 1 ? "," : ""}`)
})
console.log("];")

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = facultyData
}


// Configuration - maintains the exact order from your design
const facultyConfig = {
    positionOrder: ["Professor", "Associate Professor", "Assistant Professor", "Instructor"],
    showSocialLinks: true,
    showEducation: true,
    defaultImage: "https://via.placeholder.com/120x120/cccccc/666666?text=?"
};

// Function to create a single faculty card - matches your exact design
function createFacultyCard(faculty) {
    const socialLinksHTML = facultyConfig.showSocialLinks ? `
                <div class="social-links">
                    <a href="mailto:${faculty.email}" class="social-link" aria-label="Send email"
                       onclick="event.stopPropagation()">
                        <i class="fa fa-envelope"></i>
                    </a>
                    <a href="${faculty.linkedin}" class="social-link" aria-label="LinkedIn profile" 
                       onclick="event.stopPropagation()" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-linkedin"></i>
                    </a>
                    <a href="${faculty.facebook}" class="social-link" aria-label="Facebook profile" 
                       onclick="event.stopPropagation()" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-facebook"></i>
                    </a>
                </div>
            ` : '';

    const educationHTML = facultyConfig.showEducation ? `
                <div class="education-info">
                    ${faculty.education.map(edu => `<div class="education-item">${edu}</div>`).join('')}
                    ${faculty.specialization ? `<div class="specialization">Specialization: ${faculty.specialization}</div>` : ''}
                </div>
            ` : '';

    return `
                <article class="profile-card my-3" tabindex="0" role="button" aria-expanded="false"
                         aria-label="View profile for ${faculty.name}" data-faculty-id="${faculty.id}">
                    <!-- Top-right accent -->
                    <div class="accent-corner"></div>
                    <div class="card-content">
                        <!-- Image Container -->
                        <div class="image-container">
                            <div class="image-wrapper">
                                <img src="${faculty.image}" alt="${faculty.name}" 
                                     onerror="this.src='${facultyConfig.defaultImage}'" />
                            </div>
                        </div>
                        <!-- Basic Info -->
                        <div class="basic-info">
                            <h3 class="name">${faculty.name}</h3>
                            <p class="position">${faculty.title}</p>
                            ${faculty.additionalInfo ? `<p class="institution">${faculty.additionalInfo}</p>` : ''}
                            <p class="institution">${faculty.institution}</p>
                        </div>
                        <!-- Hidden Content -->
                        <div class="hidden-content">
                            ${socialLinksHTML}
                            ${educationHTML}
                        </div>
                    </div>
                </article>
            `;
}

// Function to create a section for a specific position
function createPositionSection(position, facultyList) {
    if (facultyList.length === 0) return '';

    const sectionTitle = position === "Professor" ? "Professors" :
        position === "Associate Professor" ? "Associate Professors" :
            position === "Assistant Professor" ? "Assistant Professors" :
                "Instructors";

    return `
                <div class="position-section" data-position="${position}">
                    <h2 class="section-title">${sectionTitle}<span class="faculty-count">(${facultyList.length})</span></h2>
                    <div class="cards-grid">
                        ${facultyList.map(faculty => createFacultyCard(faculty)).join('')}
                    </div>
                </div>
            `;
}

// Function to render faculty by sections - maintains your exact sorting order
function renderFacultySections(filterPosition = 'all') {
    const container = document.getElementById('faculty-container');
    let html = '';

    if (filterPosition === 'all') {
        // Show all positions in the exact order: Professor → Associate Professor → Assistant Professor → Instructor
        facultyConfig.positionOrder.forEach(position => {
            const facultyInPosition = facultyData.filter(faculty => faculty.position === position);
            html += createPositionSection(position, facultyInPosition);
        });
    } else {
        // Show only selected position
        const filteredFaculty = facultyData.filter(faculty => faculty.position === filterPosition);
        if (filteredFaculty.length > 0) {
            html = createPositionSection(filterPosition, filteredFaculty);
        } else {
            html = `
                        <div class="text-center py-5">
                            <h3>No faculty found</h3>
                            <p class="text-muted">No faculty members found for the selected position.</p>
                        </div>
                    `;
        }
    }

    container.innerHTML = html;
}

// Faculty Manager for dynamic operations
const FacultyManager = {
    // Add new faculty member
    addFaculty: function (faculty) {
        const newFaculty = {
            id: Date.now(),
            email: faculty.email || '',
            linkedin: faculty.linkedin || '#',
            facebook: faculty.facebook || '#',
            education: faculty.education || [],
            specialization: faculty.specialization || '',
            ...faculty
        };
        facultyData.push(newFaculty);
        this.render();
    },

    // Remove faculty member
    removeFaculty: function (id) {
        const index = facultyData.findIndex(faculty => faculty.id === id);
        if (index > -1) {
            facultyData.splice(index, 1);
            this.render();
        }
    },

    // Update faculty member
    updateFaculty: function (id, updatedData) {
        const index = facultyData.findIndex(faculty => faculty.id === id);
        if (index > -1) {
            facultyData[index] = { ...facultyData[index], ...updatedData };
            this.render();
        }
    },

    // Get faculty by position
    getFacultyByPosition: function (position) {
        return facultyData.filter(faculty => faculty.position === position);
    },

    // Search faculty
    searchFaculty: function (query) {
        return facultyData.filter(faculty =>
            faculty.name.toLowerCase().includes(query.toLowerCase()) ||
            faculty.specialization.toLowerCase().includes(query.toLowerCase()) ||
            faculty.position.toLowerCase().includes(query.toLowerCase())
        );
    },

    // Get faculty statistics
    getStatistics: function () {
        const stats = {};
        facultyConfig.positionOrder.forEach(position => {
            stats[position] = this.getFacultyByPosition(position).length;
        });
        stats.total = facultyData.length;
        return stats;
    },

    // Render with current filter
    render: function () {
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        renderFacultySections(activeFilter);
    },

    // Get all faculty data
    getAllFaculty: function () {
        return facultyData;
    }
};

// Initialize filter buttons
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.add('btn-outline-primary');
                btn.classList.remove('btn-primary');
            });

            // Add active class to clicked button
            this.classList.add('active');
            this.classList.remove('btn-outline-primary');
            this.classList.add('btn-primary');

            // Render faculty with filter
            const filter = this.dataset.filter;
            renderFacultySections(filter);
        });
    });
}

// Initialize faculty profile clicks
function initializeFacultyClicks() {
    document.addEventListener('click', function (e) {
        const card = e.target.closest('.profile-card');
        if (card) {
            const facultyId = parseInt(card.dataset.facultyId);
            const faculty = facultyData.find(f => f.id === facultyId);
            if (faculty) {
                // You can customize this action - redirect to profile page, show modal, etc.
                console.log('Faculty clicked:', faculty);
                alert(`Viewing profile for ${faculty.name}`);
                // Example: window.location.href = `/faculty/${faculty.id}`;
            }
        }
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function () {
    renderFacultySections(); // This will show all faculty in the correct order by default
    initializeFilters();
    initializeFacultyClicks();
});

// Console helper functions for testing
window.FacultyHelper = {
    addSampleFaculty: () => {
        FacultyManager.addFaculty({
            name: "Sample, New Faculty",
            position: "Assistant Professor",
            title: "Assistant Professor II",
            institution: "Caraga State University",
            additionalInfo: "Department of Mathematics",
            image: "https://via.placeholder.com/120x120/cccccc/666666?text=NF",
            email: "new.faculty@csu.edu.ph",
            education: ["MS in Mathematics (Sample University, 2020)"],
            specialization: "Sample Specialization"
        });
    },
    getStats: () => {
        console.log('Faculty Statistics:', FacultyManager.getStatistics());
    },
    searchFaculty: (query) => {
        console.log('Search Results:', FacultyManager.searchFaculty(query));
    }
};

// Profile Cards Interactive Functionality
document.addEventListener("DOMContentLoaded", () => {
    const profileCards = document.querySelectorAll(".profile-card");

    profileCards.forEach((card) => {
        // Handle click events
        card.addEventListener("click", function () {
            toggleCard(this);
        });

        // Handle keyboard events
        card.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleCard(this);
            }
        });

        // Handle focus events for accessibility
        card.addEventListener("focus", function () {
            this.classList.add("focused");
        });

        card.addEventListener("blur", function () {
            this.classList.remove("focused");
        });
    });

    function toggleCard(card) {
        const isActive = card.classList.contains("active");

        // Close all other cards
        profileCards.forEach((otherCard) => {
            if (otherCard !== card) {
                otherCard.classList.remove("active");
                otherCard.setAttribute("aria-expanded", "false");
            }
        });

        // Toggle current card
        if (isActive) {
            card.classList.remove("active");
            card.setAttribute("aria-expanded", "false");
        } else {
            card.classList.add("active");
            card.setAttribute("aria-expanded", "true");
        }
    }

    // Close cards when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".profile-card")) {
            profileCards.forEach((card) => {
                card.classList.remove("active");
                card.setAttribute("aria-expanded", "false");
            });
        }
    });

    // Handle escape key to close active cards
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            profileCards.forEach((card) => {
                card.classList.remove("active");
                card.setAttribute("aria-expanded", "false");
            });
        }
    });
});