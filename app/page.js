// "use client"
// import { useSession, signIn, signOut } from "next-auth/react"

// export default function Component() {
// const { data: session } = useSession()
// // console.log(session);
// if (session) {
//   return (
//     <>
//       Signed in as {session.user.email} <br />
//       <button onClick={() => signOut()}>Sign out</button>
//     </>
//   )
// }
// return (
//   <>
//     Not signed in <br />
//     <button onClick={() => signIn("github")}>Sign in Using Github</button>
//     <button onClick={() => signIn("google")}>Sign in Using google</button>
//   </>
// )
// }

import ListingMapView from "./component/ListingMapView";
// import Header from "@/components/Header";
export default function Home() {
  return (
    <div>
      <ListingMapView type='Sell' />
    </div>
  );
}
