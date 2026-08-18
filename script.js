// --- Dynamic Services Dataset ---
const servicesData = {
  peb: [
    {
      icon: "🏗️",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      title: "Turnkey PEB Warehouses",
      desc: "End-to-end design, fabrication, and installation of spacious pre-engineered warehouses and industrial storage buildings.",
      features: ["Custom Span Clearances", "High Seismic Safety", "Energy-Efficient Insulations"]
    },
    {
      icon: "🏢",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      title: "Commercial Complexes",
      desc: "Architecturally striking and highly functional multi-story steel complexes designed for office buildings, showrooms, and retail centers.",
      features: ["Quick Assembly Timelines", "Flexible Floor Layouts", "AISC Code Compliance"]
    },
    {
      icon: "✈️",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80",
      title: "Aviation Hangars & Arenas",
      desc: "Wide-span structures offering obstruction-free interior spaces for aircraft hangars, sports arenas, and exhibition halls.",
      features: ["Spans Exceeding 90 Meters", "Heavy Roof Load Support", "Integrated Crane Beams"]
    }
  ],
  components: [
    {
      icon: "🔩",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
      title: "Primary Frame Members",
      desc: "Built-up H-beams, tapered columns, and roof rafters fabricated from high-strength ASTM steel to withstand heavy gravity and wind loads.",
      features: ["ASTM 572M Sourced Steel", "AWS D1.1 Welding Integrity", "Deep Rust-Resistant Coatings"]
    },
    {
      icon: "📏",
      image: "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?auto=format&fit=crop&w=800&q=80",
      title: "Secondary Z & C Purlins",
      desc: "Precision roll-formed cold steel purlins, girts, and eave struts providing lightweight, high-strength support for building envelopes.",
      features: ["Uniform Dimensions", "Pre-Punched Bolt Holes", "High Zinc Coating Protection"]
    },
    {
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      title: "Roof & Wall Claddings",
      desc: "Color-coated Galvalume and Galvanized panels in multiple profiles, offering ultimate weather-proofing and modern aesthetics.",
      features: ["AZ150 Galvalume Layer", "Standard Color Choices", "Thermal Insulation Compatibility"]
    }
  ],
  cnc: [
    {
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80",
      title: "Precision Fiber Laser Cutting",
      desc: "High-speed, sub-millimeter precision laser profiling of carbon steel, stainless steel, and aluminum plates.",
      features: ["Negligible Heat Distortion", "Intricate Geometry Cutting", "Plate Thicknesses Up to 25mm"]
    },
    {
      icon: "⚙️",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=800&q=80",
      title: "CNC Machining & Tooling",
      desc: "In-house CNC milling, turning, and surface grinding jobs tailored to client specifications for mechanical and industrial equipment.",
      features: ["High Dimensional Tolerance", "Batch Production Capability", "Detailed Quality Control Reports"]
    },
    {
      icon: "🔥",
      image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
      title: "Heavy Casting & Wear Parts",
      desc: "Production of specialized casting elements and wear-resistant machinery parts for mining, manufacturing, and cement sectors.",
      features: ["Alloy Steel Castings", "Hardened Surface Layers", "Custom Blueprint Casting"]
    }
  ],
  infra: [
    {
      icon: "🚧",
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80",
      title: "Highway Guardrails",
      desc: "W-Beam and Thrie-Beam crash barriers manufactured using hot-dip galvanized steel, conforming to international safety standards.",
      features: ["High Impact Absorption", "Hot-Dip Galvanized Coating", "Standard Mounting Brackets"]
    },
    {
      icon: "🕸️",
      image: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&w=800&q=80",
      title: "Security Fencing & Mesh",
      desc: "Chain-link fences, welded mesh panels, and gabion baskets for site boundary enclosure, security, and soil stabilization.",
      features: ["Heavy Galvanized Wire", "PVC Anti-UV Coatings Available", "Anti-Climb Rigid Mesh Options"]
    },
    {
      icon: "💨",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      title: "Heavy Industrial Ducts",
      desc: "Custom design and fabrication of heavy steel ducts, ventilation channels, pipe supports, and plant structural accessories.",
      features: ["Airflow Optimization Detailing", "Vibration-Resistant Frames", "On-site Installation Support"]
    }
  ],
  construction: [
    {
      icon: "🧱",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
      title: "Civil & Structural Concrete",
      desc: "Heavy foundations, concrete plinths, machinery bases, and structural reinforced concrete frames engineered for heavy loading.",
      features: ["High-Strength Concrete Mixes", "Seismic-Compliant Foundation Plinths", "In-house Concrete Lab Inspection"]
    },
    {
      icon: "🏢",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      title: "Commercial & Turnkey Buildings",
      desc: "Fast-track, turnkey construction of corporate office blocks, commercial showrooms, retail centers, and multi-story structural layouts.",
      features: ["Integrated MEP Design", "Optimized Construction Timelines", "Premium Grade Quality Finishing"]
    },
    {
      icon: "🏭",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80",
      title: "Industrial Plant Commissioning",
      desc: "Full-scale structural erection, machinery foundation works, heavy plant rigging, industrial pipe fitting, and structural commissioning.",
      features: ["Certified Heavy Lift Planning", "AWS/ASME Welding Certification", "Rigorous Safety Compliance (OSHA)"]
    }
  ]
};

// --- PEB Hotspot Guide Details ---
const componentDetails = {
  "primary-frame": {
    title: "Primary Framing Columns",
    badge: "Primary Frame",
    desc: "IECC's primary framing includes vertical columns and sloped roof rafters. These are constructed from high-tensile steel plates welded into heavy 'I' sections. They carry the primary loads of the structure (dead loads, wind, snow, and seismic forces) down to the concrete foundation footings.",
    model: "Tapered I-Beam (Built-Up Web Plate)",
    material: "ASTM A572 Grade 50 (345 MPa Yield)",
    dims: "Web: 250-900mm | Flange: 150-300mm"
  },
  "purlins": {
    title: "Secondary Z & C Purlins",
    badge: "Secondary Frame",
    desc: "Secondary framing consists of cold-formed C- or Z-shaped members called purlins (on the roof) and girts (on the walls). These run horizontally between the primary columns to support the roof and wall sheeting while providing critical structural bracing to the entire frame.",
    model: "Z-200 / C-200 Cold-Formed Channel",
    material: "IS 277 / ASTM A653 (Zinc: 120-275 gsm)",
    dims: "Height: 150-250mm | Thickness: 1.5-3.0mm"
  },
  "sheeting": {
    title: "Roof & Wall Cladding",
    badge: "Cladding Sheet",
    desc: "The protective envelope is made of AZ150 Galvalume steel sheeting, available in various profiles and standard colors. The sheeting is installed with anti-leak fastener assemblies and is often paired with glass-wool or sandwich panel insulation to maintain comfortable indoor temperatures.",
    model: "TR-28/250 Trapezoidal Profile",
    material: "Alu-Zinc Coated (55% Al, 43.5% Zn)",
    dims: "Cover Width: 1000mm | Thickness: 0.47-0.60mm"
  },
  "mezzanine": {
    title: "Intermediate Mezzanine Floors",
    badge: "Special Structure",
    desc: "For multi-level operations or integrated office spaces inside industrial sheds, we fabricate heavy steel mezzanine decks. These incorporate primary joists, secondary deck beams, and profiled decking sheets ready for concrete pour, offering high load-bearing capacities.",
    model: "Composite Decking System",
    material: "IS 2062 Grade E250 / E350 Structural Steel",
    dims: "Max Span: 8m | Deck Sheet Thickness: 0.8-1.2mm"
  }
};

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initHeroCanvas();
  initServicesTabs();
  initHotspotGuide();
  initEstimator();
  initEstimator3D();
  initStatsCounters();
  initBusinessCardFlip();
  initContactForm();
});

// --- Navbar Scrolled Class & Mobile Toggle ---
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    
    // Active Link Highlighting
    const sections = document.querySelectorAll("section");
    let currentId = "hero";
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        currentId = sec.getAttribute("id");
      }
    });

    const links = navLinks.querySelectorAll("a");
    links.forEach(l => {
      l.classList.remove("active");
      if (l.getAttribute("href") === `#${currentId}`) {
        l.classList.add("active");
      }
    });
  });

  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "absolute";
      navLinks.style.top = "100%";
      navLinks.style.left = "0";
      navLinks.style.width = "100%";
      navLinks.style.background = "rgba(248, 250, 252, 0.98)";
      navLinks.style.padding = "2rem";
      navLinks.style.borderBottom = "1px solid var(--border-glass)";
    } else {
      navLinks.style.display = "";
    }
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        navLinks.style.display = "";
      }
    });
  });
}

// --- Canvas 3D Frame Animation (Rotating Structural Truss Grid) ---
function initHeroCanvas() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = canvas.offsetWidth);
  let height = (canvas.height = canvas.offsetHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  });

  // Structural nodes (vertices of a 3D structural lattice framework)
  const nodes = [];
  const spacing = 150;
  const cols = 5;
  const rows = 3;
  const depth = 3;

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      for (let z = 0; z < depth; z++) {
        nodes.push({
          x: (x - (cols - 1) / 2) * spacing,
          y: (y - (rows - 1) / 2) * spacing,
          z: (z - (depth - 1) / 2) * spacing,
          ox: (x - (cols - 1) / 2) * spacing,
          oy: (y - (rows - 1) / 2) * spacing,
          oz: (z - (depth - 1) / 2) * spacing
        });
      }
    }
  }

  let angleY = 0.001;
  let angleX = 0.0006;
  
  // Track mouse coordinates for subtle parallax tilting
  let mouseX = 0;
  let mouseY = 0;
  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.05;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.05;
  });

  function rotate3D(node, ax, ay) {
    // Rotate Y
    let cosY = Math.cos(ay);
    let sinY = Math.sin(ay);
    let z1 = node.z * cosY - node.x * sinY;
    let x1 = node.z * sinY + node.x * cosY;

    // Rotate X
    let cosX = Math.cos(ax);
    let sinX = Math.sin(ax);
    let y2 = node.y * cosX - z1 * sinX;
    let z2 = node.y * sinX + z1 * cosX;

    node.x = x1;
    node.y = y2;
    node.z = z2;
  }

  function project(node) {
    const fov = 450;
    // Apply camera distance
    const cameraDist = 550;
    const scale = fov / (fov + node.z + cameraDist);
    // Center point projection with mouse parallax offsets
    const px = node.x * scale + width / 2 + mouseX * scale;
    const py = node.y * scale + height / 2 + mouseY * scale;
    return { x: px, y: py, scale: scale };
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Rotate all nodes slightly
    nodes.forEach(n => rotate3D(n, angleX, angleY));

    // Project coordinates
    const projected = nodes.map(project);

    // Draw structural truss connections in IECC Navy theme
    ctx.strokeStyle = "rgba(11, 44, 92, 0.12)";
    ctx.lineWidth = 0.6;
    
    // Connect nodes based on distance to simulate beams
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].ox - nodes[j].ox;
        const dy = nodes[i].oy - nodes[j].oy;
        const dz = nodes[i].oz - nodes[j].oz;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        // Connect adjacent points in grid
        if (dist <= spacing * 1.1) {
          const pt1 = projected[i];
          const pt2 = projected[j];
          
          // Alpha fade out if nodes are behind camera or too close
          const alpha = Math.min(1, Math.max(0, (pt1.scale + pt2.scale) / 2));
          ctx.strokeStyle = `rgba(11, 44, 92, ${0.1 * alpha})`;
          
          // Draw line
          ctx.beginPath();
          ctx.moveTo(pt1.x, pt1.y);
          ctx.lineTo(pt2.x, pt2.y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes (joints) in IECC Maroon theme
    nodes.forEach((n, idx) => {
      const pt = projected[idx];
      const alpha = pt.scale;
      
      ctx.fillStyle = `rgba(139, 13, 30, ${0.65 * alpha})`;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 2.5 * pt.scale, 0, Math.PI * 2);
      ctx.fill();

      // Small secondary ring glow for selected joints
      if (idx % 9 === 0) {
        ctx.strokeStyle = `rgba(11, 44, 92, ${0.25 * alpha})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 7 * pt.scale, 0, Math.PI * 2);
        ctx.stroke();
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// --- Dynamic Services Tabs Switching ---
function initServicesTabs() {
  const tabsContainer = document.querySelector(".services-tabs-container");
  const grid = document.getElementById("services-grid");
  if (!tabsContainer || !grid) return;

  const buttons = tabsContainer.querySelectorAll(".tab-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const tabKey = btn.getAttribute("data-tab");
      renderServiceCards(tabKey);
    });
  });

  // Init default cards
  renderServiceCards("peb");
}

function renderServiceCards(category) {
  const grid = document.getElementById("services-grid");
  const data = servicesData[category];
  if (!data) return;

  grid.style.opacity = 0;
  setTimeout(() => {
    grid.innerHTML = "";
    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "service-card";

      // Mousemove dynamic hover effect calculation
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });

      let featuresHTML = "";
      item.features.forEach(f => {
        featuresHTML += `<li>${f}</li>`;
      });

      card.innerHTML = `
        <div class="service-card-img">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="service-icon">${item.icon}</div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <ul class="service-features-list">
          ${featuresHTML}
        </ul>
      `;
      grid.appendChild(card);
    });
    grid.style.opacity = 1;
    grid.style.transition = "opacity 0.4s ease";
  }, 150);
}

// --- Interactive Hotspot Guide ---
function initHotspotGuide() {
  const hotspots = document.querySelectorAll(".hotspot-node");
  const infoCard = document.getElementById("diagram-info-card");
  const defaultMsg = document.getElementById("info-default-msg");
  const contentBox = document.getElementById("info-content-box");
  const infoTitle = document.getElementById("info-title");
  const infoBadge = document.getElementById("info-badge");
  const infoDesc = document.getElementById("info-desc");
  const infoModel = document.getElementById("info-model");
  const infoMaterial = document.getElementById("info-material");
  const infoDims = document.getElementById("info-dims");

  hotspots.forEach(node => {
    const updatePanel = () => {
      const key = node.getAttribute("data-component");
      const details = componentDetails[key];
      if (!details) return;

      defaultMsg.style.display = "none";
      contentBox.style.display = "block";
      
      const isPrimary = details.badge.includes("Primary");
      infoTitle.innerHTML = `${details.title} <span class="badge ${isPrimary ? 'badge-primary' : 'badge-secondary'}" id="info-badge">${details.badge}</span>`;
      infoDesc.textContent = details.desc;
      
      // Dynamic specification injection
      infoModel.textContent = details.model || "-";
      infoMaterial.textContent = details.material || "-";
      infoDims.textContent = details.dims || "-";
      
      // Small visual pulse animation to card on load
      infoCard.style.transform = "scale(1.02)";
      infoCard.style.borderColor = isPrimary ? "var(--color-navy)" : "var(--color-maroon)";
      setTimeout(() => {
        infoCard.style.transform = "scale(1)";
      }, 200);
    };

    node.addEventListener("mouseenter", updatePanel);
    node.addEventListener("click", updatePanel);
  });
}

// --- Real-time PEB Cost Estimator Logic ---
function initEstimator() {
  const sliderArea = document.getElementById("slider-area");
  const sliderHeight = document.getElementById("slider-height");
  
  const areaVal = document.getElementById("area-val");
  const heightVal = document.getElementById("height-val");
  
  const materialSelector = document.getElementById("material-selector");
  const accessorySelector = document.getElementById("accessory-selector");
  
  const timelineOutput = document.getElementById("timeline-output");
  const weightOutput = document.getElementById("weight-output");

  if (!sliderArea) return;

  // Custom click selectors
  let selectedFactor = 1.0;

  materialSelector.querySelectorAll(".option-box").forEach(box => {
    box.addEventListener("click", () => {
      materialSelector.querySelectorAll(".option-box").forEach(b => b.classList.remove("active"));
      box.classList.add("active");
      selectedFactor = parseFloat(box.getAttribute("data-factor"));
      calculateEstimation();
    });
  });

  accessorySelector.querySelectorAll(".option-box").forEach(box => {
    box.addEventListener("click", () => {
      accessorySelector.querySelectorAll(".option-box").forEach(b => b.classList.remove("active"));
      box.classList.add("active");
      calculateEstimation();
    });
  });

  // Slider inputs
  sliderArea.addEventListener("input", (e) => {
    areaVal.textContent = parseFloat(e.target.value).toLocaleString();
    calculateEstimation();
  });

  sliderHeight.addEventListener("input", (e) => {
    heightVal.textContent = e.target.value;
    calculateEstimation();
  });

  function calculateEstimation() {
    const area = parseFloat(sliderArea.value);
    const height = parseFloat(sliderHeight.value);

    // Timeline calculation
    let baseTimelineWeeks = 7;
    let scalingWeeks = Math.ceil(area / 20000);
    let minWeeks = baseTimelineWeeks + scalingWeeks;
    let maxWeeks = minWeeks + 3;

    // Weight Calculation (Metric Tonnes)
    const kgPerSqFt = 2.2 + (height - 5) * 0.15;
    const steelWeightMT = Math.round((area * kgPerSqFt * selectedFactor) / 1000);

    timelineOutput.textContent = `Estimated Timeline: ${minWeeks} - ${maxWeeks} Weeks`;
    weightOutput.textContent = `${steelWeightMT} Metric Tonnes`;
  }

  // Initial calculation trigger
  calculateEstimation();
}

function initEstimator3D() {
  const canvas = document.getElementById("estimator-3d-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  const areaSlider = document.getElementById("slider-area");
  const heightSlider = document.getElementById("slider-height");
  
  let widthVal = 15000;
  let heightVal = 8;
  
  function updateDims() {
    widthVal = parseFloat(areaSlider.value);
    heightVal = parseFloat(heightSlider.value);
  }
  
  if (areaSlider) areaSlider.addEventListener("input", updateDims);
  if (heightSlider) heightSlider.addEventListener("input", updateDims);
  
  updateDims();
  
  let angle = 0;
  
  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
  
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  
  function draw() {
    if (canvas.width === 0 || canvas.height === 0) {
      requestAnimationFrame(draw);
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const w = canvas.width / window.devicePixelRatio;
    const h = canvas.height / window.devicePixelRatio;
    const cx = w / 2;
    const cy = h / 2 + 10;
    
    // Scale factors based on input sliders
    const structureWidth = 70 + (widthVal / 150000) * 60; // 70 to 130 pixels
    const structureHeight = 30 + (heightVal / 16) * 40;   // 30 to 70 pixels
    const structureLength = 100 + (widthVal / 150000) * 60; // 100 to 160 pixels
    const ridgeHeight = structureHeight + 15;
    
    // Define 3D points
    const numFrames = 5;
    const framesZ = [];
    const L = structureLength;
    for (let i = 0; i < numFrames; i++) {
      framesZ.push(-L/2 + (L / (numFrames - 1)) * i);
    }
    
    const points = [];
    for (let f = 0; f < numFrames; f++) {
      const z = framesZ[f];
      points.push({ x: -structureWidth/2, y: -20, z: z });                 // 0: left bottom
      points.push({ x: -structureWidth/2, y: structureHeight - 20, z: z });   // 1: left eaves
      points.push({ x: 0, y: ridgeHeight - 20, z: z });                       // 2: peak
      points.push({ x: structureWidth/2, y: structureHeight - 20, z: z });    // 3: right eaves
      points.push({ x: structureWidth/2, y: -20, z: z });                  // 4: right bottom
    }
    
    // Rotation angles
    angle += 0.006;
    const rotX = -0.28; // fixed tilt angle
    const rotY = angle;
    
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);
    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);
    
    const projected = points.map(pt => {
      // Rotate Y
      const x1 = pt.x * cosY - pt.z * sinY;
      const z1 = pt.x * sinY + pt.z * cosY;
      
      // Rotate X
      const y2 = pt.y * cosX - z1 * sinX;
      const z2 = pt.y * sinX + z1 * cosX;
      
      const dist = 320;
      const scale = dist / (dist + z2);
      return {
        x: cx + x1 * scale,
        y: cy - y2 * scale
      };
    });
    
    // Draw portal frames in Navy/Maroon theme
    for (let f = 0; f < numFrames; f++) {
      const idx = f * 5;
      ctx.beginPath();
      ctx.moveTo(projected[idx].x, projected[idx].y);
      ctx.lineTo(projected[idx+1].x, projected[idx+1].y);
      ctx.lineTo(projected[idx+2].x, projected[idx+2].y);
      ctx.lineTo(projected[idx+3].x, projected[idx+3].y);
      ctx.lineTo(projected[idx+4].x, projected[idx+4].y);
      
      ctx.strokeStyle = (f === 0 || f === numFrames - 1) ? "#8b0d1e" : "rgba(11, 44, 92, 0.15)";
      ctx.lineWidth = (f === 0 || f === numFrames - 1) ? 2 : 1;
      ctx.stroke();
    }
    
    // Draw purlins and girts (longitudinal connecting lines) in Navy
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#0b2c5c";
    for (let ptIdx = 0; ptIdx < 5; ptIdx++) {
      ctx.beginPath();
      ctx.moveTo(projected[ptIdx].x, projected[ptIdx].y);
      for (let f = 1; f < numFrames; f++) {
        const idx = f * 5 + ptIdx;
        ctx.lineTo(projected[idx].x, projected[idx].y);
      }
      ctx.stroke();
    }
    
    // Draw cross bracing at the ends (Maroon)
    ctx.strokeStyle = "rgba(139, 13, 30, 0.2)";
    ctx.beginPath();
    // End wall x-bracing
    ctx.moveTo(projected[0].x, projected[0].y);
    ctx.lineTo(projected[6].x, projected[6].y);
    ctx.moveTo(projected[5].x, projected[5].y);
    ctx.lineTo(projected[1].x, projected[1].y);
    // Right side end wall x-bracing
    ctx.moveTo(projected[3].x, projected[3].y);
    ctx.lineTo(projected[9].x, projected[9].y);
    ctx.moveTo(projected[8].x, projected[8].y);
    ctx.lineTo(projected[4].x, projected[4].y);
    ctx.stroke();
    
    requestAnimationFrame(draw);
  }
  
  draw();
}

// --- Animated Counter Script (Stats Banner) ---
function initStatsCounters() {
  const statsSection = document.querySelector(".stats-banner");
  if (!statsSection) return;

  const numbers = statsSection.querySelectorAll(".stat-number");
  let started = false;

  const animateCounters = () => {
    numbers.forEach(numBox => {
      const target = parseInt(numBox.getAttribute("data-target"));
      const increment = target / 80; // Speed scaling
      let current = 0;

      const updateCount = () => {
        current += increment;
        if (current < target) {
          if (target >= 1000) {
            numBox.innerHTML = `${Math.floor(current).toLocaleString()}<span>+</span>`;
          } else {
            numBox.innerHTML = `${Math.floor(current)}<span>+</span>`;
          }
          setTimeout(updateCount, 15);
        } else {
          numBox.innerHTML = `${target.toLocaleString()}<span>+</span>`;
        }
      };

      updateCount();
    });
  };

  // Trigger only when banner comes into viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        animateCounters();
      }
    });
  }, { threshold: 0.25 });

  observer.observe(statsSection);
}

// --- Interactive 3D Business Card Flip ---
function initBusinessCardFlip() {
  const card = document.getElementById("business-card");
  const cardInner = document.getElementById("card-inner");
  if (!card || !cardInner) return;

  card.addEventListener("click", () => {
    cardInner.classList.toggle("flipped");
  });
}

// --- Contact Form Submission ---
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const phone = document.getElementById("contact-phone").value;
    const company = document.getElementById("contact-company").value;
    const message = document.getElementById("contact-message").value;

    // Create a beautiful premium overlay alert/success message
    const successOverlay = document.createElement("div");
    successOverlay.style.position = "fixed";
    successOverlay.style.inset = "0";
    successOverlay.style.background = "rgba(6, 23, 48, 0.85)";
    successOverlay.style.backdropFilter = "blur(10px)";
    successOverlay.style.zIndex = "999";
    successOverlay.style.display = "flex";
    successOverlay.style.alignItems = "center";
    successOverlay.style.justifyContent = "center";
    successOverlay.style.opacity = "0";
    successOverlay.style.transition = "opacity 0.4s ease";

    const box = document.createElement("div");
    box.style.background = "#FFF";
    box.style.border = "1px solid rgba(11, 44, 92, 0.1)";
    box.style.borderRadius = "24px";
    box.style.padding = "3.5rem";
    box.style.maxWidth = "480px";
    box.style.width = "90%";
    box.style.textAlign = "center";
    box.style.boxShadow = "0 30px 60px rgba(11, 44, 92, 0.25)";
    box.style.transform = "scale(0.8)";
    box.style.transition = "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

    box.innerHTML = `
      <div style="font-size: 4rem; margin-bottom: 1.5rem;">🏗️</div>
      <h3 style="font-family: 'Outfit', sans-serif; font-size: 2rem; color: #0b2c5c; margin-bottom: 1rem;">Enquiry Submitted!</h3>
      <p style="font-family: 'Inter', sans-serif; color: #475569; line-height: 1.6; margin-bottom: 2rem; font-size: 0.95rem;">
        Thank you, <strong>${name}</strong>. Your infrastructure planning details have been sent. IECC's engineering specialists will contact you at <strong>${email}</strong> within 12 hours.
      </p>
      <button class="btn btn-primary" id="success-close-btn" style="padding: 0.8rem 2.5rem; font-size: 0.9rem;">Back to Website</button>
    `;

    successOverlay.appendChild(box);
    document.body.appendChild(successOverlay);

    // Show animations
    setTimeout(() => {
      successOverlay.style.opacity = "1";
      box.style.transform = "scale(1)";
    }, 50);

    // Close handler
    const closeBtn = box.querySelector("#success-close-btn");
    closeBtn.addEventListener("click", () => {
      successOverlay.style.opacity = "0";
      box.style.transform = "scale(0.8)";
      setTimeout(() => {
        document.body.removeChild(successOverlay);
        form.reset();
      }, 400);
    });
  });
}
