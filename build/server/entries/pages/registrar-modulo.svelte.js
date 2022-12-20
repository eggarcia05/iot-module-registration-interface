import { c as create_ssr_component, a as subscribe, d as createEventDispatcher, f as add_attribute, e as escape, g as each, v as validate_component, r as set_store_value, p as is_promise, n as noop } from "../../chunks/index-55d7da86.js";
import { w as writable } from "../../chunks/index-0e127ed7.js";
import { b as buildRequest } from "../../chunks/helper-functions-ba68fd5c.js";
const entidadEnBlanco = {
  id: null,
  dis: null,
  tags: {}
};
const store = writable(JSON.parse(JSON.stringify(entidadEnBlanco)));
const NUEVA_ENTIDAD = {
  ...store,
  clear() {
    store.update(() => JSON.parse(JSON.stringify(entidadEnBlanco)));
  }
};
const Checkbox_componet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_NUEVA_ENTIDAD;
  $$unsubscribe_NUEVA_ENTIDAD = subscribe(NUEVA_ENTIDAD, (value) => value);
  createEventDispatcher();
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_NUEVA_ENTIDAD();
  return `

   <div class="${"flex items-center mb-4"}"><input${add_attribute("id", data.id, 0)} type="${"checkbox"}"${add_attribute("value", data.tag, 0)} class="${"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}">
       <label${add_attribute("for", data.id, 0)} class="${"ml-2 text-sm font-medium text-gray-900 dark:text-green-300"}" data-bs-toggle="${"tooltip"}"${add_attribute("title", data.haystack_tag.descripcion, 0)}>${escape(data.tag)}</label></div>
`;
});
var SimpleAutocomplete_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '.autocomplete.svelte-zbojzr.svelte-zbojzr{min-width:200px;display:inline-block;max-width:100%;position:relative;vertical-align:top;height:2.25em}.autocomplete.svelte-zbojzr.svelte-zbojzr:not(.hide-arrow):not(.is-loading)::after{border:3px solid;border-radius:2px;border-right:0;border-top:0;content:" ";display:block;height:0.625em;margin-top:-0.4375em;pointer-events:none;position:absolute;top:50%;transform:rotate(-45deg);transform-origin:center;width:0.625em;border-color:#3273dc;right:1.125em;z-index:4}.autocomplete.show-clear.svelte-zbojzr.svelte-zbojzr:not(.hide-arrow)::after{right:2.3em}.autocomplete.svelte-zbojzr .svelte-zbojzr{box-sizing:border-box}.autocomplete-input.svelte-zbojzr.svelte-zbojzr{font:inherit;width:100%;height:100%;padding:5px 11px}.autocomplete.svelte-zbojzr:not(.hide-arrow) .autocomplete-input.svelte-zbojzr{padding-right:2em}.autocomplete.show-clear.svelte-zbojzr:not(.hide-arrow) .autocomplete-input.svelte-zbojzr{padding-right:3.2em}.autocomplete.hide-arrow.show-clear.svelte-zbojzr .autocomplete-input.svelte-zbojzr{padding-right:2em}.autocomplete-list.svelte-zbojzr.svelte-zbojzr{background:#fff;position:relative;width:100%;overflow-y:auto;z-index:99;padding:10px 0;top:0px;border:1px solid #999;max-height:calc(15 * (1rem + 10px) + 15px);-webkit-user-select:none;-moz-user-select:none;user-select:none}.autocomplete-list.svelte-zbojzr.svelte-zbojzr:empty{padding:0}.autocomplete-list-item.svelte-zbojzr.svelte-zbojzr{padding:5px 15px;color:#333;cursor:pointer;line-height:1}.autocomplete-list-item.confirmed.svelte-zbojzr.svelte-zbojzr{background-color:#789fed;color:#fff}.autocomplete-list-item.selected.svelte-zbojzr.svelte-zbojzr{background-color:#2e69e2;color:#fff}.autocomplete-list-item-no-results.svelte-zbojzr.svelte-zbojzr{padding:5px 15px;color:#999;line-height:1}.autocomplete-list-item-create.svelte-zbojzr.svelte-zbojzr{padding:5px 15px;line-height:1}.autocomplete-list-item-loading.svelte-zbojzr.svelte-zbojzr{padding:5px 15px;line-height:1}.autocomplete-list.hidden.svelte-zbojzr.svelte-zbojzr{display:none}.autocomplete.show-clear.svelte-zbojzr .autocomplete-clear-button.svelte-zbojzr{cursor:pointer;display:block;text-align:center;position:absolute;right:0.1em;padding:0.3em 0.6em;top:50%;transform:translateY(-50%);z-index:4}.autocomplete.svelte-zbojzr:not(.show-clear) .autocomplete-clear-button.svelte-zbojzr{display:none}.autocomplete.svelte-zbojzr select.svelte-zbojzr{display:none}.autocomplete.is-multiple.svelte-zbojzr .input-container.svelte-zbojzr{height:auto;box-shadow:inset 0 1px 2px rgba(10, 10, 10, 0.1);border-radius:4px;border:1px solid #b5b5b5;padding-left:0.4em;padding-right:0.4em;display:flex;flex-wrap:wrap;align-items:stretch;background-color:#fff}.autocomplete.is-multiple.svelte-zbojzr .tag.svelte-zbojzr{display:flex;margin-top:0.5em;margin-bottom:0.3em}.autocomplete.is-multiple.svelte-zbojzr .tag.is-delete.svelte-zbojzr{cursor:pointer}.autocomplete.is-multiple.svelte-zbojzr .tags.svelte-zbojzr{margin-right:0.3em;margin-bottom:0}.autocomplete.is-multiple.svelte-zbojzr .autocomplete-input.svelte-zbojzr{display:flex;width:100%;flex:1 1 50px;min-width:3em;border:none;box-shadow:none;background:none}')();
const css$3 = {
  code: '.autocomplete.svelte-zbojzr.svelte-zbojzr{min-width:200px;display:inline-block;max-width:100%;position:relative;vertical-align:top;height:2.25em}.autocomplete.svelte-zbojzr.svelte-zbojzr:not(.hide-arrow):not(.is-loading)::after{border:3px solid;border-radius:2px;border-right:0;border-top:0;content:" ";display:block;height:0.625em;margin-top:-0.4375em;pointer-events:none;position:absolute;top:50%;transform:rotate(-45deg);transform-origin:center;width:0.625em;border-color:#3273dc;right:1.125em;z-index:4}.autocomplete.show-clear.svelte-zbojzr.svelte-zbojzr:not(.hide-arrow)::after{right:2.3em}.autocomplete.svelte-zbojzr .svelte-zbojzr{box-sizing:border-box}.autocomplete-input.svelte-zbojzr.svelte-zbojzr{font:inherit;width:100%;height:100%;padding:5px 11px}.autocomplete.svelte-zbojzr:not(.hide-arrow) .autocomplete-input.svelte-zbojzr{padding-right:2em}.autocomplete.show-clear.svelte-zbojzr:not(.hide-arrow) .autocomplete-input.svelte-zbojzr{padding-right:3.2em}.autocomplete.hide-arrow.show-clear.svelte-zbojzr .autocomplete-input.svelte-zbojzr{padding-right:2em}.autocomplete-list.svelte-zbojzr.svelte-zbojzr{background:#fff;position:relative;width:100%;overflow-y:auto;z-index:99;padding:10px 0;top:0px;border:1px solid #999;max-height:calc(15 * (1rem + 10px) + 15px);-webkit-user-select:none;-moz-user-select:none;user-select:none}.autocomplete-list.svelte-zbojzr.svelte-zbojzr:empty{padding:0}.autocomplete-list-item.svelte-zbojzr.svelte-zbojzr{padding:5px 15px;color:#333;cursor:pointer;line-height:1}.autocomplete-list-item.confirmed.svelte-zbojzr.svelte-zbojzr{background-color:#789fed;color:#fff}.autocomplete-list-item.selected.svelte-zbojzr.svelte-zbojzr{background-color:#2e69e2;color:#fff}.autocomplete-list-item-no-results.svelte-zbojzr.svelte-zbojzr{padding:5px 15px;color:#999;line-height:1}.autocomplete-list-item-create.svelte-zbojzr.svelte-zbojzr{padding:5px 15px;line-height:1}.autocomplete-list-item-loading.svelte-zbojzr.svelte-zbojzr{padding:5px 15px;line-height:1}.autocomplete-list.hidden.svelte-zbojzr.svelte-zbojzr{display:none}.autocomplete.show-clear.svelte-zbojzr .autocomplete-clear-button.svelte-zbojzr{cursor:pointer;display:block;text-align:center;position:absolute;right:0.1em;padding:0.3em 0.6em;top:50%;transform:translateY(-50%);z-index:4}.autocomplete.svelte-zbojzr:not(.show-clear) .autocomplete-clear-button.svelte-zbojzr{display:none}.autocomplete.svelte-zbojzr select.svelte-zbojzr{display:none}.autocomplete.is-multiple.svelte-zbojzr .input-container.svelte-zbojzr{height:auto;box-shadow:inset 0 1px 2px rgba(10, 10, 10, 0.1);border-radius:4px;border:1px solid #b5b5b5;padding-left:0.4em;padding-right:0.4em;display:flex;flex-wrap:wrap;align-items:stretch;background-color:#fff}.autocomplete.is-multiple.svelte-zbojzr .tag.svelte-zbojzr{display:flex;margin-top:0.5em;margin-bottom:0.3em}.autocomplete.is-multiple.svelte-zbojzr .tag.is-delete.svelte-zbojzr{cursor:pointer}.autocomplete.is-multiple.svelte-zbojzr .tags.svelte-zbojzr{margin-right:0.3em;margin-bottom:0}.autocomplete.is-multiple.svelte-zbojzr .autocomplete-input.svelte-zbojzr{display:flex;width:100%;flex:1 1 50px;min-width:3em;border:none;box-shadow:none;background:none}',
  map: null
};
function safeFunction(theFunction, argument) {
  if (typeof theFunction !== "function") {
    console.error("Not a function: " + theFunction + ", argument: " + argument);
    return void 0;
  }
  let result;
  try {
    result = theFunction(argument);
  } catch (error) {
    console.warn("Error executing Autocomplete function on value: " + argument + " function: " + theFunction);
  }
  return result;
}
function safeStringFunction(theFunction, argument) {
  let result = safeFunction(theFunction, argument);
  if (result === void 0 || result === null) {
    result = "";
  }
  if (typeof result !== "string") {
    result = result.toString();
  }
  return result;
}
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const SimpleAutocomplete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showList;
  let clearable;
  let { items = [] } = $$props;
  let { searchFunction = false } = $$props;
  let { labelFieldName = void 0 } = $$props;
  let { keywordsFieldName = labelFieldName } = $$props;
  let { valueFieldName = void 0 } = $$props;
  let { labelFunction = function(item) {
    if (item === void 0 || item === null) {
      return "";
    }
    return labelFieldName ? item[labelFieldName] : item;
  } } = $$props;
  let { keywordsFunction = function(item) {
    if (item === void 0 || item === null) {
      return "";
    }
    return keywordsFieldName ? item[keywordsFieldName] : labelFunction(item);
  } } = $$props;
  let { valueFunction = function(item, forceSingle = false) {
    if (item === void 0 || item === null) {
      return item;
    }
    if (!multiple || forceSingle) {
      return valueFieldName ? item[valueFieldName] : item;
    } else {
      return item.map((i) => valueFieldName ? i[valueFieldName] : i);
    }
  } } = $$props;
  let { keywordsCleanFunction = function(keywords) {
    return keywords;
  } } = $$props;
  let { textCleanFunction = function(userEnteredText) {
    return userEnteredText;
  } } = $$props;
  let { beforeChange = function(oldSelectedItem, newSelectedItem) {
    return true;
  } } = $$props;
  let { onChange = function(newSelectedItem) {
  } } = $$props;
  let { onFocus = function() {
  } } = $$props;
  let { onBlur = function() {
  } } = $$props;
  let { onCreate = function(text2) {
    if (debug) {
      console.log("onCreate: " + text2);
    }
  } } = $$props;
  let { selectFirstIfEmpty = false } = $$props;
  let { minCharactersToSearch = 1 } = $$props;
  let { maxItemsToShowInList = 0 } = $$props;
  let { multiple = false } = $$props;
  let { create = false } = $$props;
  let { ignoreAccents = true } = $$props;
  let { matchAllKeywords = true } = $$props;
  let { sortByMatchedKeywords = false } = $$props;
  let { itemFilterFunction = void 0 } = $$props;
  let { itemSortFunction = void 0 } = $$props;
  let { lock = false } = $$props;
  let { delay = 0 } = $$props;
  let { localFiltering = true } = $$props;
  let { localSorting = true } = $$props;
  let { cleanUserText = true } = $$props;
  let { closeOnBlur = false } = $$props;
  let { hideArrow = false } = $$props;
  let { showClear = false } = $$props;
  let { showLoadingIndicator = false } = $$props;
  let { noResultsText = "No results found" } = $$props;
  let { loadingText = "Loading results..." } = $$props;
  let { moreItemsText = "items not shown" } = $$props;
  let { createText = "Not found, add anyway?" } = $$props;
  let { placeholder = void 0 } = $$props;
  let { className = void 0 } = $$props;
  let { inputClassName = void 0 } = $$props;
  let { inputId = void 0 } = $$props;
  let { name = void 0 } = $$props;
  let { selectName = void 0 } = $$props;
  let { selectId = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { html5autocomplete = void 0 } = $$props;
  let { readonly = void 0 } = $$props;
  let { dropdownClassName = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { noInputStyles = false } = $$props;
  let { required = null } = $$props;
  let { debug = false } = $$props;
  let { tabindex = 0 } = $$props;
  let { selectedItem = multiple ? [] : void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { highlightedItem = void 0 } = $$props;
  const uniqueId = "sautocomplete-" + Math.floor(Math.random() * 1e3);
  let input;
  let list;
  let opened = false;
  let loading = false;
  let highlightIndex = -1;
  let { text } = $$props;
  let filteredListItems;
  let listItems = [];
  function safeLabelFunction(item) {
    return safeStringFunction(labelFunction, item);
  }
  function safeKeywordsFunction(item) {
    const keywords = safeStringFunction(keywordsFunction, item);
    let result = safeStringFunction(keywordsCleanFunction, keywords);
    result = result.toLowerCase().trim();
    if (ignoreAccents) {
      result = removeAccents(result);
    }
    if (debug) {
      console.log("Extracted keywords: '" + result + "' from item: " + JSON.stringify(item));
    }
    return result;
  }
  function prepareListItems() {
    let timerId;
    if (debug) {
      timerId = `Autocomplete prepare list ${inputId ? `(id: ${inputId})` : ""}`;
      console.time(timerId);
      console.log("Prepare items to search");
      console.log("items: " + JSON.stringify(items));
    }
    if (!Array.isArray(items)) {
      console.warn("Autocomplete items / search function did not return array but", items);
      items = [];
    }
    const length = items ? items.length : 0;
    listItems = new Array(length);
    if (length > 0) {
      items.forEach((item, i) => {
        const listItem = getListItem(item);
        if (listItem === void 0) {
          console.log("Undefined item for: ", item);
        }
        listItems[i] = listItem;
      });
    }
    filteredListItems = listItems;
    if (debug) {
      console.log(listItems.length + " items to search");
      console.timeEnd(timerId);
    }
  }
  function getListItem(item) {
    return {
      keywords: localFiltering ? safeKeywordsFunction(item) : [],
      label: safeLabelFunction(item),
      item
    };
  }
  function onSelectedItemChanged() {
    value = valueFunction(selectedItem);
    text = !multiple ? safeLabelFunction(selectedItem) : "";
    filteredListItems = listItems;
    onChange(selectedItem);
  }
  function unselectItem(tag) {
    if (debug) {
      console.log("unselectItem", tag);
    }
    selectedItem = selectedItem.filter((i) => i !== tag);
    input.focus();
  }
  function highlightFilter(keywords, field) {
    return (item) => {
      let label = item[field];
      const newItem = Object.assign({ highlighted: void 0 }, item);
      newItem.highlighted = label;
      const labelLowercase = label.toLowerCase();
      const labelLowercaseNoAc = ignoreAccents ? removeAccents(labelLowercase) : labelLowercase;
      if (keywords && keywords.length) {
        const positions = [];
        for (let i = 0; i < keywords.length; i++) {
          let keyword = keywords[i];
          if (ignoreAccents) {
            keyword = removeAccents(keyword);
          }
          const keywordLen = keyword.length;
          let pos1 = 0;
          do {
            pos1 = labelLowercaseNoAc.indexOf(keyword, pos1);
            if (pos1 >= 0) {
              let pos2 = pos1 + keywordLen;
              positions.push([pos1, pos2]);
              pos1 = pos2;
            }
          } while (pos1 !== -1);
        }
        if (positions.length > 0) {
          const keywordPatterns = /* @__PURE__ */ new Set();
          for (let i = 0; i < positions.length; i++) {
            const pair = positions[i];
            const pos1 = pair[0];
            const pos2 = pair[1];
            const keywordPattern = labelLowercase.substring(pos1, pos2);
            keywordPatterns.add(keywordPattern);
          }
          for (let keywordPattern of keywordPatterns) {
            if (keywordPattern === "b") {
              continue;
            }
            const reg = new RegExp("(" + keywordPattern + ")", "ig");
            const newHighlighted = newItem.highlighted.replace(reg, "<b>$1</b>");
            newItem.highlighted = newHighlighted;
          }
        }
      }
      return newItem;
    };
  }
  function isConfirmed(listItem) {
    if (!selectedItem) {
      return false;
    }
    if (multiple) {
      return selectedItem.includes(listItem);
    } else {
      return listItem === selectedItem;
    }
  }
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.searchFunction === void 0 && $$bindings.searchFunction && searchFunction !== void 0)
    $$bindings.searchFunction(searchFunction);
  if ($$props.labelFieldName === void 0 && $$bindings.labelFieldName && labelFieldName !== void 0)
    $$bindings.labelFieldName(labelFieldName);
  if ($$props.keywordsFieldName === void 0 && $$bindings.keywordsFieldName && keywordsFieldName !== void 0)
    $$bindings.keywordsFieldName(keywordsFieldName);
  if ($$props.valueFieldName === void 0 && $$bindings.valueFieldName && valueFieldName !== void 0)
    $$bindings.valueFieldName(valueFieldName);
  if ($$props.labelFunction === void 0 && $$bindings.labelFunction && labelFunction !== void 0)
    $$bindings.labelFunction(labelFunction);
  if ($$props.keywordsFunction === void 0 && $$bindings.keywordsFunction && keywordsFunction !== void 0)
    $$bindings.keywordsFunction(keywordsFunction);
  if ($$props.valueFunction === void 0 && $$bindings.valueFunction && valueFunction !== void 0)
    $$bindings.valueFunction(valueFunction);
  if ($$props.keywordsCleanFunction === void 0 && $$bindings.keywordsCleanFunction && keywordsCleanFunction !== void 0)
    $$bindings.keywordsCleanFunction(keywordsCleanFunction);
  if ($$props.textCleanFunction === void 0 && $$bindings.textCleanFunction && textCleanFunction !== void 0)
    $$bindings.textCleanFunction(textCleanFunction);
  if ($$props.beforeChange === void 0 && $$bindings.beforeChange && beforeChange !== void 0)
    $$bindings.beforeChange(beforeChange);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  if ($$props.onFocus === void 0 && $$bindings.onFocus && onFocus !== void 0)
    $$bindings.onFocus(onFocus);
  if ($$props.onBlur === void 0 && $$bindings.onBlur && onBlur !== void 0)
    $$bindings.onBlur(onBlur);
  if ($$props.onCreate === void 0 && $$bindings.onCreate && onCreate !== void 0)
    $$bindings.onCreate(onCreate);
  if ($$props.selectFirstIfEmpty === void 0 && $$bindings.selectFirstIfEmpty && selectFirstIfEmpty !== void 0)
    $$bindings.selectFirstIfEmpty(selectFirstIfEmpty);
  if ($$props.minCharactersToSearch === void 0 && $$bindings.minCharactersToSearch && minCharactersToSearch !== void 0)
    $$bindings.minCharactersToSearch(minCharactersToSearch);
  if ($$props.maxItemsToShowInList === void 0 && $$bindings.maxItemsToShowInList && maxItemsToShowInList !== void 0)
    $$bindings.maxItemsToShowInList(maxItemsToShowInList);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.create === void 0 && $$bindings.create && create !== void 0)
    $$bindings.create(create);
  if ($$props.ignoreAccents === void 0 && $$bindings.ignoreAccents && ignoreAccents !== void 0)
    $$bindings.ignoreAccents(ignoreAccents);
  if ($$props.matchAllKeywords === void 0 && $$bindings.matchAllKeywords && matchAllKeywords !== void 0)
    $$bindings.matchAllKeywords(matchAllKeywords);
  if ($$props.sortByMatchedKeywords === void 0 && $$bindings.sortByMatchedKeywords && sortByMatchedKeywords !== void 0)
    $$bindings.sortByMatchedKeywords(sortByMatchedKeywords);
  if ($$props.itemFilterFunction === void 0 && $$bindings.itemFilterFunction && itemFilterFunction !== void 0)
    $$bindings.itemFilterFunction(itemFilterFunction);
  if ($$props.itemSortFunction === void 0 && $$bindings.itemSortFunction && itemSortFunction !== void 0)
    $$bindings.itemSortFunction(itemSortFunction);
  if ($$props.lock === void 0 && $$bindings.lock && lock !== void 0)
    $$bindings.lock(lock);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.localFiltering === void 0 && $$bindings.localFiltering && localFiltering !== void 0)
    $$bindings.localFiltering(localFiltering);
  if ($$props.localSorting === void 0 && $$bindings.localSorting && localSorting !== void 0)
    $$bindings.localSorting(localSorting);
  if ($$props.cleanUserText === void 0 && $$bindings.cleanUserText && cleanUserText !== void 0)
    $$bindings.cleanUserText(cleanUserText);
  if ($$props.closeOnBlur === void 0 && $$bindings.closeOnBlur && closeOnBlur !== void 0)
    $$bindings.closeOnBlur(closeOnBlur);
  if ($$props.hideArrow === void 0 && $$bindings.hideArrow && hideArrow !== void 0)
    $$bindings.hideArrow(hideArrow);
  if ($$props.showClear === void 0 && $$bindings.showClear && showClear !== void 0)
    $$bindings.showClear(showClear);
  if ($$props.showLoadingIndicator === void 0 && $$bindings.showLoadingIndicator && showLoadingIndicator !== void 0)
    $$bindings.showLoadingIndicator(showLoadingIndicator);
  if ($$props.noResultsText === void 0 && $$bindings.noResultsText && noResultsText !== void 0)
    $$bindings.noResultsText(noResultsText);
  if ($$props.loadingText === void 0 && $$bindings.loadingText && loadingText !== void 0)
    $$bindings.loadingText(loadingText);
  if ($$props.moreItemsText === void 0 && $$bindings.moreItemsText && moreItemsText !== void 0)
    $$bindings.moreItemsText(moreItemsText);
  if ($$props.createText === void 0 && $$bindings.createText && createText !== void 0)
    $$bindings.createText(createText);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.inputClassName === void 0 && $$bindings.inputClassName && inputClassName !== void 0)
    $$bindings.inputClassName(inputClassName);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.selectName === void 0 && $$bindings.selectName && selectName !== void 0)
    $$bindings.selectName(selectName);
  if ($$props.selectId === void 0 && $$bindings.selectId && selectId !== void 0)
    $$bindings.selectId(selectId);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.html5autocomplete === void 0 && $$bindings.html5autocomplete && html5autocomplete !== void 0)
    $$bindings.html5autocomplete(html5autocomplete);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.dropdownClassName === void 0 && $$bindings.dropdownClassName && dropdownClassName !== void 0)
    $$bindings.dropdownClassName(dropdownClassName);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.noInputStyles === void 0 && $$bindings.noInputStyles && noInputStyles !== void 0)
    $$bindings.noInputStyles(noInputStyles);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.debug === void 0 && $$bindings.debug && debug !== void 0)
    $$bindings.debug(debug);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.selectedItem === void 0 && $$bindings.selectedItem && selectedItem !== void 0)
    $$bindings.selectedItem(selectedItem);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.highlightedItem === void 0 && $$bindings.highlightedItem && highlightedItem !== void 0)
    $$bindings.highlightedItem(highlightedItem);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.highlightFilter === void 0 && $$bindings.highlightFilter && highlightFilter !== void 0)
    $$bindings.highlightFilter(highlightFilter);
  $$result.css.add(css$3);
  {
    searchFunction || prepareListItems();
  }
  {
    onSelectedItemChanged();
  }
  highlightedItem = filteredListItems && highlightIndex && highlightIndex >= 0 && highlightIndex < filteredListItems.length ? filteredListItems[highlightIndex].item : null;
  showList = opened;
  clearable = showClear || (lock || multiple) && selectedItem;
  return `<div class="${[
    escape(className ? className : "", true) + " " + escape(hideArrow || !items.length ? "hide-arrow" : "", true) + " " + escape(multiple ? "is-multiple" : "", true) + " autocomplete select is-fullwidth " + escape(uniqueId, true) + " svelte-zbojzr",
    (clearable ? "show-clear" : "") + " " + (showLoadingIndicator && loading ? "is-loading" : "")
  ].join(" ").trim()}"><select${add_attribute("name", selectName, 0)}${add_attribute("id", selectId, 0)} ${multiple ? "multiple" : ""} class="${"svelte-zbojzr"}">${!multiple && value ? `<option${add_attribute("value", value, 0)} selected class="${"svelte-zbojzr"}">${escape(text)}</option>` : `${multiple && selectedItem ? `${each(selectedItem, (i) => {
    return `<option${add_attribute("value", valueFunction(i, true), 0)} selected class="${"svelte-zbojzr"}">${escape(safeLabelFunction(i))}
        </option>`;
  })}` : ``}`}</select>
  <div class="${"input-container svelte-zbojzr"}">${multiple && selectedItem ? `${each(selectedItem, (tagItem) => {
    return `${slots.tag ? slots.tag({
      label: safeLabelFunction(tagItem),
      item: tagItem,
      unselectItem
    }) : `
          <div class="${"tags has-addons svelte-zbojzr"}"><span class="${"tag svelte-zbojzr"}">${escape(safeLabelFunction(tagItem))}</span>
            <span class="${"tag is-delete svelte-zbojzr"}"></span></div>
        `}`;
  })}` : ``}
    <input type="${"text"}" class="${escape(inputClassName ? inputClassName : "", true) + " " + escape(noInputStyles ? "" : "input autocomplete-input", true) + " svelte-zbojzr"}"${add_attribute("id", inputId ? inputId : "", 0)}${add_attribute("autocomplete", html5autocomplete ? "on" : "off", 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("name", name, 0)} ${disabled ? "disabled" : ""} ${required ? "required" : ""}${add_attribute("title", title, 0)} ${readonly || lock && selectedItem ? "readonly" : ""}${add_attribute("tabindex", tabindex, 0)}${add_attribute("this", input, 0)}${add_attribute("value", text, 0)}>
    ${clearable ? `<span class="${"autocomplete-clear-button svelte-zbojzr"}">\u2716</span>` : ``}</div>
  <div class="${escape(dropdownClassName ? dropdownClassName : "", true) + " autocomplete-list " + escape(showList ? "" : "hidden", true) + " is-fullwidth svelte-zbojzr"}"${add_attribute("this", list, 0)}>${filteredListItems && filteredListItems.length > 0 ? `${each(filteredListItems, (listItem, i) => {
    return `${listItem && (maxItemsToShowInList <= 0 || i < maxItemsToShowInList) ? `<div class="${[
      "autocomplete-list-item " + escape(i === highlightIndex ? "selected" : "", true) + " svelte-zbojzr",
      isConfirmed(listItem.item) ? "confirmed" : ""
    ].join(" ").trim()}">${slots.item ? slots.item({
      item: listItem.item,
      label: listItem.highlighted ? listItem.highlighted : listItem.label
    }) : `
              ${listItem.highlighted ? `<!-- HTML_TAG_START -->${listItem.highlighted}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${listItem.label}<!-- HTML_TAG_END -->`}
            `}
          </div>` : ``}`;
  })}

      ${maxItemsToShowInList > 0 && filteredListItems.length > maxItemsToShowInList ? `${moreItemsText ? `<div class="${"autocomplete-list-item-no-results svelte-zbojzr"}">...${escape(filteredListItems.length - maxItemsToShowInList)}
            ${escape(moreItemsText)}</div>` : ``}` : ``}` : `${`${create ? `<div class="${"autocomplete-list-item-create svelte-zbojzr"}">${slots.create ? slots.create({ createText }) : `${escape(createText)}`}</div>` : `${noResultsText ? `<div class="${"autocomplete-list-item-no-results svelte-zbojzr"}">${slots["no-results"] ? slots["no-results"]({ noResultsText }) : `${escape(noResultsText)}`}</div>` : ``}`}`}`}</div></div>

`;
});
const Autocomplete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $NUEVA_ENTIDAD, $$unsubscribe_NUEVA_ENTIDAD;
  $$unsubscribe_NUEVA_ENTIDAD = subscribe(NUEVA_ENTIDAD, (value) => $NUEVA_ENTIDAD = value);
  let { tipoEntidad } = $$props;
  let itemSeleccionado;
  const getItemsPadres = async () => {
    const query = tipoEntidad.split("Ref")[0];
    const res = await fetch(`/api/queries-fetcher`, buildRequest(query));
    const response = await res.json();
    return (response == null ? void 0 : response[query]) ?? [];
  };
  if ($$props.tipoEntidad === void 0 && $$bindings.tipoEntidad && tipoEntidad !== void 0)
    $$bindings.tipoEntidad(tipoEntidad);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(SimpleAutocomplete, "AutoComplete").$$render($$result, {
      searchFunction: async () => await getItemsPadres(),
      labelFieldName: "dis",
      maxItemsToShowInList: "10",
      inputClassName: "appearance-none block w-full  h-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4  focus:outline-none focus:bg-white focus:border-gray-500",
      className: "appearance-none block  py-2  leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
      noResultsText: "El sitio que busca no est\xE1 registrado",
      delay: "500",
      showLoadingIndicator: "true",
      localFiltering: "false",
      onChange: () => {
        $NUEVA_ENTIDAD[tipoEntidad] = itemSeleccionado == null ? void 0 : itemSeleccionado.id;
        $NUEVA_ENTIDAD["tags"][tipoEntidad] = itemSeleccionado == null ? void 0 : itemSeleccionado.id;
      },
      selectedItem: itemSeleccionado
    }, {
      selectedItem: ($$value) => {
        itemSeleccionado = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  $$unsubscribe_NUEVA_ENTIDAD();
  return $$rendered;
});
const Checkbox_List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_NUEVA_ENTIDAD;
  $$unsubscribe_NUEVA_ENTIDAD = subscribe(NUEVA_ENTIDAD, (value) => value);
  let { data } = $$props;
  createEventDispatcher();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_NUEVA_ENTIDAD();
  return `
<div class="${"overflow-y-scroll flex flex-wrap -mx-3 mb-6 h-52"}">
	<div class="${"w-full px-3 "}"><div class="${"grid grid-cols-2 gap-4 mt-5 ml-4"}">${each(data, (element) => {
    return `<div class="${"flex items-center mb-4"}"><input${add_attribute("id", element.tag, 0)} type="${"checkbox"}"${add_attribute("value", element.tag, 0)} class="${"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}">
					<label${add_attribute("for", element.tag, 0)} class="${"ml-2 text-sm font-medium text-gray-900 dark:text-green-300"}" data-bs-toggle="${"tooltip"}"${add_attribute("title", element.descripcion, 0)}>${escape(element.tag)}</label>
				</div>`;
  })}</div>

		</div></div>
`;
});
const Autocomplete_identificadores = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $NUEVA_ENTIDAD, $$unsubscribe_NUEVA_ENTIDAD;
  $$unsubscribe_NUEVA_ENTIDAD = subscribe(NUEVA_ENTIDAD, (value) => $NUEVA_ENTIDAD = value);
  let { tipoEntidad } = $$props;
  let itemSeleccionado;
  let items = [];
  const getSitesDuplicados = async () => {
    const res = await fetch(`/api/queries-fetcher`, buildRequest(tipoEntidad));
    const response = await res.json();
    const result = (response == null ? void 0 : response[tipoEntidad]) ?? [];
    if (result.length === 0)
      ;
    items = result;
    return result;
  };
  const getUnknowId = (inputText) => {
    set_store_value(NUEVA_ENTIDAD, $NUEVA_ENTIDAD["id"] = inputText, $NUEVA_ENTIDAD);
    set_store_value(NUEVA_ENTIDAD, $NUEVA_ENTIDAD["tags"]["id"] = inputText, $NUEVA_ENTIDAD);
  };
  if ($$props.tipoEntidad === void 0 && $$bindings.tipoEntidad && tipoEntidad !== void 0)
    $$bindings.tipoEntidad(tipoEntidad);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(SimpleAutocomplete, "AutoComplete").$$render($$result, {
      searchFunction: async () => await getSitesDuplicados(),
      items,
      labelFieldName: "id",
      name: "ok",
      maxItemsToShowInList: "10",
      inputClassName: "appearance-none block w-full  h-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4  focus:outline-none focus:bg-white focus:border-gray-500",
      className: "appearance-none block  py-2  leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
      noResultsText: "El sitio que busca no est\xE1 registrado",
      delay: "500",
      createText: "Presione enter para agregar",
      showLoadingIndicator: "true",
      localFiltering: "false",
      create: "true",
      onCreate: getUnknowId,
      onChange: () => {
        $NUEVA_ENTIDAD[tipoEntidad] = itemSeleccionado == null ? void 0 : itemSeleccionado.id;
        $NUEVA_ENTIDAD["tags"][tipoEntidad] = itemSeleccionado == null ? void 0 : itemSeleccionado.id;
      },
      selectedItem: itemSeleccionado
    }, {
      selectedItem: ($$value) => {
        itemSeleccionado = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  $$unsubscribe_NUEVA_ENTIDAD();
  return $$rendered;
});
var EquipoForm_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".noRef.svelte-134yvsw{width:100%\n}")();
const css$2 = {
  code: ".noRef.svelte-134yvsw{width:100%\n}",
  map: null
};
const EquipoForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cont;
  let texto;
  let $$unsubscribe_NUEVA_ENTIDAD;
  $$unsubscribe_NUEVA_ENTIDAD = subscribe(NUEVA_ENTIDAD, (value) => value);
  let { etiquetas } = $$props;
  let { haystackTags } = $$props;
  let hayStackFiltrado;
  if ($$props.etiquetas === void 0 && $$bindings.etiquetas && etiquetas !== void 0)
    $$bindings.etiquetas(etiquetas);
  if ($$props.haystackTags === void 0 && $$bindings.haystackTags && haystackTags !== void 0)
    $$bindings.haystackTags(haystackTags);
  $$result.css.add(css$2);
  cont = 0;
  hayStackFiltrado = [];
  texto = "";
  $$unsubscribe_NUEVA_ENTIDAD();
  return `<div class="${"w-full max-w-lg"}"><div class="${"flex flex-wrap -mx-3 mb-6"}"><div class="${"w-full px-3 mb-6 md:mb-0"}">${etiquetas ? `<div class="${"grid grid-cols-2 gap-4"}">${each(etiquetas, (etiqueta) => {
    var _a;
    return `${etiqueta.nombre && etiqueta.requerido !== false ? `<div class="${"noRef  svelte-134yvsw"}"><label class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}" for="${"grid-last-name"}">${escape(etiqueta.nombre)}
									${escape(etiqueta.requerido ? " *" : "")}</label>
								${etiqueta.tag.includes("Ref") ? `${validate_component(Autocomplete, "Autocomplete").$$render($$result, { tipoEntidad: etiqueta.tag }, {}, {})}` : `${etiqueta.tag.includes("id") ? `${validate_component(Autocomplete_identificadores, "AutocompleteIdentificador").$$render($$result, { tipoEntidad: "equip" }, {}, {})}` : `<input class="${"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}"${add_attribute("id", etiqueta.tag, 0)} type="${"text"}"${add_attribute("placeholder", ((_a = etiqueta.haystack_tag) == null ? void 0 : _a.descripcion) ?? "", 0)}>`}`}
							</div>` : ``}`;
  })}</div>` : ``}</div></div>

	<div class="${"flex flex-wrap -mx-3 mb-6"}"><div class="${"w-full px-3 "}"><label class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}" for="${"grid-password"}">Etiquetas Frecuentes
			</label>
			${!cont ? `<p class="${"text-red-500 text-xs italic"}">No existen etiquetas disponibles</p>` : ``}
			${etiquetas ? `<div class="${"grid grid-cols-3 gap-4 mt-5 ml-4"}">${each(etiquetas, (etiqueta) => {
    return `${!(etiqueta == null ? void 0 : etiqueta.nombre) ? `${validate_component(Checkbox_componet, "CheckboxComponet").$$render($$result, { data: etiqueta }, {}, {})}` : ``}`;
  })}</div>` : `<p class="${"text-red-500 text-xs italic"}">Seleccione un tipo de entidad</p>`}</div></div>
	<input class="${"appearance-none block w-full mb-5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}"${add_attribute("id", "filter", 0)} type="${"text"}"${add_attribute("placeholder", "Buscar etiqueta...", 0)}${add_attribute("value", texto, 0)}>
	${validate_component(Checkbox_List, "CheckboxList").$$render($$result, {
    data: hayStackFiltrado && texto ? hayStackFiltrado : haystackTags
  }, {}, {})}
</div>`;
});
var PuntoForm_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".noRef.svelte-134yvsw{width:100%\n}")();
const css$1 = {
  code: ".noRef.svelte-134yvsw{width:100%\n}",
  map: null
};
const PuntoForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let texto;
  let $$unsubscribe_NUEVA_ENTIDAD;
  $$unsubscribe_NUEVA_ENTIDAD = subscribe(NUEVA_ENTIDAD, (value) => value);
  let { etiquetas } = $$props;
  let { haystackTags } = $$props;
  let hayStackFiltrado;
  let parametro;
  if ($$props.etiquetas === void 0 && $$bindings.etiquetas && etiquetas !== void 0)
    $$bindings.etiquetas(etiquetas);
  if ($$props.haystackTags === void 0 && $$bindings.haystackTags && haystackTags !== void 0)
    $$bindings.haystackTags(haystackTags);
  $$result.css.add(css$1);
  hayStackFiltrado = [];
  texto = "";
  $$unsubscribe_NUEVA_ENTIDAD();
  return `<div class="${"w-full max-w-lg"}"><div class="${"flex flex-wrap -mx-3 mb-6"}"><div class="${"w-full px-3 mb-6 md:mb-0"}">${etiquetas ? `<div class="${"grid grid-cols-2 gap-4"}">${each(etiquetas, (etiqueta) => {
    var _a;
    return `${etiqueta.nombre && etiqueta.requerido !== false ? `<div class="${"noRef  svelte-134yvsw"}"><label class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}" for="${"grid-last-name"}">${escape(etiqueta.nombre)}
									${escape(etiqueta.requerido ? " *" : "")}</label>
								${etiqueta.tag.includes("Ref") ? `${validate_component(Autocomplete, "Autocomplete").$$render($$result, { tipoEntidad: etiqueta.tag }, {}, {})}` : `<input class="${"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}"${add_attribute("id", etiqueta.tag, 0)} type="${"text"}"${add_attribute("placeholder", ((_a = etiqueta.haystack_tag) == null ? void 0 : _a.descripcion) ?? "", 0)}>`}
							</div>` : ``}`;
  })}</div>
				<label class="${"block uppercase tracking-wide text-gray-700 text-xs mt-4 font-bold mb-2"}" for="${"grid-last-name"}">${escape("Par\xE1metro Esperado *")}</label>
				<input class="${"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}"${add_attribute("id", "clave_esperada", 0)} type="${"text"}"${add_attribute("placeholder", "Nombre del par\xE1metro que contendr\xE1 el valor sensado por este Punto", 0)}${add_attribute("value", parametro, 0)}>` : ``}</div></div>

	<div class="${"flex flex-wrap -mx-3 mb-6"}"><div class="${"w-full px-3 "}"><label class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}" for="${"grid-password"}">Etiquetas Frecuentes
			</label>
			${`<p class="${"text-red-500 text-xs italic"}">No existen etiquetas disponibles</p>`}
			${etiquetas ? `<div class="${"grid grid-cols-3 gap-4 mt-5 ml-4"}">${each(etiquetas, (etiqueta) => {
    return `${!(etiqueta == null ? void 0 : etiqueta.nombre) ? `${validate_component(Checkbox_componet, "CheckboxComponet").$$render($$result, { data: etiqueta }, {}, {})}` : ``}`;
  })}</div>` : `<p class="${"text-red-500 text-xs italic"}">Seleccione un tipo de entidad</p>`}</div></div>
	<input class="${"appearance-none block w-full mb-5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}"${add_attribute("id", "filter", 0)} type="${"text"}"${add_attribute("placeholder", "Buscar etiqueta...", 0)}${add_attribute("value", texto, 0)}>
	${validate_component(Checkbox_List, "CheckboxList").$$render($$result, {
    data: hayStackFiltrado && texto ? hayStackFiltrado : haystackTags
  }, {}, {})}
</div>`;
});
var SitioForm_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".noRef.svelte-134yvsw{width:100%\n}")();
const css = {
  code: ".noRef.svelte-134yvsw{width:100%\n}",
  map: null
};
const SitioForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cont;
  let texto;
  let $$unsubscribe_NUEVA_ENTIDAD;
  $$unsubscribe_NUEVA_ENTIDAD = subscribe(NUEVA_ENTIDAD, (value) => value);
  let { etiquetas } = $$props;
  let { haystackTags } = $$props;
  let hayStackFiltrado;
  if ($$props.etiquetas === void 0 && $$bindings.etiquetas && etiquetas !== void 0)
    $$bindings.etiquetas(etiquetas);
  if ($$props.haystackTags === void 0 && $$bindings.haystackTags && haystackTags !== void 0)
    $$bindings.haystackTags(haystackTags);
  $$result.css.add(css);
  cont = 0;
  hayStackFiltrado = [];
  texto = "";
  $$unsubscribe_NUEVA_ENTIDAD();
  return `<div class="${"w-full max-w-lg"}"><div class="${"flex flex-wrap -mx-3 mb-6"}"><div class="${"w-full px-3 mb-6 md:mb-0"}">${etiquetas ? `<div class="${"grid grid-cols-2 gap-4"}">${each(etiquetas, (etiqueta) => {
    var _a;
    return `${etiqueta.nombre && etiqueta.requerido !== false ? `<div class="${"noRef svelte-134yvsw"}"><label class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}" for="${"grid-last-name"}">${escape(etiqueta.nombre)}
									${escape(etiqueta.requerido ? " *" : "")}</label>
								${etiqueta.tag.includes("id") ? `${validate_component(Autocomplete_identificadores, "AutocompleteIdentificador").$$render($$result, { tipoEntidad: "site" }, {}, {})}` : `<input class="${"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}"${add_attribute("id", etiqueta.tag, 0)} type="${"text"}"${add_attribute("placeholder", ((_a = etiqueta.haystack_tag) == null ? void 0 : _a.descripcion) ?? "", 0)}>`}
							</div>` : ``}`;
  })}</div>` : ``}</div></div>

	<div class="${"flex flex-wrap -mx-3 mb-6"}"><div class="${"w-full px-3 "}"><label class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}" for="${"grid-password"}">Etiquetas Frecuentes:
			</label>
			${!cont ? `<p class="${"text-red-500 text-xs italic"}">No existen etiquetas frecuentes</p>` : ``}
			${etiquetas ? `<div class="${"grid grid-cols-3 gap-4 mt-5 ml-4"}">${each(etiquetas, (etiqueta) => {
    return `${!(etiqueta == null ? void 0 : etiqueta.nombre) ? `${validate_component(Checkbox_componet, "CheckboxComponet").$$render($$result, { data: etiqueta }, {}, {})}` : ``}`;
  })}</div>` : `<p class="${"text-red-500 text-xs italic"}">Seleccione un tipo de entidad</p>`}</div></div>
	<input class="${"appearance-none block w-full mb-5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}"${add_attribute("id", "filter", 0)} type="${"text"}"${add_attribute("placeholder", "Buscar etiqueta...", 0)}${add_attribute("value", texto, 0)}>
	${validate_component(Checkbox_List, "CheckboxList").$$render($$result, {
    data: hayStackFiltrado && texto ? hayStackFiltrado : haystackTags
  }, {}, {})}
</div>`;
});
const Registrar_modulo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_NUEVA_ENTIDAD;
  $$unsubscribe_NUEVA_ENTIDAD = subscribe(NUEVA_ENTIDAD, (value) => value);
  let entidadSeleccionada;
  let etiquetas;
  let haystackTags;
  const getEtiquetas = async () => {
    etiquetas = null;
    const variables = { entidad_id: entidadSeleccionada.id };
    const res = await fetch(`/api/queries-fetcher`, buildRequest("etiquetas", variables));
    const response = await res.json();
    etiquetas = (response == null ? void 0 : response.etiquetas) ?? [];
  };
  const getEntidades = async () => {
    const res = await fetch(`/api/queries-fetcher`, buildRequest("entidades"));
    const response = await res.json();
    return (response == null ? void 0 : response.entidades) ?? [];
  };
  etiquetas = null;
  {
    {
      if (entidadSeleccionada == null ? void 0 : entidadSeleccionada.id) {
        getEtiquetas();
      }
    }
  }
  $$unsubscribe_NUEVA_ENTIDAD();
  return `<div class="${"mx-auto md:min-h-screen mt-7 flex flex-col justify-center items-center px-6 pt-2 pt:mb-10"}"><div class="${"bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0 "}"><div class="${"p-6 sm:p-8 lg:p-16 space-y-8"}"><h2 class="${"text-2xl lg:text-3xl font-bold text-gray-900"}">Registrar Entidad</h2>
			<form class="${"w-full max-w-lg"}"><div class="${"flex flex-wrap -mx-3 mb-6"}"><div class="${"w-full px-3 mb-6 md:mb-0"}"><label class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}" for="${"grid-first-name"}">Tipo
						</label>
						<div class="${"relative"}"><select class="${"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}" id="${"grid-state"}"><option${add_attribute("value", {}, 0)}>Seleccione un tipo de Entidad</option>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
									<option${add_attribute("value", {}, 0)}>Cargando</option>
								`;
    }
    return function(entidades) {
      return `
									${each(entidades, (entidad) => {
        return `<option${add_attribute("value", entidad, 0)}>${escape(entidad.nombre)}</option>`;
      })}
								`;
    }(__value);
  }(getEntidades())}</select>
							<div class="${"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"}"><svg class="${"fill-current h-4 w-4"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}"><path d="${"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}"></path></svg></div></div></div></div>
				${etiquetas && haystackTags ? `${entidadSeleccionada.tipo === "equip" ? `${validate_component(EquipoForm, "EquipoForm").$$render($$result, { etiquetas, haystackTags }, {}, {})}` : `${entidadSeleccionada.tipo === "site" ? `${validate_component(SitioForm, "SitioForm").$$render($$result, { etiquetas, haystackTags }, {}, {})}` : `${entidadSeleccionada.tipo === "point" ? `${validate_component(PuntoForm, "PuntoForm").$$render($$result, { etiquetas, haystackTags }, {}, {})}` : ``}`}`}` : ``}
				<div class="${"text-center lg:text-center"}"><button type="${"button"}" class="${"inline-block px-7 py-3 bg-slate-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-stone-500 hover:shadow-lg ease-in-out"}">Guardar
					</button></div></form></div></div>
</div>`;
});
export { Registrar_modulo as default };
