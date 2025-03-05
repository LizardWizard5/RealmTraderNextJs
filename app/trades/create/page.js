"use server";

import React from "react";
import AddItemComponent from "./component";
import { getItems } from "@/app/lib/databaseCalls";
import Form from "./createForm";

export default async function Page() {

  

  let items = await getItems();
  const states = ["selling", "buying"];
  return (
    <div className="bg-white p-6 rounded-lg shadow-md min-h-screen">
      <div className="text-center mb-6">
        <p className="text-gray-600">
          Click on an item to remove it from the trade. Add items to the "Selling" or "Buying" sections below.
        </p>
      </div>
      <div className="flex flex-row justify-center gap-12">
        {/* Selling Section */}
        <div id="selling" className="flex flex-col items-center">
          <div className="mb-4">
            <p className="text-center text-lg font-semibold">Selling</p>
          </div>
          <div className="flex flex-row-reverse">
            <AddItemComponent items={items} state="selling" />
          </div>
        </div>
        {/* Divider */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-700">FOR</h1>
        </div>
        {/* Buying Section */}
        <div id="Buying" className="flex flex-col items-center">
          <div className="mb-4">
            <p className="text-center text-lg font-semibold">Buying</p>
          </div>
          <div className="flex flex-row-reverse">
            <AddItemComponent items={items} state="buying" />
          </div>
        </div>
       
      </div>
      {/* Form Section */}
      <div className="flex flex-row justify-center mt-8">
        <Form />
      </div>
    </div>

  );
};

