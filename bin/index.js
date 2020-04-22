#!/usr/bin/env node

"use strict";

const chalk = require("chalk");

console.log(chalk.magenta.bold("\nderail 🚂\n"));
const args = process.argv.slice(2);

if (args[0] == "projects") {
  displayProjects();
} else if (args[0] == "cak" || args[0] == "card") {
  cak();
} else {
  displayProjects();
}

function displayProjects() {
  const projects = [
    {
      name: "blockade",
      desc: "Secure headers and cookies for Node.js web frameworks",
      url: "https://github.com/TypeError/blockade",
    },
    {
      name: "bookmarks",
      desc:
        "A Burp Suite Extension to take back your repeater tabs (BApp Store)",
      url: "https://github.com/TypeError/Bookmarks",
    },
    {
      name: "crystalball",
      desc: "A magical web screenshot project",
      url: "https://github.com/TypeError/crystalball",
    },
    {
      name: "domained",
      desc: "Multi tool subdomain enumeration",
      url: "https://github.com/TypeError/domained",
    },
    {
      name: "koba",
      desc: "Security headers for the Kitura web framework",
      url: "https://github.com/TypeError/koba",
    },
    {
      name: "railcar",
      desc: "Swift HTTP proxy project",
      url: "https://github.com/Railroad/railcar",
    },
    {
      name: "reflect",
      desc: "OWASP ZAP add-on to help find reflected parameter vulnerabilities",
      url: "https://github.com/TypeError/reflect",
    },
    {
      name: "secure.py",
      desc: "Secure headers and cookies for Python web frameworks",
      url: "https://github.com/TypeError/secure.py",
    },
    {
      name: "server.swift",
      desc:
        "A simple server for testing HTTP requests powered by SwiftNIO and swift sh",
      url: "https://github.com/derail-io/server.swift",
    },
    {
      name: "toolbox",
      desc: "OWASP ZAP add-on with miscellaneous helpful tools",
      url: "https://github.com/TypeError/toolbox",
    },
  ];

  console.log(chalk.red.bold("\nprojects 🚧"));

  for (const project of projects) {
    const printProjects = `
    ${chalk.blue(project.name)}
    ${chalk.yellow(project.desc)}
    ${chalk.cyan(project.url)}`;
    console.log(printProjects);
  }
}

function cak() {
  console.log(chalk.red.bold("\ncak 🤓"));

  const printCard = `
    name:\t${chalk.blue("Caleb Kinney")}
    email:\t${chalk.yellow("cak@derail.io")}
    url:\t${chalk.cyan("https://derail.io")}
    `;
  console.log(printCard);
}
