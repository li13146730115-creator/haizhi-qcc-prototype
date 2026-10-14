const companies = [
  {
    id: "hz-001",
    name: "北京海智科技有限公司",
    short: "海",
    type: "科技型中小企业",
    code: "91110108MA01A8KX4L",
    park: "海智园 A 区",
    industry: "软件和信息技术服务业",
    joined: "2024-03-18",
    status: "done",
    statusText: "已完成",
    queriedAt: "2026-10-14 14:32",
    base: {
      "企业名称": "北京海智科技有限公司",
      "统一社会信用代码": "91110108MA01A8KX4L",
      "法定代表人": "周明远",
      "注册资本": "2,000 万人民币",
      "成立日期": "2018-05-22",
      "登记状态": "存续",
      "登记机关": "北京市海淀区市场监督管理局",
      "企业类型": "有限责任公司（自然人投资或控股）",
      "所属园区": "海智园 A 区",
      "入驻时间": "2024-03-18",
      "退出时间": "—",
      "注册地址": "北京市海淀区海智路 88 号 3 层",
      "联系电话": "010-6808 2018",
      "官网": "www.haizhitech.com",
      "经营范围": "技术开发、技术咨询、软件开发、数据处理及存储支持服务。"
    },
    finance: {
      "企业": "北京海智科技有限公司",
      "统计期": "2025 年度",
      "营业收入": "¥ 86,420,000",
      "纳税总额": "¥ 5,812,400",
      "税种": "增值税、企业所得税",
      "数据状态": "已核验",
      "来源": "企查查企业年报 / 财税数据接口"
    },
    tech: {
      "成果／专利编号": "CN202510082731.4",
      "权利人": "北京海智科技有限公司",
      "技术领域": "人工智能与园区数字化",
      "法律状态": "审中",
      "取得时间": "2025-03-06",
      "转化状态": "待补充"
    },
    funding: {
      "排名口径": "北京市软件和信息技术服务业",
      "榜单时间": "2025 年",
      "行业排名": "Top 50（待补充）",
      "融资轮次": "B 轮",
      "融资金额": "¥ 3,000 万",
      "融资日期": "2025-11-12",
      "来源": "企查查融资信息接口"
    },
    chain: {
      "产业链节点": "园区数字化服务平台",
      "上下游关系": "上游：云服务 / 算力；下游：园区运营方",
      "企业归属": "数字经济产业链",
      "证据": "企业经营范围、专利技术、公开融资信息",
      "版本": "2026.10"
    }
  },
  {
    id: "hz-002",
    name: "北京云筑建筑科技有限公司",
    short: "云",
    type: "专精特新企业",
    code: "91110108MA02N6QH8P",
    park: "海智园 B 区",
    industry: "建筑信息化",
    joined: "2023-08-09",
    status: "pending",
    statusText: "未查询",
    queriedAt: "—",
    base: {
      "企业名称": "北京云筑建筑科技有限公司",
      "统一社会信用代码": "91110108MA02N6QH8P",
      "法定代表人": "李安",
      "注册资本": "1,500 万人民币",
      "成立日期": "2020-10-15",
      "登记状态": "存续",
      "登记机关": "北京市海淀区市场监督管理局",
      "企业类型": "有限责任公司",
      "所属园区": "海智园 B 区",
      "入驻时间": "2023-08-09",
      "退出时间": "—",
      "注册地址": "北京市海淀区海智路 88 号 7 层",
      "联系电话": "010-6808 2026",
      "官网": "www.yunzhu.tech",
      "经营范围": "建筑信息模型技术服务、工程管理服务、软件开发。"
    },
    finance: {
      "企业": "北京云筑建筑科技有限公司",
      "统计期": "—",
      "营业收入": "待查询",
      "纳税总额": "待查询",
      "税种": "待查询",
      "数据状态": "未查询",
      "来源": "—"
    },
    tech: {
      "成果／专利编号": "待查询",
      "权利人": "待查询",
      "技术领域": "待查询",
      "法律状态": "待查询",
      "取得时间": "待查询",
      "转化状态": "待补充"
    },
    funding: {
      "排名口径": "待查询",
      "榜单时间": "待查询",
      "行业排名": "待查询",
      "融资轮次": "待查询",
      "融资金额": "待查询",
      "融资日期": "待查询",
      "来源": "—"
    },
    chain: {
      "产业链节点": "待查询",
      "上下游关系": "待查询",
      "企业归属": "待查询",
      "证据": "—",
      "版本": "—"
    }
  },
  {
    id: "hz-003",
    name: "北京绿洲新能源有限公司",
    short: "绿",
    type: "高新技术企业",
    code: "91110108MA03R2YT7M",
    park: "海智园 A 区",
    industry: "新能源",
    joined: "2022-12-21",
    status: "failed",
    statusText: "查询失败",
    queriedAt: "2026-10-14 13:08",
    base: {
      "企业名称": "北京绿洲新能源有限公司",
      "统一社会信用代码": "91110108MA03R2YT7M",
      "法定代表人": "陈嘉",
      "注册资本": "3,800 万人民币",
      "成立日期": "2019-07-04",
      "登记状态": "存续",
      "登记机关": "北京市海淀区市场监督管理局",
      "企业类型": "有限责任公司",
      "所属园区": "海智园 A 区",
      "入驻时间": "2022-12-21",
      "退出时间": "—",
      "注册地址": "北京市海淀区海智路 88 号 5 层",
      "联系电话": "010-6808 2039",
      "官网": "—",
      "经营范围": "新能源技术开发、储能设备销售、技术咨询。"
    },
    finance: {
      "企业": "北京绿洲新能源有限公司",
      "统计期": "—",
      "营业收入": "接口超时",
      "纳税总额": "接口超时",
      "税种": "—",
      "数据状态": "查询失败",
      "来源": "企查查财税数据接口"
    },
    tech: {
      "成果／专利编号": "CN202412302993.8",
      "权利人": "北京绿洲新能源有限公司",
      "技术领域": "储能系统",
      "法律状态": "有效",
      "取得时间": "2024-09-18",
      "转化状态": "待补充"
    },
    funding: {
      "排名口径": "新能源设备制造",
      "榜单时间": "2025 年",
      "行业排名": "待查询",
      "融资轮次": "A 轮",
      "融资金额": "¥ 1,500 万",
      "融资日期": "2024-08-20",
      "来源": "企查查融资信息接口"
    },
    chain: {
      "产业链节点": "储能设备",
      "上下游关系": "上游：电芯 / 功率器件；下游：园区能源管理",
      "企业归属": "新能源产业链",
      "证据": "企业公开信息",
      "版本": "2026.10"
    }
  }
];

const state = { selectedStatus: "all", selectedPark: "all", selectedIds: new Set(), currentCompany: null, currentTab: "base", showJson: false, opener: null };
const rows = document.querySelector("#companyRows");
const searchInput = document.querySelector("#searchInput");
const filterPanel = document.querySelector("#filterPanel");
const drawerLayer = document.querySelector("#drawerLayer");
const toast = document.querySelector("#toast");

function statusClass(status) {
  return { done: "done", pending: "pending", failed: "failed", loading: "loading" }[status] || "pending";
}

function statusLabel(status) {
  return { done: "已完成", pending: "未查询", failed: "查询失败", loading: "查询中" }[status] || "未查询";
}

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

  rows.innerHTML = filtered.map((company) => `
    <tr data-row-id="${company.id}">
      <td class="check-col"><input class="row-check" type="checkbox" data-id="${company.id}" ${state.selectedIds.has(company.id) ? "checked" : ""} aria-label="选择 ${company.name}" /></td>
      <td>
        <div class="company-cell">
          <div class="company-avatar">${company.short}</div>
          <div><div class="company-name">${company.name}</div><div class="company-type">${company.type}</div></div>
        </div>
      </td>
      <td><span class="code-text">${company.code}</span></td>
      <td>${company.park}</td>
      <td>${company.industry}</td>
      <td>${company.joined}</td>
      <td><span class="status-pill ${statusClass(company.status)}">${statusLabel(company.status)}</span></td>
      <td>${company.queriedAt}</td>
      <td class="action-cell">${buttonMarkup(company)}</td>
    </tr>
  `).join("") || `<tr><td colspan="9" style="padding: 32px; text-align:center; color:#9aa3b5;">没有找到匹配的企业</td></tr>`;

  document.querySelectorAll(".row-check").forEach((checkbox) => checkbox.addEventListener("change", () => {
    if (checkbox.checked) state.selectedIds.add(checkbox.dataset.id);
    else state.selectedIds.delete(checkbox.dataset.id);
    updateSelectedCount();
  }));
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

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

async function queryCompany(id, openOnComplete = true) {
  const company = companies.find((item) => item.id === id);
  if (!company || company.status === "loading") return;
  company.status = "loading";
  renderRows();
  showToast(`正在查询 ${company.name} 的企查查信息…`);
  await new Promise(resolve => window.setTimeout(resolve, 950));
    company.status = "done";
    company.statusText = "已完成";
    company.queriedAt = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Shanghai", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(new Date());
    populateDemoResults(company);
    renderRows();
    if (openOnComplete) openDrawer(company.id);
    showToast("模拟查询完成，可查看企业信息");
}

function escapeText(value) {
  return String(value).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function renderValue(value) {
  if (value === null || value === undefined) return '<span class="field-value muted">未返回</span>';
  if (Array.isArray(value)) {
    if (!value.length) return '<span class="field-value muted">暂无记录</span>';
    return value.map((item, index) => `<div class="nested-field"><strong>记录 ${index + 1}</strong><div>${renderValue(item)}</div></div>`).join("");
  }
  if (typeof value === "object") return `<div class="nested-object">${Object.entries(value).map(([key, item]) => `<div class="nested-item"><span class="nested-label">${escapeText(key)}</span><span class="nested-value">${renderValue(item)}</span></div>`).join("")}</div>`;
  return escapeText(value);
}

function fieldTable(values) {
  return `<table class="field-table"><tbody>${Object.entries(values).map(([key, value]) => `<tr><td>${escapeText(key)}</td><td class="field-value ${value === "—" || String(value).includes("待") || String(value).includes("超时") ? "muted" : ""}">${renderValue(value)}</td></tr>`).join("")}</tbody></table>`;
}

function populateDemoResults(company) {
  company.base["行业"] = company.industry;
  company.finance = {
    "企业": company.name, "统计期": "2025 年度", "营业收入": company.id === "hz-001" ? "8,642.00 万元" : "3,580.00 万元",
    "税额": company.id === "hz-001" ? "581.24 万元" : "238.00 万元", "税种": "增值税、企业所得税", "数据状态": "模拟查询成功", "来源": "年报与财税示例数据"
  };
  company.funding["行业排名"] = "暂无数据";
  company.funding["排名口径"] = "暂无数据";
  company.funding["榜单时间"] = "暂无数据";
  if (company.id === "hz-002") {
    company.tech = { "成果／专利编号": "CN202510001234.0（示例）", "权利人": company.name, "技术领域": "建筑信息化", "法律状态": "审中", "取得时间": "2025-08-20", "转化状态": "园区系统待补充" };
    Object.assign(company.funding, { "融资轮次": "A 轮", "融资金额": "2,000 万元（示例）", "融资日期": "2025-09-10", "来源": "融资信息示例数据" });
  }
  company.tech["转化状态"] = "园区系统待补充";
  company.chain = { "产业链节点": "园区系统待补充", "上下游关系": "园区系统待补充", "企业归属": "园区系统待补充", "证据": "暂无数据", "版本": "暂无数据" };
  company.apiResults = [
    { id: "735", title: "企业工商详情", group: "base", data: { ...company.base, "所属园区": undefined, "入驻时间": undefined, "退出时间": undefined } },
    { id: "213", title: "企业年报信息", group: "finance", data: { "年报年度": "2025", "发布日期": "2026-06-25", "企业名称": company.name, "财务信息": { "营业总收入": company.finance["营业收入"], "资产总额": "5,260.00 万元（示例）", "利润总额": "680.00 万元（示例）", "纳税总额": company.finance["税额"] }, "年报网站": [{ "类型": "网站", "名称": "企业官网", "网址": company.base["官网"] }] } },
    { id: "1124", title: "企业财税数据", group: "finance", data: { "企业名称": company.name, "统计期": "2025", "营业收入": company.finance["营业收入"], "税额": company.finance["税额"], "税种": [{ "名称": "增值税", "税额": company.id === "hz-001" ? "420.00 万元（示例）" : "150.00 万元（示例）" }, { "名称": "企业所得税", "税额": company.id === "hz-001" ? "161.24 万元（示例）" : "88.00 万元（示例）" }], "数据状态": "示例" } },
    { id: "514", title: "国内专利", group: "tech", data: { "总记录数": 1, "记录": [{ ...company.tech, "专利名称": `${company.industry}数据处理方法（示例）`, "专利类型": "发明专利", "申请日期": "2025-03-06", "公布日期": "2025-08-19", "摘要": "用于展示长文本字段和知识产权明细的虚构示例。" }] } },
    { id: "997", title: "国际专利", group: "tech", data: { "总记录数": 0, "记录": [] } },
    { id: "233", title: "软件著作权", group: "tech", data: { "总记录数": 1, "记录": [{ "登记号": "2025SR0000123（示例）", "软件名称": "企业数字管理系统", "版本号": "V1.0", "著作权人": company.name, "登记批准日期": "2025-05-19", "开发完成日期": "2025-02-20" }] } },
    { id: "231", title: "商标", group: "tech", data: { "总记录数": 1, "记录": [{ "注册号": "00001234（示例）", "商标名称": `${company.short}智`, "申请人": company.name, "国际分类": "第 42 类", "申请日期": "2025-01-15", "状态": "已注册" }] } },
    { id: "950", title: "融资信息", group: "funding", data: { "总记录数": 1, "记录": [{ "企业名称": company.name, "融资轮次": company.funding["融资轮次"], "融资金额": company.funding["融资金额"], "融资日期": company.funding["融资日期"], "投资方": ["园区产业基金（示例）"], "来源": "虚构融资示例" }] } },
    { id: "962", title: "企业图谱", group: "chain", data: { "中心企业": company.name, "节点": [{ "编号": "c-1", "名称": company.name, "类型": "企业" }, { "编号": "p-1", "名称": company.base["法定代表人"], "类型": "人员" }], "关系": [{ "起点": "p-1", "终点": "c-1", "关系类型": "法定代表人" }] } }
  ].map(api => ({ ...api, data: Object.fromEntries(Object.entries(api.data).filter(([, value]) => value !== undefined)) }));
}

function apiSections(company, group) {
  return company.apiResults.filter(api => api.group === group).map(api => `<div class="record-heading"><strong>${api.title}</strong><span class="record-count">示例返回</span></div>${fieldTable(api.data)}`).join("");
}

function flattenFields(value, path, output) {
  if (value !== null && typeof value === "object" && Object.keys(value).length) {
    for (const [key, child] of Object.entries(value)) flattenFields(child, `${path} / ${Array.isArray(value) ? `第 ${Number(key) + 1} 条` : key}`, output);
  } else output[path] = Array.isArray(value) ? "暂无记录（空数组）" : value;
}

function renderDrawerBody() {
  const company = state.currentCompany;
  if (!company) return;
  const body = document.querySelector("#drawerBody");
  if (state.currentTab === "raw") {
    const raw = { "企业": company.name, "查询时间": company.queriedAt, "各接口示例返回": company.apiResults.map(api => ({ "接口": api.title, "接口编号": api.id, "返回内容": api.data })) };
    const flattened = {}; company.apiResults.forEach(api => flattenFields(api.data, api.title, flattened));
    body.innerHTML = `<div class="raw-switch"><h3>全部返回字段 <span class="source-tag">${Object.keys(flattened).length} 个示例字段</span></h3><button class="button secondary small" id="toggleRawButton" type="button">${state.showJson ? "键值表展示" : "查看 JSON"}</button></div><div class="data-note">展示各接口示例返回的完整内容。空值和嵌套明细保留展示；真实字段清单需按接口文档确认。</div>${state.showJson ? `<pre class="raw-block">${escapeText(JSON.stringify(raw, null, 2))}</pre>` : `<div class="all-fields">${fieldTable(flattened)}</div>`}`;
    document.querySelector("#toggleRawButton").addEventListener("click", () => { state.showJson = !state.showJson; renderDrawerBody(); });
    return;
  }
  const config = {
    base: ["基础档案", "企业工商详情", company.base],
    finance: ["企业营收、税收", "年报与财税数据", company.finance],
    tech: ["专利、技术成果", "专利、软著与商标", company.tech],
    funding: ["行业排名、融资", "融资信息", company.funding],
    chain: ["产业链图谱", "企业图谱", company.chain]
  }[state.currentTab];
  if (state.currentTab === "base") {
    body.innerHTML = `<div class="section-heading"><h3>工商信息</h3><span class="source-tag">企查查 · 示例数据</span></div>${fieldTable(company.apiResults[0].data)}<div class="record-heading"><strong>园区档案</strong><span class="record-count">园区系统提供</span></div>${fieldTable({ "所属园区": company.park, "入驻时间": company.joined, "退出时间": "—" })}`;
  } else {
    let note = "";
    if (state.currentTab === "funding") note = '<div class="empty-note">行业排名、排名口径和榜单时间：暂无数据。当前对接范围提供融资信息。</div>';
    if (state.currentTab === "chain") note = '<div class="empty-note">产业链节点、上下游关系、企业归属、证据、版本：当前保留字段位置，需后续补充产业链数据。以下演示企业图谱的节点与关系。</div>';
    if (state.currentTab === "tech") note = '<div class="data-note">转化状态由园区系统补充。下方分别展示国内专利、国际专利、软件著作权和商标的返回明细。</div>';
    body.innerHTML = `${note}${apiSections(company, state.currentTab)}`;
  }
}

function openDrawer(id) {
  const company = companies.find((item) => item.id === id);
  if (!company) return;
  state.currentCompany = company;
  state.opener = document.activeElement;
  state.currentTab = "base";
  document.querySelector("#drawerTitle").textContent = "企业详情";
  document.querySelector("#drawerSubtitle").textContent = `${company.park} · ${company.industry}`;
  document.querySelector("#drawerCompanyName").textContent = company.name;
  document.querySelector("#drawerCompanyCode").textContent = `统一社会信用代码 ${company.code}`;
  document.querySelector("#drawerLogo").textContent = company.short;
  const status = document.querySelector("#drawerStatus");
  status.className = `status-pill ${statusClass(company.status)}`;
  status.textContent = statusLabel(company.status);
  document.querySelector("#drawerQueriedAt").textContent = company.queriedAt === "—" ? "尚未查询" : company.queriedAt;
  document.querySelectorAll(".drawer-tab").forEach((tab) => { tab.classList.toggle("active", tab.dataset.tab === state.currentTab); tab.setAttribute("aria-selected", String(tab.dataset.tab === state.currentTab)); });
  renderDrawerBody();
  drawerLayer.classList.add("open");
  drawerLayer.setAttribute("aria-hidden", "false");
  document.querySelector(".app-shell").inert = true;
  document.body.style.overflow = "hidden";
  document.querySelector("#closeDrawer").focus();
}

function closeDrawer() {
  drawerLayer.classList.remove("open");
  drawerLayer.setAttribute("aria-hidden", "true");
  document.querySelector(".app-shell").inert = false;
  document.body.style.overflow = "";
  if (state.opener?.isConnected) state.opener.focus();
}

document.querySelector("#closeDrawer").addEventListener("click", closeDrawer);
document.querySelector("#drawerBackdrop").addEventListener("click", closeDrawer);
document.addEventListener("keydown", (event) => {
  if (!drawerLayer.classList.contains("open")) return;
  if (event.key === "Escape") closeDrawer();
  if (event.key === "Tab") {
    const buttons = [...drawerLayer.querySelectorAll("button, a, input")].filter(el => !el.disabled && el.getClientRects().length);
    const first = buttons[0]; const last = buttons.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
document.querySelectorAll(".drawer-tab").forEach((tab) => tab.addEventListener("click", () => {
  state.currentTab = tab.dataset.tab;
  document.querySelectorAll(".drawer-tab").forEach((item) => { item.classList.toggle("active", item === tab); item.setAttribute("aria-selected", String(item === tab)); });
  renderDrawerBody();
}));
document.querySelector("#requeryButton").addEventListener("click", () => {
  if (state.currentCompany) { closeDrawer(); queryCompany(state.currentCompany.id); }
});
searchInput.addEventListener("input", renderRows);
document.querySelector("#filterButton").addEventListener("click", () => {
  filterPanel.hidden = !filterPanel.hidden;
  document.querySelector(".filter-dot").classList.toggle("visible", !filterPanel.hidden);
  document.querySelector("#filterButton").setAttribute("aria-expanded", String(!filterPanel.hidden));
});
document.querySelectorAll(".filter-chip[data-status]").forEach((chip) => chip.addEventListener("click", () => {
  state.selectedStatus = chip.dataset.status;
  document.querySelectorAll(".filter-chip[data-status]").forEach((item) => item.classList.toggle("selected", item === chip));
  renderRows();
}));
document.querySelector("#selectAll").addEventListener("change", (event) => {
  document.querySelectorAll(".row-check").forEach((checkbox) => {
    checkbox.checked = event.target.checked;
    if (checkbox.checked) state.selectedIds.add(checkbox.dataset.id);
    else state.selectedIds.delete(checkbox.dataset.id);
  });
  updateSelectedCount();
});
document.querySelector("#refreshButton").addEventListener("click", () => { renderRows(); showToast("企业列表已刷新"); });
document.querySelectorAll(".filter-chip[data-park]").forEach(chip => chip.addEventListener("click", () => {
  state.selectedPark = chip.dataset.park;
  document.querySelectorAll(".filter-chip[data-park]").forEach(item => item.classList.toggle("selected", item === chip));
  renderRows();
}));
document.querySelector("#exportButton").addEventListener("click", () => {
  const payload = companies.filter(c => c.status === "done").map(c => ({ "企业": c.name, "统一社会信用代码": c.code, "最近查询": c.queriedAt, "示例返回": c.apiResults }));
  const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" }));
  const anchor = document.createElement("a"); anchor.href = url; anchor.download = "企业查询记录_示例.json"; anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast("已导出示例查询记录");
});
document.querySelector("#batchButton").addEventListener("click", async () => {
  if (!state.selectedIds.size) return showToast("请先勾选需要查询的企业");
  for (const id of [...state.selectedIds]) await queryCompany(id, false);
  showToast("所选企业模拟查询完成");
});

document.querySelectorAll(".nav-item:not(.active)").forEach(link => link.addEventListener("click", event => {
  event.preventDefault(); showToast("本次样式稿展示企业信息查询功能");
}));
populateDemoResults(companies[0]);
lucide.createIcons();

renderRows();
