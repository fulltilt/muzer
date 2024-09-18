"use client";
// import StreamView from "@/app/components/StreamView";
import StreamView from "@/app/components/OldStreamView";
import useRedirect from "@/hooks/useRedirect";
import { useSocket } from "@/context/socket-context";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import jwt from "jsonwebtoken";
import ErrorScreen from "@/app/components/ErrorScreen";
import LoadingScreen from "@/app/components/LoadingScreen";

export default function Creator({
  params: { creatorId },
}: {
  params: {
    creatorId: string;
  };
}) {
  // const { socket, user, connectionError, loading, setUser } = useSocket();
  const session = useSession();
  const user = session.data?.user;
  useRedirect();

  useEffect(() => {
    // if (user && !user.token) {
    //   const token = jwt.sign(
    //     {
    //       creatorId: creatorId,
    //       userId: user.id,
    //     },
    //     process.env.NEXT_PUBLIC_SECRET ?? "secret"
    //   );
    //   socket?.send(
    //     JSON.stringify({
    //       type: "join-room",
    //       data: {
    //         token,
    //       },
    //     })
    //   );
    //   setUser({ ...user, token });
    // }
  }, [user]);

  // if (connectionError) {
  //   return <ErrorScreen>Cannot connect to socket server</ErrorScreen>;
  // }

  // if (loading) {
  //   return <LoadingScreen />;
  // }

  // if (!user) {
  //   return <ErrorScreen>Please Log in....</ErrorScreen>;
  // }

  // return <StreamView creatorId={creatorId} playVideo={false} />;
  return <StreamView creatorId={user?.id ?? ""} playVideo={true} />;
}

export const dynamic = "auto";
