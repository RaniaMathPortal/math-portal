// ==========================================================================
// 1. Unified Math Database Matrix (Grades 5 to 10 Complete Syllabi)
// ==========================================================================
const mathDatabase = {
    5: {
        gradeTitle: "Grade 5 Mathematics",
        sessionNumber: "Session #01",
        sessionDate: "October 5, 2026",
        lessonTitle: "Place Value up to Thousandths",
        unitInfo: "Unit 1 • Decimals",
        videoUrl: "", 
        fileName: "Grade5_Unit1_Worksheet.pdf",
        downloadUrl: "#",
        hasIndex: true,
        units: [
            { name: "Unit 1: Decimals to the Thousandths", lessons: ["L1–3: Place Value, Fractions as Decimals & Decomposing", "L4 & 5: Comparing and Rounding Decimals", "L6–10: Estimating, Adding & Subtracting Decimals"] },
            { name: "Unit 2: Number Relations", lessons: ["Concept 1: Expressions, Equations, and Variables", "Concept 2: Finding G.C.F. & L.C.M. via Prime Factor Trees"] },
            { name: "Unit 3: Multiplying Whole Numbers", lessons: ["Concept 1: Area Models and Partial Products", "Concept 2: Standard Algorithm & Multi-step Word Problems"] },
            { name: "Unit 4: Dividing Whole Numbers", lessons: ["Concept 1: Models for Multi-digit Division", "Concept 2: Standard Long Division & Remainders"] },
            { name: "Unit 5: Multiplying & Dividing Decimals", lessons: ["Concept 1: Multiplying Decimals using Patterns and Models", "Concept 2: Dividing Decimals by Whole Numbers and Decimals"] },
            { name: "Unit 6: Numerical Expressions", lessons: ["Concept 1: Order of Operations Involving Decimals"] }
        ]
    },
    6: {
        gradeTitle: "Grade 6 Mathematics",
        sessionNumber: "Session #01",
        sessionDate: "October 5, 2026",
        lessonTitle: "Divisibility Rules & Long Division",
        unitInfo: "Unit 1 • Number System",
        videoUrl: "", 
        fileName: "Grade6_Unit1_Worksheet.pdf",
        downloadUrl: "#",
        hasIndex: true,
        units: [
            { name: "Unit 1: Number System & Divisibility", lessons: ["L1: Divisibility Rules and Long Division Algorithm", "L2: Prime Factorization, G.C.F. & L.C.M. via Venn Diagrams", "L3: Modeling and Solving Fraction Addition/Subtraction"] },
            { name: "Unit 2: Rational Numbers", lessons: ["Concept 1: Integers, Absolute Value & Number Lines", "Concept 2: Classifying, Comparing & Ordering Rational Numbers"] },
            { name: "Unit 3: Algebraic Expressions", lessons: ["Concept 1: Writing Expressions (Terms, Constants, Coefficients)", "Concept 2: Evaluating Expressions (Substitution & Exponents)"] },
            { name: "Unit 4: Equations & Inequalities", lessons: ["Concept 1: Solving One-Step Equations using Inverse Operations", "Concept 2: Writing, Graphing & Representing Inequalities"] },
            { name: "Unit 5: Dependent & Independent Variables", lessons: ["Concept 1: Identifying Variables & Graphing Linear Relations"] },
            { name: "Unit 6: Data & Statistics", lessons: ["Concept 1: Numerical vs. Categorical Statistical Questions", "Concept 2: Constructing Dot Plots, Histograms, and Box Plots"] },
            { name: "Unit 7: Numerical Summaries of Data", lessons: ["Concept 1: Calculating Mean, Median, Mode, and Outliers"] }
        ]
    },
    7: {
        gradeTitle: "Grade 7 Mathematics (Prep 1)",
        sessionNumber: "Session #01",
        sessionDate: "October 5, 2026",
        lessonTitle: "Repeated Multiplication",
        unitInfo: "Unit 1 • Algebra",
        videoUrl: "",
        fileName: "Grade7_Unit1_Worksheet.pdf",
        downloadUrl: "#",
        hasIndex: true,
        units: [
            { name: "Unit 1: Algebra (Powers & Equations)", lessons: ["L1: Repeated Multiplication (Intro to Powers)", "L2: Non-negative integer exponents", "L3: Negative integer exponents", "L4: Scientific/Standard form of rational numbers", "L5: Square root of a non-negative rational number", "L6: Solving first-degree equations in Q", "L7: Solving first-degree inequalities in Q"] },
            { name: "Unit 2: Geometry & Measurement", lessons: ["L1: Basic geometric concepts and relations", "L2: Polygons (Interior and exterior angles)", "L3: The Triangle (Theorems on side lengths and angles)", "L4: Pythagoras' Theorem application", "L5: Geometric transformations (Reflection, Translation, Rotation)"] },
            { name: "Unit 3: Statistics & Probability", lessons: ["L1: Experimental and theoretical probability"] }
        ]
    },
    8: {
        gradeTitle: "Grade 8 Mathematics (Prep 2)",
        sessionNumber: "Session #01",
        sessionDate: "October 6, 2026",
        lessonTitle: "Real Numbers & Their Operations",
        unitInfo: "Unit 1 • Real Numbers",
        videoUrl: "", 
        fileName: "Grade8_Unit1_Worksheet.pdf",
        downloadUrl: "#",
        hasIndex: true,
        units: [
            { name: "Unit 1: Real Numbers", lessons: ["L1: Real numbers", "L2: Intervals and their operations", "L3: Operations on real numbers", "L4: Laws of square and cube roots", "L5: Laws of exponents in real numbers"] },
            { name: "Unit 2: Algebra", lessons: ["L1: Factoring by taking out common factor", "L2: Factoring trinomial", "L3: Factoring special cases", "L4: Continued factoring special cases", "L5: Factoring by grouping"] },
            { name: "Unit 3: Geometry", lessons: ["L1: Congruence", "L2: Pythagoras' theorem and its converse", "L3: Applications of parallelism", "L4: Medians of the triangle", "L5: Isosceles triangle", "L6: Converse of the isosceles triangle", "L7: Interior and exterior angles of polygons"] },
            { name: "Unit 4: Statistics", lessons: ["L1: Ascending cumulative frequency table", "L2: Measurement of central tendency of the frequency table"] }
        ]
    },
    9: {
        gradeTitle: "Grade 9 Mathematics (Prep 3)",
        sessionNumber: "Session #01",
        sessionDate: "October 5, 2026",
        lessonTitle: "Solving Linear Equations",
        unitInfo: "Unit 1 • Algebra",
        videoUrl: "",
        fileName: "Grade9_Unit1_Worksheet.pdf",
        downloadUrl: "#",
        hasIndex: true,
        units: [
            { name: "Unit 1: Algebra (Equations)", lessons: ["L1: Solving two linear equations in two variables", "L2: Solving a second-degree equation via General Formula", "L3: Solving two equations (One 1st-degree, one 2nd-degree)"] },
            { name: "Unit 2: Algebra (Algebraic Fractions)", lessons: ["L1: Set of zeros of a polynomial function", "L2: Algebraic fraction functions (Domain & common domain)", "L3: Equality of two algebraic fractions", "L4: Operations on algebraic fractions"] },
            { name: "Unit 3: Geometry (The Circle)", lessons: ["L1: Definitions, concepts, and symmetry lines", "L2: Position of a point, line, or circle", "L3: Determining a circle passing through points", "L4: Relation between center distance and chords"] },
            { name: "Unit 4: Geometry (Angles & Arcs)", lessons: ["L1: Central angles and measuring arcs", "L2: Relations between inscribed and central angles", "L3: Inscribed angles subtended by the same arc", "L4: Cyclic quadrilaterals and properties", "L5: Tangents of a circle and angles of tangency"] },
            { name: "Unit 5: Probability", lessons: ["L1: Operations on events (Union, Intersection, Complement)"] }
        ]
    },
    10: {
        gradeTitle: "Grade 10 Mathematics (Sec 1)",
        sessionNumber: "Session #01",
        sessionDate: "October 5, 2026",
        lessonTitle: "Solving Quadratic Equations in One Variable",
        unitInfo: "Unit 1 • Algebra, Relations, and Functions",
        videoUrl: "",
        fileName: "Grade10_Unit1_Worksheet.pdf",
        downloadUrl: "#",
        hasIndex: true,
        units: [
            { 
                name: "Unit 1: Algebra, Relations, and Functions", 
                lessons: [
                    "Lesson 1: Solving Quadratic Equations in One Variable (Graphically and Algebraically).",
                    "Lesson 2: Introduction to Complex Numbers.",
                    "Lesson 3: Determining the Types of Roots of a Quadratic Equation.",
                    "Lesson 4: The Relation Between the Roots of the Second-Degree Equation and the Coefficients of its Terms.",
                    "Lesson 5: Forming the Quadratic Equation Whose Two Roots are Known.",
                    "Lesson 6: Sign of a Function (Constant, Linear, and Quadratic).",
                    "Lesson 7: Quadratic Inequalities in One Variable."
                ] 
            },
            { 
                name: "Unit 2: Geometry: Similarity", 
                lessons: [
                    "Lesson 1: Similarity of Polygons.",
                    "Lesson 2: Similarity of Triangles.",
                    "Lesson 3: The Relation Between the Areas of Two Similar Polygons.",
                    "Lesson 4: Applications of Similarity in the Circle."
                ] 
            },
            { 
                name: "Unit 3: Geometry: Triangle Proportionality Theorems", 
                lessons: [
                    "Lesson 1: Parallel Lines and Proportional Parts (Thales' Theorem).",
                    "Lesson 2: Two Angle Bisectors and Proportional Parts.",
                    "Lesson 3: Applications of Proportionality in the Circle (Power of a Point)."
                ] 
            },
            { 
                name: "Unit 4: Trigonometry", 
                lessons: [
                    "Lesson 1: Directed Angle.",
                    "Lesson 2: Systems of Measuring Angles (Degree and Radian Measure).",
                    "Lesson 3: Trigonometric Functions.",
                    "Lesson 4: Related Angles.",
                    "Lesson 5: Graphing Trigonometric Functions.",
                    "Lesson 6: Finding the Measure of an Angle Given the Value of One of its Trigonometric Ratios."
                ] 
            }
        ]
    }
};

// ==========================================================================
// 2. Dashboard Router Logic
// ==========================================================================
function selectGrade(gradeNumber) {
    window.location.href = `sessions-archive.html?grade=${gradeNumber}`;
}

// ==========================================================================
// 3. Dynamic Page Builder Logic
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("lessonPageTitle")) {
        loadLessonData();
    }
});

function cleanYoutubeUrl(url) {
    if (!url) return "";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}?rel=0&modestbranding=1`;
    }
    const rawIdCheck = url.replace(/[^a-zA-Z0-9_-]/g, "");
    if (rawIdCheck.length === 11) {
        return `https://www.youtube.com/embed/${rawIdCheck}?rel=0&modestbranding=1`;
    }
    return url;
}

function renderParts(videos, containerId, iframeId) {
    const container = document.getElementById(containerId);
    const iframe = document.getElementById(iframeId);
    container.innerHTML = '';

    if (!videos || videos.length === 0) {
        iframe.src = "";
        return;
    }

    videos.forEach((vid, index) => {
        const btn = document.createElement('button');
        btn.textContent = `Part ${index + 1}`;
        btn.className = index === 0 ? 'part-btn active' : 'part-btn';
        btn.onclick = () => {
            iframe.src = vid;
            document.querySelectorAll(`#${containerId} .part-btn`).forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        };
        container.appendChild(btn);
    });

    iframe.src = videos[0];
}

async function loadLessonData() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedGrade = urlParams.get('grade');
    const clickedLessonName = urlParams.get('lessonName');
    const clickedUnitName = urlParams.get('unitName');
    const isTeacher = urlParams.get('teacher') === 'true';

    const gradeData = mathDatabase[selectedGrade];
    if (!gradeData) {
        document.body.innerHTML = "<h2 style='color:white; text-align:center; font-family:sans-serif; margin-top:20%;'>Grade portal path not found. <a href='index.html' style='color:#3b82f6;'>Return to Dashboard</a></h2>";
        return;
    }

    const finalHeadingText = clickedLessonName ? clickedLessonName : gradeData.lessonTitle;
    const finalUnitText = clickedUnitName ? clickedUnitName : gradeData.unitInfo;

    document.title = `${finalHeadingText} | Mrs. Rania Abdelmeneim`;

    if (document.getElementById("lessonPageTitle")) document.getElementById("lessonPageTitle").textContent = finalHeadingText;
    if (document.getElementById("gradeMeta")) document.getElementById("gradeMeta").textContent = `${gradeData.gradeTitle} • ${finalUnitText}`;

    let activeSessionVideos = [];
    let activeHomeworkVideos = [];

    try {
        const { doc, getDoc } = await import("https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js");
        const docRef = doc(window.db, "lessons", `${selectedGrade}_${finalHeadingText.replace(/\s+/g, '_')}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            if (typeof data.sessionVideo === 'string' && data.sessionVideo !== "") activeSessionVideos = [data.sessionVideo];
            else if (Array.isArray(data.sessionVideos)) activeSessionVideos = data.sessionVideos;

            if (typeof data.homeworkVideo === 'string' && data.homeworkVideo !== "") activeHomeworkVideos = [data.homeworkVideo];
            else if (Array.isArray(data.homeworkVideos)) activeHomeworkVideos = data.homeworkVideos;
        }
    } catch (error) {
        console.error("Error loading video data:", error);
    }

    if (isTeacher) {
        const isTeacherAuth = sessionStorage.getItem("teacherAuth") === "true";
        if (!isTeacherAuth) {
            const enteredTeacherPass = prompt("Enter Teacher Password to access Admin Panel:");
            if (enteredTeacherPass === "RaniaAdmin2026") sessionStorage.setItem("teacherAuth", "true");
            else {
                alert("❌ Incorrect Teacher Password.");
                const url = new URL(window.location.href);
                url.searchParams.delete('teacher');
                window.location.replace(url.toString());
                return; 
            }
        }

        if (document.getElementById("teacherAdminBar")) {
            document.getElementById("teacherAdminBar").style.display = "block";
            if (document.getElementById("adminCurrentLessonName")) document.getElementById("adminCurrentLessonName").textContent = finalHeadingText;

            const sessionContainer = document.getElementById("sessionInputsContainer");
            sessionContainer.innerHTML = "";
            if (activeSessionVideos.length === 0) addInput('session');
            else activeSessionVideos.forEach(url => addInput('session', url));

            const homeworkContainer = document.getElementById("homeworkInputsContainer");
            homeworkContainer.innerHTML = "";
            if (activeHomeworkVideos.length === 0) addInput('homework');
            else activeHomeworkVideos.forEach(url => addInput('homework', url));
        }
    }

    renderParts(activeSessionVideos, 'sessionPartsContainer', 'lessonVideoIframe');
    renderParts(activeHomeworkVideos, 'homeworkPartsContainer', 'homeworkVideoIframe');

    const indexContainer = document.getElementById("textbookIndexContainer");
    if (indexContainer) {
        if (gradeData.hasIndex) {
            indexContainer.style.display = "block";
            let indexHTML = "";
            for (let i = 0; i < gradeData.units.length; i++) {
                const unit = gradeData.units[i];
                let lessonListHTML = "";
                for (let j = 0; j < unit.lessons.length; j++) {
                    lessonListHTML += "<li><span class='bullet-dot'>▪</span> " + unit.lessons[j] + "</li>";
                }
                indexHTML += '<div class="index-unit-box"><div class="unit-title-banner">' + unit.name + '</div><ul class="index-lesson-list">' + lessonListHTML + '</ul></div>';
            }
            const indexGrid = document.getElementById("indexGrid");
            if (indexGrid) { indexGrid.innerHTML = indexHTML; }
        } else {
            indexContainer.style.display = "none";
        }
    }
}

function addInput(type, value = "") {
    const container = document.getElementById(`${type}InputsContainer`);
    const div = document.createElement('div');
    div.className = 'input-group dynamic-input-group';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.className = `${type}UrlInput`;
    input.placeholder = "https://www.youtube.com/watch?v=...";
    input.value = value;
    
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.innerHTML = '✕';
    removeBtn.className = 'remove-part-btn';
    removeBtn.onclick = () => div.remove();

    div.appendChild(input);
    div.appendChild(removeBtn);
    container.appendChild(div);
}

// ==========================================================================
// 4. Save Logic
// ==========================================================================
async function saveTeacherLinks() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedGrade = urlParams.get('grade');
    const clickedLessonName = urlParams.get('lessonName');
    const gradeData = mathDatabase[selectedGrade];
    
    if (!gradeData) return alert("⚠️ Error: Grade data not found.");

    const finalHeadingText = clickedLessonName ? clickedLessonName : gradeData.lessonTitle;

    const sessionInputs = document.querySelectorAll('.sessionUrlInput');
    let sessionVideos = [];
    sessionInputs.forEach(input => {
        const clean = cleanYoutubeUrl(input.value.trim());
        if (clean) sessionVideos.push(clean);
    });

    const homeworkInputs = document.querySelectorAll('.homeworkUrlInput');
    let homeworkVideos = [];
    homeworkInputs.forEach(input => {
        const clean = cleanYoutubeUrl(input.value.trim());
        if (clean) homeworkVideos.push(clean);
    });

    let dataObj = { sessionVideos: sessionVideos, homeworkVideos: homeworkVideos };

    try {
        const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js");
        const docRef = doc(window.db, "lessons", `${selectedGrade}_${finalHeadingText.replace(/\s+/g, '_')}`);
        await setDoc(docRef, dataObj, { merge: true });
        alert("🚀 Links saved to the cloud! Refreshing portal view...");
        window.location.reload();
    } catch (error) {
        console.error("Error saving to Firestore:", error);
        alert("❌ Failed to save links. Please check your internet connection.");
    }
}

function toggleTeacherMode(status) {
    const url = new URL(window.location.href);
    if (status) url.searchParams.set('teacher', 'true');
    else { url.searchParams.delete('teacher'); sessionStorage.removeItem('teacherAuth'); }
    window.location.replace(url.toString());
}

// ==========================================================================
// 5. Cache Buster Utility
// ==========================================================================
async function clearLessonCache() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedGrade = urlParams.get('grade');
    const clickedLessonName = urlParams.get('lessonName');
    const gradeData = mathDatabase[selectedGrade];
    if (!gradeData) return alert("⚠️ Error: Grade data not found.");

    if (!confirm("Are you sure you want to REMOVE all video links? This will delete them for all students.")) return;

    const finalHeadingText = clickedLessonName ? clickedLessonName : gradeData.lessonTitle;
    
    try {
        const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js");
        const docRef = doc(window.db, "lessons", `${selectedGrade}_${finalHeadingText.replace(/\s+/g, '_')}`);
        await setDoc(docRef, { sessionVideos: [], homeworkVideos: [] }, { merge: true });
        alert("🗑️ Video links removed successfully!");
        window.location.reload();
    } catch (error) {
        console.error("Error deleting from Firestore:", error);
        alert("❌ Failed to delete links.");
    }
}

// ==========================================================================
// 6. Password Gate Logic
// ==========================================================================
const MASTER_PASSWORD = "~!}_~t2@G:vJ?1?"; 

document.addEventListener("DOMContentLoaded", () => {
    const gate = document.getElementById("passwordGate");
    const passwordInput = document.getElementById("passwordInput");

    if (!gate) return;

    if (sessionStorage.getItem("mathPortalAuth") === "true") {
        gate.style.display = "none";
        document.body.classList.remove("locked");
    } else {
        document.body.classList.add("locked");
        if (passwordInput) passwordInput.focus();
    }
});

function checkPassword() {
    const gate = document.getElementById("passwordGate");
    const passwordInput = document.getElementById("passwordInput");
    const errorMsg = document.getElementById("passwordError");

    if (passwordInput.value === MASTER_PASSWORD) {
        sessionStorage.setItem("mathPortalAuth", "true");
        gate.style.display = "none";
        document.body.classList.remove("locked");
    } else {
        errorMsg.style.display = "block";
        passwordInput.value = "";
        passwordInput.style.borderColor = "#ef4444";
        setTimeout(() => passwordInput.style.borderColor = "var(--border-color)", 2000);
    }
}

// ==========================================================================
// 7. Anti-Download & Logout
// ==========================================================================
document.addEventListener("contextmenu", function(e) {
    if (e.target.tagName === 'IFRAME') {
        e.preventDefault();
        alert("⚠️ Downloading or copying videos is disabled for this portal.");
    }
});

function logoutStudent() {
    if (confirm("Are you sure you want to log out?")) {
        sessionStorage.removeItem("mathPortalAuth");
        sessionStorage.removeItem("teacherAuth");
        window.location.reload();
    }
}