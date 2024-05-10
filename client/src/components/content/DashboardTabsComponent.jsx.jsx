import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import {
    CardBody,
    CardHeader,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
// import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
// import { LivestockPage } from "../../pages/LivestockPage/LivestockPage";

function DashboardDataShow() {
    return (
        <>
            <div className="bg-gray-200 h-screen">

                <div className="flex">
                    <div className="text-2xl font-medium text-gray-900 px-4 pt-4 w-full">Livestocks</div>
                </div>
                <div className="grid grid-cols-4 gap-4 p-4">
                    <div class="grid grid-cols-2 w-full rounded-md h-28 bg-white">
                        <div class="flex items-center justify-center">
                            {/* <img src="/assets/cow.svg" alt="" class="w-[50px] h-[50px] m-8" /> */}
                            <img src="/assets/noun-pig-6542616.png" alt="" className="w-[70px] h-[70px]" />

                        </div>
                        <div class="flex items-center justify-center">
                            <label for="" class="text-gray-900 font-semibold">12</label>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 w-full rounded-md h-28 bg-white">
                        <div class="flex items-center justify-center">
                            <img src="/assets/noun-cow-6694922.png" alt="" class="w-[70px] h-[70px]" />

                        </div>
                        <div class="flex items-center justify-center">
                            <label for="" class="text-gray-900 font-semibold">12</label>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 w-full rounded-md h-28 bg-white">
                        <div class="flex items-center justify-center">
                            <img src="/assets/noun-sheep-6186377.png" alt="" class="w-[70px] h-[70px]" />

                        </div>
                        <div class="flex items-center justify-center">
                            <label for="" class="text-gray-900 font-semibold">12</label>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 w-full rounded-md h-28 bg-white">
                        <div class="flex items-center justify-center">
                            <img src="/assets/noun-chicken-6764444.png" alt="" class="w-[70px] h-[70px]" />
                        </div>
                        <div class="flex items-center justify-center">
                            <label for="" class="text-gray-900 font-semibold">12</label>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 w-full rounded-md h-28 bg-white">
                        <div class="flex items-center justify-center">
                            <img src="/assets/noun-buffalo-4576873.png" alt="" class="w-[70px] h-[70px]" />

                        </div>
                        <div class="flex items-center justify-center">
                            <label for="" class="text-gray-900 font-semibold">12</label>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 w-full rounded-md h-28 bg-white">
                        <div class="flex items-center justify-center">
                            <img src="/assets/noun-goat-6694931.png" alt="" class="w-[50px] h-[50px] m-8" />

                        </div>
                        <div class="flex items-center justify-center">
                            <label for="" class="text-gray-900 font-semibold">12</label>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 w-full rounded-md h-28 bg-white">
                        <div class="flex items-center justify-center">
                            <img src="/assets/noun-duck-6713082.png" alt="" class="w-[50px] h-[50px] m-8" />
                        </div>
                        <div class="flex items-center justify-center">
                            <label for="" class="text-gray-900 font-semibold">12</label>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 w-full rounded-md h-28 bg-white">
                        <div class="flex items-center justify-center">
                            <img src="/assets/noun-rabbit-6694934.png" alt="" class="w-[50px] h-[50px] m-8" />
                        </div>
                        <div class="flex items-center justify-center">
                            <label for="" class="text-gray-900 font-semibold">12</label>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 w-full rounded-md h-28 bg-white">
                        <div class="flex items-center justify-center">
                            <img src="/assets/noun-horse-6722214.png" alt="" class="w-[50px] h-[50px] m-8" />
                        </div>
                        <div class="flex items-center justify-center">
                            <label for="" class="text-gray-900 font-semibold">12</label>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 w-full rounded-md h-28 bg-white">
                        <div class="flex items-center justify-center">
                            <img src="/assets/noun-turkey-6358872.png" alt="" class="w-[50px] h-[50px] m-8" />
                        </div>
                        <div class="flex items-center justify-center">
                            <label for="" class="text-gray-900 font-semibold">12</label>
                        </div>
                    </div>





                </div>
                <div className="p-4 relative bottom-0 w-full">
                    <CardChartDashboard />
                </div>
                <hr className="border-2 mb-12 mt-4 z-40" style={{ color: '#333', zIndex: '999' }} />
            </div>
        </>
    );
}

const chartConfig = {
    type: "bar",
    height: 240,
    series: [
        {
            name: "Sales",
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
    ],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            show: "",
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#22c55e"],
        plotOptions: {
            bar: {
                columnWidth: "40%",
                borderRadius: 2,
            },
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
            categories: [
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
        },
        grid: {
            show: true,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: 5,
                right: 20,
            },
        },
        fill: {
            opacity: 0.8,
        },
        tooltip: {
            theme: "dark",
        },
    },
};

function CardChartDashboard() {
    return (
        <Card className="rounded-md">
            {/* <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
            >
                <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
                    <Square3Stack3DIcon className="h-6 w-6" />
                </div>
                <div>
                    <Typography variant="h6" color="blue-gray">
                        Bar Chart
                    </Typography>
                    <Typography
                        variant="small"
                        color="gray"
                        className="max-w-sm font-normal"
                    >
                        Visualize your data in a simple way using the
                        @material-tailwind/react chart plugin.
                    </Typography>
                </div>
            </CardHeader> */}
            <CardBody className="px-2 pb-0">
                <Chart {...chartConfig} />
            </CardBody>
        </Card>
    );
}


function DropdownMenu() {
    return (
        <div id="userDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>Bonnie Green</div>
                <div className="font-medium truncate">name@flowbite.com</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
            </ul>
            <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </div>
        </div>
    );
}

function AvatarButton() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <img
                id="avatarButton"
                type="button"
                data-dropdown-toggle="userDropdown"
                data-dropdown-placement="bottom-start"
                className="w-10 h-10 rounded-full cursor-pointer"
                src="/docs/images/people/profile-picture-5.jpg"
                alt="User dropdown"
                onClick={toggleDropdown}
            />
            {isOpen && <DropdownMenu />}
        </div>
    );
}



export function DashboardTabs() {
    return (
        <DashboardDataShow />
    )
}