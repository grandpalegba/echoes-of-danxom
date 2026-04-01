interface RoleTabsProps {
  tabs: { key: string; label: string; icon: string }[];
  activeTab: string;
  onTabChange: (key: string) => void;
}

const RoleTabs = ({ tabs, activeTab, onTabChange }: RoleTabsProps) => (
  <div className="flex border-b border-border overflow-x-auto">
    {tabs.map((tab) => (
      <button
        key={tab.key}
        onClick={() => onTabChange(tab.key)}
        className={`flex items-center gap-2 px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors relative ${
          activeTab === tab.key
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <span>{tab.icon}</span>
        {tab.label}
        {activeTab === tab.key && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
        )}
      </button>
    ))}
  </div>
);

export default RoleTabs;
