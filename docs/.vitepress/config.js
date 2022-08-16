export default {
  lang: "id-ID",
  title: "Machine Learning",
  titleTemplate: "Refactoring Bahasa Indonesia",
  description:
    "Panduan refactoring untuk mengatasi code berantakan yang anda buat.",
  editLink: true,
  head: [
    [
      "meta",
      {
        property: "og:description",
        content:
          "Panduan refactoring untuk mengatasi code berantakan yang anda buat.",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://user-images.githubusercontent.com/45036724/184270375-8b25b8fb-fbf8-48fc-8dd8-9162d1ea049a.png",
      },
    ],
    ["meta", { property: "og:type", content: "article" }],
  ],
  themeConfig: {
    sidebar: {
      "/en": golangEn(),
      "/id/": id(),
    },
    nav: [
      { text: "Tentang", link: "/tentang" },
      { text: "English language ", link: "/en/" },
      { text: "Bahasa  Indonesia", link: "/id/" },
    ],
    editLink: {
      pattern:
        "https://github.com/tegar97/course-machinelearning/edit/main/docs/:path",
      text: "Ubah halaman ini di GitHub",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/tegar97/course-machinelearning",
      },
    ],
    footer: {
      message: "Created by Tegar",
    },
  },
};

function golangEn() {
  return [
  
    {
      text: "Dispensables",
      items: [
        { text: "Tentang Dispensables", link: "/martin-fowler/dispensables/" },
        { text: "Comments", link: "/martin-fowler/dispensables/comments/" },
        {
          text: "Duplicate Code",
          link: "/martin-fowler/dispensables/duplicate-code/",
        },
        { text: "Lazy Class", link: "/martin-fowler/dispensables/lazy-class/" },
        { text: "Data Class", link: "/martin-fowler/dispensables/data-class/" },
        { text: "Dead Code", link: "/martin-fowler/dispensables/dead-code/" },
        {
          text: "Speculative Generality",
          link: "/martin-fowler/dispensables/speculative-generality/",
        },
      ],
    },
    {
      text: "Bloaters",
      items: [
        { text: "Tentang Bloaters", link: "/martin-fowler/bloaters/" },
        { text: "Long Method", link: "/martin-fowler/bloaters/long-method/" },
        { text: "Large Class", link: "/martin-fowler/bloaters/large-class/" },
        {
          text: "Primitive Obsession",
          link: "/martin-fowler/bloaters/primitive-obsession/",
        },
        {
          text: "Long Parameter List",
          link: "/martin-fowler/bloaters/long-parameter-list/",
        },
        { text: "Data Clumps", link: "/martin-fowler/bloaters/data-clumps/" },
      ],
    },
    {
      text: "Change Preventers",
      items: [
        {
          text: "Tentang Change Preventers",
          link: "/martin-fowler/change-preventers/",
        },
        {
          text: "Divergent Change",
          link: "/martin-fowler/change-preventers/divergent-change/",
        },
        {
          text: "Parallel Inheritance Hierarchies",
          link: "/martin-fowler/change-preventers/parallel-inheritance-hierarchies/",
        },
        {
          text: "Shotgun Surgery",
          link: "/martin-fowler/change-preventers/shotgun-surgery/",
        },
      ],
    },
    {
      text: "Object-Orientation Abusers",
      items: [
        {
          text: "Tentang Object-Orientation Abusers",
          link: "/martin-fowler/oo-abusers/",
        },
        {
          text: "Switch Statements",
          link: "/martin-fowler/oo-abusers/switch-statements/",
        },
        {
          text: "Temporary Field",
          link: "/martin-fowler/oo-abusers/temporary-field/",
        },
        {
          text: "Refused Bequest",
          link: "/martin-fowler/oo-abusers/refused-bequest/",
        },
        {
          text: "Alternative Classes with Different Interfaces",
          link: "/martin-fowler/oo-abusers/alternative-classes/",
        },
      ],
    },
    {
      text: "Couplers",
      items: [
        { text: "Tentang Couplers", link: "/martin-fowler/couplers/" },
        { text: "Feature Envy", link: "/martin-fowler/couplers/feature-envy/" },
        {
          text: "Inappropriate Intimacy",
          link: "/martin-fowler/couplers/inappropriate-intimacy/",
        },
        {
          text: "Message Chains",
          link: "/martin-fowler/couplers/message-chains/",
        },
        { text: "Middle Man", link: "/martin-fowler/couplers/middle-man/" },
      ],
    },
  ];
}

function id() {
  return [
    {
      text: "Perkenalan ",
      collapsible: true,
      items: [
        {
          text: "Apa itu artificial intelligence ",
          link: "/id/introduction/tentang-ai",
        },
      ],
    },
  ];
}
