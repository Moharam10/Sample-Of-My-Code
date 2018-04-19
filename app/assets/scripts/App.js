/*
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
*/
import MovingBorder from './modules/MovingBorder';
import './modules/Type_Writer.js';
import Fly_Word from "./modules/Fly_Word.js";
import Progress_Bar from "./modules/Progress_Bar.js";
import Skill from "./modules/Skill.js";
import Dropdown from './modules/Dropdown.js';
import Top_Nav from './modules/Top_Nav.js';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';


import WOW from 'wow.js' ;


var wow = new WOW().init();
var moving_border = new MovingBorder();
var fly_word = new Fly_Word();
var top_nav1 = new Top_Nav('#top-nav_1');
var dropdown1 = new Dropdown('#top-nav_1 .dropdown');
var stickyHeader = new StickyHeader();
var javascript_bar = new Progress_Bar('#JavaScript',93);
var cplus_bar = new Progress_Bar('#Cplus',90);
var csharp_bar = new Progress_Bar('#Csharp',86);
var java_bar = new Progress_Bar('#Java',88);
var html_bar = new Progress_Bar('#HTML',94);
var CSS_bar = new Progress_Bar('#CSS',95);
var Bootstrap_bar = new Progress_Bar('#Bootstrap',92);
var jquery_bar = new Progress_Bar('#jQuery',85);
var Sass_bar = new Progress_Bar('#Sass',86);
var postcss_bar = new Progress_Bar('#Postcss',92);
var angularjs_bar = new Progress_Bar('#Angularjs',73);
var react_bar = new Progress_Bar('#React',68);
var gulp_bar = new Progress_Bar('#Gulp',93);
var php_bar = new Progress_Bar('#PHP',90);
var sql_bar = new Progress_Bar('#SQL',88);
var nodejs_bar = new Progress_Bar('#Nodejs',89);
var express_bar = new Progress_Bar('#Express',82);
var mongodb_bar = new Progress_Bar('#Mongodb',84);
var wordpress_bar = new Progress_Bar('#Wordpress',90);
var git_bar = new Progress_Bar('#Git',86);
var typescript_bar = new Progress_Bar('#Typescript',80);
var modernizr_bar = new Progress_Bar('#Modernizr',86);
var mocha_bar = new Progress_Bar('#Mocha',82);
var photoshop_bar = new Progress_Bar('#Photoshop',75);

var programming_skill = new Skill('#Programming-Languages');
var other_skill = new Skill('#Others');
var front_end = new Skill("#Front-End");
var back_end = new Skill("#Back-End");
//var wow_animation = new Wow_Animation();  //////////////////// not this


/*
particlesJS.load('particles-js', './assets/scripts/modules/particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/
/*
var moving_border = new MovingBorder();
var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();

const element = $('.js-tilt').tilt({
  perspective: 400,
  maxTilt: 10
});
*/
