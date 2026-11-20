import { create } from "zustand";
import { supabase } from "../lib/supabaseClient";

export const useAuth = create((set) => ({
  user: null,
  loading: true,

  // Called once when the app starts
  init: async () => {
    const { data } = await supabase.auth.getSession();
    set({ user: data.session?.user ?? null, loading: false });

    // Keeps the user in sync after login, logout or token refresh
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      set({ user: session?.user ?? null });
    });

    return () => listener.subscription.unsubscribe();
  },

  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
}));