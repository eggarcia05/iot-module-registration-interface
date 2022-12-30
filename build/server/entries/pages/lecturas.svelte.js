import { c as create_ssr_component, f as add_attribute } from "../../chunks/index-55d7da86.js";
/* empty css                                                               */var lecturas_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "imagen.svelte-852ps4{display:flex;flex-direction:column;align-items:center}img.svelte-852ps4{height:500px}")();
const css = {
  code: "imagen.svelte-852ps4{display:flex;flex-direction:column;align-items:center}img.svelte-852ps4{height:500px}",
  map: null
};
let src = "https://www.espol.edu.ec/sites/default/files/Foto%20para%20Rnaking%20by%20subject.jpg";
const Lecturas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"mt-24"}"><div class="${"bloque1"}"><imagen class="${"svelte-852ps4"}"><img${add_attribute("src", src, 0)} alt="${"ESPOL"}" class="${"svelte-852ps4"}">

        </imagen><br><br>
        <h1><b>Portal de datos abiertos p\xFAblicos. Informaci\xF3n de estaciones meterol\xF3gicas.
            Si de desea ver los datos haga clic <i><a href="${"/tabla"}" target="${"_blank"}">aqui</a></i></b></h1></div>
 
</div>`;
});
export { Lecturas as default };
