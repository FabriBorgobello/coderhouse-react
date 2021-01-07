import React from "react";
import { Footer as MaterializeFooter } from "react-materialize";

export const Footer = () => {
    return (
        <MaterializeFooter
            style={{ backgroundColor: "hsl(10, 56%, 51%)", display: "block" }}
            copyrights="CoderHouse 2020"
            moreLinks={
                <a
                    className="grey-text text-lighten-4 right"
                    href="https://www.linkedin.com/in/fabricio-borgobello-59468775/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Fabricio Borgobello
                </a>
            }
            className="example"
        ></MaterializeFooter>
    );
};
