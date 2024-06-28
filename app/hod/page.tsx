"use client";

import "@css/admin.css";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useAdminData } from "@/components/adminContext";
import Link from "next/link";

export default function Admin() {
    const { allUsers } = useAdminData();
    const [users, setUsers] = useState(allUsers);
    return (
        <section className="adminpage">
            <div className="titlebar">
                <img alt='logo' src="/logo.jpg" className="logo" />
                <a className="web-name">ERP</a>
                <a
                    title="logout"
                    className="material-symbols-outlined logout"
                    onClick={() => signOut()}
                >
                    logout
                </a>
            </div>
            <div>
                
            </div>
        </section>
    );
}