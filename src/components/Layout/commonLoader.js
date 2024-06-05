import { getUserThunk } from '@/redux/auth/authThunk';
import store from '@/redux/config/configStore';
import supabase from '@/supabase/supabaseClient';

const commonLoader = async () => {
  supabase.auth.onAuthStateChange((event, session) => {
    if (!session) return;

    store.dispatch(getUserThunk());
  });

  return null;
};

export default commonLoader;
