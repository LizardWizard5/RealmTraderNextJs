"use client";
import { set } from "mongoose";
import { redirect } from "next/dist/server/api-utils";
import React, { useState } from "react";

import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';


import { useSession } from "next-auth/react";

export default function Form() {
    //Get session
    const { data: session, status } = useSession();
    const [open, setOpen] = React.useState(false);

    let [modalText, setModalText] = useState("Submit");
    let [buttonValue, setButtonValue] = useState("Submit");
    let [buttonDisabled, setButtonDisabled] = useState(false);

    async function createTrade(formData) {
        if (!session) {
            window.location.href = "/api/auth/signin";
            return;
        }
        setButtonValue("Creating Trade...");//Just incase server takes a while to respond
        setButtonDisabled(true);
        const res = await fetch("http://localhost:3000/api/trades", {
            method: "POST",
            body: formData,
            credentials: "include",
        });

        const resJson = await res.json();

        setModalText(resJson.message);
        setOpen(true);
        if (resJson.status === "200") {
            setButtonDisabled(true);
            setTimeout(() => {
                window.location.href = "/trades";
            }, 1000);
        }
        // res.redirect("/trades");




    }

    return (


        <div>

            <form id="tradeForm" className="flex flex-col" action={createTrade} >
                <div className="flex flex-row items-center mb-4">
                    <label htmlFor="tradeItems" className="mr-1">Seasonal</label>
                    <input type="checkbox" id="isSeasonal" name="isSeasonal"></input>
                </div>

                <input
                    type="submit"
                    className="bg-gray-800 text-white px-4 py-2 rounded-md shadow hover:bg-gray-700 transition"
                    disabled={buttonDisabled}
                    value={buttonValue}
                />
            </form>


            <React.Fragment>
                
                <Modal open={open} onClose={() => {
                    setOpen(false)
                    setButtonDisabled(false);
                    setButtonValue("Submit");
                    }}>
                    <ModalDialog size="lg" className="w-1/3 flex pt-0 pl-0 pr-0  border-l-0 border-t-0 border-r-0">
                        <DialogTitle className="bg-[#1F1A24] w-100 text-white rounded-lg rounded-b-none pl-4">Error</DialogTitle>
                        <div className="flex flex-row flex-wrap gap-2 text-center justify-center items-center">
                            <p className="text-center">{modalText}</p>
                        </div>

                    </ModalDialog>
                </Modal>
            </React.Fragment>
        </div>

    )
}