import { c as create_ssr_component, d as createEventDispatcher, e as escape, q as null_to_empty, g as each, f as add_attribute, v as validate_component, m as missing_component, k as globals } from "../../chunks/index-55d7da86.js";
var SvelteTable_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "table.svelte-1i6qrct.svelte-1i6qrct{width:100%}.isSortable.svelte-1i6qrct.svelte-1i6qrct{cursor:pointer}.isClickable.svelte-1i6qrct.svelte-1i6qrct{cursor:pointer}tr.svelte-1i6qrct th select.svelte-1i6qrct{width:100%}")();
const { Object: Object_1 } = globals;
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
  const rows = [
    {
      "Date & Time": "1/8/22 16:00",
      "Bar\xF3metro - mm Hg": "762.4",
      "Temp - \xB0C": "29",
      "Temp. Alta - \xB0C": "29",
      "Temp. Baja - \xB0C": "28",
      "Hum - %": "66",
      "Punto de roc\xEDo - \xB0C": "22",
      "Bulbo H\xFAmedo - \xB0C": "23",
      "Velocidad del viento - km/h": "5",
      "Direcci\xF3n del viento": "S",
      "Viento Corriente - km": "1.2",
      "Alta velocidad del viento - km/h": "13",
      "Alta Direcci\xF3n del viento": "SSE",
      "Viento Fr\xEDo - \xB0C": "29",
      "\xCDndice de calor - \xB0C": "32"
    },
    {
      "Date & Time": "1/8/22 16:15",
      "Bar\xF3metro - mm Hg": "762.3",
      "Temp - \xB0C": "29",
      "Temp. Alta - \xB0C": "29",
      "Temp. Baja - \xB0C": "29",
      "Hum - %": "64",
      "Punto de roc\xEDo - \xB0C": "22",
      "Bulbo H\xFAmedo - \xB0C": "23",
      "Velocidad del viento - km/h": "5",
      "Direcci\xF3n del viento": "WSW",
      "Viento Corriente - km": "1.2",
      "Alta velocidad del viento - km/h": "13",
      "Alta Direcci\xF3n del viento": "W",
      "Viento Fr\xEDo - \xB0C": "29",
      "\xCDndice de calor - \xB0C": "33"
    },
    {
      "Date & Time": "1/8/22 16:30",
      "Bar\xF3metro - mm Hg": "762.4",
      "Temp - \xB0C": "29",
      "Temp. Alta - \xB0C": "29",
      "Temp. Baja - \xB0C": "29",
      "Hum - %": "65",
      "Punto de roc\xEDo - \xB0C": "21",
      "Bulbo H\xFAmedo - \xB0C": "23",
      "Velocidad del viento - km/h": "3",
      "Direcci\xF3n del viento": "SW",
      "Viento Corriente - km": "0.8",
      "Alta velocidad del viento - km/h": "8",
      "Alta Direcci\xF3n del viento": "N",
      "Viento Fr\xEDo - \xB0C": "29",
      "\xCDndice de calor - \xB0C": "31"
    },
    {
      "Date & Time": "1/8/22 16:45",
      "Bar\xF3metro - mm Hg": "762.4",
      "Temp - \xB0C": "28",
      "Temp. Alta - \xB0C": "29",
      "Temp. Baja - \xB0C": "28",
      "Hum - %": "65",
      "Punto de roc\xEDo - \xB0C": "21",
      "Bulbo H\xFAmedo - \xB0C": "23",
      "Velocidad del viento - km/h": "3",
      "Direcci\xF3n del viento": "SSE",
      "Viento Corriente - km": "0.8",
      "Alta velocidad del viento - km/h": "6",
      "Alta Direcci\xF3n del viento": "WSW",
      "Viento Fr\xEDo - \xB0C": "28",
      "\xCDndice de calor - \xB0C": "31"
    }
  ];
  const columns = [
    {
      key: "Date & Time",
      title: "Date & Time",
      value: (v) => v["Date & Time"],
      sortable: true,
      filterOptions: (rows2) => {
        let nums = {};
        rows2.forEach((row) => {
          let num = Math.floor(row["Date & Time"] / 10);
          if (nums[num] === void 0)
            nums[num] = {
              name: `${num * 10} to ${(num + 1) * 10}`,
              value: num
            };
        });
        nums = Object.entries(nums).sort().reduce((o, [k, v]) => (o[k] = v, o), {});
        return Object.values(nums);
      },
      filterValue: (v) => Math.floor(v["Date & Time"] / 10),
      headerClass: "text-left"
    },
    {
      key: "Bar\xF3metro - mm Hg",
      title: "Bar\xF3metro - mm Hg",
      value: (v) => v["Bar\xF3metro - mm Hg"],
      sortable: true,
      filterOptions: (rows2) => {
        let nums = {};
        rows2.forEach((row) => {
          let num = Math.floor(row["Bar\xF3metro - mm Hg"] / 10);
          if (nums[num] === void 0)
            nums[num] = {
              name: `${num * 10} to ${(num + 1) * 10}`,
              value: num
            };
        });
        nums = Object.entries(nums).sort().reduce((o, [k, v]) => (o[k] = v, o), {});
        return Object.values(nums);
      },
      filterValue: (v) => Math.floor(v["Bar\xF3metro - mm Hg"] / 10),
      headerClass: "text-left"
    },
    {
      key: "Temp - \xB0C",
      title: "Temp - \xB0C",
      value: (v) => v["Temp - \xB0C"],
      sortable: true,
      filterOptions: (rows2) => {
        let nums = {};
        rows2.forEach((row) => {
          let num = Math.floor(row["Temp - \xB0C"] / 10);
          if (nums[num] === void 0)
            nums[num] = {
              name: `${num * 10} to ${(num + 1) * 10}`,
              value: num
            };
        });
        nums = Object.entries(nums).sort().reduce((o, [k, v]) => (o[k] = v, o), {});
        return Object.values(nums);
      },
      filterValue: (v) => Math.floor(v["Temp - \xB0C"] / 10),
      headerClass: "text-left"
    },
    {
      key: "Temp. Alta - \xB0C",
      title: "Temp. Alta - \xB0C",
      value: (v) => v["Temp. Alta - \xB0C"],
      sortable: true,
      filterOptions: (rows2) => {
        let nums = {};
        rows2.forEach((row) => {
          let num = Math.floor(row["Temp. Alta - \xB0C"] / 10);
          if (nums[num] === void 0)
            nums[num] = {
              name: `${num * 10} to ${(num + 1) * 10}`,
              value: num
            };
        });
        nums = Object.entries(nums).sort().reduce((o, [k, v]) => (o[k] = v, o), {});
        return Object.values(nums);
      },
      filterValue: (v) => Math.floor(v["Temp. Alta - \xB0C"] / 10),
      headerClass: "text-left"
    },
    {
      key: "Temp. Baja - \xB0C",
      title: "Temp. Baja - \xB0C",
      value: (v) => v["Temp. Baja - \xB0C"],
      sortable: true,
      filterOptions: (rows2) => {
        let nums = {};
        rows2.forEach((row) => {
          let num = Math.floor(row["Temp. Baja - \xB0C"] / 10);
          if (nums[num] === void 0)
            nums[num] = {
              name: `${num * 10} to ${(num + 1) * 10}`,
              value: num
            };
        });
        nums = Object.entries(nums).sort().reduce((o, [k, v]) => (o[k] = v, o), {});
        return Object.values(nums);
      },
      filterValue: (v) => Math.floor(v["Temp. Baja - \xB0C"] / 10),
      headerClass: "text-left"
    },
    {
      key: "Hum - %",
      title: "Hum - %",
      value: (v) => v["Hum - %"],
      sortable: true,
      filterOptions: (rows2) => {
        let nums = {};
        rows2.forEach((row) => {
          let num = Math.floor(row["Hum - %"] / 10);
          if (nums[num] === void 0)
            nums[num] = {
              name: `${num * 10} to ${(num + 1) * 10}`,
              value: num
            };
        });
        nums = Object.entries(nums).sort().reduce((o, [k, v]) => (o[k] = v, o), {});
        return Object.values(nums);
      },
      filterValue: (v) => Math.floor(v["Hum - %"] / 10),
      headerClass: "text-left"
    },
    {
      key: "Punto de roc\xEDo - \xB0C",
      title: "Punto de roc\xEDo - \xB0C",
      value: (v) => v["Punto de roc\xEDo - \xB0C"],
      sortable: true,
      filterOptions: (rows2) => {
        let nums = {};
        rows2.forEach((row) => {
          let num = Math.floor(row["Punto de roc\xEDo - \xB0C"] / 10);
          if (nums[num] === void 0)
            nums[num] = {
              name: `${num * 10} to ${(num + 1) * 10}`,
              value: num
            };
        });
        nums = Object.entries(nums).sort().reduce((o, [k, v]) => (o[k] = v, o), {});
        return Object.values(nums);
      },
      filterValue: (v) => Math.floor(v["Punto de roc\xEDo - \xB0C"] / 10),
      headerClass: "text-left"
    },
    {
      key: "Bulbo H\xFAmedo - \xB0C",
      title: "Bulbo H\xFAmedo - \xB0C",
      value: (v) => v["Bulbo H\xFAmedo - \xB0C"],
      sortable: true,
      filterOptions: (rows2) => {
        let nums = {};
        rows2.forEach((row) => {
          let num = Math.floor(row["Bulbo H\xFAmedo - \xB0C"] / 10);
          if (nums[num] === void 0)
            nums[num] = {
              name: `${num * 10} to ${(num + 1) * 10}`,
              value: num
            };
        });
        nums = Object.entries(nums).sort().reduce((o, [k, v]) => (o[k] = v, o), {});
        return Object.values(nums);
      },
      filterValue: (v) => Math.floor(v["Bulbo H\xFAmedo - \xB0C"] / 10),
      headerClass: "text-left"
    },
    {
      key: "Velocidad del viento - km/h",
      title: "Velocidad del viento - km/h",
      value: (v) => v["Velocidad del viento - km/h"],
      sortable: true,
      filterOptions: (rows2) => {
        let nums = {};
        rows2.forEach((row) => {
          let num = Math.floor(row["Velocidad del viento - km/h"] / 10);
          if (nums[num] === void 0)
            nums[num] = {
              name: `${num * 10} to ${(num + 1) * 10}`,
              value: num
            };
        });
        nums = Object.entries(nums).sort().reduce((o, [k, v]) => (o[k] = v, o), {});
        return Object.values(nums);
      },
      filterValue: (v) => Math.floor(v["Velocidad del viento - km/h"] / 10),
      headerClass: "text-left"
    },
    {
      key: "Direcci\xF3n del viento",
      title: "Direcci\xF3n del viento",
      value: (v) => v["Direcci\xF3n del viento"],
      sortable: true,
      filterOptions: (rows2) => {
        let nums = {};
        rows2.forEach((row) => {
          let num = Math.floor(row["Direcci\xF3n del viento"] / 10);
          if (nums[num] === void 0)
            nums[num] = {
              name: `${num * 10} to ${(num + 1) * 10}`,
              value: num
            };
        });
        nums = Object.entries(nums).sort().reduce((o, [k, v]) => (o[k] = v, o), {});
        return Object.values(nums);
      },
      filterValue: (v) => Math.floor(v["Direcci\xF3n del viento"] / 10),
      headerClass: "text-left"
    },
    {
      key: "Viento Corriente - km",
      title: "Viento Corriente - km",
      value: (v) => v["Viento Corriente - km"],
      sortable: true,
      filterOptions: (rows2) => {
        let nums = {};
        rows2.forEach((row) => {
          let num = Math.floor(row["Viento Corriente - km"] / 10);
          if (nums[num] === void 0)
            nums[num] = {
              name: `${num * 10} to ${(num + 1) * 10}`,
              value: num
            };
        });
        nums = Object.entries(nums).sort().reduce((o, [k, v]) => (o[k] = v, o), {});
        return Object.values(nums);
      },
      filterValue: (v) => Math.floor(v["Viento Corriente - km"] / 10),
      headerClass: "text-left"
    },
    {
      key: "Alta velocidad del viento - km/h",
      title: "Alta velocidad del viento - km/h",
      value: (v) => v["Alta velocidad del viento - km/h"],
      sortable: true,
      filterOptions: (rows2) => {
        let nums = {};
        rows2.forEach((row) => {
          let num = Math.floor(row["Alta velocidad del viento - km/h"] / 10);
          if (nums[num] === void 0)
            nums[num] = {
              name: `${num * 10} to ${(num + 1) * 10}`,
              value: num
            };
        });
        nums = Object.entries(nums).sort().reduce((o, [k, v]) => (o[k] = v, o), {});
        return Object.values(nums);
      },
      filterValue: (v) => Math.floor(v["Alta velocidad del viento - km/h"] / 10),
      headerClass: "text-left"
    },
    {
      key: "Alta Direcci\xF3n del viento",
      title: "Alta Direcci\xF3n del viento",
      value: (v) => v["Alta Direcci\xF3n del viento"],
      sortable: true,
      filterOptions: (rows2) => {
        let nums = {};
        rows2.forEach((row) => {
          let num = Math.floor(row["Alta Direcci\xF3n del viento"] / 10);
          if (nums[num] === void 0)
            nums[num] = {
              name: `${num * 10} to ${(num + 1) * 10}`,
              value: num
            };
        });
        nums = Object.entries(nums).sort().reduce((o, [k, v]) => (o[k] = v, o), {});
        return Object.values(nums);
      },
      filterValue: (v) => Math.floor(v["Alta Direcci\xF3n del viento"] / 10),
      headerClass: "text-left"
    },
    {
      key: "Viento Fr\xEDo - \xB0C",
      title: "Viento Fr\xEDo - \xB0C",
      value: (v) => v["Viento Fr\xEDo - \xB0C"],
      sortable: true,
      filterOptions: (rows2) => {
        let nums = {};
        rows2.forEach((row) => {
          let num = Math.floor(row["Viento Fr\xEDo - \xB0C"] / 10);
          if (nums[num] === void 0)
            nums[num] = {
              name: `${num * 10} to ${(num + 1) * 10}`,
              value: num
            };
        });
        nums = Object.entries(nums).sort().reduce((o, [k, v]) => (o[k] = v, o), {});
        return Object.values(nums);
      },
      filterValue: (v) => Math.floor(v["Viento Fr\xEDo - \xB0C"] / 10),
      headerClass: "text-left"
    },
    {
      key: "\xCDndice de calor - \xB0C",
      title: "\xCDndice de calor - \xB0C",
      value: (v) => v["\xCDndice de calor - \xB0C"],
      sortable: true,
      filterOptions: (rows2) => {
        let nums = {};
        rows2.forEach((row) => {
          let num = Math.floor(row["\xCDndice de calor - \xB0C"] / 10);
          if (nums[num] === void 0)
            nums[num] = {
              name: `${num * 10} to ${(num + 1) * 10}`,
              value: num
            };
        });
        nums = Object.entries(nums).sort().reduce((o, [k, v]) => (o[k] = v, o), {});
        return Object.values(nums);
      },
      filterValue: (v) => Math.floor(v["\xCDndice de calor - \xB0C"] / 10),
      headerClass: "text-left"
    }
  ];
  return `<div class="${"mt-16"}"><div class="${"row"}">${validate_component(SvelteTable, "SvelteTable").$$render($$result, {
    columns,
    rows,
    showExpandIcon: true,
    expandSingle: true,
    rowKey: "Date & Time"
  }, {}, {
    expanded: ({ row }) => {
      return `${escape(row.detail)}`;
    }
  })}</div>
</div>`;
});
export { Tabla as default };
