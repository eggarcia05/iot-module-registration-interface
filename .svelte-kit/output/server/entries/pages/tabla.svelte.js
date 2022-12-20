import { c as create_ssr_component, d as createEventDispatcher, e as escape, q as null_to_empty, g as each, f as add_attribute, v as validate_component, m as missing_component, k as globals } from "../../chunks/index-55d7da86.js";
/* empty css                                                               */const { Object: Object_1 } = globals;
const css = {
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
  $$result.css.add(css);
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
const Tabla = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    pointsIds: [],
    filtroPorEtiquetas: { etiquetas: [] },
    limite: 2e3
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  let rows = [];
  const convertResponseFormat = async () => {
    const data = await fetch("http://localhost:8082/v1/obtener-datos", requestOptions);
    const res = await data.json();
    const response = res.response;
    rows = response.map((item) => {
      return item.registro;
    });
    console.log(rows);
  };
  convertResponseFormat();
  const columns = [
    {
      key: "dis",
      title: "Parametro",
      value: (v) => v["dis"],
      sortable: true,
      headerClass: "text-left"
    },
    {
      key: "value",
      title: "Valor",
      value: (v) => v.value
    }
  ];
  return `<div class="${"mt-24"}"><div class="${"row"}">${validate_component(SvelteTable, "SvelteTable").$$render($$result, { columns, rows, rowKey: "dis" }, {}, {})}</div>
</div>`;
});
export { Tabla as default };
