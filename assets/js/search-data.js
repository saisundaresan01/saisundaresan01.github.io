// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-efficient-llm-serving-for-rag-cache-craft",
          title: 'Efficient LLM Serving for RAG (Cache-Craft)',
          description: "Chunk-cache decomposition and reuse for faster prefill.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_cachecraft/";
            },},{id: "projects-efficient-video-generation-through-patch-level-caching",
          title: 'Efficient Video Generation through Patch-Level Caching',
          description: "Reusing intermediate states across similar patches via rectified flow interpolation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_video_generation_patches/";
            },},{id: "projects-hetlm-heterogeneity-aware-user-behavior-prediction",
          title: 'HeTLM — Heterogeneity-Aware User Behavior Prediction',
          description: "Clusterwise training showing small LMs can better model subjective browsing behaviors.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_hetlm/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
