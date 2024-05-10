import React, { useState } from "react";
import { Card, CardBody, CardFooter, Typography, Input, Checkbox } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function RegistCard({ onClose }) {
    const [showRegisterCard, setShowRegisterCard] = useState(false);
    const [isGovernment, setIsGovernment] = useState(false);

    const handleSignUpClick = () => {
        onClose(); // Tutup RegistCard
    };

    const handleRegisterGovClick = () => {
        setIsGovernment(true);
        setShowRegisterCard(true);
    };

    return (
        <>
            {!showRegisterCard && (
                <Card className="w-96">
                    <div className="mb-4 grid h-28 place-items-center bg-green-500 rounded-md">
                        <Typography variant="h3" className="text-white">
                            Sign Up
                        </Typography>
                        <h4 className="text-sm text-white mt-[-10px] flex">As a Government, <button onClick={handleRegisterGovClick} className="ml-1" id="switchLoginGovernment">Click this!</button></h4>
                    </div>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Username" size="lg" />
                        <Input label="Email" size="lg" />
                        <Input label="Password" size="lg" />
                        <div className="-ml-2.5">
                            <Checkbox label="Remember Me" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <button className="w-full py-2.5 bg-green-500 hover:bg-green-600 transition duration-200 text-white rounded-md">
                            <Link onClick={handleSignUpClick}>Sign Up</Link>
                        </button>
                    </CardFooter>
                </Card>
            )}
            {showRegisterCard && isGovernment && <RegistCardGovernment onClose={() => setShowRegisterCard(false)} />}
        </>
    );
}



export function RegistCardGovernment({ onClose }) {
    const handleSignUpClick = () => {
        onClose(); // Tutup RegistCardGovernment
    };

    return (
        <Card className="w-96">
            <div className="mb-4 grid h-28 place-items-center bg-green-500 rounded-md">
                <Typography variant="h3" className="text-white">
                    Sign Up Government
                </Typography>
            </div>
            <CardBody className="flex flex-col gap-4">
                <Input label="Username" size="lg" />
                <Input label="Email" size="lg" />
                <Input label="Password" size="lg" />
                <div className="-ml-2.5">
                    <Checkbox label="Remember Me" />
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <button className="w-full py-2.5 bg-green-500 hover:bg-green-600 transition duration-200 text-white rounded-md">
                    <Link onClick={handleSignUpClick}>Sign Up</Link>
                </button>
            </CardFooter>
        </Card>
    );
}

export function LoginCard({ onClose }) {
    const [showRegisterCard, setShowRegisterCard] = useState(false);
    const [isGovernment, setIsGovernment] = useState(false);

    const handleRegisterGovClick = () => {
        setIsGovernment(true);
        setShowRegisterCard(true);
    };

    const handleRegisterClick = () => {
        setIsGovernment(false);
        setShowRegisterCard(true);
    };

    return (
        <>
            {!showRegisterCard && (
                <Card className="w-96">
                    <div className="mb-4 grid h-28 place-items-center bg-green-500 rounded-md">
                        <Typography variant="h3" className="text-white">
                            Sign In
                        </Typography>
                        <h4 className="text-sm text-white mt-[-10px] flex">As a Government, <button onClick={handleRegisterGovClick} className="ml-1">Click this!</button></h4>
                    </div>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Email" size="lg" />
                        <Input label="Password" size="lg" />
                        <div className="-ml-2.5">
                            <Checkbox label="Remember Me" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <button className="w-full py-2.5 bg-green-500 hover:bg-green-600 transition duration-200 text-white rounded-md">
                            Sign In
                        </button>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Don&apos;t have an account?
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue-gray"
                                className="ml-1 font-bold"
                                onClick={handleRegisterClick}
                            >
                                Sign Up
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            )}
            {showRegisterCard && isGovernment && <LoginCardGovernment onClose={() => setShowRegisterCard(false)} />}
            {showRegisterCard && !isGovernment && <RegistCard onClose={() => setShowRegisterCard(false)} />}
        </>
    );
}


export function LoginCardGovernment({ onClose }) {
    const [showRegisterCard, setShowRegisterCard] = useState(false);

    const handleRegisterClick = () => {
        setShowRegisterCard(true);
    };

    return (
        <>
            {!showRegisterCard && (
                <Card className="w-96">
                    <div className="mb-4 grid h-28 place-items-center bg-green-500 rounded-md">
                        <Typography variant="h3" className="text-white">
                            Sign In Government
                        </Typography>
                    </div>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Email" size="lg" />
                        <Input label="Password" size="lg" />
                        <div className="-ml-2.5">
                            <Checkbox label="Remember Me" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <button className="w-full py-2.5 bg-green-500 hover:bg-green-600 transition duration-200 text-white rounded-md">
                            Sign In
                        </button>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Don&apos;t have an account?
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue-gray"
                                className="ml-1 font-bold"
                                onClick={() => setShowRegisterCard(true)} // Pindahkan setShowRegisterCard(true) ke sini
                            >
                                Sign Up
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            )}
            {showRegisterCard && <RegistCardGovernment onClose={() => setShowRegisterCard(false)} />}
        </>
    );
}
