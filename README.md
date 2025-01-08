This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


To use this, you'll need to:
Create the appropriate route for /javadoc/[version] to handle the individual documentation pages
Adjust the version data and statuses according to your needs
Style the cards and badges to match your company's brand colors
Add any additional metadata or features specific to your documentation needs
The design is clean, professional, and follows modern web design practices while maintaining good accessibility and user experience.


http://sesa-factory.eu:20080/sitestat/api/generate/id
http://sesa-factory.eu:20080/sitestat/api/generate/complex/id


--------------------------------------------------------------------------------------------------------------

@charset "UTF-8";
/*
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com
Twitter: @rich_clark
*/
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  line-height: 1;
  vertical-align: baseline;
  background: transparent;
  font-family: "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "Hiragino Kaku Gothic ProN" , "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
  }

html {
  font-size: 62.5%; }

h1, h2, p {
  /*transform: rotate(0.05deg);*/ }

body {
  line-height: 1.6;
  font-size: 16px;
  font-size: 1.6rem;
  color: #595757;
  width: 100%; }
  body.active {
    overflow: hidden;
    position: fixed; }

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block; }

ul, li {
  list-style: none; }

blockquote, q {
  quotes: none; }

blockquote:before, blockquote:after, q:before, q:after {
  content: '';
  content: none; }

a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  color: #000;
  transform: rotate(0.05deg);
  text-decoration: none; }

table {
  border-collapse: collapse;
  border-spacing: 0; }

/* change border colour to suit your needs */
hr {
  display: block;
  height: 1px;
  border: 0;
  margin: 1em 0;
  padding: 0; }

input, select {
  vertical-align: middle; }

.cf:after {
  content: " ";
  display: block;
  clear: both; }

img {
  vertical-align: bottom;
  max-width: 100%;
  height: auto; }

img {
  max-width: 100%;
  height: auto; }

* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box; }

*:focus {
  outline: none !important; }

.en {
  font-family: 'Ropa Sans', sans-serif;
  letter-spacing: 0.1em; }

.sp {
  display: none; }

.pc {
  display: block; }

.l_continar {
  width: 100%;
  max-width: 1366px;
  margin: 0 auto; }

@media screen and (max-width: 1366px) {
  .l_continar {
    padding-left: calc(20 / 1366 * 100vw);
    padding-right: calc(20 / 1366 * 100vw); } }
@media screen and (max-width: 768px) {
  .l_continar {
    padding-left: 0;
    padding-right: 0; }

  .sp {
    display: block; }

  .pc {
    display: none; } }
#header {
  padding: 20px 90px 20px 35px;
  display: flex;
  flex-wrap: wrap;
  -webkit-align-items: center;
  align-items: center;
  width: 100%;
  z-index: 100;
  opacity: 0;
  transition: all .3s ease-out;
  }
  #header.is-fixed {
    opacity: 1;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    }
  #header h1 {
    width: 200px; }
    #header h1 img {
      width: 100%; }
  #header .h-logo {
    width: 200px; }
    #header .h-logo img {
      width: 100%; }
  #header ul {
    width: 950px;
    margin-left: auto;
    /* display: -webkit-flex; */
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    }
    #header ul li img {
      height: 20px; }

#menu_trigger {
  cursor: pointer;
  position: fixed;
  top: 33px;
  right: 30px;
  width: 22px;
  height: 22px;
  background: url(../images/common/icon_menu.svg) 0 center no-repeat;
  background-size: 100% auto;
  z-index: 101; }
  #menu_trigger.open {
    background: url(../images/common/icon_close.svg) center center no-repeat;
    background-size: 100% auto;
    z-index: 105; }

@media screen and (max-width: 1366px) {
  #header {
    padding: calc(20 / 1366 * 100vw) calc(90 / 1366 * 100vw) calc(20 / 1366 * 100vw) calc(35 / 1366 * 100vw);
    }
    #header h1 {
      width: calc(200 / 1366 * 100vw); }
    #header .h-logo {
      width: calc(200 / 1366 * 100vw); }
    #header ul {
      width: calc(950 / 1366 * 100vw); }
      #header ul li img {
        height: calc(20 / 1366 * 100vw); }

  #menu_trigger {
    top: calc(33 / 1366 * 100vw);
    right: calc(30 / 1366 * 100vw);
    width: calc(22 / 1366 * 100vw);
    height: calc(22 / 1366 * 100vw); } }
@media screen and (max-width: 768px) {
  #header {
    padding: calc(35 / 768 * 100vw) calc(40 / 768 * 100vw); }
    #header h1 {
      width: calc(270 / 768 * 100vw); }
    #header .h-logo {
      width: calc(270 / 768 * 100vw); }
    #header ul {
      display: none; }

  #menu_trigger {
    top: calc(50 / 768 * 100vw);
    right: calc(40 / 768 * 100vw);
    width: calc(44 / 768 * 100vw);
    height: calc(44 / 768 * 100vw); } }
.footer_top {
  background: -moz-linear-gradient(0.13% -92.37% -13.69deg, #cb007f 0%, #df017f 0.52%, #b9077f 5.13%, #980c7f 10.09%, #7d107f 15.39%, #69137f 21.16%, #5a157f 27.64%, #52177f 35.39%, #4f177f 47.83%, #4e1980 69.2%, #4a2085 76.89%, #442b8d 82.38%, #3a3c98 86.82%, #2e52a7 90.62%, #1f6eb9 93.98%, #3068ac 96.95%, #1c76b7 100%);
  background: -webkit-linear-gradient(-13.69deg, #cb007f 0%, #df017f 0.52%, #b9077f 5.13%, #980c7f 10.09%, #7d107f 15.39%, #69137f 21.16%, #5a157f 27.64%, #52177f 35.39%, #4f177f 47.83%, #4e1980 69.2%, #4a2085 76.89%, #442b8d 82.38%, #3a3c98 86.82%, #2e52a7 90.62%, #1f6eb9 93.98%, #3068ac 96.95%, #1c76b7 100%);
  background: -o-linear-gradient(-13.69deg, #cb007f 0%, #df017f 0.52%, #b9077f 5.13%, #980c7f 10.09%, #7d107f 15.39%, #69137f 21.16%, #5a157f 27.64%, #52177f 35.39%, #4f177f 47.83%, #4e1980 69.2%, #4a2085 76.89%, #442b8d 82.38%, #3a3c98 86.82%, #2e52a7 90.62%, #1f6eb9 93.98%, #3068ac 96.95%, #1c76b7 100%);
  background: -ms-linear-gradient(-13.69deg, #cb007f 0%, #df017f 0.52%, #b9077f 5.13%, #980c7f 10.09%, #7d107f 15.39%, #69137f 21.16%, #5a157f 27.64%, #52177f 35.39%, #4f177f 47.83%, #4e1980 69.2%, #4a2085 76.89%, #442b8d 82.38%, #3a3c98 86.82%, #2e52a7 90.62%, #1f6eb9 93.98%, #3068ac 96.95%, #1c76b7 100%);
  background: linear-gradient(103.69deg, #cb007f 0%, #df017f 0.52%, #b9077f 5.13%, #980c7f 10.09%, #7d107f 15.39%, #69137f 21.16%, #5a157f 27.64%, #52177f 35.39%, #4f177f 47.83%, #4e1980 69.2%, #4a2085 76.89%, #442b8d 82.38%, #3a3c98 86.82%, #2e52a7 90.62%, #1f6eb9 93.98%, #3068ac 96.95%, #1c76b7 100%);
  padding: 25px 0; }
  .footer_top .footer_top_inner {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between; }
    .footer_top .footer_top_inner a {
      display: block;
      border: 1px solid #efefef;
      position: relative;
      width: 46%;
      color: #fff;
      padding: 20px; }
      .footer_top .footer_top_inner a span {
        display: block;
        line-height: 1; }
      .footer_top .footer_top_inner a .en {
        font-size: 37px;
        font-size: 3.7rem; }
      .footer_top .footer_top_inner a .jp {
        padding-top: 15px;
        font-weight: bold;
        font-size: 17px;
        font-size: 1.7rem; }
      .footer_top .footer_top_inner a:after {
        content: "";
        width: 28px;
        height: 18px;
        background: url(../images/common/arrow_white.png) 0 0 no-repeat;
        background-size: 100% auto;
        position: absolute;
        right: 25px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        transition: all .3s ease-out; }
      .footer_top .footer_top_inner a:hover:after {
        right: 15px; }

.footer_bottom {
  width: 83%;
  margin: 0 auto;
  padding: 120px 0 140px;
  display: flex;
  flex-wrap: wrap; }
  .footer_bottom .footer_logo {
    width: 11.5%; }
    .footer_bottom .footer_logo img {
      max-width: 200px; }
  .footer_bottom .footer_menu {
    width: 83%;
    margin-left: auto;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between; }
    .footer_bottom .footer_menu .footer_menu_parent {
      font-family: 'Ropa Sans', sans-serif;
      letter-spacing: 0.1em;
      padding-bottom: 10px;
      margin-right: 30px; }
      .footer_bottom .footer_menu .footer_menu_parent a {
        color: #4f177f;
        font-size: 27px;
        font-size: 2.7rem;
        line-height: 1; }
    .footer_bottom .footer_menu dt {
      border-bottom: 1px solid #4f177f; }
    .footer_bottom .footer_menu .footer_menu_child {
      padding-top: 1em;
      font-size: 14px;
      font-size: 1.4rem; }
      .footer_bottom .footer_menu .footer_menu_child a {
        display: block;
        padding-bottom: 1em; }

.footer_link {
  font-size: 22px;
  font-size: 2.2rem;
  line-height: 1;
  color: #4f177f;
  text-align: center; }
  .footer_link a {
    color: #4f177f;
    font-family: 'Ropa Sans', sans-serif;
    letter-spacing: 0.1em; }
  .footer_link li {
    padding: 0 0.5em;
    display: inline-block;
    border-right: 1px solid #4f177f; }
    .footer_link li:last-child {
      border-right: none; }

.copyright {
  padding: 45px 0;
  color: #4f177f;
  display: block;
  text-align: center;
  font-size: 19px;
  font-size: 1.9rem;
  line-height: 1;
  font-family: 'Ropa Sans', sans-serif;
  letter-spacing: 0.1em; }

@media screen and (max-width: 1366px) {
  .footer_top {
    padding: calc(25 / 1366 * 100vw) 0; }
    .footer_top .footer_top_inner a {
      padding: calc(20 / 1366 * 100vw); }
      .footer_top .footer_top_inner a .en {
        font-size: calc(37 / 1366 * 100vw); }
      .footer_top .footer_top_inner a .jp {
        padding-top: calc(15 / 1366 * 100vw);
        font-size: calc(17 / 1366 * 100vw); }
      .footer_top .footer_top_inner a:after {
        width: calc(28 / 1366 * 100vw);
        height: calc(18 / 1366 * 100vw);
        right: calc(25 / 1366 * 100vw); }
      .footer_top .footer_top_inner a:hover:after {
        right: calc(15 / 1366 * 100vw); }

  .footer_bottom {
    padding: calc(120 / 1366 * 100vw) 0 calc(140 / 1366 * 100vw);
    width: 98%; }
    .footer_bottom .footer_logo {
      width: 8%; }
    .footer_bottom .footer_menu {
      width: 90%; }
      .footer_bottom .footer_menu .footer_menu_parent {
        padding-bottom: calc(10 / 1366 * 100vw);
        margin-right: calc(30 / 1366 * 100vw); }
        .footer_bottom .footer_menu .footer_menu_parent a {
          font-size: calc(27 / 1366 * 100vw); }
      .footer_bottom .footer_menu .footer_menu_child {
        font-size: calc(14 / 1366 * 100vw); }

  .footer_link {
    font-size: calc(22 / 1366 * 100vw); }

  .copyright {
    padding: calc(45 / 1366 * 100vw) 0;
    font-size: calc(19 / 1366 * 100vw); } }
@media screen and (max-width: 768px) {
  .footer_top {
    padding: calc(60 / 768 * 100vw) calc(40 / 768 * 100vw); }
    .footer_top .footer_top_inner {
      display: block; }
      .footer_top .footer_top_inner a {
        padding: calc(20 / 768 * 100vw);
        width: 100%; }
        .footer_top .footer_top_inner a:first-of-type {
          margin-bottom: calc(40 / 768 * 100vw); }
        .footer_top .footer_top_inner a .en {
          font-size: calc(48 / 768 * 100vw); }
        .footer_top .footer_top_inner a .jp {
          padding-top: calc(20 / 768 * 100vw);
          font-size: calc(22 / 768 * 100vw); }
        .footer_top .footer_top_inner a:after {
          width: calc(40 / 768 * 100vw);
          height: calc(28 / 768 * 100vw);
          right: calc(30 / 768 * 100vw); }
        .footer_top .footer_top_inner a:hover:after {
          right: calc(20 / 768 * 100vw); }

  .footer_bottom {
    width: 100%;
    margin: 0 auto;
    padding: calc(80 / 768 * 100vw) 0 calc(190 / 768 * 100vw);
    display: block; }
    .footer_bottom .footer_logo {
      width: calc(230 / 768 * 100vw);
      margin: 0 auto; }
      .footer_bottom .footer_logo img {
        max-width: 100%; }
    .footer_bottom .footer_menu {
      display: none; }

  .footer_link {
    display: none; }

  .copyright {
    padding: 0 0 calc(50 / 768 * 100vw) 0;
    font-size: calc(23 / 768 * 100vw); } }
.slideup {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
  opacity: 0;
  -webkit-transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  -o-transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
  .slideup.active {
    opacity: 1;
    transform: translate3d(0, 0px, 0);
    }

.slide_left {
  opacity: 0;
  -webkit-transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  -o-transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translate3d(-30px, 0px, 0); }
  .slide_left.active {
    opacity: 1;
    transform: translate3d(0, 0px, 0); }

.move_pic {
  position: relative;
  overflow: hidden;
  display: inline-block; }
  .move_pic img {
    opacity: 0;
    -webkit-transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    -o-transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: translate3d(-30px, 0px, 0);
    transition-delay: 0.3s; }
  .move_pic:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: .85;
    background: -moz-linear-gradient(-45deg, rgba(255, 255, 255, 0.01) 0%, rgba(69, 131, 209, 0.12) 20%, #4583d1 100%, #4583d1 101%);
    background: -webkit-linear-gradient(-45deg, rgba(255, 255, 255, 0.01) 0%, rgba(69, 131, 209, 0.12) 20%, #4583d1 100%, #4583d1 101%);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.01) 0%, rgba(69, 131, 209, 0.12) 20%, #4583d1 100%, #4583d1 101%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03ffffff', endColorstr='#4583d1',GradientType=1 );
    -webkit-transition: 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    -o-transition: 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition: 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: translateX(-100%);
    transform-origin: right;
    transition-delay: 0.3s; }
  .move_pic.active img {
    opacity: 1;
    transform: translate3d(0, 0px, 0); }
  .move_pic.active:before {
    transform-origin: left;
    transform: translateX(100%); }

#open_navi {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 101;
  background: -moz-linear-gradient(-5.56% 25.96% -13.69deg, #e4007f 0%, #df017f 0.52%, #b9077f 5.13%, #980c7f 10.09%, #7d107f 15.39%, #69137f 21.16%, #5a157f 27.64%, #52177f 35.39%, #4f177f 47.83%, #4e1980 69.2%, #4a2085 76.89%, #442b8d 82.38%, #3a3c98 86.82%, #2e52a7 90.62%, #1f6eb9 93.98%, #0d8dce 96.95%, #00a5de 98.81%);
  background: -webkit-linear-gradient(-13.69deg, #e4007f 0%, #df017f 0.52%, #b9077f 5.13%, #980c7f 10.09%, #7d107f 15.39%, #69137f 21.16%, #5a157f 27.64%, #52177f 35.39%, #4f177f 47.83%, #4e1980 69.2%, #4a2085 76.89%, #442b8d 82.38%, #3a3c98 86.82%, #2e52a7 90.62%, #1f6eb9 93.98%, #0d8dce 96.95%, #00a5de 98.81%);
  background: -webkit-gradient(linear, -5.56% 25.96%, 110.72% 76.28%, color-stop(0, #e4007f), color-stop(0.0052, #df017f), color-stop(0.0513, #b9077f), color-stop(0.1009, #980c7f), color-stop(0.1539, #7d107f), color-stop(0.2116, #69137f), color-stop(0.2764, #5a157f), color-stop(0.3539, #52177f), color-stop(0.4783, #4f177f), color-stop(0.692, #4e1980), color-stop(0.7689, #4a2085), color-stop(0.8238, #442b8d), color-stop(0.8682, #3a3c98), color-stop(0.9062, #2e52a7), color-stop(0.9398, #1f6eb9), color-stop(0.9695, #0d8dce), color-stop(0.9881, #00a5de));
  background: -o-linear-gradient(-13.69deg, #e4007f 0%, #df017f 0.52%, #b9077f 5.13%, #980c7f 10.09%, #7d107f 15.39%, #69137f 21.16%, #5a157f 27.64%, #52177f 35.39%, #4f177f 47.83%, #4e1980 69.2%, #4a2085 76.89%, #442b8d 82.38%, #3a3c98 86.82%, #2e52a7 90.62%, #1f6eb9 93.98%, #0d8dce 96.95%, #00a5de 98.81%);
  background: -ms-linear-gradient(-13.69deg, #e4007f 0%, #df017f 0.52%, #b9077f 5.13%, #980c7f 10.09%, #7d107f 15.39%, #69137f 21.16%, #5a157f 27.64%, #52177f 35.39%, #4f177f 47.83%, #4e1980 69.2%, #4a2085 76.89%, #442b8d 82.38%, #3a3c98 86.82%, #2e52a7 90.62%, #1f6eb9 93.98%, #0d8dce 96.95%, #00a5de 98.81%);
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#E4007F', endColorstr='#00A5DE' ,GradientType=0)";
  background: linear-gradient(103.69deg, #e4007f 0%, #df017f 0.52%, #b9077f 5.13%, #980c7f 10.09%, #7d107f 15.39%, #69137f 21.16%, #5a157f 27.64%, #52177f 35.39%, #4f177f 47.83%, #4e1980 69.2%, #4a2085 76.89%, #442b8d 82.38%, #3a3c98 86.82%, #2e52a7 90.62%, #1f6eb9 93.98%, #0d8dce 96.95%, #00a5de 98.81%);
  opacity: 0.95;
  filter: alpha(opacity=95) progid:DXImageTransform.Microsoft.Alpha(opacity=95) progid:DXImageTransform.Microsoft.gradient(startColorstr='#E4007F',endColorstr='#00A5DE' , GradientType=1); }
  #open_navi.open .menu_top {
    opacity: 1;
    transform: translate3d(0, 0px, 0); }
  #open_navi.open .menu_link {
    opacity: 1;
    transform: translate3d(0, 0px, 0); }

.open_navi_inner {
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  height: 100%;
  padding: 5vw 0; }

.open_navi_inner {
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch; }

.menu_top {
  opacity: 0;
  -webkit-transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  -o-transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translate3d(-30px, 0px, 0);
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap; }
  .menu_top p, .menu_top dl {
    width: 21%;
    margin-left: 3.333%; }
    .menu_top p.last_menu, .menu_top dl.last_menu {
      margin-left: 0; }
  .menu_top .menu_parent {
    padding-bottom: 10px; }
    .menu_top .menu_parent a, .menu_top .menu_parent span {
      color: #fff;
      font-size: 38px;
      font-size: 3.8rem;
      line-height: 1;
      font-family: 'Ropa Sans', sans-serif;
      letter-spacing: 0.1em; }
  .menu_top dt {
    border-bottom: 1px solid #fff; }
  .menu_top .menu_child {
    padding-bottom: 2.5em;
    padding-top: 1em;
    font-size: 18px;
    font-size: 1.8rem; }
    .menu_top .menu_child a {
      color: #fff;
      display: block;
      padding-bottom: 1em; }
      .menu_top .menu_child a.sp {
        display: none; }
  .menu_top .menu_grandchild {
    padding-left: 1em;
    font-size: 14px;
    font-size: 1.4rem; }

@media screen and (max-height: 732px) {
  .open_navi_inner {
    padding: 20px 0; } }
.menu_link {
  width: 100%;
  font-size: 22px;
  font-size: 2.2rem;
  line-height: 1;
  color: #fff;
  text-align: center;
  opacity: 0;
  -webkit-transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  -o-transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translate3d(-30px, 0px, 0); }
  .menu_link a {
    color: #fff;
    font-family: 'Ropa Sans', sans-serif;
    letter-spacing: 0.1em; }
  .menu_link li {
    padding: 0 0.5em;
    display: inline-block;
    border-right: 1px solid #4f177f; }
    .menu_link li:last-child {
      border-right: none; }

@media screen and (max-width: 1366px) {
  .menu_top {
    width: 96%; }
    .menu_top .menu_parent {
      padding-bottom: calc(10 / 1366 * 100vw); }
      .menu_top .menu_parent a, .menu_top .menu_parent span {
        font-size: calc(38 / 1366 * 100vw); }
    .menu_top .menu_child {
      font-size: calc(18 / 1366 * 100vw); }
    .menu_top .menu_grandchild {
      font-size: calc(14 / 1366 * 100vw); }

  .menu_link {
    font-size: calc(22 / 1366 * 100vw); } }
@media screen and (max-width: 768px) {
  #open_navi {
    height: 100vh; }

  .open_navi_inner {
    padding: 0;
    display: block;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch; }

  .menu_top {
    width: calc(510 / 768 * 100vw);
    margin: 0 auto;
    padding-top: calc(180 / 768 * 100vw); }
    .menu_top p, .menu_top dl {
      width: 100%;
      margin-left: 0; }
    .menu_top .menu_parent {
      padding-bottom: 0; }
      .menu_top .menu_parent a, .menu_top .menu_parent span {
        font-size: calc(48 / 768 * 100vw); }
      .menu_top .menu_parent a {
        pointer-events: none; }
    .menu_top p.menu_parent a {
      pointer-events: auto; }
    .menu_top dl {
      padding-bottom: calc(30 / 768 * 100vw); }
    .menu_top dt {
      border: none;
      position: relative; }
      .menu_top dt:after {
        content: "";
        width: calc(40 / 768 * 100vw);
        height: 1px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        right: calc(50 / 768 * 100vw); }
      .menu_top dt:before {
        content: "";
        height: calc(40 / 768 * 100vw);
        width: 1px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        right: calc(70 / 768 * 100vw);
        margin-top: calc(-20 / 768 * 100vw); }
      .menu_top dt.active:before {
        display: none; }
    .menu_top p.menu_parent {
      padding-bottom: calc(60 / 768 * 100vw); }
    .menu_top dt.menu_parent {
      margin-bottom: calc(30 / 768 * 100vw); }
    .menu_top .menu_child {
      display: none;
      border: 1px solid #fff;
      padding: calc(30 / 768 * 100vw) calc(20 / 768 * 100vw) 0;
      font-size: calc(28 / 768 * 100vw); }
      .menu_top .menu_child a {
        padding-bottom: 0;
        margin-bottom: 1.5em; }
        .menu_top .menu_child a.sp {
          display: block; }
    .menu_top .menu_grandchild {
      padding-left: 1em;
      font-size: calc(24 / 768 * 100vw); }

  .menu_link {
    width: calc(460 / 768 * 100vw);
    margin: 0 auto;
    font-size: calc(28 / 768 * 100vw);
    text-align: left; }
    .menu_link li {
      padding: 0 0 1em;
      display: block;
      border-right: none; }
      .menu_link li:last-child {
        margin-bottom: 10em; } }
.read_more.white span,
.read_more.white a {
  border: 1px solid #fff;
  color: #fff;
  background: none; }
.read_more span,
.read_more a {
  background: -moz-linear-gradient(-45deg, #00a5de 0%, #00a5de 30%, #4f167f 55%, #4f167f 63%, #4f167f 100%);
  background: -webkit-linear-gradient(-45deg, #00a5de 0%, #00a5de 30%, #4f167f 55%, #4f167f 63%, #4f167f 100%);
  background: linear-gradient(135deg, #00a5de 0%, #00a5de 30%, #4f167f 55%, #4f167f 63%, #4f167f 100%);
  background-position: right center;
  color: #fff;
  font-size: 26px;
  font-size: 2.6rem;
  line-height: 1;
  font-weight: bold;
  display: block;
  position: relative;
  transition: 0.5s;
  background-size: 180% auto;
  text-align: right;
  padding: 28px 60px;
  position: relative; }
  .read_more span:before,
  .read_more a:before {
    content: "";
    width: 28px;
    height: 18px;
    background: url(../images/common/arrow_white.png) 0 0 no-repeat;
    background-size: 100% auto;
    position: absolute;
    right: 25px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    transition: all .3s ease-out;
    z-index: 2; }
  .read_more span:hover,
  .read_more a:hover {
    background-position: left center;
    background-size: 400% auto; }
    .read_more span:hover:before,
    .read_more a:hover:before {
      right: 15px; }

@media screen and (max-width: 1366px) {
  .read_more span,
  .read_more a {
    font-size: calc(26 / 1366 * 100vw);
    padding: calc(28 / 1366 * 100vw) calc(60 / 1366 * 100vw); }
    .read_more span:before,
    .read_more a:before {
      width: calc(28 / 1366 * 100vw);
      height: calc(18 / 1366 * 100vw);
      right: calc(25 / 1366 * 100vw); }
    .read_more span:hover:before,
    .read_more a:hover:before {
      right: calc(25 / 1366 * 100vw); } }
@media screen and (max-width: 768px) {
  .read_more span,
  .read_more a {
    font-size: calc(35 / 768 * 100vw);
    padding: calc(35 / 768 * 100vw) calc(75 / 768 * 100vw); }
    .read_more span:before,
    .read_more a:before {
      width: calc(40 / 768 * 100vw);
      height: calc(32 / 768 * 100vw);
      right: calc(20 / 768 * 100vw); }
    .read_more span:hover:before,
    .read_more a:hover:before {
      right: calc(10 / 768 * 100vw); } }
#eyecatch {
  position: relative; }
  #eyecatch img {
    width: 100%;
    height: auto; }
  #eyecatch .none {
    padding-top: 120px; }
  #eyecatch h2 {
    position: absolute;
    top: calc(50% + 45px);
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 56px;
    font-size: 5.6rem;
    color: #fff;
    letter-spacing: 0.23em;
    font-weight: bold;
    line-height: 1.73;
    text-align: center;
    font-family: "ヒラギノ角ゴ ProN W6","HiraKakuProN-W6","ヒラギノ角ゴ Pro W6","HiraKakuPro-W6","メイリオ",Meiryo,"ＭＳ Ｐゴシック","MS Pgothic","Osaka",sans-serif,Helvetica, Helvetica Neue, Arial, Verdana;
    width: 100%; }

@media screen and (max-width: 1366px) {
  #eyecatch h2 {
    top: calc(50% + calc(45 / 1366 * 100vw));
    font-size: calc(56 / 1366 * 100vw); }
  #eyecatch .none {
    padding-top: calc(120 / 1366 * 100vw); } }
#breadcrumb {
  width: 96%;
  margin: 0 auto;
  padding: 12px 0 20px; }
  #breadcrumb ul {
    text-align: right; }
    #breadcrumb ul li {
      display: inline-block;
      font-family: 'Ropa Sans', sans-serif;
      letter-spacing: 0.2em;
      color: #4f177f;
      font-size: 16px;
      font-size: 1.6rem; }
      #breadcrumb ul li a, #breadcrumb ul li span {
        color: #4f177f; }
      #breadcrumb ul li:after {
        content: ">"; }
      #breadcrumb ul li:last-child:after {
        display: none; }

.main_ttl {
  padding-bottom: 90px; }
  .main_ttl h2 span {
    font-size: 46px;
    font-size: 4.6rem;
    letter-spacing: 0.2em;
    line-height: 1;
    color: #4f177f;
    display: inline-block;
    padding: 10px 20px;
    border: 1px solid #4f177f; }
  .main_ttl p {
    color: #4f177f; }
    .main_ttl p.jp {
      padding-top: 20px;
      font-size: 40px;
      font-size: 4.0rem;
      line-height: 1;
      font-weight: bold; }
      .main_ttl p.jp .mb {
        margin-bottom: 10px;
        display: block; }
    .main_ttl p.en {
      padding-top: 8px;
      font-size: 24px;
      font-size: 2.4rem;
      line-height: 1;
      letter-spacing: 0.2em; }
  .main_ttl h1 {
    color: #4f177f; }
    .main_ttl h1.jp {
      padding-top: 20px;
      font-size: 40px;
      font-size: 4.0rem;
      line-height: 1;
      font-weight: bold; }
      .main_ttl h1.jp .mb {
        margin-bottom: 10px;
        display: block; }

.comapny_menu {
  width: 830px;
  padding-bottom: 100px; }
  .comapny_menu ul {
    display: flex;
    flex-wrap: wrap;
    border-left: 1px solid #e6e6e7; }
  .comapny_menu li {
    width: 25%;
    border-right: 1px solid #e6e6e7;
    text-align: center; }
    .comapny_menu li a {
      font-size: 18px;
      font-size: 1.8rem;
      padding: 1em 0;
      line-height: 1;
      display: block;
      letter-spacing: 0.1em; }
      .comapny_menu li a:hover {
        background-color: #f3f2f4;
        color: #4f177f; }
    .comapny_menu li.is-active {
      background-color: #f3f2f4; }
      .comapny_menu li.is-active a {
        color: #4f177f; }

.pagenavi {
  position: relative; }
  .pagenavi .pagenavi-prev {
    width: 20%;
    position: absolute;
    left: 0;
    top: 0; }
  .pagenavi .pagenavi-back {
    width: 45%;
    margin-left: auto;
    margin-right: auto; }
  .pagenavi .pagenavi-next {
    width: 20%;
    position: absolute;
    right: 0;
    top: 0; }
  .pagenavi a {
    display: block;
    color: #4f177f;
    font-weight: bold;
    text-align: center;
    font-size: 22px;
    font-size: 2.2rem;
    line-height: 1;
    padding: 1em 0;
    border: 1px solid #898989;
    transition: all .3s ease-out; }
    .pagenavi a:hover {
      color: #fff;
      background-color: #4f177f; }

.backbtn a {
  display: block;
  color: #4f177f;
  font-weight: bold;
  text-align: center;
  font-size: 22px;
  font-size: 2.2rem;
  line-height: 1;
  padding: 1em 0;
  border: 1px solid #898989;
  transition: all .3s ease-out; }
  .backbtn a:hover {
    color: #fff;
    background-color: #4f177f; }
.backbtn.grade_btn a {
  border: none;
  color: #fff;
  background: url(../images/recruit_new/grade_btn.png) right 0 no-repeat;
  background-size: auto 100%; }
  .backbtn.grade_btn a:hover {
    background-position: left 0; }
    .backbtn.grade_btn a:hover span:before {
      right: -10px; }
  .backbtn.grade_btn a span {
    display: inline-block;
    padding-right: 40px;
    position: relative; }
    .backbtn.grade_btn a span:before {
      content: "";
      width: 28px;
      height: 18px;
      background: url(../images/common/arrow_white.png) 0 0 no-repeat;
      background-size: 100% auto;
      position: absolute;
      right: 0;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      transition: all .3s ease-out;
      z-index: 2; }

.service_btn a {
  display: block;
  position: relative;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  font-size: 26px;
  font-size: 2.6rem;
  line-height: 1;
  background-image: url(../images/contact/bg_submit.png);
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: right center;
  transition: all .3s ease-out;
  color: #fff; }
  .service_btn a span {
    font-family: 'Ropa Sans', sans-serif;
    letter-spacing: 0.1em; }
  .service_btn a:before {
    content: "";
    width: 28px;
    height: 18px;
    background: url(../images/common/arrow_white.png) 0 0 no-repeat;
    background-size: 100% auto;
    position: absolute;
    right: 545px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    transition: all .3s ease-out;
    z-index: 2; }
  .service_btn a:hover {
    background-position: left center; }
    .service_btn a:hover:before {
      right: 530px; }

@media screen and (max-width: 1366px) {
  #breadcrumb {
    padding: calc(30 / 1366 * 100vw) 0 calc(20 / 1366 * 100vw); }
    #breadcrumb ul li {
      font-size: calc(20 / 1366 * 100vw); }

  .main_ttl {
    padding-bottom: calc(90 / 1366 * 100vw); }
    .main_ttl h2 span {
      font-size: calc(46 / 1366 * 100vw);
      padding: calc(10 / 1366 * 100vw) calc(20 / 1366 * 100vw); }
    .main_ttl p.jp {
      padding-top: calc(24 / 1366 * 100vw);
      font-size: calc(40 / 1366 * 100vw); }
    .main_ttl p.en {
      padding-top: calc(8 / 1366 * 100vw);
      font-size: calc(24 / 1366 * 100vw); }
    .main_ttl h1.jp {
      padding-top: calc(24 / 1366 * 100vw);
      font-size: calc(40 / 1366 * 100vw); }

  .comapny_menu {
    width: calc(830 / 1366 * 100vw);
    padding-bottom: calc(100 / 1366 * 100vw); }
    .comapny_menu li a {
      font-size: calc(18 / 1366 * 100vw); }

  .pagenavi a {
    font-size: calc(22 / 1366 * 100vw); }

  .backbtn a {
    font-size: calc(22 / 1366 * 100vw); }
    .backbtn a:hover span:before {
      right: calc(-10 / 1366 * 100vw); }
    .backbtn a span {
      padding-right: calc(40 / 1366 * 100vw); }
      .backbtn a span:before {
        width: calc(28 / 1366 * 100vw);
        height: calc(18 / 1366 * 100vw); }

  .service_btn a {
    padding: calc(20 / 1366 * 100vw) 0;
    font-size: calc(26 / 1366 * 100vw); }
    .service_btn a:before {
      width: calc(28 / 1366 * 100vw);
      height: calc(18 / 1366 * 100vw);
      right: calc(545 / 1366 * 100vw); }
    .service_btn a:hover:before {
      right: calc(530 / 1366 * 100vw); } }
@media screen and (max-width: 768px) {
  #eyecatch img {
    width: 100%;
    height: calc(630 / 768 * 100vw);
    object-fit: cover; }
  #eyecatch h2 {
    top: calc(50% + calc(70 / 768 * 100vw));
    font-size: calc(42 / 768 * 100vw); }
    #eyecatch h2 img {
      object-fit: contain;
      width: 100%;
      height: auto; }
  #eyecatch .none {
    padding-top: calc(160 / 768 * 100vw); }

  #breadcrumb {
    display: block; }

  #breadcrumb ul li {
    font-size: calc(22 / 768 * 100vw); }

  .main_ttl {
    padding-bottom: calc(90 / 768 * 100vw); }
    .main_ttl h2 span {
      font-size: calc(46 / 768 * 100vw);
      padding: calc(10 / 768 * 100vw) calc(20 / 768 * 100vw); }
    .main_ttl p.jp {
      padding-top: calc(30 / 768 * 100vw);
      font-size: calc(40 / 768 * 100vw);
      line-height: 1.5; }
    .main_ttl p.en {
      padding-top: calc(16 / 768 * 100vw);
      font-size: calc(24 / 768 * 100vw); }
    .main_ttl h1.jp {
      padding-top: calc(30 / 768 * 100vw);
      font-size: calc(40 / 768 * 100vw);
      line-height: 1.5; }

  .comapny_menu {
    width: 100%;
    padding-bottom: calc(110 / 768 * 100vw);
    padding-top: calc(110 / 768 * 100vw); }
    .comapny_menu ul {
      border: none; }
    .comapny_menu li {
      width: 100%;
      margin-bottom: 0.5em;
      border: 1px solid #e6e6e7; }
      .comapny_menu li a {
        font-size: calc(32 / 768 * 100vw); }

  .secondpage {
    padding: calc(90 / 768 * 100vw) calc(40 / 768 * 100vw); }

  .pagenavi a {
    font-size: calc(24 / 768 * 100vw); }

  .backbtn a {
    font-size: calc(28 / 768 * 100vw); }
  .backbtn.grade_btn a {
    background: url(../images/recruit_new/grade_btn_sp.png) right 0 no-repeat;
    background-size: cover; }
    .backbtn.grade_btn a:hover {
      background-position: left 0; }
      .backbtn.grade_btn a:hover span:before {
        right: calc(-10 / 750 * 100vw); }
    .backbtn.grade_btn a span {
      padding-right: calc(60 / 750 * 100vw); }
      .backbtn.grade_btn a span:before {
        width: calc(40 / 768 * 100vw);
        height: calc(32 / 768 * 100vw); }

  .service_btn a {
    padding: calc(30 / 768 * 100vw) 0;
    font-size: calc(32 / 768 * 100vw);
    background-image: url(../images/contact/bg_submit_sp.png);
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: right center; }
    .service_btn a:before {
      width: calc(34 / 768 * 100vw);
      height: calc(22 / 768 * 100vw);
      right: calc(180 / 768 * 100vw); }
    .service_btn a:hover {
      background-position: left center; }
      .service_btn a:hover:before {
        right: calc(170 / 768 * 100vw); } }
.notfound {
  padding: 200px 0; }

.notfound p {
  text-align: center;
  font-size: 15px; }

.notfound .error-message {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px; }

@media screen and (max-width: 768px) {
  .notfound .error-message {
    font-size: 22px; }

  .notfound p {
    font-size: 13px; } }
.ext:after {
  content: '';
  background-image: url(../images/common/external_link.svg);
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: right center;
  display: inline-block;
  width: 17px;
  height: 12px;
  margin-right: 3px; }

.recruit_end {
  padding: 250px 0;
  text-align: center;
  font-size: 46px;
  font-size: 4.6rem;
  color: #4f177f;
  letter-spacing: 0.23em;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  font-family: "ヒラギノ角ゴ ProN W6","HiraKakuProN-W6","ヒラギノ角ゴ Pro W6","HiraKakuPro-W6","メイリオ",Meiryo,"ＭＳ Ｐゴシック","MS Pgothic","Osaka",sans-serif,Helvetica, Helvetica Neue, Arial, Verdana; }
  .recruit_end img {
    width: 1134px; }

@media screen and (max-width: 1366px) {
  .recruit_end {
    padding: calc(250 / 1366 * 100vw) 0;
    text-align: center;
    font-size: calc(46 / 1366 * 100vw); }
    .recruit_end img {
      width: calc(1134 / 1366 * 100vw); } }
@media screen and (max-width: 768px) {
  .recruit_end {
    padding: calc(250 / 768 * 100vw) 0;
    text-align: center;
    font-size: calc(42 / 768 * 100vw);
    line-height: 1.76; }
    .recruit_end img {
      width: calc(542 / 768 * 100vw); } }
.select_wrap {
  position: relative; }
  .select_wrap .select_label {
    position: absolute;
    width: 100%;
    z-index: 1;
    text-align: center;
    width: 100%;
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1;
    padding: 1em 0;
    background: url(../images/common/arrow_down.png) right 16px center no-repeat #fff;
    background-size: 16px auto;
    pointer-events: none;
    border: 1px solid #898989; }
  .select_wrap select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0;
    border: 0;
    margin: 0;
    padding: 0;
    background: none transparent;
    vertical-align: middle;
    font-size: inherit;
    color: inherit;
    box-sizing: content-box;
    /*
    border:1px solid #898989;
    */
    text-align: center;
    width: 100%;
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1;
    padding: 1em 0;
    background: url(../images/common/arrow_down.png) right 16px center no-repeat;
    background-size: 16px auto; }

@media screen and (max-width: 1366px) {
  .select_wrap .select_label {
    font-size: calc(16 / 1366 * 100vw);
    background: url(../images/common/arrow_down.png) right calc(16 / 1366 * 100vw) center no-repeat #fff;
    background-size: calc(16 / 1366 * 100vw) auto; }
  .select_wrap select {
    font-size: calc(16 / 1366 * 100vw);
    background: url(../images/common/arrow_down.png) right calc(16 / 1366 * 100vw) center no-repeat;
    background-size: calc(16 / 1366 * 100vw) auto; } }
@media screen and (max-width: 768px) {
  .select_wrap .select_label {
    font-size: calc(28 / 768 * 100vw);
    background: url(../images/common/arrow_down.png) right calc(22 / 768 * 100vw) center no-repeat #fff;
    background-size: calc(22 / 768 * 100vw) auto; }
  .select_wrap select {
    font-size: calc(28 / 768 * 100vw);
    background: url(../images/common/arrow_down.png) right calc(22 / 768 * 100vw) center no-repeat;
    background-size: calc(22 / 768 * 100vw) auto; } }
.wp-pagenavi {
  clear: both;
  padding: 90px 0;
  width: 100%;
  margin: 0 auto;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  display: flex; }
  .wp-pagenavi a, .wp-pagenavi span {
    padding: 10px 20.5px;
    font-family: 'Ropa Sans', sans-serif;
    color: #4f177f;
    font-size: 32px;
    line-height: 1;
    font-size: 3.2rem;
    /*&:hover,*/ }
    .wp-pagenavi a.current, .wp-pagenavi span.current {
      color: #fff;
      background-color: #4f177f; }
    .wp-pagenavi a.prevpostslink, .wp-pagenavi span.prevpostslink {
      color: #fff;
      background-color: #4f177f;
      margin-right: 60px; }
    .wp-pagenavi a.nextpostslink, .wp-pagenavi span.nextpostslink {
      color: #fff;
      background-color: #4f177f;
      margin-left: 60px; }

@media screen and (max-width: 1366px) {
  .wp-pagenavi {
    padding: calc(90 / 1366 * 100vw) 0; }
    .wp-pagenavi a, .wp-pagenavi span {
      padding: calc(10 / 1366 * 100vw) calc(20.5 / 1366 * 100vw);
      font-size: calc(32 / 1366 * 100vw); }
      .wp-pagenavi a.prevpostslink, .wp-pagenavi span.prevpostslink {
        margin-right: calc(60 / 1366 * 100vw); }
      .wp-pagenavi a.nextpostslink, .wp-pagenavi span.nextpostslink {
        margin-left: calc(60 / 1366 * 100vw); } }
@media screen and (max-width: 768px) {
  .wp-pagenavi {
    padding: calc(150 / 768 * 100vw) 0 calc(70 / 768 * 100vw); }
    .wp-pagenavi a, .wp-pagenavi span {
      padding: calc(14 / 768 * 100vw) calc(24 / 768 * 100vw);
      font-size: calc(30 / 768 * 100vw);
      margin: 0 calc(6 / 768 * 100vw); }
      .wp-pagenavi a.prevpostslink, .wp-pagenavi span.prevpostslink {
        margin-right: calc(60 / 768 * 100vw); }
      .wp-pagenavi a.nextpostslink, .wp-pagenavi span.nextpostslink {
        margin-left: calc(60 / 768 * 100vw); } }

