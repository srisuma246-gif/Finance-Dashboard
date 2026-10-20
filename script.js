// Demo financial data. Replace with API responses for a production application.
const monthly = [
  {month:'Jan',income:7200,expense:4200},{month:'Feb',income:9100,expense:5300},
  {month:'Mar',income:8200,expense:4700},{month:'Apr',income:11500,expense:6200},
  {month:'May',income:10400,expense:5500},{month:'Jun',income:13200,expense:7100},
  {month:'Jul',income:12300,expense:6000},{month:'Aug',income:14100,expense:7800},
  {month:'Sep',income:13500,expense:6800},{month:'Oct',income:15900,expense:7900},
  {month:'Nov',income:15000,expense:7200},{month:'Dec',income:18420,expense:7185}
];
const transactions=[
  {name:'Acme Studio',category:'Client payment',date:'Oct 18, 2026',amount:2450},
  {name:'Office Supplies',category:'Shopping',date:'Oct 17, 2026',amount:-189.50},
  {name:'Monthly Rent',category:'Housing',date:'Oct 15, 2026',amount:-1650},
  {name:'Design Contract',category:'Client payment',date:'Oct 12, 2026',amount:3200},
  {name:'Groceries',category:'Food & Dining',date:'Oct 10, 2026',amount:-126.85}
];
const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(Math.abs(n));
function renderChart(count){const data=monthly.slice(-count),max=Math.max(...data.map(x=>x.income))*1.1;document.getElementById('chart').innerHTML=data.map(x=>`<div class="chart-col"><div class="bars"><div class="bar income" title="${x.month} income: ${money(x.income)}" style="height:${x.income/max*100}%"></div><div class="bar expense" title="${x.month} expenses: ${money(x.expense)}" style="height:${x.expense/max*100}%"></div></div><span class="month">${x.month}</span></div>`).join('')}
function renderTransactions(q=''){const matches=transactions.filter(t=>(t.name+' '+t.category+' '+t.date).toLowerCase().includes(q.toLowerCase()));document.getElementById('rows').innerHTML=matches.map(t=>`<tr><td>${t.name}</td><td>${t.category}</td><td>${t.date}</td><td class="${t.amount>=0?'amount-positive':'amount-negative'}">${t.amount>=0?'+':'−'}${money(t.amount)}</td><td><span class="badge">Completed</span></td></tr>`).join('');document.getElementById('empty').hidden=matches.length>0}
document.getElementById('period').addEventListener('change',e=>renderChart(Number(e.target.value)));
document.getElementById('search').addEventListener('input',e=>renderTransactions(e.target.value));
renderChart(6);renderTransactions();
