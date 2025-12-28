        // Particle System
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = window.innerWidth > 768 ? 50 : 25;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random size between 2-6px
                const size = Math.random() * 4 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                // Random position
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                
                // Random animation duration
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                particle.style.animationDelay = Math.random() * 2 + 's';
                
                particlesContainer.appendChild(particle);
            }
        }

        // Navigation scroll effect
        function handleNavScroll() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.getElementById('navLinks');
            
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }

        // Smooth scrolling
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Scroll animations
        function handleScrollAnimations() {
            const elements = document.querySelectorAll('.fade-in');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        }

        // Skills animation
        function animateSkills() {
            const skillBars = document.querySelectorAll('.skill-progress');
            const skillsSection = document.getElementById('skills');
            const skillsSectionTop = skillsSection.getBoundingClientRect().top;
            
            if (skillsSectionTop < window.innerHeight - 150) {
                skillBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.width = progress + '%';
                });
            }
        }

        // Form submission
        function sendMessage(event) {
            event.preventDefault();
            
            // Simulate form submission
            const button = event.target.querySelector('button');
            const originalText = button.innerHTML;
            
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            button.disabled = true;
            
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.disabled = false;
                    event.target.reset();
                }, 2000);
            }, 1500);
        }

       // Resume download
        function downloadResume() {
            // Simulate resume download
            const link = document.createElement('a');
            link.href = '#'; // Replace with actual resume URL
            link.download = 'Alex_Cooper_Resume.pdf';
            
            // Create a temporary notification
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--glass-bg);
                backdrop-filter: blur(20px);
                border: 1px solid var(--primary-cyan);
                color: var(--primary-cyan);
                padding: 1rem 2rem;
                border-radius: 10px;
                z-index: 10000;
                box-shadow: 0 10px 30px rgba(0, 255, 255, 0.3);
            `;
            notification.textContent = 'Resume download started!';
            document.body.appendChild(notification);
            
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 3000);
        }

        // Typing effect for hero tagline
        function typeWriter() {
            const tagline = document.querySelector('.hero .tagline');
            const text = "Building the future with code & creativity";
            const coloredText = 'Building the future with <span style="color: var(--primary-cyan);">code</span> & <span style="color: var(--primary-purple);">creativity</span>';
            
            let i = 0;
            tagline.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    if (text.charAt(i) === 'c' && text.substr(i, 4) === 'code') {
                        tagline.innerHTML += '<span style="color: var(--primary-cyan);">code</span>';
                        i += 4;
                    } else if (text.charAt(i) === 'c' && text.substr(i, 10) === 'creativity') {
                        tagline.innerHTML += '<span style="color: var(--primary-purple);">creativity</span>';
                        i += 10;
                    } else {
                        tagline.innerHTML += text.charAt(i);
                        i++;
                    }
                    setTimeout(type, 100);
                } else {
                    // Replace with properly formatted version
                    setTimeout(() => {
                        tagline.innerHTML = coloredText;
                    }, 500);
                }
            }
            
            setTimeout(type, 1000);
        }

        // Initialize everything
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            toggleMobileMenu();
            typeWriter();
            
            // Event listeners
            window.addEventListener('scroll', () => {
                handleNavScroll();
                handleScrollAnimations();
                animateSkills();
            });
            
            window.addEventListener('resize', () => {
                // Recreate particles on resize
                document.getElementById('particles').innerHTML = '';
                createParticles();
            });
            
            // Smooth scrolling for nav links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').substring(1);
                    scrollToSection(targetId);
                    
                    // Close mobile menu
                    document.getElementById('navLinks').classList.remove('active');
                });
            });
            
            // Initial scroll animation check
            handleScrollAnimations();
        });

        // Add some interactive hover effects
        document.addEventListener('DOMContentLoaded', function() {
            // Tech items hover effect
            const techItems = document.querySelectorAll('.tech-item');
            techItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.05)';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
            
            // Project cards enhanced hover
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-15px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        });