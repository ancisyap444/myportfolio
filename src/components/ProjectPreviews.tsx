import React from 'react';
import { ShoppingCart, ShieldCheck, TrendingUp, Package, Check, Smartphone } from 'lucide-react';

export const GsyHardwarePreview: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#080D0F] rounded-xl overflow-hidden border border-border-custom flex flex-col font-sans select-none">
      {/* Browser Window Chrome */}
      <div className="px-3.5 py-2.5 bg-[#0D1315] border-b border-border-custom flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/70" />
        </div>
        <div className="flex items-center gap-2 bg-[#06090A] px-3 py-0.5 rounded-md border border-border-custom text-[11px] font-mono text-text-muted">
          <ShieldCheck className="w-3 h-3 text-primary" />
          <span>gsy-hardware.store/catalog</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
          <span>RLS: ACTIVE</span>
        </div>
      </div>

      {/* App Header */}
      <div className="px-4 py-2 bg-[#06090A]/90 border-b border-border-custom/80 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-primary" />
          <span className="font-semibold text-text-primary tracking-tight">GSY HARDWARE</span>
          <span className="text-[10px] text-primary/80 font-mono hidden sm:inline">| STOREFRONT</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-surface px-2 py-1 rounded border border-border-custom text-[11px] text-text-primary">
            <ShoppingCart className="w-3 h-3 text-primary" />
            <span>3 items</span>
          </div>
          <span className="text-[10px] font-mono bg-emerald-950 text-primary px-2 py-0.5 rounded border border-primary/30">
            Admin Auth
          </span>
        </div>
      </div>

      {/* Main Store Mockup Body */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3 overflow-hidden bg-gradient-to-b from-[#080D0F] to-[#06090A]">
        {/* Top Mini Stats */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
          <div className="p-2 rounded-lg bg-surface/70 border border-border-custom">
            <span className="text-text-muted block text-[9px]">IN STOCK</span>
            <span className="text-primary font-bold text-xs">1,248 Units</span>
          </div>
          <div className="p-2 rounded-lg bg-surface/70 border border-border-custom">
            <span className="text-text-muted block text-[9px]">ACTIVE ORDERS</span>
            <span className="text-text-primary font-bold text-xs">18 Pending</span>
          </div>
          <div className="p-2 rounded-lg bg-surface/70 border border-border-custom">
            <span className="text-text-muted block text-[9px]">SECURITY</span>
            <span className="text-primary font-bold text-xs">Postgres RLS</span>
          </div>
        </div>

        {/* Product Grid Mockup */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          <div className="p-2.5 rounded-lg bg-surface/50 border border-border-custom flex flex-col justify-between">
            <div>
              <div className="h-14 rounded bg-[#0D1416] border border-border-custom flex items-center justify-center mb-2">
                <span className="font-mono text-[10px] text-primary/80">⚡ 20V Cordless Drill</span>
              </div>
              <p className="text-[11px] font-medium text-text-primary truncate">Pro Impact Drill Kit</p>
              <p className="font-mono text-[10px] text-primary">₱ 3,450.00</p>
            </div>
            <div className="mt-2 pt-1.5 border-t border-border-custom/50 flex justify-between items-center text-[9px] text-text-muted">
              <span>Qty: 42</span>
              <span className="text-primary flex items-center gap-0.5"><Check className="w-2.5 h-2.5" /> Ready</span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-surface/50 border border-border-custom flex flex-col justify-between">
            <div>
              <div className="h-14 rounded bg-[#0D1416] border border-border-custom flex items-center justify-center mb-2">
                <span className="font-mono text-[10px] text-primary/80">🔧 48pc Socket Set</span>
              </div>
              <p className="text-[11px] font-medium text-text-primary truncate">Chrome Vanadium</p>
              <p className="font-mono text-[10px] text-primary">₱ 1,890.00</p>
            </div>
            <div className="mt-2 pt-1.5 border-t border-border-custom/50 flex justify-between items-center text-[9px] text-text-muted">
              <span>Qty: 18</span>
              <span className="text-primary flex items-center gap-0.5"><Check className="w-2.5 h-2.5" /> Ready</span>
            </div>
          </div>

          <div className="hidden sm:flex p-2.5 rounded-lg bg-surface/50 border border-border-custom flex-col justify-between">
            <div>
              <div className="h-14 rounded bg-[#0D1416] border border-border-custom flex items-center justify-center mb-2">
                <span className="font-mono text-[10px] text-primary/80">⚙️ Angle Grinder</span>
              </div>
              <p className="text-[11px] font-medium text-text-primary truncate">850W Heavy Duty</p>
              <p className="font-mono text-[10px] text-primary">₱ 2,120.00</p>
            </div>
            <div className="mt-2 pt-1.5 border-t border-border-custom/50 flex justify-between items-center text-[9px] text-text-muted">
              <span>Qty: 29</span>
              <span className="text-primary flex items-center gap-0.5"><Check className="w-2.5 h-2.5" /> Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BudgetTrackerPreview: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#080D0F] rounded-xl overflow-hidden border border-border-custom flex flex-col font-sans select-none">
      {/* Mobile Header Bar */}
      <div className="px-4 py-2 bg-[#0D1315] border-b border-border-custom flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-text-muted">
          <Smartphone className="w-3.5 h-3.5 text-primary" />
          <span>Flutter Mobile Client</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>Supabase Synced</span>
        </div>
      </div>

      {/* Mockup Screen Content */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3 bg-gradient-to-b from-[#080D0F] to-[#06090A]">
        {/* Balance Card */}
        <div className="p-3.5 rounded-xl bg-surface border border-primary/20 shadow-inner">
          <div className="flex justify-between items-center mb-1 text-[11px] text-text-muted font-mono">
            <span>TOTAL NET BALANCE</span>
            <span className="text-primary flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> +14.2%
            </span>
          </div>
          <div className="text-xl sm:text-2xl font-display font-bold text-text-primary tracking-tight">
            ₱ 48,250.00
          </div>
          <div className="mt-2 pt-2 border-t border-border-custom/60 flex justify-between text-[10px] font-mono">
            <span className="text-emerald-400">Income: ₱ 65,000</span>
            <span className="text-red-400">Expenses: ₱ 16,750</span>
          </div>
        </div>

        {/* Weekly Expense Breakdown Chart Mockup */}
        <div className="p-3 rounded-lg bg-surface/60 border border-border-custom">
          <div className="flex justify-between items-center text-[10px] font-mono text-text-muted mb-2">
            <span>WEEKLY SPENDING VELOCITY</span>
            <span className="text-primary">Target: OK</span>
          </div>
          <div className="flex items-end gap-2 h-12 pt-2">
            {[45, 60, 30, 85, 40, 95, 55].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div 
                  className={`w-full rounded-t transition-all ${
                    i === 5 ? 'bg-primary shadow-[0_0_8px_#39FF88]' : 'bg-primary/30'
                  }`}
                  style={{ height: `${val}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[8px] font-mono text-text-muted mt-1">
            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
          </div>
        </div>

        {/* Recent Transactions List */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between p-2 rounded bg-surface/40 border border-border-custom text-[11px]">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center text-primary text-[10px]">
                🛒
              </div>
              <span className="font-medium text-text-primary">Supplies & Groceries</span>
            </div>
            <span className="font-mono text-red-400 text-[10px]">- ₱ 1,420.00</span>
          </div>

          <div className="flex items-center justify-between p-2 rounded bg-surface/40 border border-border-custom text-[11px]">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center text-primary text-[10px]">
                💻
              </div>
              <span className="font-medium text-text-primary">Dev Tools & Hosting</span>
            </div>
            <span className="font-mono text-red-400 text-[10px]">- ₱ 850.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
