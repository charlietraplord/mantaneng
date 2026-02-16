"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Update the system clock
    function updateClock() {
      const now = new Date()
      const timeStr =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0") +
        ":" +
        now.getSeconds().toString().padStart(2, "0")
      const statusElement = document.querySelector(".system-status")
      if (statusElement) {
        statusElement.textContent = `SYS_UP: ${timeStr} | CPU: ${Math.floor(Math.random() * 20) + 5}%`
      }
    }
    updateClock()
    const interval = setInterval(updateClock, 1000)

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
          <span className="scroll-arrow">↑</span>
        </button>
      )}

      <header>
        <div className="container header-inner">
          <div className="logo">Mantaneng <br/> Ratale</div>
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
          <nav id="mobile-nav" className={`nav-links ${isMobileMenuOpen ? "nav-open" : ""}`}>
            <a href="#work" onClick={closeMobileMenu}>
              EXPERIENCE
            </a>
            <a href="#lab" onClick={closeMobileMenu}>
              LAB
            </a>
            <a href="#archive" onClick={closeMobileMenu}>
              ARCHIVE
            </a>
            <a href="#contact" onClick={closeMobileMenu}>
              CONTACT
            </a>
          </nav>
          <div className="system-status">SYS_UP: 24:12:05:08 | CPU: 12%</div>
        </div>
      </header>

      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <p style={{ color: "var(--accent)", marginBottom: "10px" }}>{"[ INITIALIZING PROTOCOL... ]"}</p>
            <h1>
              Mantaneng Ratale <span>Software Engineer</span>
            </h1>
            <p>
              Enterprise software engineer with deep expertise in Java ecosystem and backend development, now expanding
              into modern full-stack architecture. I build robust REST APIs, integrate complex enterprise systems, and
              lead teams to deliver high-volume applications without compromising quality.
            </p>
            <a href="#work" className="btn-retro">
              VIEW EXPERIENCE
            </a>
            <a
              href="/Mantaneng-CV.pdf"
              className="btn-retro"
              download
              style={{ marginLeft: "12px", display: "inline-block" }}
            >
              DOWNLOAD CV
            </a>
          </div>
          <div className="window-frame">
            <div className="window-header">
              <span>MANTANENG.JPG</span>
              <div className="window-controls">
                <button className="window-btn" aria-label="Minimize">
                  <span className="minimize-icon"></span>
                </button>
                <button className="window-btn" aria-label="Maximize">
                  <span className="maximize-icon"></span>
                </button>
                <button className="window-btn window-close" aria-label="Close">
                  <span className="close-icon"></span>
                </button>
              </div>
            </div>
            <img src="/mantaneng.jpeg" alt="Mantaneng Portrait" className="hero-image" />
          </div>
        </section>

        {/* Stats */}
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-val">12+</div>
            <div className="stat-label">Years XP</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">03</div>
            <div className="stat-label">Core Roles</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">02</div>
            <div className="stat-label">Primary Languages</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">100%</div>
            <div className="stat-label">Delivery Focus</div>
          </div>
        </div>

        {/* Portfolio */}
        <section id="work">
          <h2 className="section-title">Professional Experience</h2>
          <div className="portfolio-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>RMB_2021_PRESENT</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize">
                    <span className="minimize-icon"></span>
                  </button>
                  <button className="window-btn" aria-label="Maximize">
                    <span className="maximize-icon"></span>
                  </button>
                  <button className="window-btn window-close" aria-label="Close">
                    <span className="close-icon"></span>
                  </button>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80"
                alt="Enterprise Systems"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#JAVA #LIFERAY #C_SHARP #SQL</span>
                <h3 className="project-title">Developer | Rand Merchant Bank | 2021 – Present</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Liferay and Spring development, C# engineering in Equity GUI, full-stack UI delivery, SQL (Postgres
                  and MS SQL) optimization, SSIS/SSRS reporting, and Informatica ETL implementation.
                </p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>RMB_2019_2020</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize">
                    <span className="minimize-icon"></span>
                  </button>
                  <button className="window-btn" aria-label="Maximize">
                    <span className="maximize-icon"></span>
                  </button>
                  <button className="window-btn window-close" aria-label="Close">
                    <span className="close-icon"></span>
                  </button>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
                alt="Integration Engineering"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#TIBCO #CONTROL_M #EMS #ETL</span>
                <h3 className="project-title">Integration Developer | Rand Merchant Bank | 2019 – 2020</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Ensured integration availability, built Tibco solutions, optimized ETL pipelines, handled rotational
                  on-call support, and improved code quality through reviews and documentation.
                </p>
              </div>
            </div>
            {/* Project 3 */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>WEBRACK_2013_2023</span>
                <div className="window-controls">
                  <button className="window-btn" aria-label="Minimize">
                    <span className="minimize-icon"></span>
                  </button>
                  <button className="window-btn" aria-label="Maximize">
                    <span className="maximize-icon"></span>
                  </button>
                  <button className="window-btn window-close" aria-label="Close">
                    <span className="close-icon"></span>
                  </button>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80"
                alt="Web Development"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#WORDPRESS #MERN #FREELANCE</span>
                <h3 className="project-title">Website Developer (Freelance) | Webrack | 2013 – 2023</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Designed and delivered custom websites end-to-end, developed WordPress themes/plugins, and shipped
                  full-stack MERN solutions for diverse clients.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-text">
          <span>JAVA • LIFERAY • REST APIS • C# • .NET • SQL SERVER • TIBCO BW • SSIS/SSRS • </span>
          <span>NEXT.JS • REACT • TYPESCRIPT • VUE • ASTRO • REACT NATIVE • TAILWIND • SUPABASE • PRISMA • POSTGRESQL • </span>
          <span>JAVA • LIFERAY • REST APIS • C# • .NET • SQL SERVER • TIBCO BW • SSIS/SSRS • </span>
          <span>NEXT.JS • REACT • TYPESCRIPT • VUE • ASTRO • REACT NATIVE • TAILWIND • SUPABASE • PRISMA • POSTGRESQL • </span>
        </div>
      </div>

      <div className="container">
        {/* Terminal Section */}
        <section className="terminal-section" id="lab">
          <div className="terminal-header">MANTANENG_PROFILE.EXE</div>
          <div className="terminal-row">
            <span className="prompt">{"mantaneng@portfolio:~$"}</span>
            <span className="command">fetch skills --all</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"> Analyzing core competencies and stack..."}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[████████████████] 100% - ENTERPRISE BACKEND ENGINEERING"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[███████████████░] 92% - INTEGRATION & ETL SYSTEMS"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[██████████████░░] 88% - MODERN FULL-STACK EXPANSION"}</span>
          </div>
          <div className="terminal-row">
            <span className="prompt">{"mantaneng@portfolio:~$"}</span>
            <span className="command">cat education_and_programs.log</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"> First Job Program | First Rand & GIBS | 2019 – 2020"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"> BA Information Management | University of Johannesburg | 2013 – 2018"}</span>
          </div>
          <div className="terminal-row" id="archive">
            <span className="output">{"> Majors: Informatics, Information Management, Computer Science"}</span>
          </div>
          <div className="terminal-row">
            <span className="prompt">{"mantaneng@portfolio:~$"}</span>
            <span className="command">run contact_protocol.sh</span>
          </div>
          <div className="terminal-row" id="contact">
            <span className="output">{"> Phone: 0672419053 | Email: mantaneng@hotmail.com | Site: www.webrack.co.za"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">
              {"> GitHub: https://github.com/charlietraplord | LinkedIn: https://www.linkedin.com/in/mantaneng/ "}
              <span className="cursor-blink">_</span>
            </span>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-logo">
            <p style={{ color: "var(--accent)", fontSize: "0.8rem", marginBottom: "10px" }}>END_OF_PAGE</p>
            <h2>
              MANTANENG RATALE
              <br />
              <br />
              2026©
            </h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ marginBottom: "20px" }}>
              <a
                href="https://www.webrack.co.za"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}
              >
                WEBRACK
              </a>
              <a
                href="https://github.com/charlietraplord"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}
              >
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/mantaneng/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}
              >
                LINKEDIN
              </a>
            </div>
            <p className="copyright">ENTERPRISE ENGINEERING MEETS MODERN FULL-STACK DELIVERY.</p>
          </div>
        </footer>

        <div className="footer-badge">
          <a href="https://www.webrack.co.za" target="_blank" rel="noopener noreferrer" className="badge-link-footer">
            <div className="badge-content-footer">
              <span className="badge-highlight">webrack</span>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
