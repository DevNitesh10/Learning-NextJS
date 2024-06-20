"use client"
import { useRouter } from "next/navigation"

const LearnuseRouter = () => {
    const router = useRouter();
    console.log("route: ", router)
  return (
    <>
    <h1>use Router</h1>
    <button onClick={() => router.push("/admin/dashboard")}>Go to Admin Dashboard</button>

    </>
  )
}

export default LearnuseRouter