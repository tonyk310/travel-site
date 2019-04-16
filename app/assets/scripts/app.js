// import in MobileMenu module

import MobileMenu from './modules/mobileMenu.js';

// simply importing this file will not do anything
// we need to create a new object that uses this class as a blueprint

import RevealOnScroll from './modules/revealOnScroll.js';

import $ from "jquery";

var mobileMenu = new MobileMenu();

// var revealOnScroll = new RevealOnScroll();
 new RevealOnScroll($(".feature-item"), "85%");
 new RevealOnScroll($(".testimonial"), "60%");