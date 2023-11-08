import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_49de3e9d.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$CalorieInfo, a as $$Layout } from './caloriecalculator_4fce0990.mjs';
/* empty css                           */import 'solid-js/web';
import 'solid-js';
/* empty css                                       *//* empty css                                       */
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const metaName = "Calorie Calculator & Personalized Meal Plans | Smashit Personal Training";
  const metaContent = "Calculate your daily calorie needs and macronutrient goals with our easy-to-use calorie calculator, and get a personalized meal plan from Smashit personal trainers. Reach your fitness goals in a healthy and sustainable way with Smashit!";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Smashit! Calorie Calculator", "metaName": metaName, "metaContent": metaContent, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header data-astro-cid-j7pv25f6><div class="skew-divider" data-astro-cid-j7pv25f6></div><div class="title-wrapper" data-astro-cid-j7pv25f6><h1 data-astro-cid-j7pv25f6>
Calculate your <span class="title_calorie" data-astro-cid-j7pv25f6>daily calorie needs</span>
and macronutrient goals with our easy-to-use calorie calculator, and get
				a personalized meal plan from Smashit personal trainers.
</h1><p class="sub-title" data-astro-cid-j7pv25f6>
Whether you're trying to lose, maintain, or gain weight, our calorie
				calculator and Smashit personal trainers can help you reach your goals
				in a healthy and sustainable way.
</p></div><div class="cta-wrapper" data-astro-cid-j7pv25f6><a class="cta" href="https://www.smashit.co.za/services" target="_blank" data-astro-cid-j7pv25f6> Learn more about Smash-It personal coaching</a></div></header>${renderComponent($$result2, "CalorieCalc", null, { "client:only": true, "client:component-hydration": "only", "data-astro-cid-j7pv25f6": true, "client:component-path": "C:/RDA/Clients/SmashIt/smashitv3/smashit/src/components/CalorieCalc", "client:component-export": "default" })}${renderComponent($$result2, "CalorieInfo", $$CalorieInfo, { "data-astro-cid-j7pv25f6": true })}` })}`;
}, "C:/RDA/Clients/SmashIt/smashitv3/smashit/src/pages/index.astro", void 0);

const $$file = "C:/RDA/Clients/SmashIt/smashitv3/smashit/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
