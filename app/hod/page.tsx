"use client";

import "@css/admin.css";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useAdminData } from "@/components/adminContext";
import "@css/hod.css";

export default function Admin() {
    const { allUsers } = useAdminData();
    const [facultyName, setFacultyName] = useState("");
    const [technicalstaffName, settechnicalstaffName] = useState("");
    const [sections, setSections] = useState({
        year1: { sectionA: false, sectionB: false },
        year2: { sectionA: false, sectionB: false },
        year3: { sectionA: false, sectionB: false },
        year4: { sectionA: false, sectionB: false },
    });

    const handleCheckboxChange = (year, section) => {
        setSections(prevSections => ({
            ...prevSections,
            [year]: {
                ...prevSections[year],
                [section]: !prevSections[year][section]
            }
        }));
    };

    const handleFacultyNameChange = (e) => {
        setFacultyName(e.target.value);
    };

    const handleTechnicalStaffNameChange = (e) => {
        settechnicalstaffName(e.target.value);
    };

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
            <div className="hod-container">
                <p className="facname"><strong>Faculties:</strong></p>
                <input
                    type="text"
                    placeholder="Enter faculty name"
                    value={facultyName}
                    onChange={handleFacultyNameChange}
                    className="name-input"
                />

                <p className="facname"><strong>Technical Staffs:</strong></p>
                <input
                    type="text"
                    placeholder="Enter technicalstaff name"
                    value={technicalstaffName}
                    onChange={handleTechnicalStaffNameChange}
                    className="name-input"
                />

                <div className="class-section">
                    <p>
                        <strong>I year</strong>
                        <label>
                            <input type="checkbox" checked={sections.year1.sectionA} onChange={() => handleCheckboxChange('year1', 'sectionA')} />
                            Section A
                        </label>
                        <label>
                            <input type="checkbox" checked={sections.year1.sectionB} onChange={() => handleCheckboxChange('year1', 'sectionB')} />
                            Section B
                        </label>
                    </p>
                    <p>
                        <strong>II year</strong>
                        <label>
                            <input type="checkbox" checked={sections.year2.sectionA} onChange={() => handleCheckboxChange('year2', 'sectionA')} />
                            Section A
                        </label>
                        <label>
                            <input type="checkbox" checked={sections.year2.sectionB} onChange={() => handleCheckboxChange('year2', 'sectionB')} />
                            Section B
                        </label>
                    </p>
                    <p>
                        <strong>III year</strong>
                        <label>
                            <input type="checkbox" checked={sections.year3.sectionA} onChange={() => handleCheckboxChange('year3', 'sectionA')} />
                            Section A
                        </label>
                        <label>
                            <input type="checkbox" checked={sections.year3.sectionB} onChange={() => handleCheckboxChange('year3', 'sectionB')} />
                            Section B
                        </label>
                    </p>
                    <p>
                        <strong>IV year</strong>
                        <label>
                            <input type="checkbox" checked={sections.year4.sectionA} onChange={() => handleCheckboxChange('year4', 'sectionA')} />
                            Section A
                        </label>
                        <label>
                            <input type="checkbox" checked={sections.year4.sectionB} onChange={() => handleCheckboxChange('year4', 'sectionB')} />
                            Section B
                        </label>
                    </p>
                </div>
                <div className="PSO-section">
                    <p className="facname"><strong>Department PSO:</strong></p>
                    <input type="text" placeholder="Enter the PSO's" className="staff-input" />
                    <input type="text" placeholder="Enter the PSO's" className="staff-input" />
                </div>
                <div className="PEO-section">
                    <p className="facname"><strong>Department PEO:</strong></p>
                    <input type="text" placeholder="Enter the PEO's" className="staff-input" />
                    <input type="text" placeholder="Enter the PEO's" className="staff-input" />
                    <input type="text" placeholder="Enter the PEO's" className="staff-input" />
                </div>
                <div className="Po-section">
                    <p className="facname"><strong>Department Po:</strong></p>
                    <input type="text" placeholder="Enter the Po's" className="staff-input" />
                    <input type="text" placeholder="Enter the Po's" className="staff-input" />
                    <input type="text" placeholder="Enter the Po's" className="staff-input" />
                    <input type="text" placeholder="Enter the Po's" className="staff-input" />
                    <input type="text" placeholder="Enter the Po's" className="staff-input" />
                    <input type="text" placeholder="Enter the Po's" className="staff-input" />
                    <input type="text" placeholder="Enter the Po's" className="staff-input" />
                    <input type="text" placeholder="Enter the Po's" className="staff-input" />
                    <input type="text" placeholder="Enter the Po's" className="staff-input" />
                    <input type="text" placeholder="Enter the Po's" className="staff-input" />
                    <input type="text" placeholder="Enter the Po's" className="staff-input" />
                    <input type="text" placeholder="Enter the Po's" className="staff-input" />
                </div>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Sl No.</th>
                            <th>Year</th>
                            <th>Section</th>
                            <th>Subject Code</th>
                            <th>Subject Name</th>
                            <th>Faculty I</th>
                            <th>Faculty II</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td>2</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td>3</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td>4</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td>5</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}
