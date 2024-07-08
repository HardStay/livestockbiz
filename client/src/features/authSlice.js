import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dinas: null,
  peternak: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const LoginPeternak = createAsyncThunk(
  "peternak/LoginPeternak",
  async (peternak, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username: peternak.username,
        password: peternak.password,
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const LoginDinas = createAsyncThunk(
  "dinas/LoginDinas",
  async (dinas, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/loginDinas", {
        username: dinas.username,
        password: dinas.password,
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const getMe = createAsyncThunk("peternak/getMe", async (_, thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:5000/me");
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const getMeDinas = createAsyncThunk(
  "dinas/getMeDinas",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:5000/meDinas");
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const Logout = createAsyncThunk("peternak/logout", async () => {
  await axios.delete("http://localhost:5000/logout");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    //login peternak
    builder.addCase(LoginPeternak.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(LoginPeternak.fulfilled, (state, action) => {
      state.peternak = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(LoginPeternak.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    // login Dinas
    builder.addCase(LoginDinas.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(LoginDinas.fulfilled, (state, action) => {
      state.dinas = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(LoginDinas.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    // Get Peternak Login
    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.peternak = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    // Get Dinas Login
    builder.addCase(getMeDinas.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(getMeDinas.fulfilled, (state, action) => {
      state.dinas = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getMeDinas.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
