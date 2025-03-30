"use client";

import { useSession as useNextAuthSession } from "next-auth/react";

const useSession = () => {
  // const [session, setSession] = useState<Session | null>(null);

  // useEffect(() => {
  //     const getSessionData = async () => {
  //         const data = await getSession();
  //         setSession(data);
  //     }
  //     getSessionData();
  // }, []);
  const { data: session } = useNextAuthSession();
  return session;
};

export default useSession;
