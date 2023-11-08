import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderHead, i as renderComponent, j as renderSlot } from '../astro_49de3e9d.mjs';
import 'html-escaper';
import 'clsx';
import { ssr, ssrHydrationKey, ssrAttribute, escape } from 'solid-js/web';
import { createSignal } from 'solid-js';
/* empty css                                       *//* empty css                                       */
const _tmpl$ = ["<nav", '><div class="logo__container"><svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.614136 475C13.2321 218.754 218.754 13.2321 475 0.614136V100.769C274 113.164 113.164 274 100.769 475H0.614136Z" fill="#20D0EE"></path><path d="M0.614136 525C13.2321 781.246 218.754 986.768 475 999.386V899.231C274 886.836 113.164 726 100.769 525H0.614136Z" fill="#20D0EE"></path><path d="M899.231 525C886.836 726 726 886.836 525 899.231V999.386C781.246 986.768 986.768 781.246 999.386 525H899.231Z" fill="#20D0EE"></path><path d="M999.386 475C986.768 218.754 781.246 13.2321 525 0.614136V100.769C726 113.164 886.836 274 899.231 475H999.386Z" fill="#20D0EE"></path><path fillRule="evenodd" clipRule="evenodd" d="M500 850C693.3 850 850 693.3 850 500C850 306.7 693.3 150 500 150C306.7 150 150 306.7 150 500C150 693.3 306.7 850 500 850ZM500.481 476.687L437.669 411.889L222.61 617.665L205.327 599.601L427.205 387.301C433.361 381.41 443.119 381.593 449.05 387.712L518.487 459.345L570.234 409.506C576.265 403.697 585.82 403.728 591.813 409.578L786.676 599.777L769.214 617.668L580.942 433.902L526.868 485.982L517.909 494.667L517.881 494.638L490.045 521.448L516.529 547.489L529.45 534.869L529.328 534.74L538.329 526.196L570.182 495.085C576.179 489.227 585.747 489.199 591.778 495.022L700.175 599.681L682.81 617.666L581.05 519.415L564.55 535.532L626.172 600.452L608.04 617.663L546.663 553.003L527.338 571.879C521.301 577.775 511.656 577.759 505.64 571.843L434.34 501.734L312.026 617.663L294.829 599.518L423.799 477.28C429.858 471.538 439.377 471.625 445.329 477.478L472.213 503.913L500.481 476.687ZM423.771 548.36C429.767 542.608 439.233 542.608 445.229 548.36L498.674 599.623L481.368 617.665L434.5 572.71L387.632 617.665L370.326 599.623L423.771 548.36Z" fill="#20D0EE"></path></svg></div><button class="menu-toggle" type="button"', ' role="menu toggle"><span class="sr-only">menu toggle</span><!--$-->', '<!--/--></button><ul class="nav-list"', '><li><a href="https://www.smashit.co.za/" target="https://www.smashit.co.za/" rel="noopener noreferrer">Home</a></li><li><a href="https://www.smashit.co.za/services-2/" target="https://www.smashit.co.za/services-2/" rel="noopener noreferrer">Services</a></li><li><a href="https://www.smashit.co.za/about/" target="https://www.smashit.co.za/about/" rel="noopener noreferrer">Meet the Team</a></li><li><a href="https://www.smashit.co.za/blog-2/" target="https://www.smashit.co.za/blog-2/" rel="noopener noreferrer">Blog</a></li><li><a href="https://www.smashit.co.za/faqs/" target="https://www.smashit.co.za/faqs/" rel="noopener noreferrer">FAQs</a></li><li><a href="#contact" class="current-page">Calorie Calculator</a></li><li><a id="contact" href="https://www.smashit.co.za/contact-2/" target="https://www.smashit.co.za/contact-2/">Contact</a></li></ul></nav>'], _tmpl$2 = ["<svg", ' height="512px" id="close-icon" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"></path></svg>'], _tmpl$3 = ["<svg", ' height="32px" id="open-icon" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"></path></svg>'];
function Navbar() {
  const [isOpen, setIsOpen] = createSignal(false);
  return ssr(_tmpl$, ssrHydrationKey(), ssrAttribute("aria-expanded", escape(isOpen(), true), false), isOpen() ? _tmpl$2[0] + ssrHydrationKey() + _tmpl$2[1] : _tmpl$3[0] + ssrHydrationKey() + _tmpl$3[1], ssrAttribute("aria-expanded", escape(isOpen(), true), false));
}

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer"><section id="footer_left" class="footer_col footer_left"><h3 class="footer_col_title">Availability</h3><div class="text_wrapper"><p>Mon, Tues, Thurs, 06:30 - 18:00</p><p>Wed - 06:30 - 16:30 - Date Night</p><p>Friday 06:30 to 14:00</p><p>Saturday - 10:00 to 12:00</p><p>Sunday - Digital Detox</p></div><span class="seperator extralight-border"></span></section><section id="footer_right" class="footer_col footer_right"><h3 class="footer_col_title">Where to next?</h3><div class="text_wrapper"><p><a href="https://www.smashit.co.za/services">Services</a></p><p><a href="https://www.smashit.co.za/about">Meet the team</a></p><p><a href="https://www.smashit.co.za/blog">Blog</a></p><p><a href="https://www.smashit.co.za/contact">Contact</a></p><p><a href="https://www.smashit.co.za/faq">FAQ</a></p></div></section></footer>`;
}, "C:/RDA/Clients/SmashIt/smashitv3/smashit/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const { metaName } = Astro2.props;
  const { metaContent } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title><meta${addAttribute(metaName, "name")}${addAttribute(metaContent, "content")}>${renderHead()}</head><body>${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/RDA/Clients/SmashIt/smashitv3/smashit/src/components/Navbar", "client:component-export": "default" })}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "C:/RDA/Clients/SmashIt/smashitv3/smashit/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$CalorieInfo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CalorieInfo;
  return renderTemplate`${maybeRenderHead()}<section class="macros" data-astro-cid-twtkr25e><div class="skew-divider" data-astro-cid-twtkr25e></div><div class="text_wrapper" data-astro-cid-twtkr25e><h2 data-astro-cid-twtkr25e>What are macronutrients?</h2><p data-astro-cid-twtkr25e>
Macronutrients are the nutrients that your body needs in large amounts to
			function properly. They are carbohydrates, protein, and fat. Each
			macronutrient has a different role in your body:
</p></div><div class="card_wrapper" data-astro-cid-twtkr25e><div class="card card_carbs card_macro" data-astro-cid-twtkr25e><div class="card_text" data-astro-cid-twtkr25e><h3 data-astro-cid-twtkr25e>Carbohydrates</h3><p data-astro-cid-twtkr25e>
Carbohydrates are your body's main source of energy. They are found in
					foods such as bread, pasta, rice, fruits, and vegetables.
</p></div></div><div class="card card_protein card_macro" data-astro-cid-twtkr25e><div class="card_text" data-astro-cid-twtkr25e><h3 data-astro-cid-twtkr25e>Protein</h3><p data-astro-cid-twtkr25e>
Protein is essential for building and repairing muscle tissue. It is
					also found in foods such as meat, poultry, fish, eggs, dairy products,
					and legumes.
</p></div></div><div class="card card_fat card_macro" data-astro-cid-twtkr25e><div class="card_text" data-astro-cid-twtkr25e><h3 data-astro-cid-twtkr25e>Fat</h3><p data-astro-cid-twtkr25e>
Fat is a source of energy and helps your body absorb certain vitamins
					and minerals. It is also found in foods such as nuts, seeds, avocados,
					and olive oil.
</p></div></div></div></section><section class="reasons" data-astro-cid-twtkr25e><div class="skew-topper" data-astro-cid-twtkr25e></div><div class="text_wrapper" data-astro-cid-twtkr25e><h2 data-astro-cid-twtkr25e>Why choose Smash-It personal training and lifestyle coaching?</h2></div><div class="card_wrapper" data-astro-cid-twtkr25e><div class="card card_reason" data-astro-cid-twtkr25e><svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="card_icon" data-astro-cid-twtkr25e><path d="M19.095 0.0699945C19.851 0.0699945 20.49 0.330994 21.012 0.852995C21.534 1.37499 21.795 2.01399 21.795 2.76999V21.67C21.795 22.39 21.534 23.02 21.012 23.56C20.49 24.1 19.851 24.37 19.095 24.37H2.89501C2.17501 24.37 1.54501 24.1 1.00501 23.56C0.465007 23.02 0.195007 22.39 0.195007 21.67V2.76999C0.195007 2.01399 0.465007 1.37499 1.00501 0.852995C1.54501 0.330994 2.17501 0.0699945 2.89501 0.0699945H19.095ZM19.095 21.67V2.76999H2.89501V21.67H19.095ZM12.345 14.92V16.27H5.59501V14.92H12.345ZM16.395 9.51999V10.87H10.995V9.51999H16.395ZM10.995 8.16999V5.46999H16.395V8.16999H10.995ZM9.64501 5.46999V10.87H5.59501V5.46999H9.64501ZM8.29501 12.22V13.57H5.59501V12.22H8.29501ZM9.64501 13.57V12.22H16.395V13.57H9.64501ZM16.395 17.62V18.97H5.59501V17.62H16.395ZM13.695 16.27V14.92H16.395V16.27H13.695Z" fill="black" data-astro-cid-twtkr25e></path></svg><div class="card_text" data-astro-cid-twtkr25e><p data-astro-cid-twtkr25e>
Our personal trainers are certified and experienced, and they can help
					you create a personalized workout plan and meal plan to reach your
					fitness goals.
</p></div></div><div class="card card_reason" data-astro-cid-twtkr25e><div class="card_text" data-astro-cid-twtkr25e><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="card_icon" data-astro-cid-twtkr25e><path d="M12.505 0.859955C15.709 0.859955 18.445 1.99396 20.713 4.26196C22.981 6.52996 24.115 9.26596 24.115 12.47C24.115 15.674 22.981 18.41 20.713 20.678C18.445 22.946 15.709 24.08 12.505 24.08C9.30099 24.08 6.56499 22.946 4.29699 20.678C2.02899 18.41 0.894989 15.674 0.894989 12.47C0.894989 9.26596 2.02899 6.52996 4.29699 4.26196C6.56499 1.99396 9.30099 0.859955 12.505 0.859955ZM13.477 21.866C15.709 21.614 17.617 20.696 19.201 19.112C20.785 17.528 21.685 15.62 21.901 13.388H16.717V11.498H21.901C21.685 9.26596 20.785 7.35796 19.201 5.77396C17.617 4.18996 15.709 3.27196 13.477 3.01996V8.25796H11.587V3.01996C9.35499 3.27196 7.43799 4.18996 5.83599 5.77396C4.23399 7.35796 3.32499 9.26596 3.10899 11.498H8.34699V13.388H3.10899C3.32499 15.62 4.23399 17.528 5.83599 19.112C7.43799 20.696 9.35499 21.614 11.587 21.866V16.628H13.477V21.866Z" fill="black" data-astro-cid-twtkr25e></path></svg><p data-astro-cid-twtkr25e>
We offer a variety of services to help you define and achieve,
					including personal training, group fitness classes, and lifestyle
					coaching.
</p></div></div><div class="card card_reason" data-astro-cid-twtkr25e><svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="card_icon" data-astro-cid-twtkr25e><path d="M27.53 24.1H21.482V20.05C21.482 19.078 21.212 18.349 20.672 17.863C20.132 17.377 18.746 16.576 16.514 15.46C17.234 14.92 17.594 14.164 17.594 13.192C17.594 12.904 17.477 12.607 17.243 12.301C17.009 11.995 16.838 11.536 16.73 10.924C16.694 10.78 16.568 10.636 16.352 10.492C16.136 10.348 16.01 9.96998 15.974 9.35798C15.974 8.92598 16.082 8.65598 16.298 8.54798C16.19 7.93598 16.118 7.39598 16.082 6.92798C16.01 6.24398 16.217 5.54198 16.703 4.82198C17.189 4.10198 18.044 3.74198 19.268 3.74198C20.492 3.74198 21.356 4.10198 21.86 4.82198C22.364 5.54198 22.58 6.24398 22.508 6.92798L22.292 8.54798C22.508 8.65598 22.616 8.92598 22.616 9.35798C22.58 9.96998 22.454 10.348 22.238 10.492C22.022 10.636 21.896 10.78 21.86 10.924C21.752 11.536 21.581 11.995 21.347 12.301C21.113 12.607 20.996 12.904 20.996 13.192C20.996 13.948 21.185 14.542 21.563 14.974C21.941 15.406 22.634 15.838 23.642 16.27C25.658 17.098 26.828 17.818 27.152 18.43C27.26 18.574 27.341 19.123 27.395 20.077C27.449 21.031 27.494 21.94 27.53 22.804V24.1ZM14.354 17.026C17.63 18.43 19.268 19.546 19.268 20.374V24.1H0.530029V19.132C0.530029 18.34 1.28603 17.638 2.79803 17.026C4.16603 16.45 5.10203 15.874 5.60603 15.298C6.11003 14.722 6.36203 13.93 6.36203 12.922C6.36203 12.562 6.19103 12.166 5.84903 11.734C5.50703 11.302 5.28203 10.69 5.17403 9.89798C5.13803 9.71798 4.97603 9.51998 4.68803 9.30398C4.40003 9.08798 4.22003 8.58398 4.14803 7.79198C4.14803 7.53998 4.17503 7.33298 4.22903 7.17098C4.28303 7.00898 4.34603 6.89198 4.41803 6.81998L4.52603 6.76598C4.41803 5.93798 4.32803 5.19998 4.25603 4.55198C4.18403 3.65198 4.48103 2.72497 5.14703 1.77098C5.81303 0.816975 6.95603 0.339975 8.57603 0.339975C10.196 0.339975 11.339 0.816975 12.005 1.77098C12.671 2.72497 12.968 3.65198 12.896 4.55198L12.626 6.76598C12.878 6.90998 13.004 7.25198 13.004 7.79198C12.932 8.58398 12.752 9.08798 12.464 9.30398C12.176 9.51998 12.014 9.71798 11.978 9.89798C11.87 10.69 11.645 11.302 11.303 11.734C10.961 12.166 10.79 12.562 10.79 12.922C10.79 13.93 11.042 14.722 11.546 15.298C12.05 15.874 12.986 16.45 14.354 17.026Z" fill="black" data-astro-cid-twtkr25e></path></svg><div class="card_text" data-astro-cid-twtkr25e><p data-astro-cid-twtkr25e>
We support you every step of the way, and we are committed to helping
					you achieve your goals.
</p></div></div></div><div class="cta-wrapper" data-astro-cid-twtkr25e><a class="cta" href="https://www.smashit.co.za/contact" target="_blank" data-astro-cid-twtkr25e> Enquire about Smash-It personal coaching</a></div></section>`;
}, "C:/RDA/Clients/SmashIt/smashitv3/smashit/src/components/CalorieInfo.astro", void 0);

const $$Astro = createAstro();
const $$Caloriecalculator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Caloriecalculator;
  const metaName = "Calorie Calculator & Personalized Meal Plans | Smashit Personal Training";
  const metaContent = "Calculate your daily calorie needs and macronutrient goals with our easy-to-use calorie calculator, and get a personalized meal plan from Smashit personal trainers. Reach your fitness goals in a healthy and sustainable way with Smashit!";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Smashit! Calorie Calculator", "metaName": metaName, "metaContent": metaContent, "data-astro-cid-baeu2sg3": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header data-astro-cid-baeu2sg3><div class="skew-divider" data-astro-cid-baeu2sg3></div><div class="title-wrapper" data-astro-cid-baeu2sg3><h1 data-astro-cid-baeu2sg3>
Calculate your <span class="title_calorie" data-astro-cid-baeu2sg3>daily calorie needs</span>
and macronutrient goals with our easy-to-use calorie calculator, and get
				a personalized meal plan from Smashit personal trainers.
</h1><p class="sub-title" data-astro-cid-baeu2sg3>
Whether you're trying to lose, maintain, or gain weight, our calorie
				calculator and Smashit personal trainers can help you reach your goals
				in a healthy and sustainable way.
</p></div><div class="cta-wrapper" data-astro-cid-baeu2sg3><a class="cta" href="https://www.smashit.co.za/services" target="_blank" data-astro-cid-baeu2sg3> Learn more about Smash-It personal coaching</a></div></header>${renderComponent($$result2, "CalorieCalc", null, { "client:only": true, "client:component-hydration": "only", "data-astro-cid-baeu2sg3": true, "client:component-path": "C:/RDA/Clients/SmashIt/smashitv3/smashit/src/components/CalorieCalc", "client:component-export": "default" })}${renderComponent($$result2, "CalorieInfo", $$CalorieInfo, { "data-astro-cid-baeu2sg3": true })}` })}`;
}, "C:/RDA/Clients/SmashIt/smashitv3/smashit/src/pages/caloriecalculator.astro", void 0);

const $$file = "C:/RDA/Clients/SmashIt/smashitv3/smashit/src/pages/caloriecalculator.astro";
const $$url = "/caloriecalculator";

const caloriecalculator = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Caloriecalculator,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CalorieInfo as $, $$Layout as a, caloriecalculator as c };
