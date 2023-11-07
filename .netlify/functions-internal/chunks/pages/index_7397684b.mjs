import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_49de3e9d.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './caloriecalculator_3c40cdb5.mjs';
import 'solid-js/web';
import 'solid-js';
/* empty css                                       *//* empty css                                       */
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Smashit! Calorie Calculator" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "CalorieCalc", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/RDA/Clients/SmashIt/smashitv3/smashit/src/components/CalorieCalc", "client:component-export": "default" })}` })}`;
}, "C:/RDA/Clients/SmashIt/smashitv3/smashit/src/pages/index.astro", void 0);

const $$file = "C:/RDA/Clients/SmashIt/smashitv3/smashit/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
