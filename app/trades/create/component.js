"use client";

import React from "react";


import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';


export default function AddItemComponent({ items, state }) {
    const [open, setOpen] = React.useState(false);
    /**
     * 
     * "id":{
     * amount: 1,
     * imageUrl:item.imageUrl
     * selling: false
     * }
     * 
     */


    const onPress = (item) => {



        const inputs = document.getElementById("tradeForm").getElementsByTagName("input");

        //Check if item already exists in tradeItems
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name === "tradeItems") {
                let currentInput = JSON.parse(inputs[i].value);

                if (currentInput.id == item._id && currentInput.selling == (state === "selling")) {

                    inputs[i].value = JSON.stringify({ id: item._id, amount: currentInput.amount + 1, imageUrl: item.imageUrl, tags: item.tags, selling: state === "selling" });
                    let p = document.getElementById(item._id + "-" + state);
                    p.innerHTML = currentInput.amount + 1;
                    return;
                }
            }

        }


        let itemList = document.getElementById("itemList-" + state);
        let doc = document.createElement("Tooltip");
        doc.setAttribute("title", "Delete");
        doc.setAttribute("variant", "outlined");
        doc.className = "flex flex-row";
        doc.innerHTML = "<img variant='outlined' src='/items/" + item.imageUrl + ".png' class='w-14 h-14' /><p id='" + item._id + "-" + state + "'>1</p>";

        itemList.appendChild(doc);
        //Setup event listener to remove item from ui and form.
        doc.addEventListener("click", function () {
            itemList.removeChild(doc);
            let input = document.getElementById(item._id + state);
            input.remove();

        });



        //Add tradeItem as hidden input in form
        let tradeForm = document.getElementById("tradeForm");
        let input = document.createElement("input");
        input.name = "tradeItems";
        input.type = "hidden";
        input.id = item._id + state;
        input.value = JSON.stringify({ id: item._id, amount: 1, imageUrl: item.imageUrl, tags: item.tags, selling: state === "selling" });
        tradeForm.appendChild(input);








    };
    const handleOpen = (size) => {
        setSize(size);
        onOpen();
    };

    return (
        <>
            <div className="flex flex-row justify-center" id={"itemList-" + state}>

            </div>

            <React.Fragment>
                <Button
                    className="bg-white text-black border-2 border-gray-300 rounded-md w-10 h-10 flex items-center justify-center hover:bg-gray-100 shadow-md"
                    variant="outlined"
                    color="neutral"

                    onClick={() => setOpen(true)}
                >
                    +
                </Button>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <ModalDialog size="lg" className="w-2/3 flex ">
                        <DialogTitle>{state[0].toUpperCase() + "" + state.slice(1) + " Items"}</DialogTitle>
                        <div className="flex flex-row flex-wrap gap-2 ">
                            {items.map((item) => (
                                <div key={item._id}>

                                    <button onClick={() => onPress(item)}>
                                        <img src={"/items/" + item.imageUrl + ".png"} className="w-14 h-14" />
                                    </button>

                                </div>
                            ))}
                        </div>

                    </ModalDialog>
                </Modal>
            </React.Fragment>

        </>
    );
};




/**
 <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="xl"
                className="w-1/3"
                classNames={{
                    base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#ffffff] ",
                    header: "border-b-[1px] border-[#292f46] ",
                    closeButton: "absolute top-2 right-2",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col pt-3 pl-4 white-100 text-xl ">Select Items</ModalHeader>
                            <ModalBody className="flex flex-row flex-wrap gap-2 bg-white ">
                                {items.map((item) => (
                                    <div key={item._id} className="flex flex-row w-100">

                                        <button onClick={() => onPress(item)}><img src={"/items/" + item.imageUrl + ".png"} className="w-14 h-14" /></button>

                                    </div>
                                ))}
                            </ModalBody>

                        </>
                    )}
                </ModalContent>
            </Modal>
 */