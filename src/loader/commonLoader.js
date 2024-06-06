import store from '@/redux/_config/configStore';
import { getUserThunk } from '@/redux/auth/authThunk';
import supabase from '@/supabase/supabaseClient';

const commonLoader = () => {
  supabase.auth.onAuthStateChange((event, session) => {
    if (!session) return;

    store.dispatch(getUserThunk());
  });

  return null;
};

export default commonLoader;
