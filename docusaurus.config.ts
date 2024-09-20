import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';     

// import * as dotenv from 'dotenv';
// dotenv.config();
// export const envVariable = {
//   'REACT_APP_GOOGLE_SCRIPT_URL': REACT_APP_GOOGLE_SCRIPT_URL
// }
require('dotenv').config()




const config: Config = {
  title: 'Super Abacus Academy!',
  tagline: 'Master the art of the abacus with a dash of fun and numbers!',
  favicon: 'img/favicon.ico',

  url: 'https://MJ665.github.io', // Update this to match the root domain without sub-path

  // Sub-path where the site is hosted
  baseUrl: '/mac-super-abacus-website/', // Correctly place the project sub-path here

  // Set the production url of your site here
  // url: 'https://github.com/MJ665/mac-super-abacus-website',
  // // Set the /<baseUrl>/ pathname under which your site is served
  // // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/',



  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mj665', // Usually your GitHub org/user name.
  projectName: 'mac-super-abacus-website', // Usually your repo name.
  deploymentBranch:"gh-deployment",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  customFields: {
    'REACT_APP_GOOGLE_SCRIPT_URL': process.env.REACT_APP_GOOGLE_SCRIPT_URL,
    'appId': process.env.ALGOLIA_APP_ID,
    'apiKey': process.env.ALGOLIA_API_KEY,
    'indexName': process.env.ALGOLIA_INDEX_NAME,
    
    // 'apiKey': process.env.API_KEY,
    // 'appId': process.env.APPLICATION_ID,
  },
  // customFields: {
  //   'apiKey': process.env.API_KEY,
  //   'appId': process.env.APPLICATION_ID,
  // },
  presets: [
    [
      'classic',

      {   sitemap: {
          changefreq: 'daily',
          priority: 0.5,

        },
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.ts'),
        //   remarkPlugins: [remarkMath],
        //   rehypePlugins: [rehypeKatex],
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: {
          blogTitle: 'Docusaurus blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
   



          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',


                    
        },
      } satisfies Preset.Options,
    ],
  ],


  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'announcements',
        path: './announcements',
        routeBasePath: 'announcements',
        blogTitle: 'Announcements',
        blogDescription: 'This is the announcements section on my portfolio website',
        postsPerPage: 'ALL',
        blogSidebarTitle: 'All posts',
        blogSidebarCount: 'ALL',
        showReadingTime: true,
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
 



        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // Useful options to enforce blogging best practices
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'achievements',
        path: './achievements',
        routeBasePath: 'achievements',
        blogTitle: 'Achievements',
        blogDescription: 'This is the achievements section on my portfolio website',
        postsPerPage: 'ALL',
        blogSidebarTitle: 'All posts',
        blogSidebarCount: 'ALL',
        showReadingTime: true,
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
 



        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // Useful options to enforce blogging best practices
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
    ],

  ],

  
  

  themeConfig: {
    // Replace with your project's social card
    image: 'img/Myproject.png',


  
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY as string,
      appId: process.env.ALGOLIA_APP_ID as string,
      indexName: process.env.ALGOLIA_INDEX_NAME as string,
      searchParameters: {
        facetFilters: ['language:en', 'version:v1'],
      },

      // Optional parameters
      contextualSearch: true,  // Enables contextual search for language/version
      externalUrlRegex: 'external\\.com|domain\\.com',  // URLs where window.location is used instead of history.push
      
      // Replace search result pathnames for multi-deployment or different base URLs
      replaceSearchResultPathname: {
        from: '/blog/',  // Modify as per your needs
        to: '/',
      },
      
  
      
      // Optional: Path for search page (enabled by default)
      searchPagePath: 'search',  // Set to false to disable the search page

      // Optional: Enable insights feature for DocSearch (disabled by default)
      insights: false,  // Set to true to enable
      

    },
     /**
      * * Highlight: added default color mode as dark
    **/
     colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    /**
      * * Highlight: adding hideable sidebar
    **/
    // docs: {
    //   sidebar: {
    //     hideable: true,
    //   },
    // },
      /**
        * * Highlight: adding announcement banner
      **/
    // announcementBar:{
    //   id: 'admissionOpen',
    //   content:
    //   `🎉<strong> Welcome to Super Abacus !</strong> 🧠 want to be a math wizard? Check out the new fun abacus courses! <strong>Admission Open</strong> 🎮`,
    //   backgroundColor: `linear-gradient(45deg, #ffcc00, #00d1ff, #ff6ec7, #3cff8f)`,
    //   textColor: '#ffffff',
    
    //   isCloseable: false,
    // },
    announcementBar: {
      id: 'super_abacus_announcement',
      content:
      `🎉<strong> Welcome to Super Abacus !</strong> 🧠 want to be a math wizard? Check out the new fun abacus courses! <a href="https://forms.gle/g14KHU1fbXkuWDt6A"><strong>Admission Open</strong></a>📝📝📝 `,
          backgroundColor: '#ffcc00', // Sunshine Yellow
          // textColor: '#005bff', // Sky Blue
          textColor: '#000000', // Sky Blue
          isCloseable: false,
        },
        customCss: [
          require.resolve('./src/css/custom.css'), // Ensure custom CSS is loaded
        ],
    

        
    navbar: {
      title: 'Super Abacus Academy!',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
        // srcDark: 'img/logo_dark.png',
      // width: 50,
      // Height: 300,
      className: 'custom-navbar-logo-class',
      // style: {border: 'solid grey'},
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Docs',
        // },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/announcements', label: 'Announcements', position: 'left'},
        {to: '/achievements', label: 'Achievements', position: 'left'},
        
    
        {
          href:"https://youtube.com/@superabacus?si=6UFG-0TjTt80dYMS",
          position:"right",
          className:"navbar-icon",
          "area-label":"Linkedin Profile Page",
          html:`
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"  
          stroke="currentColor" 
          fill="currentColor" 
          stroke-width="0" 
          viewBox="0 0 50 50" >
    <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 15 8 L 17.400391 8 L 19 12 L 20.599609 8 L 23 8 L 20 15 L 20 19 L 18 19 L 18 14.990234 C 17.4 13.380234 15.41 9.01 15 8 z M 25 11 C 25.89 11 26.770078 11.269219 27.330078 11.949219 C 27.760078 12.439219 28 13.229531 28 14.269531 L 28 15.730469 C 28 16.770469 27.800859 17.490469 27.380859 17.980469 C 26.820859 18.650469 25.89 19 25 19 C 24.11 19 23.200625 18.650469 22.640625 17.980469 C 22.210625 17.490469 22 16.770469 22 15.730469 L 22 14.279297 C 22 13.239297 22.229922 12.439219 22.669922 11.949219 C 23.229922 11.269219 23.99 11 25 11 z M 29 11 L 31 11 L 31 17 C 31.05 17.27 31.339375 17.390625 31.609375 17.390625 C 32.019375 17.390625 32.54 16.910859 33 16.380859 L 33 11 L 35 11 L 35 19 L 33 19 L 33 17.619141 C 32.19 18.409141 31.499844 19.000703 30.589844 18.970703 C 29.929844 18.950703 29.470234 18.710469 29.240234 18.230469 C 29.100234 17.950469 29 17.499844 29 16.839844 L 29 11 z M 25 12.619141 C 24.8625 12.619141 24.730859 12.649297 24.611328 12.701172 C 24.491797 12.753047 24.383594 12.827422 24.292969 12.919922 C 24.202344 13.012422 24.128906 13.122266 24.078125 13.244141 C 24.027344 13.366016 24 13.500625 24 13.640625 L 24 16.449219 C 24 16.729219 24.111719 16.984922 24.292969 17.169922 C 24.383594 17.262422 24.491797 17.336797 24.611328 17.388672 C 24.730859 17.440547 24.8625 17.470703 25 17.470703 C 25.1375 17.470703 25.269141 17.440547 25.388672 17.388672 C 25.747266 17.233047 26 16.869219 26 16.449219 L 26 13.640625 C 26 13.080625 25.55 12.619141 25 12.619141 z M 24.990234 22 L 25.009766 22 C 25.009766 22 31.719219 22.000312 36.199219 22.320312 C 36.829219 22.390313 38.190156 22.400391 39.410156 23.650391 C 40.370156 24.590391 40.679688 26.75 40.679688 26.75 C 40.679688 26.75 41 28.280547 41 30.810547 L 41 33.179688 C 41 35.709688 40.679688 37.240234 40.679688 37.240234 C 40.679688 37.240234 40.370156 39.399844 39.410156 40.339844 C 38.190156 41.589844 36.829219 41.599922 36.199219 41.669922 C 31.719219 41.989922 25 42 25 42 C 25 42 16.679141 41.919688 14.119141 41.679688 C 13.409141 41.549687 11.809844 41.589609 10.589844 40.349609 C 9.6298437 39.399609 9.3203125 37.240234 9.3203125 37.240234 C 9.3203125 37.240234 9 35.709688 9 33.179688 L 9 30.810547 C 9 28.280547 9.3203125 26.75 9.3203125 26.75 C 9.3203125 26.75 9.6298438 24.590391 10.589844 23.650391 C 11.809844 22.400391 13.170781 22.390312 13.800781 22.320312 C 18.280781 22.000312 24.990234 22 24.990234 22 z M 12 26 L 12 27.978516 L 14 27.978516 L 14 38 L 16 38 L 16 27.978516 L 18 27.978516 L 18 26 L 12 26 z M 25 26 L 25 38 L 27 38 L 27 36.75 C 27.631 37.531 28.453 38 29.125 38 C 29.877 38 30.533156 37.595313 30.785156 36.820312 C 30.904156 36.401313 30.992 36.01 31 35.125 L 31 32.375 C 31 31.387 30.866234 30.642656 30.740234 30.222656 C 30.488234 29.441656 29.878 29.005 29.125 29 C 28.145 28.993 27.75 29.5 27 30.375 L 27 26 L 25 26 z M 18 29 L 18 35.685547 C 18 36.407547 18.100469 36.891984 18.230469 37.208984 C 18.450469 37.722984 18.899062 38 19.539062 38 C 20.269062 38 21.21 37.485766 22 36.634766 L 22 38 L 24 38 L 24 29 L 22 29 L 22 35.269531 C 21.56 35.853531 20.919531 36.289062 20.519531 36.289062 C 20.259531 36.289062 20.05 36.179578 20 35.892578 L 20 29 L 18 29 z M 35.029297 29 C 34.021297 29 33.234063 29.317016 32.664062 29.916016 C 32.244062 30.358016 32 31.080578 32 32.017578 L 32 35.083984 C 32 36.014984 32.2685 36.666516 32.6875 37.103516 C 33.2585 37.702516 34.044172 38 35.076172 38 C 36.107172 38 36.918844 37.686781 37.464844 37.050781 C 37.704844 36.769781 37.858781 36.453563 37.925781 36.101562 C 37.943781 35.942563 38 35.511 38 35 L 36 35 L 36 35.798828 C 36 36.262828 35.552 36.638672 35 36.638672 C 34.448 36.638672 34 36.261828 34 35.798828 L 34 34 L 38 34 L 38 33.423828 L 38 31.978516 C 38 31.043516 37.770422 30.359016 37.357422 29.916016 C 36.804422 29.317016 36.019297 29 35.029297 29 z M 35 30.447266 C 35.552 30.447266 36 30.824109 36 31.287109 L 36 32.615234 L 34 32.615234 L 34 31.287109 C 34 30.823109 34.448 30.447266 35 30.447266 z M 28.220703 30.746094 C 28.765703 30.746094 29 31.081 29 32.125 L 29 34.875 C 29 35.919 28.765703 36.279297 28.220703 36.279297 C 27.909703 36.279297 27.316 36.066 27 35.75 L 27 31.375 C 27.316 31.063 27.909703 30.746094 28.220703 30.746094 z"></path>
</svg>
          `
        },
        {
          href: 'https://www.instagram.com/ashwinijain845?igsh=MWtmNDY5dTE2cGJneQ==',
          position: 'right',
          className: 'navbar-icon navbar-icon-instagram',
          'aria-label': 'Instagram Page',
          html: `
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" stroke="currentColor" 
              fill="currentColor" 
              stroke-width="0" 
              
              height="26" width="26" >
    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
</svg>`
              ,
        },
    
        {
          href: 'mailto:contact.hackathonmj@gmail.com',
          position: 'right',
          className: 'navbar-icon ',
          'aria-label': 'Email',
          html: `<svg 
              stroke="currentColor" 
              fill="currentColor" 
              stroke-width="0" 
              viewBox="0 0 35 35" 
              height="26" 
              width="26" 
              xmlns="http://www.w3.org/2000/svg">
              
              <path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z"/>
              </svg>`,
        },
    
        // {
        //   href: 'https://linktr.ee/mj665',
        //   label: 'Link Tree',
        //   position: 'right',
        // },
      ],
    },
    
    footer: {
      style: 'dark',
      links: [
        
        {
          title: 'Blogs',
          items: [
            {
              label: 'Blogs',
              to: '/blog/intro',
            },
            {
              label: 'GitHub Repo',
              to: 'https://github.com/MJ665/mac-super-abacus-website',
            },
          ],
      
   
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/ashwinijain845?igsh=MWtmNDY5dTE2cGJneQ==',
            },
            {
              label: 'Youtube Channel',
              href: 'https://youtube.com/@superabacus?si=6UFG-0TjTt80dYMS',
            },
            {
              label: 'Email',
              href: 'mailto:contact.superabacus@gmail.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/MJ665/mac-super-abacus-website',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MAC Super Abacus, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    
  } satisfies Preset.ThemeConfig,
  
  
  };

export default config;
