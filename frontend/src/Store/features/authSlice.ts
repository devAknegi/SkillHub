// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Session } from '@supabase/supabase-js';

interface AuthState {
  session: Session | null;
}

const initialState: AuthState = {
  session: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<Session | null>) => {
      state.session = action.payload;
    },
    clearSession: (state) => {
      state.session = null;
    },
  },
});

export const { setSession, clearSession } = authSlice.actions;
export const selectSession = (state: { auth: AuthState }): Session | null => state.auth.session;
export default authSlice.reducer;
