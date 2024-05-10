import { Tabs, TabsBody, TabsHeader, Tab, TabPanel } from '@material-tailwind/react'
import React from 'react'
import { DashboardTabs } from '../../components/content/DashboardTabsComponent.jsx';

export function DashboardMenu() {
    const [activeTab, setActiveTab] = React.useState("dashboard");
    const data = [
        {
            label: "Dashboard",
            value: "dashboard",

        },
        {
            label: "Biosecurity",
            value: "biosecurity",

        },
    ];
    return (
        <>
            <Tabs value={activeTab}>
                <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 m-0 w-[250px] pt-4 "
                    indicatorProps={{
                        className: "bg-transparent border-b-2 border-green-500 shadow-none rounded-none",
                    }}
                >
                    {data.map(({ label, value }) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "text-gray-900 pb-4 font-semibold" : ""}
                            style={{ width: "250px" }}
                        >
                            {label}
                        </Tab>
                    ))}

                </TabsHeader>
                <TabsBody>
                    {data.map(({ value }) => (
                        <TabPanel key={value} value={value} className="p-0">

                            {activeTab === "dashboard"}
                            {activeTab === "biosecurity" && value === "biosecurity" && <BiosecurityTabs />}

                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>

        </>
    );
}


export function BiosecurityTabs() {
    return (
        <></>
    )
}