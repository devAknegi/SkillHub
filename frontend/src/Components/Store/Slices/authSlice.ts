// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Session } from '@supabase/supabase-js';
import { RootState } from '../store';

// Function to load session from local storage
const loadSessionFromStorage = (): AuthState => {
  const storedSession = localStorage.getItem('userSession');
  return { session: storedSession ? JSON.parse(storedSession) : null };
};

interface AuthState {
  session: Session | null;
}

const initialState: AuthState = loadSessionFromStorage();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<Session | null>) => {
      state.session = action.payload;
      localStorage.setItem('userSession', JSON.stringify(action.payload));
    },
    clearSession: (state) => {
      state.session = null;
      localStorage.removeItem('userSession');
    },
  },
});

export const { setSession, clearSession } = authSlice.actions;
export const selectSession = (state: RootState): Session | null => state.auth.session;
export default authSlice.reducer;
