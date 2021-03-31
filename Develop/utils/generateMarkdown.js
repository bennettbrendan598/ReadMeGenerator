// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(apache, boost, bsd, eclipse, gnu, ibm, isc, perl) {
  return apache ? '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' :
    boost ? '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)' :
    bsd ? '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)' :
    eclipse ? '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)' :
    gnu ? '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)' :
    ibm ? '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)' :
    isc ? '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)' :
    perl ? '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)' :
    '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(apache, boost, bsd, eclipse, gnu, ibm, isc, perl) {
  return apache ? '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)' :
    boost ? '[Boost 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)' :
    bsd ? '[BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)' :
    eclipse ? '[Eclipse 1.0](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)' :
    gnu ? '[GNU GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)' :
    ibm ? '[IBM 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)' :
    isc ? '[ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)' :
    perl ? '[Perl](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)' :
    '';
}

// Subtitle section

const generateSubtitle = subtitleText => {
  if (!subtitleText) {
    return '';
  }

  return `
  ### ${subtitleText}
  `;
};

// Motivation section

const generateMotivation = motivationText => {
  if (!motivationText) {
    return '';
  }

  return `
  ### ${motivationText}
  `;
};

// Description section

const generateDescription = descriptionText => {
  if (!descriptionText) {
    return '';
  }

  return `
  ### ${descriptionText}
  `;
};

// Installation section

const generateInstallation = installationText => {
  if (!installationText) {
    return '';
  }

  return `
  ### ${installationText}
  `;
};

// Usage section

const generateUsage = usageText => {
  if (!usageText) {
    return '';
  }

  return `
  ### ${usageText}
  `;
};

// Features section

const generateFeatures = featuresText => {
  if (!featuresText) {
    return '';
  }

  return `
  ## Features
  * ${featuresText}
  `;
};

// Production section

const generateProduction = (productionText, githubText) => {
  if (!productionText || !githubText) {
    return '';
  }

  return `
  ## Production
  [${productionText}](https://${githubText}.github.io/${productionText}/)
  `;
};

// Test section

const generateTests = testsText => {
  if (!testsText) {
    return '';
  }

  return `
  ## Tests
  ${testsText}
  `;
};

// License section

const generateLicense = licenseText => {
  if (!licenseText) {
    return '';
  }

  return `
  ## License
  Please review the license this application is under:
  <br>
  `;
};

// Contributions section

const generateContributions = (githubText, contributionsText) => {
  if (!githubText || !contributionsText) {
    return '';
  }

  return `
  ### Contributions
  * [${githubText}](https://github.com/${githubText})
  * [${contributionsText}](https://github.com/${contributionsText})
  `;
};

// Screenshot section

const generateScreenshot = (screenshotText, githubText, productionText) => {
  if (!imgText || !githubText || !productionText) {
    return '';
  }

  return `
  [![${productionText}](${screenshotText})](https://${githubText}.github.io/${productionText}/)
  `;
};

// Table of Contents

const generateTable = table => {
  if (!table) {
    return '';
  }

  return `
  ## Table of Contents
  `;
};

// Content of Table of Contents

const generateContent = (table) => {
  const tableContentArr = table;

  let tableList = '';
  if (table) {
    tableContentArr.forEach(item => {
      tableList += `* [${item}](#${item})\n`
    });
  }
  return tableList
};

// TODO: Create a function to generate markdown for README
module.exports = responseData => {
  const {
    title,
    subtitle,
    motivation,
    description,
    installation,
    usage,
    features,
    production,
    tests,
    license,
    contributions,
    screenshot,
    github,
    email,
    
    
    
    
  } = responseData;

  return `
  # ${title}
  *${generateSubtitle(subtitle)}*

  ${generateTable(table)}
  ${generateContent(table)}

  <br>

  ## Motivation
  ${generateMotivation(motivation)}

  ## Description
  ${generateDescription(description)}

  ## Installation
  ${generateInstallation(installation)}

  ## Usage
  ${generateUsage(usage)}

  ## Features
  ${generateFeatures(features)}

  ## Production
  ${generateProduction(production, github)}

  ## Tests
  ${generateTests(tests)}

  ## Licenses
  ${generateLicense(license)}
  ${renderLicenseLink(license)}

  ## Contributions
  ${generateContributions(contributions)}
  
  ## Screenshot of Project
  ${generateScreenshot(screenshot, github, production)}

  ## Questions, Comments, or Concerns?
  
  Please feel free to reach me for any additional inquiries!
  <br>
  Email: ${email}

  Please visit my GitHub!
  <br>
  GitHub: [${github}](https://github.com/${github})`;
}