import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginDinas, LoginPeternak, reset } from "../../features/authSlice";
import axios from "axios";

export function RegistCard({ onClose }) {
  const [showRegisterCard, setShowRegisterCard] = useState(false);
  const [isGovernment, setIsGovernment] = useState(false);
  const [namaLengkap, setNamaLengkap] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [lokasi, setLokasi] = useState([]);
  const [selectedLokasi, setSelectedLokasi] = useState("1");

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://localhost:5000/peternak", {
        namaLengkap: namaLengkap,
        username: username,
        password: password,
        nomorTelepon: nomorTelepon,
        idLokasi: selectedLokasi,
      });
      handleSignUpClick();
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://localhost:5000/lokasi");
        setLokasi(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const handleSignUpClick = () => {
    onClose();
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
            <h4 className="text-sm text-white mt-[-10px] flex">
              As a Government,{" "}
              <button
                onClick={handleRegisterGovClick}
                className="ml-1"
                id="switchLoginGovernment"
              >
                Click this!
              </button>
            </h4>
          </div>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Nama Lengkap"
              size="lg"
              value={namaLengkap}
              onChange={(e) => setNamaLengkap(e.target.value)}
            />
            <Input
              label="Username"
              size="lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              label="Nomor Telepon"
              size="lg"
              value={nomorTelepon}
              onChange={(e) => setNomorTelepon(e.target.value)}
            />
            <Input
              label="Password"
              size="lg"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <select
              onChange={(e) => setSelectedLokasi(e.target.value)}
              className="mt-1 block w-full pl-3 pr-2 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              {lokasi.map((option) => (
                <option key={option.idLokasi} value={option.idLokasi}>
                  {option.namaJalan}, {option.namaKabupaten},{" "}
                  {option.namaProvinsi}, {option.kodePos}
                </option>
              ))}
            </select>
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <button
              className="w-full py-2.5 bg-green-500 hover:bg-green-600 transition duration-200 text-white rounded-md"
            >
              <Link onClick={Register}>Sign Up</Link>
            </button>
          </CardFooter>
        </Card>
      )}
      {showRegisterCard && isGovernment && (
        <RegistCardGovernment onClose={() => setShowRegisterCard(false)} />
      )}
    </>
  );
}

export function RegistCardGovernment({ onClose }) {
  const [namaDinas, setNamaDinas] = useState("");
  const [username, setUsername] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [alamat, setAlamat] = useState("");
  const [password, setPassword] = useState("");

  const RegisterDinas = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://localhost:5000/dinas", {
        namaDinas: namaDinas,
        username: username,
        password: password,
        nomorTelepon: nomorTelepon,
        alamat: alamat,
      });
      handleSignUpClick();
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
      }
    }
  };

  const handleSignUpClick = () => {
    onClose();
  };

  return (
    <Card className="w-96">
      <div className="mb-4 grid h-28 place-items-center bg-green-500 rounded-md">
        <Typography variant="h3" className="text-white">
          Sign Up Government
        </Typography>
      </div>
      <CardBody className="flex flex-col gap-4">
        <Input
          label="Nama Dinas"
          size="lg"
          value={namaDinas}
          onChange={(e) => setNamaDinas(e.target.value)}
        />
        <Input
          label="Username"
          size="lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Nomor Telepon"
          size="lg"
          value={nomorTelepon}
          onChange={(e) => setNomorTelepon(e.target.value)}
        />
        <Input
          label="Alamat"
          size="lg"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />
        <Input
          label="Password"
          size="lg"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <button
          className="w-full py-2.5 bg-green-500 hover:bg-green-600 transition duration-200 text-white rounded-md"
        >
          <Link onClick={RegisterDinas}>Sign Up</Link>
        </button>
      </CardFooter>
    </Card>
  );
}

export function LoginCard({ onClose }) {
  const [showRegisterCard, setShowRegisterCard] = useState(false);
  const [isGovernment, setIsGovernment] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dinas, peternak, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleRegisterGovClick = () => {
    setIsGovernment(true);
    setShowRegisterCard(true);
  };

  const handleRegisterClick = () => {
    setIsGovernment(false);
    setShowRegisterCard(true);
  };

  useEffect(() => {
    if (peternak && isSuccess) {
      navigate("/dashboard");
    } else if (dinas && isSuccess) {
      navigate("/dashboardGovernment");
    }
    dispatch(reset());
  }, [dinas, peternak, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginPeternak({ username, password }));
  };

  return (
    <>
      {!showRegisterCard && (
        <Card className="w-96">
          <div className="mb-4 grid h-28 place-items-center bg-green-500 rounded-md">
            <Typography variant="h3" className="text-white">
              Sign In
            </Typography>
            <h4 className="text-sm text-white mt-[-10px] flex">
              As a Government,{" "}
              <button onClick={handleRegisterGovClick} className="ml-1">
                Click this!
              </button>
            </h4>
          </div>
          <CardBody>
            <form onSubmit={Auth} className="flex flex-col gap-4">
              {isError && <p className="text-center text-red-600">{message}</p>}
              <Input
                label="Username"
                size="lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                label="Password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-green-500 hover:bg-green-600 transition duration-200 text-white rounded-md"
              >
                {isLoading ? "Loading..." : "Sign In"}
              </button>
            </form>
          </CardBody>
          <CardFooter className="pt-0">
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
      {showRegisterCard && isGovernment && (
        <LoginCardGovernment onClose={() => setShowRegisterCard(false)} />
      )}
      {showRegisterCard && !isGovernment && (
        <RegistCard onClose={() => setShowRegisterCard(false)} />
      )}
    </>
  );
}

export function LoginCardGovernment({ onClose }) {
  const [showRegisterCard, setShowRegisterCard] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dinas, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // const handleRegisterClick = () => {
  //   setShowRegisterCard(true);
  // };

  useEffect(() => {
    if (dinas || isSuccess) {
      navigate("/dashboardGovernment");
    }
    dispatch(reset());
  }, [dinas, isSuccess, dispatch, navigate]);

  const AuthDinas = (e) => {
    e.preventDefault();
    dispatch(LoginDinas({ username, password }));
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
          <CardBody>
            <form onSubmit={AuthDinas} className="flex flex-col gap-4">
              {isError && <p className="text-center text-red-600">{message}</p>}
              <Input
                label="Username"
                size="lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                label="Password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-green-500 hover:bg-green-600 transition duration-200 text-white rounded-md"
              >
                {isLoading ? "Loading..." : "Sign In"}
              </button>
            </form>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={() => setShowRegisterCard(true)}
              >
                Sign Up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      )}
      {showRegisterCard && (
        <RegistCardGovernment onClose={() => setShowRegisterCard(false)} />
      )}
    </>
  );
}
