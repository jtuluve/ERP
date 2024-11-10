import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Nav() {
	return (
		<div className="titlebar">
			<Link href="/" style={{height:"75%"}}>
				<img alt="logo" src="/logo.png" className="logo" />
			</Link>
			<div className="information">
				<h1>ERP</h1>
			</div>
			<a
				title="logout"
				className="material-symbols-outlined logout"
				onClick={() => signOut()}
			>
				logout
			</a>
		</div>
	);
}
