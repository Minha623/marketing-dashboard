import { BarChart3, Users, Play, Eye, ShoppingCart, CreditCard, ShoppingBag } from 'lucide-react';

export const stats =[
    {
        id:1,
        title:'Total Revenue',
        value:'$124,580',
        change: '12.5%',
        icon: BarChart3,
        bg:"#ede9fe",
        color:'#7c3aed',
    },
    {
        id:1,
        title:'Website Visitors',
        value:'256,840',
        change: '8.3%',
        icon: Users,
        bg:"#f3e8ff",
        color:'#a855f7',
    },
    {
        id:3,
        title:'Conversions',
        value:'8,421',
        change: '14.7%',
        icon: Play,
        bg:"#fce7f3",
        color:'#ec4899',
    },
    {
        id:3,
        title:'ROAS',
        value:'4.8x',
        change: '20.1%',
        icon: BarChart3,
        bg:"#ffe4e6",
        color:'#f43f5e',
    },
]

export const performanceData = Array.from({length: 30},(_,i)=>{
    const day = i + 1;
    return{
        date: `Nov ${day}`,
        revenue: Math.round(62000 + i * 2600 + Math.sin(i/1.8)* 9000),
        conversions: Math.round(2600 + i * 120 + Math.cos(i/2.2)*450),
    };
});

export const rangeTabs = ['7D', '30D', '3M', '1Y'];

export const trafficData = [
    {
        name:'Organic Search',
        value: 35,
        color:'#ec4899'
    },
    {
        name:'Paid Search',
        value: 22,
        color:'#8b5cf6'
    },
    {
        name:'Social Media',
        value: 18,
        color: '#fbda94'
    },
    {
        name:'Direct',
        value: 12,
        color:'#c4a5f7'
    },
    {
        name:'Email',
        value:8,
        color:'#e9d5a8'
    },
    {
        name:'Referral',
        value: 5,
        color:'#f9a8d4'
    },
]
export const socialData = [
  { name: 'W1', followers: 28000 },
  { name: 'W2', followers: 42000 },
  { name: 'W3', followers: 50000 },
  { name: 'W4', followers: 60000 },
  { name: 'W5', followers: 72000 },
  { name: 'W6', followers: 85000 },
  { name: 'W7', followers: 100000 },
];

export const platforms = [
  { name: 'Instagram', label: 'IG', color: '#e1306c' },
  { name: 'TikTok', label: 'TT', color: '#111827' },
  { name: 'LinkedIn', label: 'in', color: '#0a66c2' },
  { name: 'YouTube', label: 'YT', color: '#ff0000' },
  { name: 'X', label: 'X', color: '#111827' },
  { name: 'Pinterest', label: 'P', color: '#e60023' },
];

export const emailData = Array.from({ length: 30 }, (_, i) => ({
  date: `Apr ${i + 1}`,
  clicks: Math.round(1400 + i * 35 + Math.sin(i / 1.5) * 500),
}));

export const adData = Array.from({ length: 16 }, (_, i) => ({
  date: `Apr ${i * 2 + 1}`,
  spend: Math.round(4000 + i * 700 + Math.sin(i) * 900),
  roas: Number((2.2 + i * 0.17 + Math.cos(i / 1.4) * 0.5).toFixed(1)),
}));

export const funnelData = [
  { label: 'Website Visitors', value: '256,840', percent: '100%', width: 100, icon: Users, bg: 'linear-gradient(135deg,#ddd6fe,#e9d5ff)', color: '#7c3aed' },
  { label: 'Product Views', value: '64,210', percent: '25.0%', width: 90, icon: Eye, bg: 'linear-gradient(135deg,#fbcfe8,#f9a8d4)', color: '#ec4899' },
  { label: 'Add to Cart', value: '24,580', percent: '9.6%', width: 80, icon: ShoppingCart, bg: 'linear-gradient(135deg,#fecdd3,#fda4af)', color: '#f43f5e' },
  { label: 'Checkout Started', value: '12,430', percent: '4.8%', width: 70, icon: CreditCard, bg: 'linear-gradient(135deg,#fed7aa,#fdba94)', color: '#ea580c' },
  { label: 'Purchases', value: '8,421', percent: '3.3%', width: 60, icon: ShoppingBag, bg: 'linear-gradient(135deg,#fde68a,#fed7aa)', color: '#d97706' },
];

export const ageData = [
  { name: '18-24', value: 12, color: '#c4b5fd' },
  { name: '25-34', value: 28, color: '#a78bfa' },
  { name: '35-44', value: 24, color: '#f472b6' },
  { name: '45-54', value: 20, color: '#f9a8d4' },
  { name: '55-64', value: 11, color: '#f5d0fe' },
  { name: '65+', value: 5, color: '#e9d5ff' },
];

export const demoTabs = ['Age', 'Gender', 'Location'];

export const locations = [
  { name: 'United States', code: 'us', value: '38%' },
  { name: 'Canada', code: 'ca', value: '12%' },
  { name: 'United Kingdom', code: 'gb', value: '10%' },
  { name: 'Australia', code: 'au', value: '8%' },
  { name: 'Germany', code: 'de', value: '7%' },
];