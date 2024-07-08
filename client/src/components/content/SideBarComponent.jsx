import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  InboxIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Logout, reset } from "../../features/authSlice";

export function SidebarWithLogo({ handleTabChange }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { peternak } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logout = () => {
    dispatch(Logout());
    dispatch(reset());
    navigate("/home");
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleClickLivestock = () => {
    handleTabChange("livestock");
    setSidebarOpen(false);
  };

  const handleClickSellRecords = () => {
    handleTabChange("sellrecords");
    setSidebarOpen(false);
  };

  const handleClickAiBiz = () => {
    handleTabChange("aibiz");
    setSidebarOpen(false);
  };

  const handleClickDashboard = (tab) => {
    handleTabChange("dashboardData");
    setSidebarOpen(false);
  };

  const handleClickProfile = (tab) => {
    handleTabChange("profile");
    setSidebarOpen(false);
  };

  return (
    <div>
      <div className="md:hidden flex justify-between p-4">
        <img src="/assets/logo.png" alt="brand" className="h-12 w-12" />
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>

      <div
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <Card
          className="sidebar h-screen w-full max-w-[20rem] rounded-none"
          style={{ boxShadow: "none" }}
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <img src="/assets/logo.png" alt="brand" className="h-12 w-12" />
          </div>
          <List>
            <Accordion open={open === 1}>
              <ListItem
                className="p-0"
                selected={open === 1}
                onClick={handleClickDashboard}
              >
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Dashboard
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>

            <ListItem onClick={handleClickSellRecords}>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Sell Records
            </ListItem>

            <ListItem onClick={handleClickLivestock}>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Livestock
            </ListItem>

            <ListItem onClick={handleClickAiBiz}>
              <ListItemPrefix>
                <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />
              </ListItemPrefix>
              AiBiz
            </ListItem>

            <ListItem onClick={handleClickProfile}>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              <button onClick={logout}>Log Out</button>
            </ListItem>
          </List>
        </Card>
      </div>
    </div>
  );
}
