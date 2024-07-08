import React, { useState, useEffect } from "react";
import { SidebarWithLogo } from "../../components/content/SideBarComponent";
import {
  BiosecurityTabs,
  DashboardMenu,
} from "../Dashboard/DashboardMenuComponent.jsx";
import { DashboardTabsGovernment } from "../Dashboard/DashboardGovernmentPage.jsx";
import { DashboardTabsPeternak } from "../Dashboard/DashboardPeternakPage.jsx";
import { LiveStock } from "../LivestockPage/LivestockPage.jsx";
import SellRecordContent from "../SellRecords/SellRecordContent.jsx";
import ProfilePageContent from "../ProfilPage/ProfilePage.jsx";
// import LiveStockGov from '../LivestockPage/LiveStockGov.jsx';
import { SidebarWithLogoGov } from "../../components/content/SideBarComponentGov.jsx";
import SellRecordContentGov from "../SellRecords/SellRecordContentGov.jsx";
import AnimalDistributionData from "../AnimalDIstributionPage/AnimalDistributionData.jsx";
import AiBiz from "../AiBiz/AiBiz.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe, getMeDinas } from "../../features/authSlice.js";

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/home");
    }
  }, [isError, navigate]);

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
          {activeContent === "dashboardData" && <DashboardTabsPeternak />}
          {activeContent === "livestock" && <LiveStock />}
          {activeContent === "sellrecords" && <SellRecordContent />}
          {activeContent === "profile" && <ProfilePageContent />}
          {activeContent === "aibiz" && <AiBiz />}
        </div>
      </div>
    </div>
  );
};

export const DashboardPageGovernment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMeDinas());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/home");
    }
  }, [isError, navigate]);

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
          {activeContent === "dashboardData" && <DashboardTabsGovernment />}
          {/* {activeContent === "livestockGov" && <LiveStockGov />} */}
          {activeContent === "sellrecordsGov" && <SellRecordContentGov />}
          {activeContent === "mapData" && <AnimalDistributionData />}
          {activeContent === "profile" && <ProfilePageContent />}
          {activeContent === "biosecurity" && <BiosecurityTabs />}
        </div>
      </div>
    </div>
  );
};
