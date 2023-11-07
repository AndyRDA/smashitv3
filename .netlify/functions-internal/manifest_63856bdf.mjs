import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_49de3e9d.mjs';
import 'mime';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/caloriecalculator.19b2488f.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"section[data-astro-cid-twtkr25e]{display:grid;gap:2rem;padding:5rem 1rem 10rem;position:relative;color:hsl(var(--bg-color))}.skew-divider[data-astro-cid-twtkr25e]{position:absolute;inset:0;z-index:0;transform:skewY(-5deg);transform-origin:top left;background:hsl(var(--bg-contrast))}.text_wrapper[data-astro-cid-twtkr25e]{max-width:60ch}.text_wrapper[data-astro-cid-twtkr25e] h2[data-astro-cid-twtkr25e]{font-size:1.4em;padding-bottom:1em}h2[data-astro-cid-twtkr25e],h3[data-astro-cid-twtkr25e]{border-bottom:2px solid hsl(var(--accent-color))}p[data-astro-cid-twtkr25e]{padding-block:2em}.text_wrapper[data-astro-cid-twtkr25e],.card_wrapper[data-astro-cid-twtkr25e]{z-index:5;color:inherit}.card_wrapper[data-astro-cid-twtkr25e]{display:flex;flex-wrap:wrap;justify-content:space-between;gap:2em}.card[data-astro-cid-twtkr25e]{--innerRadius: 30px;--padding: 2em;--outerRadius: calc(var(--innerRadius) + var(--padding));padding-block:var(--padding);padding-inline:var(--padding);border-radius:var(--outerRadius) 0;position:relative;background-position:right;background-size:cover;background-repeat:no-repeat;overflow:hidden;background-blend-mode:multiply;box-shadow:5px 5px 10px 0 hsl(var(--accent-color) /.3);flex-grow:1}.card_text[data-astro-cid-twtkr25e]{background-color:hsl(var(--bg-contrast) / .9);padding:1em var(--padding);border-radius:var(--innerRadius) 0;width:fit-content}.card[data-astro-cid-twtkr25e] h3[data-astro-cid-twtkr25e]{font-size:1.3em;padding-bottom:1em}.card[data-astro-cid-twtkr25e] p[data-astro-cid-twtkr25e]{max-width:20ch}.card_carbs[data-astro-cid-twtkr25e]{background-image:url(/_astro/rice.4a976d70.jpg)}.card_protein[data-astro-cid-twtkr25e]{background-image:url(/_astro/bean.ec0973e6.jpg)}.card_fat[data-astro-cid-twtkr25e]{background-image:url(/_astro/avo.fab1c19c.jpg)}header[data-astro-cid-baeu2sg3]{padding:3rem 1rem 6rem;background-color:hsl(var(--bg-color));color:hsl(var(--bg-color));margin-block:6rem 0;position:relative;overflow:hidden;display:flex;flex-wrap:wrap}.skew-divider[data-astro-cid-baeu2sg3]{position:absolute;inset:0;z-index:0;transform:skewY(-5deg);transform-origin:top left;background:hsl(var(--bg-contrast) /.8);background-image:url(\"/_astro/Smashit Vector Logo Blur White.de8ef8bd.png\");background-repeat:no-repeat;background-size:cover;background-position:center;background-blend-mode:lighten}.title-wrapper[data-astro-cid-baeu2sg3]{z-index:5}h1[data-astro-cid-baeu2sg3]{font-size:clamp(2rem,1.2rem + 1vw,3rem);text-align:start;max-width:50ch;font-weight:700;padding-block:1em;line-height:1.3}.title_calorie[data-astro-cid-baeu2sg3]{position:relative}@media (min-width: 560px){.title_calorie[data-astro-cid-baeu2sg3]:before{content:url(/_astro/brushstroke.82a11477.svg);position:absolute;inset:0;z-index:-1;transform:translateY(-.3em) scale(1.1,.58) rotate(-4deg)}}.sub-title[data-astro-cid-baeu2sg3]{opacity:.7;font-size:clamp(1rem,1rem + .5vw,1.75rem);max-width:50ch;line-height:1.4}.cta-wrapper[data-astro-cid-baeu2sg3]{display:grid;justify-content:right;align-items:center;padding:4vw 2vw;z-index:5}.cta[data-astro-cid-baeu2sg3]{padding:1rem 2rem;max-width:30ch;border:3px solid hsl(var(--bg-color) / .3);border-radius:400px;background-color:hsl(var(--accent-color));font-size:clamp(1rem,1rem + .5vw,1.75rem);color:hsl(var(--bg-contrast));box-shadow:3px 3px 3px #0000004d;transition:all .2s ease-in-out}.cta[data-astro-cid-baeu2sg3]:hover,.cta[data-astro-cid-baeu2sg3]:focus-visible{box-shadow:5px 5px 3px #00000080;transform:scale(1.01)}\n"},{"type":"external","src":"/_astro/caloriecalculator.19b2488f.css"}],"routeData":{"route":"/caloriecalculator","type":"page","pattern":"^\\/caloriecalculator\\/?$","segments":[[{"content":"caloriecalculator","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/caloriecalculator.astro","pathname":"/caloriecalculator","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["C:/RDA/Clients/SmashIt/smashitv3/smashit/src/pages/caloriecalculator.astro",{"propagation":"none","containsHead":true}],["C:/RDA/Clients/SmashIt/smashitv3/smashit/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_5efb390b.mjs","/src/pages/index.astro":"chunks/pages/index_7397684b.mjs","\u0000@astrojs-manifest":"manifest_63856bdf.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_579fee35.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_6f895067.mjs","\u0000@astro-page:src/pages/caloriecalculator@_@astro":"chunks/caloriecalculator_c8c626db.mjs","@astrojs/solid-js/client.js":"_astro/client.0c136be1.js","C:/RDA/Clients/SmashIt/smashitv3/smashit/src/components/Navbar":"_astro/Navbar.4762f2b5.js","C:/RDA/Clients/SmashIt/smashitv3/smashit/src/components/CalorieCalc":"_astro/CalorieCalc.ad46b103.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/brushstroke.82a11477.svg","/_astro/Smashit Vector Logo Blur White.de8ef8bd.png","/_astro/bean.ec0973e6.jpg","/_astro/rice.4a976d70.jpg","/_astro/avo.fab1c19c.jpg","/_astro/caloriecalculator.19b2488f.css","/favicon.svg","/_astro/CalorieCalc.ad46b103.js","/_astro/caloriecalculator.4c00ff42.css","/_astro/client.0c136be1.js","/_astro/Navbar.4762f2b5.js","/_astro/web.da243327.js"]});

export { manifest };
