// GeoBrif Digital Chatbot Widget
// World-class AI-style chatbot without API
// Add this script before closing </body> tag

(function() {
  'use strict';

  // ══════════════════════════════════════════════════════════════
  // KNOWLEDGE BASE - All FAQ answers
  // ══════════════════════════════════════════════════════════════
  const knowledgeBase = {
    categories: {
      services: {
        title: "Services & Process",
        icon: "⬡",
        questions: [
          {
            q: "What services does GeoBrif Digital offer?",
            a: "We offer five core services: Custom Website Development, AI Chatbot Solutions, Business Automation Systems, Professional Business Email Setup, and Digital Branding & Marketing Assets. Each service is designed to work independently or as part of an integrated digital ecosystem."
          },
          {
            q: "How long does a typical project take from start to finish?",
            a: "Most projects are delivered within 2–4 weeks depending on scope and complexity. We provide a clear timeline and milestones before work begins, so you know exactly what to expect. Rush delivery options are available for urgent needs."
          },
          {
            q: "Do you take on all five services for one business at the same time?",
            a: "Absolutely! In fact, we recommend it. When our services work together as an integrated system, the results are exponentially more powerful than each service alone. We can phase the rollout based on your priorities and budget."
          },
          {
            q: "What does your project process look like from enquiry to delivery?",
            a: "Our process has 5 clear stages: (1) Discovery Call – we learn about your business and goals, (2) Proposal & Agreement – detailed scope and timeline, (3) Design & Development – collaborative build phase with check-ins, (4) Review & Refinement – your feedback and revisions, (5) Launch & Handover – deployment, training, and support documentation."
          },
          {
            q: "How many revision rounds are included in each project?",
            a: "Every project includes 2 comprehensive revision rounds. This allows for refinement based on your feedback while keeping the project on schedule. Additional revisions can be arranged if needed, though we find most clients are satisfied within the included rounds."
          },
          {
            q: "Is ongoing support and maintenance available after project completion?",
            a: "Yes! All projects include a 30-day post-launch support window for any issues or questions. Beyond that, we offer flexible retainer arrangements for ongoing maintenance, updates, and continuous optimization based on your needs."
          },
          {
            q: "Do you work with businesses in specific industries only?",
            a: "No – we work with ambitious businesses across all industries. Our solutions are tailored to your unique business model, whether you're in tech, professional services, e-commerce, healthcare, real estate, or any other sector."
          }
        ]
      },
      technical: {
        title: "Technical Questions",
        icon: "⚙",
        questions: [
          {
            q: "What technologies do you use to build websites?",
            a: "We use modern, battle-tested technologies including HTML5, CSS3, JavaScript, and frameworks like React when needed. For backends, we work with Node.js, Python, and cloud platforms like AWS or Vercel. Every tech choice is made to ensure performance, security, and scalability."
          },
          {
            q: "Will my website be optimised for search engines (SEO)?",
            a: "Yes, absolutely. Every website we build includes on-page SEO fundamentals: semantic HTML, optimized meta tags, fast load times, mobile responsiveness, structured data markup, and clean URLs. We can also provide advanced SEO strategy as an add-on service."
          },
          {
            q: "What automation tools do you work with?",
            a: "We integrate with industry-leading platforms including Zapier, Make (Integromat), n8n, and custom APIs. Common automations include lead routing, email sequences, CRM updates, payment processing, booking systems, and cross-platform data syncing."
          },
          {
            q: "How does the AI chatbot integrate with my existing website?",
            a: "Our AI chatbots are lightweight JavaScript widgets that integrate seamlessly with any website – whether it's custom-built, WordPress, Shopify, or any other platform. Installation takes minutes via a simple script tag. The chatbot is trained on your business information and can handle lead qualification, FAQs, and bookings 24/7."
          },
          {
            q: "Will I be able to manage and update my website myself after launch?",
            a: "Yes! We provide full training on how to update content, images, and other elements. For sites requiring frequent updates, we can build a custom CMS or integrate with platforms like WordPress or Contentful. You'll have complete control while we remain available for technical support."
          },
          {
            q: "Do you handle hosting and domain setup?",
            a: "Yes, we can handle everything. We'll help you secure the right domain, set up professional email, configure hosting on reliable infrastructure, implement SSL certificates, and ensure everything is secure and optimized. Or, if you prefer to use your existing hosting, we can work with that too."
          }
        ]
      },
      gettingStarted: {
        title: "Getting Started",
        icon: "▲",
        questions: [
          {
            q: "How do I get started with GeoBrif Digital?",
            a: "Getting started is simple! Book a free 30-minute discovery call via our Calendly link: https://calendly.com/geobrif1/30min – or email us directly at info@geobrif.com. We'll discuss your goals, answer questions, and if we're a good fit, provide a detailed proposal within 48 hours."
          },
          {
            q: "Do you work with complete beginners who have no existing digital presence?",
            a: "Absolutely! We work with businesses at every stage – from ground zero to established companies looking to level up. If you're just starting out, we'll guide you through every decision and build your entire digital foundation from scratch."
          },
          {
            q: "Do you work with clients internationally?",
            a: "Yes, we work with clients globally. Our entire process is remote-first and optimized for international collaboration. We've successfully delivered projects across multiple time zones and can schedule calls that work for your location."
          },
          {
            q: "What information should I prepare before our first call?",
            a: "Come prepared with: (1) A brief overview of your business and what you do, (2) Your main goals for the project, (3) Any examples of websites/designs you admire, (4) Your approximate budget and timeline, (5) Any existing brand assets (logo, colors, etc.). Don't worry if you don't have everything – we'll help you figure it out!"
          },
          {
            q: "How do payments and project invoicing work?",
            a: "We typically work with a 50% deposit upfront to begin work, and 50% upon completion before final delivery. For larger projects, we can arrange milestone-based payments. We accept bank transfers, credit cards, and international payment platforms. All pricing is transparent and agreed upon before work begins."
          }
        ]
      }
    },
    
    quickActions: [
      {
        text: "📅 Book a Call",
        action: () => window.open('https://calendly.com/geobrif1/30min', '_blank')
      },
      {
        text: "✉️ Email Us",
        action: () => window.location.href = 'mailto:info@geobrif.com'
      },
      {
        text: "💬 WhatsApp",
        action: () => window.open('https://wa.me/94741534557', '_blank')
      }
    ],

    contactInfo: {
      email: "info@geobrif.com",
      phone: "+94 74 153 4557",
      calendly: "https://calendly.com/geobrif1/30min"
    }
  };

  // ══════════════════════════════════════════════════════════════
  // AI-STYLE RESPONSE MATCHING
  // ══════════════════════════════════════════════════════════════
  function findBestMatch(userInput) {
    const input = userInput.toLowerCase().trim();
    
    // Keywords for matching
    const keywords = {
      services: ['service', 'offer', 'what do you', 'provide', 'five service', 'all service'],
      timeline: ['how long', 'time', 'take', 'duration', 'when', 'delivery', 'timeline'],
      allServices: ['all five', 'all service', 'everything', 'full package', 'complete'],
      process: ['process', 'workflow', 'how do you work', 'stages', 'steps'],
      revisions: ['revision', 'change', 'edit', 'modification', 'update'],
      support: ['support', 'maintenance', 'after launch', 'ongoing', 'help'],
      industry: ['industry', 'sector', 'niche', 'specific business', 'who do you work'],
      technology: ['tech', 'technology', 'build', 'framework', 'stack', 'code'],
      seo: ['seo', 'search engine', 'google', 'ranking', 'optimization'],
      automation: ['automation', 'automate', 'zapier', 'integration', 'workflow'],
      chatbot: ['chatbot', 'ai chat', 'bot', 'integrate'],
      manage: ['manage', 'update myself', 'edit', 'cms', 'control'],
      hosting: ['hosting', 'domain', 'server', 'host'],
      start: ['get started', 'begin', 'start', 'how to'],
      beginner: ['beginner', 'new', 'no website', 'starting out', 'from scratch'],
      international: ['international', 'global', 'country', 'remote'],
      prepare: ['prepare', 'bring', 'need', 'ready', 'first call'],
      payment: ['payment', 'price', 'cost', 'invoice', 'pay', 'deposit'],
      contact: ['contact', 'reach', 'email', 'phone', 'call', 'talk'],
      book: ['book', 'schedule', 'appointment', 'meeting', 'calendly']
    };

    let bestMatch = null;
    let highestScore = 0;

    // Search through all categories
    for (const catKey in knowledgeBase.categories) {
      const category = knowledgeBase.categories[catKey];
      
      category.questions.forEach(qa => {
        let score = 0;
        const qaLower = qa.q.toLowerCase();
        
        // Exact match gets highest priority
        if (input === qaLower) {
          score = 1000;
        }
        
        // Check if user input is contained in question
        if (qaLower.includes(input) || input.includes(qaLower)) {
          score += 100;
        }

        // Check keyword matches
        for (const key in keywords) {
          keywords[key].forEach(keyword => {
            if (input.includes(keyword) && qaLower.includes(keyword)) {
              score += 50;
            }
          });
        }

        // Check word overlap
        const inputWords = input.split(' ').filter(w => w.length > 3);
        const qaWords = qaLower.split(' ').filter(w => w.length > 3);
        
        inputWords.forEach(word => {
          if (qaWords.includes(word)) {
            score += 20;
          }
        });

        if (score > highestScore) {
          highestScore = score;
          bestMatch = { ...qa, category: category.title, icon: category.icon };
        }
      });
    }

    // If no good match found, return a helpful default
    if (highestScore < 20) {
      return {
        q: "How can we help?",
        a: "I'd be happy to help you with that! You can browse our FAQ categories below, or reach out directly:\n\n📧 Email: info@geobrif.com\n📞 Phone: +94 74 153 4557\n📅 Book a call: https://calendly.com/geobrif1/30min",
        category: "Contact",
        icon: "💬"
      };
    }

    return bestMatch;
  }

  // ══════════════════════════════════════════════════════════════
  // CHATBOT UI CREATION
  // ══════════════════════════════════════════════════════════════
  const styles = `
    /* Chatbot Widget Styles */
    #geobrif-chatbot-widget * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    #geobrif-chatbot-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .geobrif-chat-button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #c9a84c 0%, #e8c876 100%);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 24px rgba(201, 168, 76, 0.4);
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      position: relative;
      overflow: hidden;
    }

    .geobrif-chat-button::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: linear-gradient(135deg, #e8c876 0%, #c9a84c 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .geobrif-chat-button:hover {
      transform: scale(1.1);
      box-shadow: 0 12px 32px rgba(201, 168, 76, 0.6);
    }

    .geobrif-chat-button:hover::before {
      opacity: 1;
    }

    .geobrif-chat-button svg {
      position: relative;
      z-index: 1;
      width: 28px;
      height: 28px;
      fill: #0a0b0f;
      transition: transform 0.3s ease;
    }

    .geobrif-chat-button:hover svg {
      transform: scale(1.1);
    }

    .geobrif-chat-button.open svg {
      transform: rotate(90deg);
    }

    .geobrif-chat-notification {
      position: absolute;
      top: -5px;
      right: -5px;
      width: 20px;
      height: 20px;
      background: #ff4444;
      border-radius: 50%;
      border: 2px solid #fff;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.2); opacity: 0.8; }
    }

    .geobrif-chat-window {
      position: absolute;
      bottom: 80px;
      right: 0;
      width: 450px;
      max-width: calc(100vw - 40px);
      height: 680px;
      max-height: calc(100vh - 120px);
      background: #0d1117;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 1px rgba(201, 168, 76, 0.3);
      display: flex;
      flex-direction: column;
      opacity: 0;
      transform: translateY(20px) scale(0.95);
      pointer-events: none;
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      border: 1px solid rgba(201, 168, 76, 0.15);
      overflow: hidden;
    }

    .geobrif-chat-window.open {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: all;
    }

    .geobrif-chat-header {
      background: linear-gradient(135deg, #111520 0%, #0d1117 100%);
      padding: 24px;
      border-bottom: 1px solid rgba(201, 168, 76, 0.15);
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }

    .geobrif-chat-header::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.5), transparent);
    }

    .geobrif-chat-header-content {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .geobrif-chat-avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, #c9a84c 0%, #e8c876 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      flex-shrink: 0;
      box-shadow: 0 4px 12px rgba(201, 168, 76, 0.3);
    }

    .geobrif-chat-info h3 {
      color: #f4f2ed;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 4px;
      font-family: 'Cormorant Garamond', serif;
    }

    .geobrif-chat-status {
      color: #8b8ea8;
      font-size: 13px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .geobrif-status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #4ade80;
      animation: pulse 2s ease-in-out infinite;
    }

    .geobrif-chat-close {
      background: transparent;
      border: none;
      color: #8b8ea8;
      cursor: pointer;
      padding: 8px;
      border-radius: 8px;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .geobrif-chat-close:hover {
      background: rgba(201, 168, 76, 0.1);
      color: #c9a84c;
    }

    .geobrif-chat-body {
      flex: 1;
      overflow-y: auto;
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      background: #0a0b0f;
      scrollbar-width: thin;
      scrollbar-color: rgba(201, 168, 76, 0.3) transparent;
    }

    .geobrif-chat-body::-webkit-scrollbar {
      width: 6px;
    }

    .geobrif-chat-body::-webkit-scrollbar-track {
      background: transparent;
    }

    .geobrif-chat-body::-webkit-scrollbar-thumb {
      background: rgba(201, 168, 76, 0.3);
      border-radius: 3px;
    }

    .geobrif-chat-body::-webkit-scrollbar-thumb:hover {
      background: rgba(201, 168, 76, 0.5);
    }

    .geobrif-message {
      display: flex;
      gap: 12px;
      animation: messageSlideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    @keyframes messageSlideIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .geobrif-message.user {
      flex-direction: row-reverse;
    }

    .geobrif-message-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }

    .geobrif-message.bot .geobrif-message-avatar {
      background: linear-gradient(135deg, #c9a84c 0%, #e8c876 100%);
    }

    .geobrif-message.user .geobrif-message-avatar {
      background: #1e2538;
      color: #c9a84c;
    }

    .geobrif-message-content {
      max-width: 75%;
    }

    .geobrif-message-bubble {
      padding: 14px 18px;
      border-radius: 14px;
      font-size: 15px;
      line-height: 1.7;
      color: #f4f2ed;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    .geobrif-message.bot .geobrif-message-bubble {
      background: #111520;
      border: 1px solid rgba(201, 168, 76, 0.15);
      border-radius: 12px 12px 12px 4px;
    }

    .geobrif-message.user .geobrif-message-bubble {
      background: linear-gradient(135deg, #c9a84c 0%, #e8c876 100%);
      color: #0a0b0f;
      border-radius: 12px 12px 4px 12px;
      font-weight: 500;
    }

    .geobrif-message-category {
      font-size: 11px;
      color: #8b8ea8;
      margin-top: 6px;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .geobrif-typing {
      display: flex;
      gap: 4px;
      padding: 12px 16px;
      background: #111520;
      border: 1px solid rgba(201, 168, 76, 0.15);
      border-radius: 12px 12px 12px 4px;
      width: fit-content;
    }

    .geobrif-typing span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #c9a84c;
      animation: typingDot 1.4s ease-in-out infinite;
    }

    .geobrif-typing span:nth-child(2) {
      animation-delay: 0.2s;
    }

    .geobrif-typing span:nth-child(3) {
      animation-delay: 0.4s;
    }

    @keyframes typingDot {
      0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
      30% { transform: translateY(-8px); opacity: 1; }
    }

    .geobrif-quick-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 12px;
    }

    .geobrif-quick-action {
      background: transparent;
      border: 1px solid rgba(201, 168, 76, 0.3);
      color: #c9a84c;
      padding: 10px 16px;
      border-radius: 24px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
      font-weight: 500;
    }

    .geobrif-quick-action:hover {
      background: rgba(201, 168, 76, 0.1);
      border-color: #c9a84c;
      transform: translateY(-2px);
    }

    .geobrif-categories {
      display: grid;
      gap: 10px;
      margin-top: 14px;
    }

    .geobrif-category-btn {
      background: #111520;
      border: 1px solid rgba(201, 168, 76, 0.15);
      color: #f4f2ed;
      padding: 16px 18px;
      border-radius: 12px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: left;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .geobrif-category-btn:hover {
      background: rgba(201, 168, 76, 0.1);
      border-color: #c9a84c;
      transform: translateX(4px);
    }

    .geobrif-category-icon {
      font-size: 22px;
    }

    .geobrif-category-info {
      flex: 1;
    }

    .geobrif-category-title {
      font-weight: 600;
      margin-bottom: 4px;
      font-size: 15px;
    }

    .geobrif-category-count {
      font-size: 12px;
      color: #8b8ea8;
    }

    .geobrif-chat-input-wrapper {
      padding: 20px;
      background: #0d1117;
      border-top: 1px solid rgba(201, 168, 76, 0.15);
    }

    .geobrif-chat-input-container {
      display: flex;
      gap: 12px;
      align-items: center;
      background: #111520;
      border: 1px solid rgba(201, 168, 76, 0.2);
      border-radius: 14px;
      padding: 6px 6px 6px 18px;
      transition: all 0.2s ease;
    }

    .geobrif-chat-input-container:focus-within {
      border-color: #c9a84c;
      box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.1);
    }

    .geobrif-chat-input {
      flex: 1;
      background: transparent;
      border: none;
      color: #f4f2ed;
      font-size: 15px;
      padding: 12px 0;
      outline: none;
      font-family: inherit;
    }

    .geobrif-chat-input::placeholder {
      color: #8b8ea8;
    }

    .geobrif-chat-send {
      background: linear-gradient(135deg, #c9a84c 0%, #e8c876 100%);
      border: none;
      color: #0a0b0f;
      width: 42px;
      height: 42px;
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      flex-shrink: 0;
    }

    .geobrif-chat-send:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(201, 168, 76, 0.4);
    }

    .geobrif-chat-send:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }

    .geobrif-chat-send svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    .geobrif-clear-chat {
      background: transparent;
      border: 1px solid rgba(201, 168, 76, 0.2);
      color: #8b8ea8;
      padding: 10px 14px;
      border-radius: 10px;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.2s ease;
      margin-top: 10px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-weight: 500;
    }

    .geobrif-clear-chat:hover {
      background: rgba(201, 168, 76, 0.1);
      border-color: #c9a84c;
      color: #c9a84c;
    }

    /* Mobile Responsive */
    @media (max-width: 480px) {
      #geobrif-chatbot-widget {
        bottom: 15px;
        right: 15px;
      }

      .geobrif-chat-button {
        width: 54px;
        height: 54px;
      }

      .geobrif-chat-window {
        width: calc(100vw - 30px);
        height: calc(100vh - 100px);
        bottom: 75px;
        right: 50%;
        transform: translateX(50%) translateY(20px) scale(0.95);
      }

      .geobrif-chat-window.open {
        transform: translateX(50%) translateY(0) scale(1);
      }
    }
  `;

  // ══════════════════════════════════════════════════════════════
  // INITIALIZE CHATBOT
  // ══════════════════════════════════════════════════════════════
  function initChatbot() {
    // Add styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    // Create widget HTML
    const widget = document.createElement('div');
    widget.id = 'geobrif-chatbot-widget';
    widget.innerHTML = `
      <button class="geobrif-chat-button" aria-label="Open chat">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
          <circle cx="12" cy="10" r="1.5"/>
          <circle cx="8" cy="10" r="1.5"/>
          <circle cx="16" cy="10" r="1.5"/>
        </svg>
        <div class="geobrif-chat-notification"></div>
      </button>

      <div class="geobrif-chat-window">
        <div class="geobrif-chat-header">
          <div class="geobrif-chat-header-content">
            <div class="geobrif-chat-avatar">⬡</div>
            <div class="geobrif-chat-info">
              <h3>GeoBrif Digital</h3>
              <div class="geobrif-chat-status">
                <span class="geobrif-status-dot"></span>
                Always available
              </div>
            </div>
          </div>
          <button class="geobrif-chat-close" aria-label="Close chat">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <div class="geobrif-chat-body" id="geobrif-chat-body">
          <!-- Messages will be added here -->
        </div>

        <div class="geobrif-chat-input-wrapper">
          <div class="geobrif-chat-input-container">
            <input 
              type="text" 
              class="geobrif-chat-input" 
              placeholder="Ask me anything..."
              id="geobrif-chat-input"
              autocomplete="off"
            />
            <button class="geobrif-chat-send" id="geobrif-chat-send" aria-label="Send message">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
          <button class="geobrif-clear-chat" id="geobrif-clear-chat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            Clear conversation
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(widget);

    // Get elements
    const chatButton = widget.querySelector('.geobrif-chat-button');
    const chatWindow = widget.querySelector('.geobrif-chat-window');
    const chatClose = widget.querySelector('.geobrif-chat-close');
    const chatBody = widget.querySelector('#geobrif-chat-body');
    const chatInput = widget.querySelector('#geobrif-chat-input');
    const chatSend = widget.querySelector('#geobrif-chat-send');
    const clearChat = widget.querySelector('#geobrif-clear-chat');
    const notification = widget.querySelector('.geobrif-chat-notification');

    let isOpen = false;
    let hasInteracted = false;

    // ══════════════════════════════════════════════════════════════
    // CHAT FUNCTIONS
    // ══════════════════════════════════════════════════════════════
    
    function addMessage(text, isUser = false, category = null, icon = null) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `geobrif-message ${isUser ? 'user' : 'bot'}`;
      
      messageDiv.innerHTML = `
        <div class="geobrif-message-avatar">${isUser ? '👤' : '⬡'}</div>
        <div class="geobrif-message-content">
          <div class="geobrif-message-bubble">${text}</div>
          ${category ? `<div class="geobrif-message-category">${icon || ''}  ${category}</div>` : ''}
        </div>
      `;
      
      chatBody.appendChild(messageDiv);
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    function showTyping() {
      const typingDiv = document.createElement('div');
      typingDiv.className = 'geobrif-message bot';
      typingDiv.id = 'typing-indicator';
      typingDiv.innerHTML = `
        <div class="geobrif-message-avatar">⬡</div>
        <div class="geobrif-typing">
          <span></span>
          <span></span>
          <span></span>
        </div>
      `;
      chatBody.appendChild(typingDiv);
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    function hideTyping() {
      const typing = document.getElementById('typing-indicator');
      if (typing) typing.remove();
    }

    function addQuickActions() {
      const actionsDiv = document.createElement('div');
      actionsDiv.className = 'geobrif-message bot';
      actionsDiv.innerHTML = `
        <div class="geobrif-message-avatar">⬡</div>
        <div class="geobrif-message-content">
          <div class="geobrif-quick-actions">
            ${knowledgeBase.quickActions.map(action => 
              `<button class="geobrif-quick-action" data-action="${action.text}">${action.text}</button>`
            ).join('')}
          </div>
        </div>
      `;
      chatBody.appendChild(actionsDiv);
      
      // Add click handlers
      actionsDiv.querySelectorAll('.geobrif-quick-action').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
          knowledgeBase.quickActions[idx].action();
        });
      });
    }

    function showCategories() {
      const categoriesDiv = document.createElement('div');
      categoriesDiv.className = 'geobrif-message bot';
      
      const categoryButtons = Object.entries(knowledgeBase.categories).map(([key, cat]) => `
        <button class="geobrif-category-btn" data-category="${key}">
          <span class="geobrif-category-icon">${cat.icon}</span>
          <div class="geobrif-category-info">
            <div class="geobrif-category-title">${cat.title}</div>
            <div class="geobrif-category-count">${cat.questions.length} questions</div>
          </div>
        </button>
      `).join('');

      categoriesDiv.innerHTML = `
        <div class="geobrif-message-avatar">⬡</div>
        <div class="geobrif-message-content">
          <div class="geobrif-message-bubble">Browse questions by category:</div>
          <div class="geobrif-categories">
            ${categoryButtons}
          </div>
        </div>
      `;
      
      chatBody.appendChild(categoriesDiv);
      
      // Add click handlers
      categoriesDiv.querySelectorAll('.geobrif-category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const categoryKey = btn.dataset.category;
          showCategoryQuestions(categoryKey);
        });
      });
    }

    function showCategoryQuestions(categoryKey) {
      const category = knowledgeBase.categories[categoryKey];
      addMessage(`Showing ${category.title}`, true);
      
      setTimeout(() => {
        showTyping();
        setTimeout(() => {
          hideTyping();
          
          const questionsDiv = document.createElement('div');
          questionsDiv.className = 'geobrif-message bot';
          
          const questionButtons = category.questions.map((qa, idx) => `
            <button class="geobrif-quick-action" data-question="${categoryKey}-${idx}" style="width: 100%; text-align: left; white-space: normal;">
              ${qa.q}
            </button>
          `).join('');

          questionsDiv.innerHTML = `
            <div class="geobrif-message-avatar">${category.icon}</div>
            <div class="geobrif-message-content">
              <div class="geobrif-message-bubble">${category.title}:</div>
              <div class="geobrif-quick-actions" style="flex-direction: column;">
                ${questionButtons}
              </div>
            </div>
          `;
          
          chatBody.appendChild(questionsDiv);
          chatBody.scrollTop = chatBody.scrollHeight;
          
          // Add click handlers
          questionsDiv.querySelectorAll('.geobrif-quick-action').forEach(btn => {
            btn.addEventListener('click', () => {
              const [catKey, idx] = btn.dataset.question.split('-');
              const qa = knowledgeBase.categories[catKey].questions[parseInt(idx)];
              handleUserMessage(qa.q);
            });
          });
        }, 800);
      }, 500);
    }

    function handleUserMessage(text) {
      if (!text.trim()) return;
      
      addMessage(text, true);
      chatInput.value = '';
      
      setTimeout(() => {
        showTyping();
        
        setTimeout(() => {
          hideTyping();
          const match = findBestMatch(text);
          addMessage(match.a, false, match.category, match.icon);
          
          // Add quick actions after first bot response
          if (chatBody.querySelectorAll('.geobrif-message').length <= 4) {
            setTimeout(() => addQuickActions(), 500);
          }
        }, 1000 + Math.random() * 500);
      }, 300);
    }

    function clearConversation() {
      chatBody.innerHTML = '';
      hasInteracted = false;
      setTimeout(() => {
        addMessage("Hi! I'm the GeoBrif Digital assistant. How can I help you today?", false);
        setTimeout(() => showCategories(), 500);
        setTimeout(() => addQuickActions(), 1000);
      }, 200);
    }

    // ══════════════════════════════════════════════════════════════
    // EVENT LISTENERS
    // ══════════════════════════════════════════════════════════════
    
    chatButton.addEventListener('click', () => {
      isOpen = !isOpen;
      chatButton.classList.toggle('open', isOpen);
      chatWindow.classList.toggle('open', isOpen);
      
      if (isOpen && !hasInteracted) {
        hasInteracted = true;
        notification.style.display = 'none';
        setTimeout(() => {
          addMessage("Hi! I'm the GeoBrif Digital assistant. How can I help you today?", false);
          setTimeout(() => showCategories(), 500);
          setTimeout(() => addQuickActions(), 1000);
        }, 300);
      }
      
      if (isOpen) {
        chatInput.focus();
      }
    });

    chatClose.addEventListener('click', () => {
      isOpen = false;
      chatButton.classList.remove('open');
      chatWindow.classList.remove('open');
    });

    chatSend.addEventListener('click', () => {
      handleUserMessage(chatInput.value);
    });

    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleUserMessage(chatInput.value);
      }
    });

    clearChat.addEventListener('click', () => {
      if (confirm('Clear the entire conversation?')) {
        clearConversation();
      }
    });

    // Show notification after 5 seconds if not interacted
    setTimeout(() => {
      if (!hasInteracted) {
        notification.style.display = 'block';
      }
    }, 5000);

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        chatClose.click();
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
  } else {
    initChatbot();
  }
})();
