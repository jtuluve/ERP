"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import "@css/comingsoon.css";
import Link from "next/link";
export default function Appraisal() {
    const { data: session } = useSession();
    //if user not logged in, redirect to login page
    if (!session) {
        redirect("/");
    }
    return (
        <>
            <div className="titlebar">
                <img alt="logo" src="/logo.png" className="logo" />
                <div className="information">
                    <h1>ERP</h1>
                </div>
                <Link className="clogout" href="/main">
                    Home
                </Link>
            </div>
            <div className="comingsoon">
                Feature Comming Soon!
            </div>
        </>
    );
}
