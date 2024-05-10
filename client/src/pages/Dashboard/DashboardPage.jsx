import React, { useState } from 'react';
import { SidebarWithLogo } from '../../components/content/SideBarComponent';
import { BiosecurityTabs, DashboardMenu } from '../Dashboard/DashboardMenuComponent.jsx';
import { DashboardTabs } from '../../components/content/DashboardTabsComponent.jsx';
import { LiveStock } from '../LivestockPage/LivestockPage.jsx';
import SellRecordContent from '../SellRecords/SellRecordContent.jsx';
import ProfilePageContent from '../ProfilPage/ProfilePage.jsx';
import LiveStockGov from '../LivestockPage/LiveStockGov.jsx';
import { SidebarWithLogoGov } from '../../components/content/SideBarComponentGov.jsx';
import SellRecordContentGov from '../SellRecords/SellRecordContentGov.jsx';
import AnimalDistributionData from '../AnimalDIstributionPage/AnimalDistributionData.jsx';

export const DashboardPage = () => {
    const [activeContent, setActiveContent] = useState("dashboardData");

    const handleTabChange = (content) => {
        setActiveContent(content);
    };

    return (
        <div className="h-screen">
            <div className="grid grid-cols-12 h-full">
                <div className="col-span-3 w-full">
                    <SidebarWithLogo handleTabChange={handleTabChange} />
                </div>
                <div className="col-span-9 w-full bg-gray-200">
                    <DashboardMenu handleTabChange={handleTabChange} />
                    {activeContent === "dashboardData" && <DashboardTabs />}
                    {activeContent === "livestock" && <LiveStock />}
                    {activeContent === "sellrecords" && <SellRecordContent />}
                    {activeContent === "profile" && <ProfilePageContent />}
                    {activeContent === "biosecurity" && <BiosecurityTabs />}
                </div>
            </div>
        </div>
    );
};

export const DashboardPageGovernment = () => {
    const [activeContent, setActiveContent] = useState("livestockGov");

    const handleTabChange = (content) => {
        setActiveContent(content);
    };

    return (
        <div className="h-screen">
            <div className="grid grid-cols-12 h-full">
                <div className="col-span-3 w-full">
                    <SidebarWithLogoGov handleTabChange={handleTabChange} />
                </div>
                <div className="col-span-9 w-full bg-gray-200">
                    <DashboardMenu handleTabChange={handleTabChange} />
                    {activeContent === "dashboardData" && <DashboardTabs />}
                    {activeContent === "livestockGov" && <LiveStockGov />}
                    {activeContent === "sellrecordsGov" && <SellRecordContentGov />}
                    {activeContent === "mapData" && <AnimalDistributionData />}
                    {activeContent === "profile" && <ProfilePageContent />}
                    {activeContent === "biosecurity" && <BiosecurityTabs />}
                </div>
            </div>
        </div>
    );
};
