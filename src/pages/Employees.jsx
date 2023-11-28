import React from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import '../style/employees.css'
export default function Employees(){
    return(
        <>
        <Header />
            <section  className="employees">
                <h1 className="employees__title"> Current Employees</h1>
            <Table />

            </section>
        </>
    )
}