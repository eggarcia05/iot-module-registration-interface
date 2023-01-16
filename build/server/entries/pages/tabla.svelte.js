import { c as create_ssr_component, d as createEventDispatcher, e as escape, q as null_to_empty, g as each, f as add_attribute, v as validate_component, m as missing_component, k as globals, o as onDestroy } from "../../chunks/index-55d7da86.js";
/* empty css                                                               */const { Object: Object_1 } = globals;
const css$1 = {
  code: "table.svelte-1i6qrct.svelte-1i6qrct{width:100%}.isSortable.svelte-1i6qrct.svelte-1i6qrct{cursor:pointer}.isClickable.svelte-1i6qrct.svelte-1i6qrct{cursor:pointer}tr.svelte-1i6qrct th select.svelte-1i6qrct{width:100%}",
  map: null
};
const SvelteTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let colspan;
  let { columns } = $$props;
  let { rows } = $$props;
  let { c_rows = void 0 } = $$props;
  let { sortOrders = [1, -1] } = $$props;
  let { sortBy = "" } = $$props;
  let { sortOrder = (sortOrders == null ? void 0 : sortOrders[0]) || 1 } = $$props;
  let { filterSelections = {} } = $$props;
  let { expanded = [] } = $$props;
  let { selected = [] } = $$props;
  let { expandRowKey = null } = $$props;
  let { rowKey = expandRowKey } = $$props;
  let { expandSingle = false } = $$props;
  let { selectSingle = false } = $$props;
  let { selectOnClick = false } = $$props;
  let { iconAsc = "\u25B2" } = $$props;
  let { iconDesc = "\u25BC" } = $$props;
  let { iconSortable = "" } = $$props;
  let { iconExpand = "\u25BC" } = $$props;
  let { iconExpanded = "\u25B2" } = $$props;
  let { showExpandIcon = false } = $$props;
  let { classNameTable = "" } = $$props;
  let { classNameThead = "" } = $$props;
  let { classNameTbody = "" } = $$props;
  let { classNameSelect = "" } = $$props;
  let { classNameInput = "" } = $$props;
  let { classNameRow = null } = $$props;
  let { classNameCell = "" } = $$props;
  let { classNameRowSelected = null } = $$props;
  let { classNameRowExpanded = null } = $$props;
  let { classNameExpandedContent = "" } = $$props;
  let { classNameCellExpand = "" } = $$props;
  createEventDispatcher();
  let sortFunction = () => "";
  if (!Array.isArray(expanded))
    throw "'expanded' needs to be an array";
  if (!Array.isArray(selected))
    throw "'selection' needs to be an array";
  if (expandRowKey !== null) {
    console.warn("'expandRowKey' is deprecated in favour of 'rowKey'");
  }
  if (classNameRowSelected && !rowKey) {
    console.error("'rowKey' is needed to use 'classNameRowSelected'");
  }
  let showFilterHeader = columns.some((c) => {
    return c.filterOptions !== void 0 || c.searchValue !== void 0;
  });
  let filterValues = {};
  let columnByKey;
  const asStringArray = (v) => [].concat(v).filter((v2) => v2 !== null && typeof v2 === "string" && v2 !== "").join(" ");
  const calculateFilterValues = () => {
    filterValues = {};
    columns.forEach((c) => {
      if (typeof c.filterOptions === "function") {
        filterValues[c.key] = c.filterOptions(rows);
      } else if (Array.isArray(c.filterOptions)) {
        filterValues[c.key] = c.filterOptions.map((val) => ({ name: val, value: val }));
      }
    });
  };
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.c_rows === void 0 && $$bindings.c_rows && c_rows !== void 0)
    $$bindings.c_rows(c_rows);
  if ($$props.sortOrders === void 0 && $$bindings.sortOrders && sortOrders !== void 0)
    $$bindings.sortOrders(sortOrders);
  if ($$props.sortBy === void 0 && $$bindings.sortBy && sortBy !== void 0)
    $$bindings.sortBy(sortBy);
  if ($$props.sortOrder === void 0 && $$bindings.sortOrder && sortOrder !== void 0)
    $$bindings.sortOrder(sortOrder);
  if ($$props.filterSelections === void 0 && $$bindings.filterSelections && filterSelections !== void 0)
    $$bindings.filterSelections(filterSelections);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.expandRowKey === void 0 && $$bindings.expandRowKey && expandRowKey !== void 0)
    $$bindings.expandRowKey(expandRowKey);
  if ($$props.rowKey === void 0 && $$bindings.rowKey && rowKey !== void 0)
    $$bindings.rowKey(rowKey);
  if ($$props.expandSingle === void 0 && $$bindings.expandSingle && expandSingle !== void 0)
    $$bindings.expandSingle(expandSingle);
  if ($$props.selectSingle === void 0 && $$bindings.selectSingle && selectSingle !== void 0)
    $$bindings.selectSingle(selectSingle);
  if ($$props.selectOnClick === void 0 && $$bindings.selectOnClick && selectOnClick !== void 0)
    $$bindings.selectOnClick(selectOnClick);
  if ($$props.iconAsc === void 0 && $$bindings.iconAsc && iconAsc !== void 0)
    $$bindings.iconAsc(iconAsc);
  if ($$props.iconDesc === void 0 && $$bindings.iconDesc && iconDesc !== void 0)
    $$bindings.iconDesc(iconDesc);
  if ($$props.iconSortable === void 0 && $$bindings.iconSortable && iconSortable !== void 0)
    $$bindings.iconSortable(iconSortable);
  if ($$props.iconExpand === void 0 && $$bindings.iconExpand && iconExpand !== void 0)
    $$bindings.iconExpand(iconExpand);
  if ($$props.iconExpanded === void 0 && $$bindings.iconExpanded && iconExpanded !== void 0)
    $$bindings.iconExpanded(iconExpanded);
  if ($$props.showExpandIcon === void 0 && $$bindings.showExpandIcon && showExpandIcon !== void 0)
    $$bindings.showExpandIcon(showExpandIcon);
  if ($$props.classNameTable === void 0 && $$bindings.classNameTable && classNameTable !== void 0)
    $$bindings.classNameTable(classNameTable);
  if ($$props.classNameThead === void 0 && $$bindings.classNameThead && classNameThead !== void 0)
    $$bindings.classNameThead(classNameThead);
  if ($$props.classNameTbody === void 0 && $$bindings.classNameTbody && classNameTbody !== void 0)
    $$bindings.classNameTbody(classNameTbody);
  if ($$props.classNameSelect === void 0 && $$bindings.classNameSelect && classNameSelect !== void 0)
    $$bindings.classNameSelect(classNameSelect);
  if ($$props.classNameInput === void 0 && $$bindings.classNameInput && classNameInput !== void 0)
    $$bindings.classNameInput(classNameInput);
  if ($$props.classNameRow === void 0 && $$bindings.classNameRow && classNameRow !== void 0)
    $$bindings.classNameRow(classNameRow);
  if ($$props.classNameCell === void 0 && $$bindings.classNameCell && classNameCell !== void 0)
    $$bindings.classNameCell(classNameCell);
  if ($$props.classNameRowSelected === void 0 && $$bindings.classNameRowSelected && classNameRowSelected !== void 0)
    $$bindings.classNameRowSelected(classNameRowSelected);
  if ($$props.classNameRowExpanded === void 0 && $$bindings.classNameRowExpanded && classNameRowExpanded !== void 0)
    $$bindings.classNameRowExpanded(classNameRowExpanded);
  if ($$props.classNameExpandedContent === void 0 && $$bindings.classNameExpandedContent && classNameExpandedContent !== void 0)
    $$bindings.classNameExpandedContent(classNameExpandedContent);
  if ($$props.classNameCellExpand === void 0 && $$bindings.classNameCellExpand && classNameCellExpand !== void 0)
    $$bindings.classNameCellExpand(classNameCellExpand);
  $$result.css.add(css$1);
  {
    {
      columnByKey = {};
      columns.forEach((col) => {
        columnByKey[col.key] = col;
      });
    }
  }
  colspan = (showExpandIcon ? 1 : 0) + columns.length;
  {
    {
      let col = columnByKey[sortBy];
      if (col !== void 0 && col.sortable === true && typeof col.value === "function") {
        sortFunction = (r) => col.value(r);
      }
    }
  }
  c_rows = rows.filter((r) => {
    return Object.keys(filterSelections).every((f) => {
      let resSearch = filterSelections[f] === "" || columnByKey[f].searchValue && (columnByKey[f].searchValue(r) + "").toLocaleLowerCase().indexOf((filterSelections[f] + "").toLocaleLowerCase()) >= 0;
      let resFilter = resSearch || filterSelections[f] === void 0 || filterSelections[f] === (typeof columnByKey[f].filterValue === "function" ? columnByKey[f].filterValue(r) : columnByKey[f].value(r));
      return resFilter;
    });
  }).map((r) => Object.assign({}, r, {
    $sortOn: sortFunction(r),
    $expanded: rowKey !== null && expanded.indexOf(r[rowKey]) >= 0,
    $selected: rowKey !== null && selected.indexOf(r[rowKey]) >= 0
  })).sort((a, b) => {
    if (!sortBy)
      return 0;
    else if (a.$sortOn > b.$sortOn)
      return sortOrder;
    else if (a.$sortOn < b.$sortOn)
      return -sortOrder;
    return 0;
  });
  {
    {
      if (showFilterHeader && columns && rows) {
        calculateFilterValues();
      }
    }
  }
  return `<table class="${escape(null_to_empty(asStringArray(classNameTable)), true) + " svelte-1i6qrct"}"><thead class="${escape(null_to_empty(asStringArray(classNameThead)), true) + " svelte-1i6qrct"}">${showFilterHeader ? `<tr class="${"svelte-1i6qrct"}">${each(columns, (col) => {
    return `<th class="${escape(null_to_empty(asStringArray([col.headerFilterClass])), true) + " svelte-1i6qrct"}">${col.searchValue !== void 0 ? `<input class="${escape(null_to_empty(asStringArray(classNameInput)), true) + " svelte-1i6qrct"}"${add_attribute("value", filterSelections[col.key], 0)}>` : `${filterValues[col.key] !== void 0 ? `<select class="${escape(null_to_empty(asStringArray(classNameSelect)), true) + " svelte-1i6qrct"}"><option${add_attribute("value", void 0, 0)}></option>${each(filterValues[col.key], (option) => {
      return `<option${add_attribute("value", option.value, 0)}>${escape(option.name)}</option>`;
    })}</select>` : ``}`}
          </th>`;
  })}
        ${showExpandIcon ? `<th></th>` : ``}</tr>` : ``}
    ${slots.header ? slots.header({ sortOrder, sortBy }) : `
      <tr>${each(columns, (col) => {
    return `<th class="${escape(null_to_empty(asStringArray([col.sortable ? "isSortable" : "", col.headerClass])), true) + " svelte-1i6qrct"}">${escape(col.title)}
            ${sortBy === col.key ? `<!-- HTML_TAG_START -->${sortOrder === 1 ? iconAsc : iconDesc}<!-- HTML_TAG_END -->` : `${col.sortable ? `<!-- HTML_TAG_START -->${iconSortable}<!-- HTML_TAG_END -->` : ``}`}
          </th>`;
  })}
        ${showExpandIcon ? `<th></th>` : ``}</tr>
    `}</thead>

  <tbody class="${escape(null_to_empty(asStringArray(classNameTbody)), true) + " svelte-1i6qrct"}">${each(c_rows, (row, n) => {
    return `${slots.row ? slots.row({ row, n }) : `
        <tr class="${escape(null_to_empty(asStringArray([
      typeof classNameRow === "string" ? classNameRow : null,
      typeof classNameRow === "function" ? classNameRow(row, n) : null,
      ,
      row.$expanded && classNameRowExpanded,
      row.$selected && classNameRowSelected
    ])), true) + " svelte-1i6qrct"}">${each(columns, (col, colIndex) => {
      return `<td class="${escape(null_to_empty(asStringArray([
        typeof col.class === "string" ? col.class : null,
        typeof col.class === "function" ? col.class(row, n, colIndex) : null,
        classNameCell
      ])), true) + " svelte-1i6qrct"}">${col.renderComponent ? `${validate_component(col.renderComponent.component || col.renderComponent || missing_component, "svelte:component").$$render($$result, Object_1.assign(col.renderComponent.props || {}, { row }, { col }), {}, {})}` : `<!-- HTML_TAG_START -->${col.renderValue ? col.renderValue(row) : col.value(row)}<!-- HTML_TAG_END -->`}
            </td>`;
    })}
          ${showExpandIcon ? `<td class="${escape(null_to_empty(asStringArray(["isClickable", classNameCellExpand])), true) + " svelte-1i6qrct"}"><!-- HTML_TAG_START -->${row.$expanded ? iconExpand : iconExpanded}<!-- HTML_TAG_END -->
            </td>` : ``}</tr>
        ${row.$expanded ? `<tr class="${escape(null_to_empty(asStringArray(classNameExpandedContent)), true) + " svelte-1i6qrct"}"><td${add_attribute("colspan", colspan, 0)}>${slots.expanded ? slots.expanded({ row, n }) : ``}
            </td></tr>` : ``}
      `}`;
  })}</tbody>
</table>`;
});
var tabla_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".imagen.svelte-1fl6mie{margin-top:2%;display:flex;flex-direction:column;align-items:center}.foto.svelte-1fl6mie{height:300px}.cenaimsquare.svelte-1fl6mie{position:absolute;width:100%;left:0;background-color:#b2e3f8;padding:2rem;display:flex;flex-direction:column}.foto_logo.svelte-1fl6mie{height:100px;margin-bottom:3%}.text.svelte-1fl6mie{margin-top:29%;font-family:Georgia, 'Times New Roman', Times, serif}")();
const css = {
  code: ".imagen.svelte-1fl6mie{margin-top:2%;display:flex;flex-direction:column;align-items:center}.foto.svelte-1fl6mie{height:300px}.cenaimsquare.svelte-1fl6mie{position:absolute;width:100%;left:0;background-color:#b2e3f8;padding:2rem;display:flex;flex-direction:column}.foto_logo.svelte-1fl6mie{height:100px;margin-bottom:3%}.text.svelte-1fl6mie{margin-top:29%;font-family:Georgia, 'Times New Roman', Times, serif}",
  map: null
};
let src = "http://www.cenaim.espol.edu.ec/sites/cenaim.espol.edu.ec/files/2020/Imagenes/CENAIM-2.jpg";
const Tabla = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rows = [];
  const apiStandardization = "http://localhost:8082/v1";
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    pointsIds: [],
    filtroPorEtiquetas: { etiquetas: [] },
    limite: 200
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  let interval;
  const convertResponseFormat = async () => {
    const data = await fetch(`${apiStandardization}/obtener-datos`, requestOptions);
    const res = await data.json();
    const response = res.response;
    rows = response.map((item) => {
      return item.registro;
    });
  };
  convertResponseFormat();
  const columns = [
    {
      key: "dis",
      title: "Par\xE1metro",
      value: (v) => v["dis"],
      class: "col border-t border-b border-l border-r border-gray-900",
      sortable: true,
      headerClass: "text-left border-t border-b border-l border-r border-gray-900"
    },
    {
      key: "value",
      title: "Valor",
      value: (v) => v.value,
      class: "row border-t border-b border-l border-r border-gray-900",
      sortable: true,
      headerClass: "text-left border-t border-b border-l border-r border-gray-900"
    }
  ];
  onDestroy(() => {
    clearInterval(interval);
  });
  $$result.css.add(css);
  return `<div class="${"mt-24"}"><div class="${"logo_cenaim"}"><div class="${"logo"}"><img class="${"foto_logo svelte-1fl6mie"}" src="${"http://www.cenaim.espol.edu.ec/sites/cenaim.espol.edu.ec/files/imagenes/logo_cenaim.png"}" alt="${"CENAIM_logo"}"></div></div>
	<div class="${"cenaimsquare svelte-1fl6mie"}"><div class="${"imagen svelte-1fl6mie"}"><img class="${"foto svelte-1fl6mie"}"${add_attribute("src", src, 0)} alt="${"CENAIM"}"></div></div>
	<div class="${"text w-12/12 text-justify svelte-1fl6mie"}"><h1><p>El CENAIM es un centro de investigaci\xF3n marina y acu\xEDcola construido en 1990 por gesti\xF3n de la Escuela Superior Polit\xE9cnica del Litoral (ESPOL) con apoyo financiero del Gobierno de Jap\xF3n. 
					El CENAIM forma parte integral de la ESPOL, siendo su misi\xF3n el mejoramiento y desarrollo sustentable de la acuicultura y biodiversidad marina del Ecuador a trav\xE9s de la investigaci\xF3n cient\xEDfica, el desarrollo tecnol\xF3gico, la capacitaci\xF3n y la difusi\xF3n.
					El CENAIM se encuentra localizado San Pedro de Manglaralto, Provincia de Santa Elena. Tiene una infraestructura funcional conformada por laboratorios de an\xE1lisis, salas de experimentaci\xF3n, oficinas, sala de computo, biblioteca, \xE1reas de instrucci\xF3n y recreaci\xF3n, y habitaciones para t\xE9cnicos y estudiantes.
					Su estaci\xF3n experimental en Palmar, a 10 minutos del CENAIM complementa las investigaciones en campo.</p><br>

			<b>A continuaci\xF3n se muestra informaci\xF3n acerca de las variables medidas por los sensores: </b></h1></div>

	<div class="${"mt-5 row text-justify justify-self-center "}">${validate_component(SvelteTable, "SvelteTable").$$render($$result, { columns, rows, rowKey: "dis" }, {}, {})}</div>
</div>`;
});
export { Tabla as default };