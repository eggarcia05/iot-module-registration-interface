import { c as create_ssr_component, f as add_attribute } from "../../chunks/index-55d7da86.js";
/* empty css                                                               */var lecturas_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".imagen.svelte-ce9av{margin-top:4%;display:flex;flex-direction:column;align-items:center}.foto.svelte-ce9av{height:500px}.espolsquare.svelte-ce9av{position:fixed;width:100%;left:0;background-color:#B2E3F8;padding:1rem;display:flex;flex-direction:column}.text.svelte-ce9av{position:fixed;margin-top:33%;font-family:Georgia, 'Times New Roman', Times, serif}.vinculo.svelte-ce9av{color:red}.estaciones.svelte-ce9av{margin-left:3%;list-style-type:circle}a.svelte-ce9av{color:purple;width:50px;height:50px}.footer.svelte-ce9av{background-color:#B2E3F8;position:fixed;left:0;bottom:0;width:100%;text-align:center}.socialMedias.svelte-ce9av{margin-left:48%;list-style-type:none}.instagram.svelte-ce9av{float:center;width:50px;height:50px}.twitter.svelte-ce9av{float:center;width:55px;height:55px}")();
const css = {
  code: ".imagen.svelte-ce9av{margin-top:4%;display:flex;flex-direction:column;align-items:center}.foto.svelte-ce9av{height:500px}.espolsquare.svelte-ce9av{position:fixed;width:100%;left:0;background-color:#B2E3F8;padding:1rem;display:flex;flex-direction:column}.text.svelte-ce9av{position:fixed;margin-top:33%;font-family:Georgia, 'Times New Roman', Times, serif}.vinculo.svelte-ce9av{color:red}.estaciones.svelte-ce9av{margin-left:3%;list-style-type:circle}a.svelte-ce9av{color:purple;width:50px;height:50px}.footer.svelte-ce9av{background-color:#B2E3F8;position:fixed;left:0;bottom:0;width:100%;text-align:center}.socialMedias.svelte-ce9av{margin-left:48%;list-style-type:none}.instagram.svelte-ce9av{float:center;width:50px;height:50px}.twitter.svelte-ce9av{float:center;width:55px;height:55px}",
  map: null
};
let src = "https://www.espol.edu.ec/sites/default/files/Foto%20para%20Rnaking%20by%20subject.jpg";
const Lecturas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"espolsquare svelte-ce9av"}"><div class="${"imagen svelte-ce9av"}"><img class="${"foto svelte-ce9av"}"${add_attribute("src", src, 0)} alt="${"ESPOL"}"></div></div>
<div class="${"text svelte-ce9av"}"><h1><b>Portal de datos abiertos p\xFAblicos. Informaci\xF3n acerca de variables meterolog\xF3cias medidas por las siguientes estaciones ubicadas en ESPOL:</b></h1>
        <ul><li class="${"estaciones svelte-ce9av"}">Estaci\xF3n CENAIM. Para ver los datos haga clic <i><a class="${"vinculo svelte-ce9av"}" href="${"/tabla"}" target="${"_blank"}">aqui</a></i></li>
            <li class="${"estaciones svelte-ce9av"}">Estaci\xF3n GEA</li></ul></div>

<footer class="${"footer svelte-ce9av"}"><p>\xA9 Escuela Superior Polit\xE9cnica del Litoral - 2022 \xA9</p>

    <p>Siguenos en nuestras redes</p>
    
    <li class="${"socialMedias svelte-ce9av"}"><a href="${"https://www.instagram.com/espol1/"}" target="${"_blank"}" class="${"svelte-ce9av"}"><img class="${"instagram svelte-ce9av"}" alt="${"ig"}" src="${"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png"}"></a>
        <a href="${"https://www.twitter.com/espol/"}" target="${"_blank"}" class="${"svelte-ce9av"}"><img class="${"twitter svelte-ce9av"}" alt="${"tw"}" src="${"https://help.twitter.com/content/dam/help-twitter/brand/logo.png"}"></a></li>
</footer>`;
});
export { Lecturas as default };
