module.exports = {
  title: 'Linux, Bash e la Command Line',
  description: 'I primi passi verso linux',
  themeConfig: {
    logo: '/assets/img/logo.png',
    repo: 'handgull/Linux-bash-cookbook/',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Bash', link: '/bash/' }
    ],
    sidebar: {
      '/bash/': getBashSidebar('Bash')
    },
    smoothScroll: true
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    ['@vuepress/pwa', {
      serviceWorker: true,
      popupComponent: 'MySWUpdatePopup',
      updatePopup: true
    }]
  ]
}

function getBashSidebar (groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        '',
        './fs-manipulation/',
        './redirection/',
        './env/'
      ]
    }
  ]
}
