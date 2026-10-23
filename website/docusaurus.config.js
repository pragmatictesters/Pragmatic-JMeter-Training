// @ts-check
// Docusaurus config for the Pragmatic JMeter Training docs site.
// Docs: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const repo = 'https://github.com/pragmatictesters/Pragmatic-JMeter-Training';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pragmatic JMeter',
  tagline: 'Practical JMeter and performance testing, from first test plan to real load runs',
  favicon: 'img/favicon.svg',

  // GitHub Pages project site: https://pragmatictesters.github.io/Pragmatic-JMeter-Training/
  // Override with SITE_URL / BASE_URL env vars for a custom domain.
  url: process.env.SITE_URL || 'https://pragmatictesters.github.io',
  baseUrl: process.env.BASE_URL || '/Pragmatic-JMeter-Training/',
  organizationName: 'pragmatictesters',
  projectName: 'Pragmatic-JMeter-Training',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  // .md files are parsed as plain CommonMark (safe for JMeter's ${...} syntax),
  // .mdx files as MDX.
  markdown: {
    format: 'detect',
    hooks: {onBrokenMarkdownLinks: 'warn'},
  },

  future: {
    v4: true,
    faster: true,
  },

  i18n: {defaultLocale: 'en', locales: ['en']},

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: 'docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 12,
        searchBarShortcutHint: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {respectPrefersColorScheme: true},
      docs: {sidebar: {hideable: true, autoCollapseCategories: true}},
      tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 3},
      navbar: {
        title: 'Pragmatic JMeter',
        logo: {alt: 'Pragmatic JMeter logo', src: 'img/logo.svg'},
        hideOnScroll: false,
        items: [
          {type: 'docSidebar', sidebarId: 'learn', position: 'left', label: 'Learn'},
          {type: 'docSidebar', sidebarId: 'reference', position: 'left', label: 'Reference'},
          {to: '/docs/glossary', label: 'Glossary', position: 'left'},
          {type: 'search', position: 'right'},
          {href: repo, position: 'right', className: 'header-github-link', 'aria-label': 'GitHub repository'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {label: 'Tip of the Day', to: '/docs/tips'},
              {label: 'Performance Testing Types', to: '/docs/performance-testing-types'},
              {label: 'Glossary', to: '/docs/glossary'},
            ],
          },
          {
            title: 'Reference',
            items: [
              {label: 'Components', to: '/docs/reference/components'},
              {label: 'Functions', to: '/docs/reference/functions'},
              {label: 'Properties', to: '/docs/reference/properties'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'GitHub', href: repo},
              {label: 'Apache JMeter', href: 'https://jmeter.apache.org/'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Pragmatic Testers. Reference sections are adapted from the Apache JMeter user manual (Apache License 2.0).`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'properties', 'java', 'groovy', 'powershell'],
      },
    }),
};

export default config;
