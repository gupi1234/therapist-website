export const siteData = {
  therapist: {
    name: "Dr. Serena Blake, PsyD",
    title: "Licensed Clinical Psychologist",
    Profile: "/images/profile.webp",
    logo: "/logo.jpg",
    location: "1287 Maplewood Drive, Los Angeles, CA 90026",
    phone: "(323) 555-0192",
    email: "serena@blakepsychology.com",
    experience: "8 years of practice, 500+ sessions",
    officeHours: [
      "In-person: Tue & Thu, 10 AM–6 PM",
      "Virtual (Zoom): Mon, Wed & Fri, 1 PM–5 PM",
    ],
    about:
      "Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.",
  },

  hero: {
    headline: "Compassionate Therapy for Real Change",
    subHeadline: "Empowering you to grow, heal, and thrive.",
    cta: "Book a Free Consult",
  },

  services: [
    {
      title: "Anxiety & Stress Management",
      slug: "anxiety-stress-management",
      subtitle: "Find peace and clarity in overwhelming times.",
      badge: "Guided Support for Overthinking & Inner Chaos",
      introHeadline: "A Faith‑Based Path Toward Wholeness",
      introCopy:
        "Through biblical wisdom and proven techniques, Ellie helps you overcome inner struggles and reconnect with your true identity in Christ.",
      description:
        "Discover tools to manage worry, panic, and overwhelm through evidence-based therapies like CBT, mindfulness, and faith-integrated support. Whether you're battling daily anxiety, burnout, or spiritual distress, Dr. Blake helps you build inner strength, emotional clarity, and lasting peace with gentle, personalized care.",
      logo: "/images/depression.png",
      image: "/images/Stress.jpg",
      sideImage: "/images/sideimage-anxity.jpg",
      descImage: "/images/desc-image1.jpg",
      painPoints: [
        {
          heading: "Feelings of Unworthiness",
          text: "Even though you understand God’s love intellectually, you struggle with feeling unworthy, unloved, or ashamed.",
        },
        {
          heading: "Persistent Worry & Overthinking",
          text: "Your mind is constantly racing with 'what ifs'. You overanalyze everything and can’t seem to find rest.",
        },
        {
          heading: "Physical Symptoms of Stress",
          text: "You're experiencing fatigue, tension, headaches, or sleep problems due to chronic stress and anxiety.",
        },
        {
          heading: "Overwhelmed by Life Transitions",
          text: "Changes like moving, job loss, or parenting challenges are triggering deep emotional exhaustion.",
        },
        {
          heading: "Faith vs. Fear Battle",
          text: "You want your faith to be stronger than your fear, but anxiety still controls your daily choices.",
        },
      ],
      ctaButtons: [
        { text: "Find Healing Through Christ", style: "primary" },
        { text: "See How I Work", style: "outline" },
      ],
      bottomHighlights: [
        { text: "Personalized, Christ-Centered Care", icon: "⭐" },
        { text: "Faith + Therapy = Healing", icon: "🕊️" },
        { text: "Compassionate, Non-Judgmental Space", icon: "❤️" },
        { text: "Over 8 Years of Experience", icon: "⏳" },
      ],
      accordions: [
        {
          title: "Faith‑Integrated CBT Techniques",
          icon: "📖",
          content:
            "Learn to replace anxious thoughts with truth using tools from Cognitive Behavioral Therapy grounded in scripture.",
          button: { text: "Talk to Dr. Blake", link: "#contact" },
        },
        {
          title: "Mindfulness & Breathwork",
          icon: "🧘",
          content:
            "Use calming exercises and breathwork to regulate stress and stay grounded in God’s presence.",
          button: { text: "Free Anxiety Consult", link: "#contact" },
        },
        {
          title: "Spiritual Reframing",
          icon: "🕊️",
          content:
            "Reframe anxiety through a faith lens and restore trust in God’s plan during uncertain times.",
          button: { text: "Start Your Calm Journey", link: "#contact" },
        },
      ],
    },

    {
      title: "Relationship Counseling",
      slug: "relationship-counseling",
      subtitle: "Rebuild trust and connection with compassion.",
      badge: "Christ-Centered Connection & Healing for Couples",
      introHeadline: "Strengthen the Bond That Matters Most",
      introCopy:
        "Through guided support rooted in trust and faith, Dr. Blake helps couples and individuals overcome relational wounds and build deeper, more meaningful connections.",
      description:
        "Whether you're in a marriage crisis, navigating dating, or working through past relational wounds, Dr. Blake offers couples and individual therapy grounded in trust, emotional safety, and proven communication techniques. Rediscover the joy of connection with clarity and grace.",
      logo: "/images/contract.png",
      image: "/images/Relationship.jpg",
      sideImage: "/images/sideimage-reletion.jpg",
      descImage: "/images/desc-image2.jpg",

      painPoints: [
        {
          heading: "Frequent Misunderstandings",
          text: "You try to explain how you feel but your partner never seems to 'get it'—leaving you hurt and frustrated.",
        },
        {
          heading: "Lack of Intimacy",
          text: "Emotional or physical intimacy has faded and you don’t know how to reconnect without pressure or shame.",
        },
        {
          heading: "Trust Broken by Betrayal",
          text: "Past wounds—infidelity, secrecy, or lies—are keeping you from fully trusting your partner again.",
        },
        {
          heading: "Navigating Major Life Decisions",
          text: "You're trying to agree on parenting, money, or faith—but conversations keep turning into fights.",
        },
        {
          heading: "Fear of Repeating Patterns",
          text: "You're afraid your relationship is becoming like the toxic ones you've seen or experienced before.",
        },
      ],
      ctaButtons: [
        { text: "Start Healing Together", style: "primary" },
        { text: "Book a Free Session", style: "outline" },
      ],
      bottomHighlights: [
        { text: "Couples & Individuals", icon: "💬" },
        { text: "Faith-Based Perspective Available", icon: "🙏" },
        { text: "Strengthen Communication", icon: "🔗" },
        { text: "Rebuild Trust, Step-by-Step", icon: "🔄" },
      ],
      accordions: [
        {
          title: "Emotionally Safe Communication",
          icon: "💬",
          content:
            "Learn techniques to listen and speak with empathy, reducing conflict and building understanding.",
          button: { text: "Book Couples Call", link: "#contact" },
        },
        {
          title: "Faith‑Based Couples Work",
          icon: "🙏",
          content:
            "Invite God into your relationship and rebuild trust with spiritual and emotional tools.",
          button: { text: "Strengthen Us Today", link: "#contact" },
        },
        {
          title: "Healing from Past Wounds",
          icon: "💔",
          content:
            "Explore unresolved pain and trauma that affects your relationship patterns and connection.",
          button: { text: "Find Clarity Together", link: "#contact" },
        },
      ],
    },

    {
      title: "Trauma Recovery",
      slug: "trauma-recovery",
      subtitle: "Heal from the inside out with gentle, personalized therapy.",
      badge: "Safe, Gentle Healing from Deep Wounds",

      introHeadline: "Heal at Your Own Pace — With Compassion",
      introCopy:
        "With a trauma-informed and faith-rooted approach, Dr. Blake gently guides you toward healing, restoration, and renewed trust in yourself and in God.",
      description:
        "Trauma can disrupt your ability to feel safe, confident, or loved. Whether you're recovering from childhood abuse, emotional neglect, or major life events, Dr. Blake creates a safe space for deep healing. Her approach integrates faith, neuroscience, and compassionate care to help you reclaim your story.",
      logo: "/images/exposure.png",
      image: "/images/Trauma.jpg",
      sideImage: "/images/sideimage-troma.jpg",
      descImage: "/images/desc-image3.jpg",

      painPoints: [
        {
          heading: "Flashbacks & Triggers",
          text: "You’re easily overwhelmed by memories, sounds, or people that remind you of the trauma.",
        },
        {
          heading: "Shame or Self-Blame",
          text: "You carry deep shame and often believe the trauma was your fault—even though it wasn’t.",
        },
        {
          heading: "Emotional Numbness",
          text: "You struggle to feel joy, sadness, or connection—it’s like you're watching your life from a distance.",
        },
        {
          heading: "Hypervigilance & Panic",
          text: "You feel constantly 'on guard'—as if danger is always just around the corner.",
        },
        {
          heading: "Spiritual Confusion",
          text: "You’re wrestling with how a loving God allowed this to happen and questioning your faith.",
        },
      ],
      ctaButtons: [
        { text: "Begin Your Healing Journey", style: "primary" },
        { text: "Free 15-min Consult", style: "outline" },
      ],
      bottomHighlights: [
        { text: "Safe, Judgment-Free Space", icon: "🛡️" },
        { text: "Evidence-Based Trauma Therapy", icon: "📚" },
        { text: "Guided by Compassion", icon: "💗" },
        { text: "Restore Trust & Hope", icon: "🌱" },
      ],
      accordions: [
        {
          title: "Somatic & Body‑Centered Healing",
          icon: "🧠",
          content:
            "Reconnect with your body’s signals and release trauma stored in the nervous system through safe, gentle practices.",
          button: { text: "Begin Safe Healing", link: "#contact" },
        },
        {
          title: "Inner Child Work",
          icon: "🧸",
          content:
            "Meet and nurture the wounded parts of yourself through guided visualization and prayer.",
          button: { text: "Share Your Story", link: "#contact" },
        },
        {
          title: "Faith After Trauma",
          icon: "⛪",
          content:
            "Process anger, doubt, and grief with God while rebuilding a renewed spiritual foundation.",
          button: { text: "Schedule First Step", link: "#contact" },
        },
      ],
    },
  ],

  featuredIn: [
    {
      name: "Psychology Today",
      logo: "/images/feature3.webp",
      link: "https://www.psychologytoday.com/", //Add yur profile link I just put the wesite link
    },
    {
      name: "Theravive",
      logo: "/images/feature4.webp",
      link: "https://www.theravive.com/",
    },
    {
      name: "Christian Counselor Directory",

      logo: "/images/feature2.png",
      link: "https://www.christiancounselordirectory.com/",
    },
    {
      name: "Therapist.com",
      logo: "/images/feature1.webp",
      link: "https://www.therapist.com/",
    },
  ],

  faq: [
    {
      question: "Do you accept insurance?",
      answer:
        "No, I do not accept insurance directly, but I can provide a superbill for you to submit for potential reimbursement from your provider.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes. I offer secure virtual sessions via Zoom on Mondays, Wednesdays, and Fridays between 1 PM to 5 PM.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellations must be made with at least 24 hours' notice. Late cancellations or no-shows will be subject to the full session fee.",
    },
    {
      question: "How long is each therapy session?",
      answer:
        "Each individual or couples therapy session lasts 50 minutes, giving us enough time to go deep while maintaining structure.",
    },
    {
      question: "What are your session fees?",
      answer:
        "Individual sessions are $200. Couples sessions are $240. Payment is due at the time of service via card or secure online transfer.",
    },
    {
      question: "How do I know if therapy is right for me?",
      answer:
        "If you're feeling overwhelmed, anxious, stuck, or seeking personal growth — therapy can help you explore and heal in a safe, supportive space.",
    },
    {
      question: "Is everything I share kept confidential?",
      answer:
        "Yes. Everything discussed in sessions is strictly confidential, except in rare cases where I am legally obligated to report harm or danger.",
    },
    {
      question: "Do you work with teens or children?",
      answer:
        "No, I specialize in therapy for adults and couples. If you're seeking support for a teen or child, I can provide trusted referrals.",
    },
    {
      question: "What can I expect in the first session?",
      answer:
        "The first session is a gentle, open conversation to understand your background, goals, and what you hope to get out of therapy. There’s no pressure.",
    },
    {
      question: "How often should I come to therapy?",
      answer:
        "Most clients start with weekly sessions for consistency. We'll decide together what works best based on your goals and schedule.",
    },
  ],

  testimonials: [
    {
      name: "Anonymous Client",
      profile: "/images/client1.jpg",
      quote:
        "Dr. Blake helped me find clarity and calm during one of the most difficult times of my life. Her warmth and professionalism made all the difference.",
    },
    {
      name: "Former Client",
      profile: "/images/client2.jpg",

      quote:
        "I was skeptical about therapy, but after a few sessions with Dr. Blake, I felt truly heard for the first time. Highly recommend her to anyone struggling.",
    },
    {
      name: "Client, Los Angeles",
      profile: "/images/client3.jpg",

      quote:
        "Working with Dr. Serena helped me gain control of my anxiety and build healthier habits. I feel stronger and more confident every day.",
    },
    {
      name: "Previous Client",
      profile: "/images/client4.jpg",
      quote:
        "Therapy with Dr. Blake was a game-changer for me. Her compassionate approach and practical strategies helped me manage stress and build confidence.",
    },
  ],
};
