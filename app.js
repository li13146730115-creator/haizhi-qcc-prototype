const companies = [
  {
    id: "hz-001", name: "北京海智科技有限公司", short: "海", type: "科技型中小企业", code: "91110108MA01A8KX4L", park: "海智园 A 区", industry: "软件和信息技术服务业", joined: "2024-03-18", status: "done", queriedAt: "2026-10-14 14:32",
    base: { "企业名称": "北京海智科技有限公司", "统一社会信用代码": "91110108MA01A8KX4L", "法定代表人": "周明远", "注册资本": "2,000 万人民币", "成立日期": "2018-05-22", "登记状态": "存续", "登记机关": "北京市海淀区市场监督管理局", "企业类型": "有限责任公司（自然人投资或控股）", "注册地址": "北京市海淀区海智路 88 号 3 层", "联系电话": "010-6808 2018", "官网": "www.haizhitech.com", "经营范围": "技术开发、技术咨询、软件开发、数据处理及存储支持服务。" }
  },
  {
    id: "hz-002", name: "北京云筑建筑科技有限公司", short: "云", type: "专精特新企业", code: "91110108MA02N6QH8P", park: "海智园 B 区", industry: "建筑信息化", joined: "2023-08-09", status: "pending", queriedAt: "—",
    base: { "企业名称": "北京云筑建筑科技有限公司", "统一社会信用代码": "91110108MA02N6QH8P", "法定代表人": "李安", "注册资本": "1,500 万人民币", "成立日期": "2020-10-15", "登记状态": "存续", "登记机关": "北京市海淀区市场监督管理局", "企业类型": "有限责任公司", "注册地址": "北京市海淀区海智路 88 号 7 层", "联系电话": "010-6808 2026", "官网": "www.yunzhu.tech", "经营范围": "建筑信息模型技术服务、工程管理服务、软件开发。" }
  },
  {
    id: "hz-003", name: "北京绿洲新能源有限公司", short: "绿", type: "高新技术企业", code: "91110108MA03R2YT7M", park: "海智园 A 区", industry: "新能源", joined: "2022-12-21", status: "failed", queriedAt: "2026-10-14 13:08",
    base: { "企业名称": "北京绿洲新能源有限公司", "统一社会信用代码": "91110108MA03R2YT7M", "法定代表人": "陈嘉", "注册资本": "3,800 万人民币", "成立日期": "2019-07-04", "登记状态": "存续", "登记机关": "北京市海淀区市场监督管理局", "企业类型": "有限责任公司", "注册地址": "北京市海淀区海智路 88 号 5 层", "联系电话": "010-6808 2039", "官网": "—", "经营范围": "新能源技术开发、储能设备销售、技术咨询。" }
  }
];

const state = { selectedStatus: "all", selectedPark: "all", selectedIds: new Set(), currentCompany: null, currentTab: "business", showJson: false, opener: null };
const rows = document.querySelector("#companyRows");
const searchInput = document.querySelector("#searchInput");
const filterPanel = document.querySelector("#filterPanel");
const drawerLayer = document.querySelector("#drawerLayer");
const toast = document.querySelector("#toast");

function statusClass(status) { return { done: "done", pending: "pending", failed: "failed", loading: "loading" }[status] || "pending"; }
function statusLabel(status) { return { done: "已完成", pending: "未查询", failed: "查询失败", loading: "查询中" }[status] || "未查询"; }
function buttonMarkup(company) {
  if (company.status === "done") return `<button class="query-button" data-action="query" data-id="${company.id}" type="button">重新查询</button><button class="link-button" data-action="view" data-id="${company.id}" type="button">查看详情</button>`;
  if (company.status === "failed") return `<button class="link-button retry-button" data-action="query" data-id="${company.id}" type="button">重试查询</button>`;
  if (company.status === "loading") return `<button class="query-button disabled" type="button" disabled>查询中…</button>`;
  return `<button class="query-button" data-action="query" data-id="${company.id}" type="button">查询企查查</button>`;
}

function renderRows() {
  const keyword = searchInput.value.trim().toLowerCase();
  const filtered = companies.filter((company) => {
    const matchesStatus = state.selectedStatus === "all" || company.status === state.selectedStatus;
    const matchesPark = state.selectedPark === "all" || company.park === state.selectedPark;
    const haystack = `${company.name}${company.code}${company.park}${company.industry}`.toLowerCase();
    return matchesStatus && matchesPark && (!keyword || haystack.includes(keyword));
  });
  rows.innerHTML = filtered.map((company) => `<tr data-row-id="${company.id}">
    <td class="check-col"><input class="row-check" type="checkbox" data-id="${company.id}" ${state.selectedIds.has(company.id) ? "checked" : ""} aria-label="选择 ${company.name}" /></td>
    <td><div class="company-cell"><div class="company-avatar">${company.short}</div><div><div class="company-name">${company.name}</div><div class="company-type">${company.type}</div></div></div></td>
    <td><span class="code-text">${company.code}</span></td><td>${company.park}</td><td>${company.industry}</td><td>${company.joined}</td>
    <td><span class="status-pill ${statusClass(company.status)}">${statusLabel(company.status)}</span></td><td>${company.queriedAt}</td><td class="action-cell">${buttonMarkup(company)}</td></tr>`).join("") || `<tr><td colspan="9" style="padding: 32px; text-align:center; color:#9aa3b5;">没有找到匹配的企业</td></tr>`;
  document.querySelectorAll(".row-check").forEach((checkbox) => checkbox.addEventListener("change", () => { if (checkbox.checked) state.selectedIds.add(checkbox.dataset.id); else state.selectedIds.delete(checkbox.dataset.id); updateSelectedCount(); }));
  document.querySelectorAll("[data-action='query']").forEach((button) => button.addEventListener("click", () => queryCompany(button.dataset.id)));
  document.querySelectorAll("[data-action='view']").forEach((button) => button.addEventListener("click", () => openDrawer(button.dataset.id)));
  document.querySelector("#tableCaption").textContent = `共 ${companies.length} 家示例企业，当前显示 ${filtered.length} 家`;
  document.querySelector("#visibleCount").textContent = `共 ${filtered.length} 条`;
  document.querySelector("#doneMetric").textContent = companies.filter(c => c.status === "done").length;
  document.querySelector("#pendingMetric").textContent = companies.filter(c => c.status === "pending" || c.status === "loading").length;
  document.querySelector("#failedMetric").textContent = companies.filter(c => c.status === "failed").length;
  updateSelectedCount();
}

function updateSelectedCount() {
  document.querySelector("#selectedCount").textContent = state.selectedIds.size;
  const visibleChecks = [...document.querySelectorAll(".row-check")];
  const checkedCount = visibleChecks.filter(c => c.checked).length;
  const selectAll = document.querySelector("#selectAll");
  selectAll.checked = visibleChecks.length > 0 && checkedCount === visibleChecks.length;
  selectAll.indeterminate = checkedCount > 0 && checkedCount < visibleChecks.length;
}
function showToast(message) { toast.textContent = message; toast.classList.add("show"); window.clearTimeout(showToast.timer); showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200); }

async function queryCompany(id, openOnComplete = true) {
  const company = companies.find((item) => item.id === id);
  if (!company || company.status === "loading") return;
  company.status = "loading"; renderRows(); showToast(`正在查询 ${company.name} 的企查查信息…`);
  await new Promise(resolve => window.setTimeout(resolve, 950));
  company.status = "done"; company.queriedAt = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Shanghai", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(new Date());
  populateDemoResults(company); renderRows(); if (openOnComplete) openDrawer(company.id); showToast("模拟查询完成，可查看企查查返回信息");
}

function escapeText(value) { return String(value).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function renderValue(value) {
  if (value === null || value === undefined) return '<span class="field-value muted">未返回</span>';
  if (Array.isArray(value)) { if (!value.length) return '<span class="field-value muted">暂无记录</span>'; return value.map((item, index) => `<div class="nested-field"><strong>记录 ${index + 1}</strong><div>${renderValue(item)}</div></div>`).join(""); }
  if (typeof value === "object") return `<div class="nested-object">${Object.entries(value).map(([key, item]) => `<div class="nested-item"><span class="nested-label">${escapeText(key)}</span><span class="nested-value">${renderValue(item)}</span></div>`).join("")}</div>`;
  return escapeText(value);
}
function fieldTable(values) { return `<table class="field-table"><tbody>${Object.entries(values).map(([key, value]) => `<tr><td>${escapeText(key)}</td><td class="field-value ${value === "—" || String(value).includes("待") || String(value).includes("超时") ? "muted" : ""}">${renderValue(value)}</td></tr>`).join("")}</tbody></table>`; }
function recordHeading(title, id, count = "示例返回") { return `<div class="record-heading"><strong>${escapeText(title)}</strong><span class="record-count">接口 ${escapeText(id)} · ${escapeText(count)}</span></div>`; }

function populateDemoResults(company) {
  const qccBase = { ...company.base, "行业": company.industry };
  const patent = company.id === "hz-003" ? { "成果／专利编号": "CN202412302993.8", "权利人": company.name, "技术领域": "储能系统", "法律状态": "有效", "取得时间": "2024-09-18" } : { "成果／专利编号": "CN202510001234.0（示例）", "权利人": company.name, "技术领域": company.industry, "法律状态": "审中", "取得时间": "2025-08-20" };
  const hasFunding = company.id !== "hz-003" || company.status === "done";
  company.apiResults = [
    { id: "735", title: "企业工商详情", group: "business", data: qccBase },
    { id: "514", title: "国内专利", group: "tech", data: { "总记录数": 1, "记录": [{ ...patent, "专利名称": `${company.industry}数据处理方法（示例）`, "专利类型": "发明专利", "申请日期": "2025-03-06", "公布日期": "2025-08-19", "摘要": "用于展示专利详情和长文本字段的虚构示例。" }] } },
    { id: "997", title: "国际专利", group: "tech", data: { "总记录数": 0, "记录": [] } },
    { id: "233", title: "软件著作权", group: "tech", data: { "总记录数": 1, "记录": [{ "登记号": "2025SR0000123（示例）", "软件名称": "企业数字管理系统", "版本号": "V1.0", "著作权人": company.name, "登记批准日期": "2025-05-19", "开发完成日期": "2025-02-20" }] } },
    { id: "950", title: "融资信息", group: "funding", data: { "总记录数": hasFunding ? 1 : 0, "记录": hasFunding ? [{ "企业名称": company.name, "融资轮次": company.id === "hz-001" ? "B 轮" : "A 轮", "融资金额": company.id === "hz-001" ? "3,000 万元（示例）" : "2,000 万元（示例）", "融资日期": company.id === "hz-001" ? "2025-11-12" : "2025-09-10", "投资方": ["园区产业基金（示例）"], "来源": "虚构融资示例" }] : [] } },
    { id: "962", title: "企业图谱", group: "graph", data: { "中心企业": company.name, "节点": [{ "编号": "c-1", "名称": company.name, "类型": "企业" }, { "编号": "p-1", "名称": company.base["法定代表人"], "类型": "人员" }, { "编号": "i-1", "名称": company.industry, "类型": "行业" }], "关系": [{ "起点": "p-1", "终点": "c-1", "关系类型": "法定代表人" }, { "起点": "c-1", "终点": "i-1", "关系类型": "所属行业" }] } },
    { id: "risk-abnormal", title: "经营异常核查", group: "risk", data: { "是否列入经营异常名录": "否", "列入日期": "—", "移出日期": "—", "列入原因": "—", "列入机关": "—", "核查状态": "未发现异常" } },
    { id: "risk-illegal", title: "严重违法核查", group: "risk", data: { "是否严重违法失信": "否", "决定书文号": "—", "违法事由": "—", "公布日期": "—", "核查状态": "未发现严重违法记录" } },
    { id: "risk-tax", title: "欠税公告核查", group: "risk", data: { "是否存在欠税公告": "否", "公告期数": 0, "欠税税种": "—", "欠税余额": "0 元", "最近公告日期": "—", "核查状态": "未发现欠税公告" } },
    { id: "risk-labor", title: "送达劳动仲裁核查", group: "risk", data: { "是否存在送达公告": "否", "公告事项": "—", "案号": "—", "受理机构": "—", "公告日期": "—", "核查状态": "未发现相关公告" } }
  ];
}

function apiSections(company, group) { return company.apiResults.filter(api => api.group === group).map(api => `${recordHeading(api.title, api.id)}${fieldTable(api.data)}`).join(""); }
function flattenFields(value, path, output) { if (value !== null && typeof value === "object" && Object.keys(value).length) { for (const [key, child] of Object.entries(value)) flattenFields(child, `${path} / ${Array.isArray(value) ? `第 ${Number(key) + 1} 条` : key}`, output); } else output[path] = Array.isArray(value) ? "暂无记录（空数组）" : value; }

function renderRisk(company) {
  const risks = company.apiResults.filter(api => api.group === "risk");
  const issueCount = risks.filter(api => Object.values(api.data).some(value => String(value).includes("是") || String(value).includes("存在"))).length;
  return `<div class="risk-summary ${issueCount ? "has-risk" : "safe"}"><div class="risk-icon"><i data-lucide="${issueCount ? "triangle-alert" : "shield-check"}" aria-hidden="true"></i></div><div><strong>${issueCount ? `发现 ${issueCount} 项风险提示` : "暂未发现风险记录"}</strong><span>企查查风险核查接口返回 · ${risks.length} 项核查</span></div><span class="risk-status">${issueCount ? "需关注" : "正常"}</span></div>${risks.map(api => `<section class="risk-card"><div class="risk-card-title"><strong>${escapeText(api.title)}</strong><span class="record-count">接口 ${escapeText(api.id)}</span></div>${fieldTable(api.data)}</section>`).join("")}`;
}
function renderGraph(company) {
  const api = company.apiResults.find(item => item.group === "graph");
  const nodes = api.data["节点"] || []; const relations = api.data["关系"] || [];
  return `<div class="graph-summary"><div class="graph-summary-top"><div><span class="source-tag">企查查企业图谱 · 接口 ${api.id}</span><h3>${escapeText(api.data["中心企业"])}</h3></div><span class="graph-count">${nodes.length} 个节点 · ${relations.length} 条关系</span></div><div class="graph-nodes">${nodes.map(node => `<div class="graph-node"><span class="graph-node-type">${escapeText(node["类型"])}</span><strong>${escapeText(node["名称"])}</strong><span>${escapeText(node["编号"])}</span></div>`).join("")}</div></div>${recordHeading("关系明细", api.id, `${relations.length} 条记录`)}${fieldTable({ "中心企业": api.data["中心企业"], "节点": nodes, "关系": relations })}`;
}

function renderDrawerBody() {
  const company = state.currentCompany; if (!company) return;
  const body = document.querySelector("#drawerBody");
  if (state.currentTab === "raw") {
    const raw = { "企业": company.name, "查询时间": company.queriedAt, "各接口示例返回": company.apiResults.map(api => ({ "接口": api.title, "接口编号": api.id, "返回内容": api.data })) };
    const flattened = {}; company.apiResults.forEach(api => flattenFields(api.data, api.title, flattened));
    body.innerHTML = `<div class="raw-switch"><h3>全部返回字段 <span class="source-tag">${Object.keys(flattened).length} 个示例字段</span></h3><button class="button secondary small" id="toggleRawButton" type="button">${state.showJson ? "键值表展示" : "查看 JSON"}</button></div><div class="data-note">仅展示企查查接口示例返回。空值和嵌套明细保留；真实字段清单需按正式接口文档确认。</div>${state.showJson ? `<pre class="raw-block">${escapeText(JSON.stringify(raw, null, 2))}</pre>` : `<div class="all-fields">${fieldTable(flattened)}</div>`}`;
    document.querySelector("#toggleRawButton").addEventListener("click", () => { state.showJson = !state.showJson; renderDrawerBody(); }); lucide.createIcons(); return;
  }
  if (state.currentTab === "business") {
    const api = company.apiResults.find(item => item.group === "business");
    body.innerHTML = `<div class="data-note">企业工商信息来自企查查企业工商详情接口，以下字段为接口返回示例。</div>${recordHeading(api.title, api.id)}${fieldTable(api.data)}`;
  } else if (state.currentTab === "tech") {
    body.innerHTML = `<div class="data-note">专利技术页合并展示企查查国内专利、国际专利与软件著作权返回结果；暂无记录的接口保留空态。</div>${apiSections(company, "tech")}`;
  } else if (state.currentTab === "funding") {
    const api = company.apiResults.find(item => item.group === "funding"); const record = api.data["记录"]?.[0];
    body.innerHTML = `<div class="stat-grid"><div class="stat-card"><span>融资记录</span><strong>${api.data["总记录数"] || 0}</strong><em>接口 ${api.id}</em></div><div class="stat-card"><span>最新轮次</span><strong>${record?.["融资轮次"] || "暂无"}</strong><em>企查查融资信息</em></div><div class="stat-card"><span>融资金额</span><strong>${record?.["融资金额"] || "暂无"}</strong><em>示例返回</em></div></div>${record ? `<div class="data-note">以下为企查查融资接口返回的最新融资记录示例。</div>${recordHeading(api.title, api.id)}${fieldTable(record)}` : `<div class="empty-note">企查查融资接口暂无可展示记录。</div>`}`;
  } else if (state.currentTab === "graph") {
    body.innerHTML = `<div class="data-note">企业图谱页展示企查查企业图谱接口返回的中心企业、节点和关系明细。</div>${renderGraph(company)}`;
  } else if (state.currentTab === "risk") {
    body.innerHTML = `<div class="data-note">风险预警仅展示企查查经营异常、严重违法、欠税公告、送达劳动仲裁四类核查接口的返回结果。</div>${renderRisk(company)}`;
  }
  lucide.createIcons();
}

function openDrawer(id) {
  const company = companies.find((item) => item.id === id); if (!company) return;
  if (!company.apiResults) populateDemoResults(company);
  state.currentCompany = company; state.opener = document.activeElement; state.currentTab = "business"; state.showJson = false;
  document.querySelector("#drawerTitle").textContent = "企业详情";
  document.querySelector("#drawerSubtitle").textContent = `企查查返回详情 · ${company.industry}`;
  document.querySelector("#drawerCompanyName").textContent = company.name; document.querySelector("#drawerCompanyCode").textContent = `统一社会信用代码 ${company.code}`; document.querySelector("#drawerLogo").textContent = company.short;
  const status = document.querySelector("#drawerStatus"); status.className = `status-pill ${statusClass(company.status)}`; status.textContent = statusLabel(company.status);
  document.querySelector("#drawerQueriedAt").textContent = company.queriedAt === "—" ? "尚未查询" : company.queriedAt;
  document.querySelectorAll(".drawer-tab").forEach((tab) => { tab.classList.toggle("active", tab.dataset.tab === state.currentTab); tab.setAttribute("aria-selected", String(tab.dataset.tab === state.currentTab)); });
  renderDrawerBody(); drawerLayer.classList.add("open"); drawerLayer.setAttribute("aria-hidden", "false"); document.querySelector(".app-shell").inert = true; document.body.style.overflow = "hidden"; document.querySelector("#closeDrawer").focus();
}
function closeDrawer() { drawerLayer.classList.remove("open"); drawerLayer.setAttribute("aria-hidden", "true"); document.querySelector(".app-shell").inert = false; document.body.style.overflow = ""; if (state.opener?.isConnected) state.opener.focus(); }

document.querySelector("#closeDrawer").addEventListener("click", closeDrawer); document.querySelector("#drawerBackdrop").addEventListener("click", closeDrawer);
document.addEventListener("keydown", (event) => { if (!drawerLayer.classList.contains("open")) return; if (event.key === "Escape") closeDrawer(); if (event.key === "Tab") { const buttons = [...drawerLayer.querySelectorAll("button, a, input")].filter(el => !el.disabled && el.getClientRects().length); const first = buttons[0]; const last = buttons.at(-1); if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } } });
document.querySelectorAll(".drawer-tab").forEach((tab) => tab.addEventListener("click", () => { state.currentTab = tab.dataset.tab; state.showJson = false; document.querySelectorAll(".drawer-tab").forEach((item) => { item.classList.toggle("active", item === tab); item.setAttribute("aria-selected", String(item === tab)); }); renderDrawerBody(); }));
document.querySelector("#requeryButton").addEventListener("click", () => { if (state.currentCompany) { closeDrawer(); queryCompany(state.currentCompany.id); } });
searchInput.addEventListener("input", renderRows);
document.querySelector("#filterButton").addEventListener("click", () => { filterPanel.hidden = !filterPanel.hidden; document.querySelector(".filter-dot").classList.toggle("visible", !filterPanel.hidden); document.querySelector("#filterButton").setAttribute("aria-expanded", String(!filterPanel.hidden)); });
document.querySelectorAll(".filter-chip[data-status]").forEach((chip) => chip.addEventListener("click", () => { state.selectedStatus = chip.dataset.status; document.querySelectorAll(".filter-chip[data-status]").forEach((item) => item.classList.toggle("selected", item === chip)); renderRows(); }));
document.querySelector("#selectAll").addEventListener("change", (event) => { document.querySelectorAll(".row-check").forEach((checkbox) => { checkbox.checked = event.target.checked; if (checkbox.checked) state.selectedIds.add(checkbox.dataset.id); else state.selectedIds.delete(checkbox.dataset.id); }); updateSelectedCount(); });
document.querySelector("#refreshButton").addEventListener("click", () => { renderRows(); showToast("企业列表已刷新"); });
document.querySelectorAll(".filter-chip[data-park]").forEach(chip => chip.addEventListener("click", () => { state.selectedPark = chip.dataset.park; document.querySelectorAll(".filter-chip[data-park]").forEach(item => item.classList.toggle("selected", item === chip)); renderRows(); }));
document.querySelector("#exportButton").addEventListener("click", () => { const payload = companies.filter(c => c.status === "done").map(c => ({ "企业": c.name, "统一社会信用代码": c.code, "最近查询": c.queriedAt, "企查查返回": c.apiResults })); const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" })); const anchor = document.createElement("a"); anchor.href = url; anchor.download = "企业企查查查询记录_示例.json"; anchor.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); showToast("已导出企查查示例查询记录"); });
document.querySelector("#batchButton").addEventListener("click", async () => { if (!state.selectedIds.size) return showToast("请先勾选需要查询的企业"); for (const id of [...state.selectedIds]) await queryCompany(id, false); showToast("所选企业模拟查询完成"); });
document.querySelectorAll(".nav-item:not(.active)").forEach(link => link.addEventListener("click", event => { event.preventDefault(); showToast("本次样式稿展示企查查企业信息查询功能"); }));
companies.forEach(company => { if (company.status === "done") populateDemoResults(company); });
lucide.createIcons(); renderRows();
