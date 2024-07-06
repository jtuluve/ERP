"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import "@css/portal.css";
import Link from "next/link";

export default function Appraisal() {
    const { data: session } = useSession();
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
                <Link href="/main" className="clogout">
                    Home
                </Link>
            </div>
            <div className="comingsoon">
                <div className="number-container">
                    <label htmlFor="modules">Number of modules:</label>
                    <input type="number" id="modules" name="modules" />

                    <label htmlFor="objectives">Number of course objectives:</label>
                    <input type="number" id="objectives" name="objectives" />

                    <label htmlFor="outcomes">Number of outcomes:</label>
                    <input type="number" id="outcomes" name="outcomes" />
                </div>
                <div className="faculty-portal">
                    <table className="table-auto border-collapse w-full">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-4 py-2">No</th>
                                <th className="border px-4 py-2">Description</th>
                                <th className="border px-4 py-2">POs</th>
                                <th className="border px-4 py-2">PSOs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2">CO1</td>
                                <td className="border px-4 py-2">Data 1</td>
                                <td className="border px-4 py-2">
                                    {Array.from({ length: 12 }, (_, index) => (
                                        <input
                                        title="oo"
                                            key={`po-checkbox-${index}`}
                                            type="checkbox"
                                            id={`po${index + 1}`}
                                            name={`po${index + 1}`}
                                            value={`PO ${index + 1}`}
                                        />
                                    ))}
                                </td>
                                <td className="border px-4 py-2">
                                    <input type="text" id="pso1" name="pso1" placeholder="PSO 1" />
                                    <br />
                                    <input type="text" id="pso2" name="pso2" placeholder="PSO 2" />
                                </td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2">CO2</td>
                                <td className="border px-4 py-2">Data 2</td>
                                <td className="border px-4 py-2">
                                    {Array.from({ length: 12 }, (_, index) => (
                                        <input
                                            title="oo"
                                            key={`po-checkbox-${index}`}
                                            type="checkbox"
                                            id={`po${index + 1}`}
                                            name={`po${index + 1}`}
                                            value={`PO ${index + 1}`}
                                        />
                                    ))}
                                </td>
                                <td className="border px-4 py-2">
                                    <input type="text" id="pso1" name="pso1" placeholder="PSO 1" />
                                    <br />
                                    <input type="text" id="pso2" name="pso2" placeholder="PSO 2" />
                                </td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2">CO3</td>
                                <td className="border px-4 py-2">Data 3</td>
                                <td className="border px-4 py-2">
                                    {Array.from({ length: 12 }, (_, index) => (
                                        <input
                                            title="oo"
                                            key={`po-checkbox-${index}`}
                                            type="checkbox"
                                            id={`po${index + 1}`}
                                            name={`po${index + 1}`}
                                            value={`PO ${index + 1}`}
                                        />
                                    ))}
                                </td>
                                <td className="border px-4 py-2">
                                    <input type="text" id="pso1" name="pso1" placeholder="PSO 1" />
                                    <br />
                                    <input type="text" id="pso2" name="pso2" placeholder="PSO 2" />
                                </td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2">CO4</td>
                                <td className="border px-4 py-2">Data 4</td>
                                <td className="border px-4 py-2">
                                    {Array.from({ length: 12 }, (_, index) => (
                                        <input
                                            title="oo"
                                            key={`po-checkbox-${index}`}
                                            type="checkbox"
                                            id={`po${index + 1}`}
                                            name={`po${index + 1}`}
                                            value={`PO ${index + 1}`}
                                        />
                                    ))}
                                </td>
                                <td className="border px-4 py-2">
                                    <input type="text" id="pso1" name="pso1" placeholder="PSO 1" />
                                    <br />
                                    <input type="text" id="pso2" name="pso2" placeholder="PSO 2" />
                                </td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2">CO5</td>
                                <td className="border px-4 py-2">Data 5</td>
                                <td className="border px-4 py-2">
                                    {Array.from({ length: 12 }, (_, index) => (
                                        <input
                                            title="oo"
                                            key={`po-checkbox-${index}`}
                                            type="checkbox"
                                            id={`po${index + 1}`}
                                            name={`po${index + 1}`}
                                            value={`PO ${index + 1}`}
                                        />
                                    ))}
                                </td>
                                <td className="border px-4 py-2">
                                    <input type="text" id="pso1" name="pso1" placeholder="PSO 1" />
                                    <br />
                                    <input type="text" id="pso2" name="pso2" placeholder="PSO 2" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
