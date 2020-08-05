// import Test from '../assets/header/CTDC_Logo.svg';

// footerLogoImage ideal image size 310x80 px
export default {
  footerLogoImage: 'https://raw.githubusercontent.com/CBIIT/bento-frontend/master/src/assets/footer/FNL_logo.png',
  footerLogoAltText: 'Footer Logo',
  footerStaticText: 'NIH … Turning Discovery Into Health®',
  maxSubsections: 3,
  maxSubsectionsLinks: 4,
  maxAnchorLinks: 4,
  link_sections: [
    {
      title: 'About Bento',
      items: [
        {
          text: 'Purpose',
          link: '/bento',
        },
        {
          text: 'Resources',
          link: '/resources',
        },
        {
          text: 'Documentation',
          link: 'https://cbiit.github.io/bento-docs/',
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          text: 'Contact Us',
          link: 'bento-help@nih.gov',
        },
        {
          link: 'https://www.linkedin.com/company/frederick-national-laboratory-for-cancer-research/',
          icon: 'https://raw.githubusercontent.com/CBIIT/bento-tools/master/src/components/assets/footer/linkedInIcon.svg',
        },
      ],
    },
  ],
  nci_links: [
    {
      text: 'U.S. Department of Health and Human Services',
      link: 'https://www.hhs.gov',
    },
    {
      text: 'National Institutes of Health',
      link: 'https://www.nih.gov',
    },
    {
      text: 'National Cancer Institute',
      link: 'https://www.cancer.gov',
    },
    {
      text: 'USA.gov',
      link: 'https://www.usa.gov',
    },
  ],
};
