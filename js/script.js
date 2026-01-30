/**
 * Apex Web Studio - JavaScript
 * Minimal interactions for professional website
 */

(function() {
  'use strict';

  // ==========================================================================
  // DOM Ready
  // ==========================================================================
  
  document.addEventListener('DOMContentLoaded', function() {
    initYearUpdate();
    initMobileNav();
    initSmoothScroll();
    initFormHandling();
  });

  // ==========================================================================
  // Update Footer Year
  // ==========================================================================
  
  function initYearUpdate() {
    var yearElements = document.querySelectorAll('#year');
    var currentYear = new Date().getFullYear();
    
    yearElements.forEach(function(el) {
      el.textContent = currentYear;
    });
  }

  // ==========================================================================
  // Mobile Navigation Toggle
  // ==========================================================================
  
  function initMobileNav() {
    var navToggle = document.querySelector('.nav-toggle');
    var navMenu = document.querySelector('.nav-menu');
    
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      
      // Toggle aria-expanded
      var isExpanded = navMenu.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = isExpanded ? 'hidden' : '';
    });
    
    // Close menu when clicking a link
    var navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // ==========================================================================
  // Smooth Scroll for Anchor Links
  // ==========================================================================
  
  function initSmoothScroll() {
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        var targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          var headerHeight = document.querySelector('.header').offsetHeight;
          var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ==========================================================================
  // Form Handling
  // ==========================================================================
  
  function initFormHandling() {
    var contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      var formData = new FormData(contactForm);
      var data = {};
      
      formData.forEach(function(value, key) {
        data[key] = value;
      });
      
      // Basic validation
      var isValid = validateForm(data);
      
      if (!isValid) return;
      
      // Show loading state
      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate form submission (replace with actual endpoint)
      setTimeout(function() {
        // Reset form
        contactForm.reset();
        
        // Show success message
        showFormMessage('success', 'Thank you for your message. We\'ll be in touch within one business day.');
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
      
      // For actual implementation, you would use:
      /*
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(result => {
        contactForm.reset();
        showFormMessage('success', 'Thank you for your message. We\'ll be in touch within one business day.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      })
      .catch(error => {
        showFormMessage('error', 'Something went wrong. Please try again or contact us directly.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      });
      */
    });
  }
  
  function validateForm(data) {
    var errors = [];
    
    if (!data.name || data.name.trim() === '') {
      errors.push('Name is required');
    }
    
    if (!data.business || data.business.trim() === '') {
      errors.push('Business name is required');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
      errors.push('Valid email address is required');
    }
    
    if (!data.message || data.message.trim() === '') {
      errors.push('Message is required');
    }
    
    if (errors.length > 0) {
      showFormMessage('error', errors.join('. '));
      return false;
    }
    
    return true;
  }
  
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function showFormMessage(type, message) {
    // Remove existing message
    var existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }
    
    // Create message element
    var messageEl = document.createElement('div');
    messageEl.className = 'form-message form-message-' + type;
    messageEl.textContent = message;
    
    // Style the message
    messageEl.style.cssText = 'padding: 1rem; margin-bottom: 1rem; border-radius: 6px; font-size: 0.875rem;';
    
    if (type === 'success') {
      messageEl.style.backgroundColor = '#c6f6d5';
      messageEl.style.color = '#22543d';
      messageEl.style.border = '1px solid #9ae6b4';
    } else {
      messageEl.style.backgroundColor = '#fed7d7';
      messageEl.style.color = '#742a2a';
      messageEl.style.border = '1px solid #feb2b2';
    }
    
    // Insert at top of form
    var contactForm = document.getElementById('contact-form');
    contactForm.insertBefore(messageEl, contactForm.firstChild);
    
    // Scroll to message
    messageEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Auto-remove success message after 5 seconds
    if (type === 'success') {
      setTimeout(function() {
        messageEl.remove();
      }, 5000);
    }
  }

  // ==========================================================================
  // Header Scroll Effect (Optional subtle effect)
  // ==========================================================================
  
  var header = document.querySelector('.header');
  var lastScrollY = 0;
  
  if (header) {
    window.addEventListener('scroll', function() {
      var currentScrollY = window.pageYOffset;
      
      // Add shadow on scroll
      if (currentScrollY > 10) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
      } else {
        header.style.boxShadow = 'none';
      }
      
      lastScrollY = currentScrollY;
    }, { passive: true });
  }

})();
