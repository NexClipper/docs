module.exports = {
  title: 'NexClipper',
  tagline: 'Cloud Native infrastructure in an easier and more stable way.',
  url: 'https://nexclipper.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'nexclipper', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'NexClipper',
      logo: {
        alt: 'NexClipper Logo',
        src: 'img/NexClipper_200.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/NexClipper/NexClipper',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'API Reference',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'http://nexclipper.slack.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/nexclipper',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/NexClipper/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/NexClipper/NexClipper',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NexCloud, Inc. Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: 'UA-122075277-7',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/NexClipper/docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/NexClipper/docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};