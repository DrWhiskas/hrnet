import React from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import '../style/employees.css'
export default function Employees(){
    return(
        <div className="employees">
        <Header />
            <section  className="employees__main">
                <h1 className="employees__main__title"> Current Employees</h1>
            <Table />

            </section>
        </div>
    )
}