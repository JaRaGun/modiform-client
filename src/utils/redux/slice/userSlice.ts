import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Modify the state type and arg types to match your needs
interface userState {
  studentIdRedux: number | null;
  passwordRedux: string;
  firstNameRedux: string;
  lastNameRedux: string;
}

const initialState: userState = {
  studentIdRedux: null,
  passwordRedux: "",
  firstNameRedux: "",
  lastNameRedux: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    UserInfoRedux: (
      state: userState,
      action: PayloadAction<Partial<userState>>
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    logoutUserRedux: () => {
      return initialState;
    },
  },
});

export const { UserInfoRedux, logoutUserRedux } = userSlice.actions;

export default userSlice.reducer;
