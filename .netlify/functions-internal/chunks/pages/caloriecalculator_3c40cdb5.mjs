import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderHead, i as renderComponent, j as renderSlot } from '../astro_49de3e9d.mjs';
import 'html-escaper';
import 'clsx';
import { ssr, ssrHydrationKey, ssrAttribute, escape } from 'solid-js/web';
import { createSignal } from 'solid-js';
/* empty css                                       *//* empty css                                       */
const _tmpl$ = ["<nav", '><div class="logo__container"><svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.614136 475C13.2321 218.754 218.754 13.2321 475 0.614136V100.769C274 113.164 113.164 274 100.769 475H0.614136Z" fill="#20D0EE"></path><path d="M0.614136 525C13.2321 781.246 218.754 986.768 475 999.386V899.231C274 886.836 113.164 726 100.769 525H0.614136Z" fill="#20D0EE"></path><path d="M899.231 525C886.836 726 726 886.836 525 899.231V999.386C781.246 986.768 986.768 781.246 999.386 525H899.231Z" fill="#20D0EE"></path><path d="M999.386 475C986.768 218.754 781.246 13.2321 525 0.614136V100.769C726 113.164 886.836 274 899.231 475H999.386Z" fill="#20D0EE"></path><path fillRule="evenodd" clipRule="evenodd" d="M500 850C693.3 850 850 693.3 850 500C850 306.7 693.3 150 500 150C306.7 150 150 306.7 150 500C150 693.3 306.7 850 500 850ZM500.481 476.687L437.669 411.889L222.61 617.665L205.327 599.601L427.205 387.301C433.361 381.41 443.119 381.593 449.05 387.712L518.487 459.345L570.234 409.506C576.265 403.697 585.82 403.728 591.813 409.578L786.676 599.777L769.214 617.668L580.942 433.902L526.868 485.982L517.909 494.667L517.881 494.638L490.045 521.448L516.529 547.489L529.45 534.869L529.328 534.74L538.329 526.196L570.182 495.085C576.179 489.227 585.747 489.199 591.778 495.022L700.175 599.681L682.81 617.666L581.05 519.415L564.55 535.532L626.172 600.452L608.04 617.663L546.663 553.003L527.338 571.879C521.301 577.775 511.656 577.759 505.64 571.843L434.34 501.734L312.026 617.663L294.829 599.518L423.799 477.28C429.858 471.538 439.377 471.625 445.329 477.478L472.213 503.913L500.481 476.687ZM423.771 548.36C429.767 542.608 439.233 542.608 445.229 548.36L498.674 599.623L481.368 617.665L434.5 572.71L387.632 617.665L370.326 599.623L423.771 548.36Z" fill="#20D0EE"></path></svg></div><button class="menu-toggle" type="button"', ' role="menu toggle"><span class="sr-only">menu toggle</span><!--$-->', "<!--/--></button><ul", '><li><a href="https://www.smashit.co.za/" target="https://www.smashit.co.za/" rel="noopener noreferrer">Home</a></li><li><a href="https://www.smashit.co.za/services-2/" target="https://www.smashit.co.za/services-2/" rel="noopener noreferrer">Services</a></li><li><a href="https://www.smashit.co.za/about/" target="https://www.smashit.co.za/about/" rel="noopener noreferrer">Meet the Team</a></li><li><a href="https://www.smashit.co.za/blog-2/" target="https://www.smashit.co.za/blog-2/" rel="noopener noreferrer">Blog</a></li><li><a href="https://www.smashit.co.za/faqs/" target="https://www.smashit.co.za/faqs/" rel="noopener noreferrer">FAQs</a></li><li><a href="#contact" class="current-page">Calorie Calculator</a></li><li><a id="contact" href="https://www.smashit.co.za/contact-2/" target="https://www.smashit.co.za/contact-2/">Contact</a></li></ul></nav>'], _tmpl$2 = ["<svg", ' height="512px" id="close-icon" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"></path></svg>'], _tmpl$3 = ["<svg", ' height="32px" id="open-icon" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"></path></svg>'];
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
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-twtkr25e><div class="skew-divider" data-astro-cid-twtkr25e></div><div class="text_wrapper" data-astro-cid-twtkr25e><h2 data-astro-cid-twtkr25e>Macronutrients</h2><p data-astro-cid-twtkr25e>
Macronutrients are the nutrients that your body needs in large amounts to
			function properly. They are carbohydrates, protein, and fat. Each
			macronutrient has a different role in your body:
</p></div><div class="card_wrapper" data-astro-cid-twtkr25e><div class="card card_carbs" data-astro-cid-twtkr25e><div class="card_text" data-astro-cid-twtkr25e><h3 data-astro-cid-twtkr25e>Carbohydrates</h3><p data-astro-cid-twtkr25e>
Carbohydrates are your body's main source of energy. They are found in
					foods such as bread, pasta, rice, fruits, and vegetables.
</p></div></div><div class="card card_protein" data-astro-cid-twtkr25e><div class="card_text" data-astro-cid-twtkr25e><h3 data-astro-cid-twtkr25e>Protein</h3><p data-astro-cid-twtkr25e>
Protein is essential for building and repairing muscle tissue. It is
					also found in foods such as meat, poultry, fish, eggs, dairy products,
					and legumes.
</p></div></div><div class="card card_fat" data-astro-cid-twtkr25e><div class="card_text" data-astro-cid-twtkr25e><h3 data-astro-cid-twtkr25e>Fat</h3><p data-astro-cid-twtkr25e>
Fat is a source of energy and helps your body absorb certain vitamins
					and minerals. It is also found in foods such as nuts, seeds, avocados,
					and olive oil.
</p></div></div></div></section>`;
}, "C:/RDA/Clients/SmashIt/smashitv3/smashit/src/components/CalorieInfo.astro", void 0);

const $$Astro = createAstro();
const $$Caloriecalculator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Caloriecalculator;
  const metaName = "Calorie Calculator & Personalized Meal Plans | Smashit Personal Training";
  const metaContent = "Calculate your daily calorie needs and macronutrient goals with our easy-to-use calorie calculator, and get a personalized meal plan from Smashit personal trainers. Reach your fitness goals in a healthy and sustainable way with Smashit!";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Smashit! Calorie Calculator", "metaName": metaName, "metaContent": metaContent, "data-astro-cid-baeu2sg3": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header data-astro-cid-baeu2sg3><div class="skew-divider" data-astro-cid-baeu2sg3></div><div class="title-wrapper" data-astro-cid-baeu2sg3><h1 data-astro-cid-baeu2sg3>
Calculate your <span class="title_calorie" data-astro-cid-baeu2sg3>daily calorie needs</span> and macronutrient goals with our
				easy-to-use calorie calculator, and get a personalized meal plan from
				Smashit personal trainers.
</h1><p class="sub-title" data-astro-cid-baeu2sg3>
Whether you're trying to lose, maintain, or gain weight, our calorie
				calculator and Smashit personal trainers can help you reach your goals
				in a healthy and sustainable way.
</p></div><div class="cta-wrapper" data-astro-cid-baeu2sg3><button class="cta" data-astro-cid-baeu2sg3> Learn more about SmashIt personal coaching</button></div></header>${renderComponent($$result2, "CalorieCalc", null, { "client:only": true, "client:component-hydration": "only", "data-astro-cid-baeu2sg3": true, "client:component-path": "C:/RDA/Clients/SmashIt/smashitv3/smashit/src/components/CalorieCalc", "client:component-export": "default" })}${renderComponent($$result2, "CalorieInfo", $$CalorieInfo, { "data-astro-cid-baeu2sg3": true })}` })}`;
}, "C:/RDA/Clients/SmashIt/smashitv3/smashit/src/pages/caloriecalculator.astro", void 0);

const $$file = "C:/RDA/Clients/SmashIt/smashitv3/smashit/src/pages/caloriecalculator.astro";
const $$url = "/caloriecalculator";

const caloriecalculator = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Caloriecalculator,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, caloriecalculator as c };
