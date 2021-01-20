const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    mobilex: '460.99px',
    tablet: '768px',
    tabletL: '992px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    mobilex: `(max-width: ${size.mobilex})`,
    tablet: `(min-width: ${size.tablet})`,
    tabletL: `(min-width: ${size.tabletL})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };