#! /usr/bin/env node
import fetch from 'node-fetch';
import open from 'open';
import yargs from 'yargs';

const { argv } = yargs(process.argv);

// Fetch the data from reddit API
const res = await fetch('https://www.reddit.com/.json');
const data = await res.json();

// Select a random news from the data
const children = data.data.children;
const randomPost = children[Math.floor(Math.random() * children.length)];
const link = `https://reddit.com${randomPost.data.permalink}`;

// Check if the user wants to log in terminal or open in browser
if (argv.print) {
  console.log(`
    title: ${randomPost.data.title},
    link: ${link}
  `);
} else {
  open(link)
}
