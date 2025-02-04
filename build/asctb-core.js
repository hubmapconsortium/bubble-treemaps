const MASTER_TABLE_BASE_PATH = 'https://docs.google.com/spreadsheets/d/1tK916JyG5ZSXW_cXfsyZnzXfjyoN-8B2GXLbYD6_vF0/gviz/tq?tqx=out:csv'
const AZIMUTH_COUNT_SRC_BASE_PATH = 'https://hubmapconsortium.github.io/asctb-azimuth-data-comparison'
const CZI_COUNT_SRC_BASE_PATH = './html'
const Dataset = Object.freeze({
  Unknown: 0,
  Blood: 1,
  BloodVasculature: 2,
  BoneMarrow: 3,
  Brain: 4,
  Eye: 5,
  FallopianTube: 6,
  Heart: 7,
  Kidney: 8,
  Knee: 9,
  LargeIntestine: 10,
  Liver: 11,
  Lung: 12,
  LymphNode: 13,
  LymphVasulature: 14,
  Ovary: 15,
  Pancreas: 16,
  PeripheralNervousSystem: 17,
  Prostate: 18,
  Skin: 19,
  SmallIntestine: 20,
  Spleen: 21,
  Thymus: 22,
  Ureter: 23,
  UrinaryBladder: 24,
  Uterus: 25 
});
const CountSource = Object.freeze({
  Unknown: 0,
  Azimuth: 1,
  CZI: 2
})
const LabelingMethod = Object.freeze({
  Unknown: 0,
  TopNLeaves: 1,
  LargeClusters: 2,
  FTUNodes: 3,
});
const CTMatchType = Object.freeze({
  Unknown: 0,
  ID: 1,
  Name: 2,
});
const SettingsPreset = Object.freeze({
  [Dataset.Unknown]: {
    asctCsvSrc: null,
    azimuthCsvSrc: null,
    cziCsvSrc: null,
    superTypesSrc: null,
    rootTitle: '',
    ctMatchType: CTMatchType.Unknown
  },
  [Dataset.Blood]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Blood_v1.1`,
    azimuthCsvSrc: `${AZIMUTH_COUNT_SRC_BASE_PATH}/pbmc.csv`,
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_blood.csv`,
    rootTitle: 'Blood v1.1',
    ctMatchType: CTMatchType.ID
  },
  [Dataset.BloodVasculature]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Blood_Vasculature_v1.1`,
    azimuthCsvSrc: null,
    rootTitle: 'Blood Vasculature v1.1',
    ctMatchType: CTMatchType.Unknown
  },
  [Dataset.BoneMarrow]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Bone_Marrow_v1.1`,
    azimuthCsvSrc: `${AZIMUTH_COUNT_SRC_BASE_PATH}/bone_marrow.csv`,
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_bone_barrow.csv`,
    rootTitle: 'Bone Marrow v1.1',
    ctMatchType: CTMatchType.ID
  },
  [Dataset.Brain]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Brain_v1.1`,
    azimuthCsvSrc: `${AZIMUTH_COUNT_SRC_BASE_PATH}/motor_cortex.csv`,
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_brain.csv`,
    rootTitle: 'Brain v1.1',
    ctMatchType: CTMatchType.Name
  },
  [Dataset.Eye]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Eye_v1.0`,
    azimuthCsvSrc: null,
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_eye.csv`,
    superTypesSrc: './html/SuperTypes_Eye.csv',
    rootTitle: 'Eye v1.0',
    ctMatchType: CTMatchType.ID
  },
  [Dataset.FallopianTube]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Fallopian_Tube_v1.0`,
    azimuthCsvSrc: null,
    rootTitle: 'Fallopian Tube v1.0',
    ctMatchType: CTMatchType.Unknown
  },
  [Dataset.Heart]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Heart_v1.1`,
    azimuthCsvSrc: null,
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_heart.csv`,
    rootTitle: 'Heart v1.1',
    ctMatchType: CTMatchType.ID
  },
  [Dataset.Kidney]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Kidney_v1.1`,
    azimuthCsvSrc: `${AZIMUTH_COUNT_SRC_BASE_PATH}/kidney.csv`,
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_kidney.csv`,
    superTypesSrc: './html/SuperTypes_Kidney.csv',
    rootTitle: 'Kidney',
    ctMatchType: CTMatchType.ID
  },
  [Dataset.Knee]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Knee_v1.0`,
    azimuthCsvSrc: null,
    rootTitle: 'Knee v1.0',
    ctMatchType: CTMatchType.Unknown
  },
  [Dataset.LargeIntestine]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Large_Intestine_v1.1`,
    azimuthCsvSrc: null,
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_large_intestine.csv`,
    rootTitle: 'Large Intestine v1.1',
    ctMatchType: CTMatchType.ID
  },
  [Dataset.Liver]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Liver_v1.0`,
    azimuthCsvSrc: null,
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_liver.csv`,
    rootTitle: 'Liver v1.0',
    ctMatchType: CTMatchType.ID
  },
  [Dataset.Lung]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Lung_v1.1`,
    azimuthCsvSrc: `${AZIMUTH_COUNT_SRC_BASE_PATH}/lung.csv`,
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_lung.csv`,
    rootTitle: 'Lung v1.1',
    ctMatchType: CTMatchType.ID
  },
  [Dataset.LymphNode]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Lymph_Node_v1.1`,
    azimuthCsvSrc: null,
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_lymph_node.csv`,
    rootTitle: 'Lymph Node v1.1',
    ctMatchType: CTMatchType.ID
  },
  [Dataset.LymphVasulature]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Lymph_Vasculature_v1.0`,
    azimuthCsvSrc: null,
    rootTitle: 'Lymph Vasculature v1.0',
    ctMatchType: CTMatchType.Unknown
  },
  [Dataset.Ovary]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Ovary_v1.0`,
    azimuthCsvSrc: null,
    rootTitle: 'Ovary v1.0',
    ctMatchType: CTMatchType.Unknown
  },
  [Dataset.Pancreas]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Pancreas_v1.0`,
    azimuthCsvSrc: `${AZIMUTH_COUNT_SRC_BASE_PATH}/pancreas.csv`,
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_pancreas.csv`,
    rootTitle: 'Pancreas v1.0',
    ctMatchType: CTMatchType.ID
  },
  [Dataset.PeripheralNervousSystem]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Peripheral_Nervous_System_v1.0`,
    azimuthCsvSrc: null,
    rootTitle: 'Peripheral Nervous System v1.0',
    ctMatchType: CTMatchType.Unknown
  },
  [Dataset.Prostate]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Prostate_v1.0`,
    azimuthCsvSrc: null,
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_prostate.csv`,
    rootTitle: 'Prostate v1.0',
    ctMatchType: CTMatchType.ID
  },
  [Dataset.Skin]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Skin_v1.1`,
    azimuthCsvSrc: null,
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_skin.csv`,
    rootTitle: 'Skin v1.1',
    ctMatchType: CTMatchType.ID
  },
  [Dataset.SmallIntestine]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Small_Intestine_v1.0`,
    azimuthCsvSrc: null,
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_small_intestine.csv`,
    rootTitle: 'Small Intestine v1.0',
    ctMatchType: CTMatchType.ID
  },
  [Dataset.Spleen]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Spleen_v1.1`,
    azimuthCsvSrc: './html/azimuth-spleen-cell-sets.json.csv',
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_spleen.csv`,
    superTypesSrc: './html/SuperTypes_Spleen.csv',
    rootTitle: 'Spleen',
    ctMatchType: CTMatchType.ID
  },
  [Dataset.Thymus]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Thymus_v1.1`,
    azimuthCsvSrc: null,
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_thymus.csv`,
    rootTitle: 'Thymus v1.1',
    ctMatchType: CTMatchType.ID
  },
  [Dataset.Ureter]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Ureter_v1.0`,
    azimuthCsvSrc: null,
    rootTitle: 'Ureter v1.0',
    ctMatchType: CTMatchType.Unknown
  },
  [Dataset.UrinaryBladder]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Urinary_Bladder_v1.0`,
    azimuthCsvSrc: null,
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_urinary_bladder.csv`,
    rootTitle: 'Urinary Bladder v1.0',
    ctMatchType: CTMatchType.ID
  },
  [Dataset.Uterus]: {
    asctCsvSrc: `${MASTER_TABLE_BASE_PATH}&sheet=Uterus_v1.0`,
    azimuthCsvSrc: null,
    cziCsvSrc: `${CZI_COUNT_SRC_BASE_PATH}/CxG_uterus.csv`,
    rootTitle: 'Uterus v1.0',
    ctMatchType: CTMatchType.ID
  }
});
const CellSuperType = Object.freeze({
  Unknown: 0,
  Vasculature: 1,
  Lymph: 2,
  Nerve: 3,
  Others: 4,
  Immune: 5,
  Connective: 6,
  Muscle: 7,
});
const CellSuperTypeLabel = Object.freeze({
  [CellSuperType.Unknown]: 'Unknown',
  [CellSuperType.Vasculature]: 'Vasculature',
  [CellSuperType.Lymph]: 'Lymph',
  [CellSuperType.Nerve]: 'Nerve',
  [CellSuperType.Others]: 'Others',
  [CellSuperType.Immune]: 'Immune',
  [CellSuperType.Connective]: 'Connective',
  [CellSuperType.Muscle]: 'Muscle',
});

/**
 * User configurations.
 */
const settings = Object.seal({
  asctCsvSrc: null,
  countSrc: null,
  azimuthCsvSrc: null,
  cziCsvSrc: null,
  superTypesSrc: null,
  rootTitle: null,
  ctMatchType: CTMatchType.Unknown,
  circleRadius: 8,
  ftuCircleRadius: 50,
  logScaleBase: 4,
  pathTooltipStartLevel: 0,
  topNLeavesCount: 10,
  largeClusterSize: 5,
  fullFTUSubtree: false,
  selectedLabelingMethod: LabelingMethod.TopNLeaves
});

/**
 * D3 selection references.
 * @see https://github.com/d3/d3-selection/blob/v3.0.0/README.md#selection
 */
const SVG = Object.seal({
  root: null,
  contours: null,
  circles: null,
  labels: Object.seal({
    topNLeaves: null,
    largeClusters: null,
    ftuNodes: null,
  }),
  legend: Object.seal({
    cellType: null,
    cellCount: null,
  }),
  title: null
});

var countMap = new Map();
var colorMap = new Map();

/**
 * Removes entries grouped on empty keys in a nested map recursively,
 * and appends any valid descendants under the lowest common valid ancestor.
 * @param {Map<string, Map | Array>} nestedMap 
 * A nested map, such as one created by D3.group.
 * @see https://github.com/d3/d3-array/blob/v3.0.2/README.md#group
**/
function compressTree(nestedMap) {
  for (const [key, value] of nestedMap.entries()) {
    if (value instanceof Map) {
      compressTree(value);
      if (key === '') {
        let skipDelete = false;
        for (const [nkey, nvalue] of value.entries()) {
          skipDelete |= nkey === key;
          nestedMap.set(nkey, nvalue);
        }
        !skipDelete && nestedMap.delete(key);
      } else if (value.has('') && value.size === 1) {
        nestedMap.set(key, value.get(''));
      }
    }
  }
}

/**
 * Finds the largest FTU clusters and prunes their subtrees.
 * The pruned node becomes a leaf node of the tree and data objects linked with the node become 
 * accessible at this node. Essentially, it undoes the grouping under the pruned node.
 * @param {Map<string, Map | Array>} nestedMap 
 * A nested map, such as one created by D3.group.
 * @see https://github.com/d3/d3-array/blob/v3.0.2/README.md#group
 */
function pruneFTUSubtree(nestedMap) {
  for (const data of nestedMap.entries()) {
    const [key, value] = data;
    if (isFTUNode({ data })) {
      nestedMap.set(key, [...dataAccessor({ data })])
    } else if (value instanceof Map) {
      pruneFTUSubtree(value);
    }
  }
}

/**
 * Groups flattened data on specified columns into a hierarchical structure.
 * @see https://github.com/d3/d3-array/blob/v3.0.2/README.md#group
 * @param {Array<Array>} csvData Hierarchical CSV data. Follows the format generated by D3.csvParse.
 * @see https://github.com/d3/d3-dsv/blob/v3.0.1/README.md#csvParse
 * @param {RegExp} groupRegex Regular expression for extracting columns to group.
 * @returns {Map} A nested map consisting of key-value pairs.
 */
function groupTreeData(csvData, groupRegex) {
  const groupedData = d3.group(csvData, ...csvData.columns
    .filter(c => groupRegex.test(c))
    // Sort the columns following the AS - CT hierarchy.
    // NOTE: Needs to be modified if other types such as BG are included later.
    .sort((labelA, labelB) => { 
      const [typeA, levelA] = labelA.split('/');
      const [typeB, levelB] = labelB.split('/');
      return typeA.localeCompare(typeB) || parseInt(levelA) - parseInt(levelB)
    })
    // Generate grouping function for each column extracted.
    .map(c => d => d[c]));
  compressTree(groupedData);
  return groupedData;
}

/**
 * Computes cell count for cell type hierarchy recursively.
 * @param {Array<Array>} countCsvData Hierarchical CSV data.
 * @param {Map | Array} nestedMap A nested map, or value occurring in a nested map.
 * @returns {number} Total count of cells under a specific type.
 */
function computeCellCount(countCsvData, nestedMap) {
  let totalCount = 0;
  if (nestedMap instanceof Array) {
    if (!nestedMap[0]) return;
    return parseInt(nestedMap[0][countCsvData.columns.find(c => /^AS\/[0-9]+\/COUNT$/i.test(c))]);
  }
  for (const [key, value] of nestedMap.entries()) {
    countMap.set(key, computeCellCount(countCsvData, value));
    totalCount += countMap.get(key);
  }
  return totalCount;
}

/**
 * Fetches the cell count hierarchy data for the selected dataset.
 * @returns {Promise} State of the asynchronous operation.
 */
async function getCellCount() {
  const { countSrc, startLine } = (() => {
    switch (settings.countSrc) {
    case CountSource.Azimuth:
      return { countSrc: 'azimuthCsvSrc', startLine: 10 }
    case CountSource.CZI:
      return { countSrc: 'cziCsvSrc', startLine: 0 }
    }
  })()
  if (!(settings.ctMatchType && settings[countSrc])) return Promise.resolve();
  return d3.text(settings[countSrc])
    .then(rootData => {
      const countCsvData = d3.csvParse(rootData.split('\n').slice(startLine).join('\n'));
      const groupRegex = (() => {
        switch(settings.ctMatchType) {
        case CTMatchType.ID: return /^(AS|CT)\/[0-9]+\/ID$/;
        case CTMatchType.Name: return /^(AS|CT)\/[0-9]+$/;
        default: return /(?!)/
        }
      })();
      const groupedData = groupTreeData(countCsvData, groupRegex);
      computeCellCount(countCsvData, groupedData);
      // console.table(Array.from(countMap));
    });
}

/**
 * Fetches a key to merge ASCT+B data with cell count data using case-insensitive search
 * over multiple columns. Columns are selected using predefined merge strategies for a dataset.
 * @param {object} node A D3.hierarchy node or object with data property.
 * @returns {string | undefined} Common key across both sources, if it exists.
 */
function getCountMapKey(node) {
  const data = dataAccessor(node).next().value;
  const identifiers = [];
  switch(settings.ctMatchType) {
  case CTMatchType.ID:
    identifiers.push(...['CT/1/ID']);
    break;
  case CTMatchType.Name:
    identifiers.push(...['CT/1', 'CT/1/LABEL']);
    break;
  }
  for (const ctId of identifiers) {
    if (!ctId) continue;
    const key = Array.from(countMap.keys()).find(key => new RegExp(`^${key}$`, 'i').test(data[ctId]));
    if (key) return key;
  }
}

/**
 * Generates a string path required to reached a node from the tree root.
 * @param {object} node A D3.hierarchy node or object with data property.
 * @returns {string} The path of the traversed tree.
 */
function getASPath(node) {
  const pathList = getPathList(node);
  return pathList.slice(settings.pathTooltipStartLevel).join(' > ')
}

/**
 * Generates an array of nodes required to reached a node from the tree root.
 * @param {object} node A D3.hierarchy node or object with data property.
 * @returns {Array<string>} An array of titles of the traversed tree nodes.
 */
function getPathList(node) {
  if (!node.parent) return [getTitle(node)];
  const pathList = getPathList(node.parent);
  pathList.push(getTitle(node));
  return pathList;
}

/**
 * Ranks cell type nodes on highest cell count and returns N-leaves, specified in settings.
 * @param {Array<object>} leaves An array of D3.hierarchy objects occurring at leaves.
 * @returns {Array<object>} Array containing leaves with the highest cell count.
 */
function computeTopNLeaves(leaves) {
  const labels = new Set();
  const sortedLeaves = leaves
    .filter(d => isCellTypeNode(d) && 
      !(!settings.fullFTUSubtree && isFTUNode(d)) &&
      d.value > settings.circleRadius)
    // This could be changed to popping from a max-heap since we need only top-N leaves,
    // but N ≈ 10, it would not be much faster than sorting the whole array in most cases.
    .sort((a, b) => b.value - a.value);

  const topNLeaves = [];
  let lastSize = Number.MAX_VALUE;
  for (const leaf of sortedLeaves) {
    if (labels.size >= settings.topNLeavesCount && leaf.value < lastSize) break;
    labels.add(getTitle(leaf));
    topNLeaves.push(leaf);
    lastSize = leaf.value;
  }
  return topNLeaves;
}

/**
 * Filters parents of leaves linked to a minimum of N-cell types, specified in settings.
 * @param {Array<object>} leaves An array of D3.hierarchy objects occurring at leaves.
 * @returns {Array<object>} Filtered D3.hierarchy nodes with multiple children.
 */
function computeLargeClusters(leaves) {
  const lpCandidates = new Set(leaves.filter(isCellTypeNode).map(leaf => leaf.parent));
  const leafParents = [];
  for (let node of lpCandidates) {
    // Skip parent if their child is already a candidate
    if (node.children.some(c => lpCandidates.has(c))) continue;
    leafParents.push(node);
  }
  return leafParents.filter(p => p.children.length >= settings.largeClusterSize);
}

/**
 * Get a list of the largest FTU clusters. Uses top-down approach to find the largest cluster first.
 * @param {object} node A D3.hierarchy node.
 * @returns {Array<object>} An array of FTU nodes.
 */
function getFTUNodes(node) {
  if (isFTUNode(node)) return [node];
  const nodes = [];
  if (!node.children) return nodes;
  for (const child of node.children) {
    nodes.push(...getFTUNodes(child));
  }
  return nodes;
}

/**
 * Creates a new label group.
 * @param {Array<object>} data Data to be bound to the SVG label group. 
 * @param {string} labelClass Class to be applied to the SVG label group.
 * @returns {object} A d3.selection of the SVG label group.
 * @see https://github.com/d3/d3-selection/blob/v3.0.0/README.md#selection
 */
function createLabelGroup(data, labelClass) {
  const labelGroup = SVG.root.append('g')
    .classed('label-group', true)
    .classed(labelClass, true)
    .style('font-family', 'Verdana, Geneva, Tahoma, sans-serif')
    .style('text-anchor', 'middle')
    .style('fill', 'black')
    .style('paint-order', 'stroke')
    .style('stroke', 'black')
    .style('stroke-width', '1px')
    .style('stroke-linejoin', 'round')
    .style('display', 'none');

  labelGroup.selectAll(".label")
    .data(data)
    .enter()
    .append("text")
      .classed("label", true)
      .text(getTitle)
      .attr("transform", function (d) {
        return "translate(" + [d.x, d.y] + ")";
      });
  
  return labelGroup;
}

/**
 * Sets an active label group. Disables the remaining groups.
 * @param {LabelingMethod} methodType 
 */
function setActiveLabels(methodType) {
  settings.selectedLabelingMethod = methodType;
  let activeKey;
  switch(methodType) {
  case LabelingMethod.TopNLeaves:
    activeKey = 'topNLeaves';
    break;
  case LabelingMethod.LargeClusters:
    activeKey = 'largeClusters';
    break;
  case LabelingMethod.FTUNodes:
    activeKey = 'ftuNodes';
    break;
  }
  for (const key in SVG.labels) {
    SVG.labels[key].node().style.display = key === activeKey ? '' : 'none';
  }
}

/**
 * Computes the spacing required for a cell count legend item. The circles have different sizes,
 * so each list item takes different size.
 * @param {Array<object>} countList A list of objects specific to the ranges in count legend. 
 * @param {number} padding Padding to be added for a legend item.
 * @returns 
 */
function getCountLegendSpacing(countList, padding = 0) {
  let res = 0;
  for (const { count } of countList) {
    // Diameter of circle with padding
    res += (2 * settings.circleRadius * count) + padding;
  }
  return res;
}

/**
 * Draws the cell type legend and adds an entry to the selection reference map.
 */
function drawCellTypeLegend() {
  const rectWidth = 60,
    rectHeight = 20,
    padding = 4;
  const legendData = Array.from(colorMap)
    .map(([key1, key2]) => [
        CellSuperTypeLabel[key1] ?? key1,
        key2
    ]).sort(([key1], [key2]) => key2.localeCompare(key1));

  const legendXOffset = 1600;
  const legendYOffset = (renderedSVGSize.height + legendData.length * 24) / 2;
  SVG.legend.cellType = SVG.root.append('g')
    .classed('ct-legend', true)
    .attr('transform', 'translate(' + [legendXOffset, legendYOffset] + ')')
    .style('font-family', 'Verdana, Geneva, Tahoma, sans-serif')
    .style('stroke', '#444')
    .style('fill', '#444');

  const list = SVG.legend.cellType.selectAll('.ct-legend-li')
    .data(legendData)
    .enter()
    .append('g')
    .classed('ct-legend-li', true)
    .attr('transform', function (d, i) {
      return 'translate(' + [0, -i * (rectHeight + padding)] + ')'
    });

  list.append('rect')
    .classed('legend-color', true)
    .attr('y', -rectHeight)
    .attr('width', rectWidth)
    .attr('height', rectHeight)
    .style('fill', function (d) { return d[1] });

  list.append('text')
    .classed('legend-text', true)
    .attr('transform', 'translate(' + [rectWidth + 5, -4] + ')')
    .text(function (d) { return d[0] });

  SVG.legend.cellType.append('text')
    .attr('transform', 'translate(' + [0, -legendData.length * (rectHeight + padding) - 10] + ')')
    .style('font-size', '1.2em')
    .text('Cell Types');
}

/**
 * Draws the cell count legend and adds a reference to the selection reference map.
 */
function drawCellCountLegend(hierarchyRoot) {
  const knownCellCounts = hierarchyRoot.leaves().filter(getCountMapKey).map(d => countMap.get(getCountMapKey(d)));
  const minCount = Math.min(...knownCellCounts);
  const maxCount = Math.max(...knownCellCounts);
  let safeMaxCount = 1, safeMinCount = 1;
  const scaledCountList = [];
  if (maxCount > 0) {
    const minScaledCount = safeMinCount = Math.floor(Math.max(Math.log(minCount) / Math.log(settings.logScaleBase), 1));
    const maxScaledCount = safeMaxCount = Math.floor(Math.max(Math.log(maxCount) / Math.log(settings.logScaleBase), 1));
    const ranges = Array(maxScaledCount - minScaledCount).fill().map((_, i) => maxScaledCount - i - 1);

    scaledCountList.push({
      count: maxScaledCount,
      title: `\u2265 ${Math.pow(settings.logScaleBase, maxScaledCount)}`
    });

    ranges.forEach(min => {
      const max = min + 1, mid = (min + max) / 2;
      scaledCountList.push({
        count: mid,
        // Display range-min as 1 for the lowest size class
        title: `${Math.pow(settings.logScaleBase, min === 1 ? 0 : min)} to ${Math.pow(settings.logScaleBase, max)}`
      });
    })
  }
  if (knownCellCounts.length < hierarchyRoot.leaves().filter(isCellTypeNode).length) {
    // Scaled count is taken as 1 for unknown counts, so that they are shown with the minimum size.
    safeMinCount = 1;
    scaledCountList.push({
      count: safeMinCount,
      title: 'Unknown'
    });
  }

  const padding = 10;
  const legendHeight = getCountLegendSpacing(scaledCountList, padding);
  const legendXOffset = 1600 + SVG.legend.cellType.node().getBoundingClientRect().width + 100;
  const legendYOffset = (renderedSVGSize.height + legendHeight) / 2;
  SVG.legend.cellCount = SVG.root.append('g')
    .classed('cc-legend', true)
    .attr('transform', 'translate(' + [legendXOffset, legendYOffset] + ')')
    .style('font-family', 'Verdana, Geneva, Tahoma, sans-serif')
    .style('stroke', '#444')
    .style('fill', '#444');

    const list = SVG.legend.cellCount.selectAll('.cc-legend-li')
    .data(scaledCountList)
    .enter()
    .append('g')
    .classed('cc-legend-li', true)
    .attr('transform', function (d, i) {
      return 'translate(' + [0, -(getCountLegendSpacing(scaledCountList.slice(0, i), padding))] + ')';
    })
  
  list.append('circle')
    .classed('legend-color', true)
    .attr('y', -legendHeight)
    .attr('r', function(d) { return settings.circleRadius * d.count })

  list.append('text')
    .classed('legend-text', true)
    .attr('transform', 'translate(' + [settings.circleRadius * safeMaxCount + 20, 4] + ')')
    .text(function (d) { return d.title });

  SVG.legend.cellCount.append('text')
    .attr('transform', 'translate(' + [-(settings.circleRadius * safeMaxCount), -legendHeight - 5] + ')')
    .style('font-size', '1.2em')
    .text('Cell Count');
}

/**
 * Creates a bubble treemap for hierarchical data. Further invokes methods for drawing labels, tooltips and legends.
 * @param {Map<string, Map | Array>} nestedMap A nested map generated using grouped data.
 */
function drawChart(nestedMap) {
  // Create hierarchy.
  const root = d3.hierarchy(Array.from(nestedMap)[0], getChildren)
    .sum(data => {
      if (!settings.fullFTUSubtree && isFTUNode({ data })) return settings.ftuCircleRadius;
      // Check if count is available in the typology sheet
      const countMapKey = getCountMapKey({ data });
      // Actual circle size is settings.circleRadius * log(count)
      // When count falls below settings.logScaleBase, its log is a fractional unit.
      // Sizes are never below settings.circleRadius, so the next size class is used instead.
      return countMapKey ? settings.circleRadius * (Math.max(Math.log(countMap.get(countMapKey)) / Math.log(settings.logScaleBase), 1)) : settings.circleRadius;
    })
    .sort((a, b) => b.value - a.value);

  root.descendants().forEach(node => node.uncertainty = node.height * 2 + 1);

  renderedSVGSize = SVG.root.node().getBoundingClientRect();

  // Create bubbletreemap.
  const bubbletreemap = d3.bubbletreemap()
      .hierarchyRoot(root)
      .width(renderedSVGSize.width - 900)
      .height(renderedSVGSize.height)
      .colormap(colorMap);

  // Do layout and coloring.
  bubbletreemap.doLayout().doColoring().recomputeCentroids();

  const leaves = root.leaves();

  // Draw contour.
  SVG.contours = SVG.root.append("g")
    .attr("class", "contours")
    .selectAll("path")
    .data(bubbletreemap.getContour())
    .enter()
      .append("path")
      .attr("d", function(arc) { return arc.d; })
      .attr('data-node-title', (arc) => getTitle(arc.parent))
      .style("stroke", function(arc) { return arc.stroke; })
      .style("stroke-width", function(arc) { return arc.strokeWidth; })
      .attr("transform", function(arc) { return arc.transform; });

  // Add tooltips
  SVG.contours.append("title")
    .text(function (arc) {
      const asPath = getASPath(arc.parent);
      const title = getTitle(arc.parent);
      return title + (asPath ? `\n\nPath: ${asPath}` : '')
    });

  // Draw circles.
  SVG.circles = SVG.root.append("g")
    .attr("class", "circles")
    .selectAll("circle")
    .data(leaves)
    .enter()
      .append("circle")
      .classed('circle', true)
      .attr('data-node-title', getTitle)
      .attr("r", function(d) { return d.r })
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .style("fill", function(d) {
        if (!settings.fullFTUSubtree && isFTUNode(d)) return 'rgba(0,0,0,0)';
        if (isCellTypeNode(d)) return d.color;
        return '#222222' 
      })
      .style("stroke", "black")
      .style("stroke-width", 2);
    
  // Add tooltips
  SVG.circles.append("title")
    .text(function (d) {
      const countMapKey = getCountMapKey(d);
        return `${getTitle(d)}${countMap.has(countMapKey) ? ' ('+ countMap.get(countMapKey) +')' : ''}\n\nPath: ${getASPath(d)}`
    });

  // Add Label Groups
  const topNLeaves = computeTopNLeaves(leaves);
  const largeClusters = computeLargeClusters(leaves);
  const ftuNodes = getFTUNodes(root);
  SVG.labels.topNLeaves = createLabelGroup(topNLeaves, 'top-n-leaves');
  SVG.labels.largeClusters = createLabelGroup(largeClusters, 'large-clusters');
  SVG.labels.ftuNodes = createLabelGroup(ftuNodes, 'ftu-nodes');
  setActiveLabels(settings.selectedLabelingMethod);
    
  // Add Title Text
  SVG.title = SVG.root.append("text")
    .classed('dataset-title', true)
    .attr("transform", "translate(" + [renderedSVGSize.width / 2, 100] + ")")
    .attr("text-anchor", "middle")
    .text(`${settings.rootTitle} Partonomy`)
    .style('font-family', 'Cambria,Cochin,Georgia,Times,Times New Roman,serif')
    .style('font-size', 84)
    .style('font-weight', 800);

  drawCellTypeLegend();
  drawCellCountLegend(root);
}

/**
 * Main function to generate data hierarchies and the bubble treemap.
 */
async function generateTreemap() {
  document.getElementById('busyText').style.display = 'inline';
  countMap.clear();
  await getCellCount();
  d3.text(settings.asctCsvSrc).then(async rootData => {
    const splitLines = rootData.split('\n')
    const startIndex = splitLines.findIndex(line => /^"?AS\/[0-9]+/.test(line))
    const csvData = d3.csvParse(splitLines.slice(startIndex !== -1 ? startIndex : 10).join('\n'))

    // Check for supertype map, if it exists
    if (settings.superTypesSrc) {
      const superTypesCsv = await d3.csv(settings.superTypesSrc)
      const superTypeMap = new Map()
      for (const row of superTypesCsv) {
        superTypeMap.set(row['CT/1'], row['CT/1/SUPERTYPE'])
      }

      for (const row of csvData) {
        const cellType = row['CT/1']
        if (superTypeMap.has(cellType)) {
          row['CT/1/SUPERTYPE'] = superTypeMap.get(cellType)
        } else {
          row['CT/1/SUPERTYPE'] = CellSuperType.Unknown.toString()
        }
      }
    }

    const groupRegex = /^(AS|CT)\/[0-9]+$/;
    const groupedData = groupTreeData(csvData, groupRegex);
    if (!settings.fullFTUSubtree) {
      pruneFTUSubtree(groupedData);
    }
    SVG.root = d3.select("#svgCircles");
    SVG.root.selectAll("*").remove();

    drawChart(groupedData);
    document.getElementById('busyText').style.display = 'none';
  });
}

/**
 * Updates settings with the selected organ configuration.
 * @param {object} selectEl The select DOM element or object with value property.
 * @param {Dataset} selectEl.value The dataset ID.
 */
function updateOrganSelection(selectEl) {
  const datasetId = parseInt(selectEl.value)
  // Reset settings
  Object.assign(settings, SettingsPreset[Dataset.Unknown])
  if (SettingsPreset[datasetId]) {
    Object.assign(settings, SettingsPreset[datasetId]);
  }
  // Set additional settings for special datasets
  switch (datasetId) {
  case Dataset.Spleen:
  case Dataset.Eye:
  case Dataset.Kidney:
    colorMap = new Map([
      [CellSuperType.Unknown.toString(), '#ffffff'],
      [CellSuperType.Vasculature.toString(), '#d53e4f'],
      [CellSuperType.Lymph.toString(), '#998ec3'],
      [CellSuperType.Nerve.toString(), '#99d594'],
      [CellSuperType.Others.toString(), '#fc8d59'],
      [CellSuperType.Immune.toString(), '#fee08b'],
      [CellSuperType.Connective.toString(), '#3288bd'],
      [CellSuperType.Muscle.toString(), '#999999'],
    ]);
    break;
  default: colorMap.clear();
  }
}

function updateCountSrc(selectEl) {
  const srcId = parseInt(selectEl.value)
  settings.countSrc = srcId
}

/**
 * Downloads an SVG using specified settings.
 */
function downloadSVG() {
  const svgEl = document.getElementById('svgCircles');
  const svgClone = svgEl.cloneNode(true);
  svgClone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  if (!document.getElementById('downloadTitleOpt').checked) {
    svgClone.removeChild(svgClone.querySelector('.dataset-title'));
  }
  if (!document.getElementById('downloadLabelsOpt').checked) {
    for (const node of svgClone.querySelectorAll('.label-group')) {
      svgClone.removeChild(node);
    }
  }
  if (!document.getElementById('downloadTypeLegendOpt').checked) {
    svgClone.removeChild(svgClone.querySelector('.ct-legend'));
  }
  if (!document.getElementById('downloadCountLegendOpt').checked) {
    svgClone.removeChild(svgClone.querySelector('.cc-legend'));
  }
  const svgData = svgClone.outerHTML;
  const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const svgUrl = URL.createObjectURL(svgBlob);
  const downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = settings.rootTitle;
  downloadLink.click();
  URL.revokeObjectURL(svgUrl);
}

/**
 * Initialize application.
 */
function init() {
  // Update dataset here to change default organ
  updateOrganSelection({ value: Dataset.Spleen })
  updateCountSrc({ value: CountSource.Azimuth })
  generateTreemap();
}