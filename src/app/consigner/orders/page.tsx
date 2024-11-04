"use client"

import Link from "next/link";
import Orders from "../../../components/consigner/orders/Orders";
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const OrdersPage = () => {

    const [open, setOpen] = React.useState(false);

    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-4/5">
                <div className="flex flex-row justify-end px-5 mb-5">
                    <Link href="orders/new/pickup_information"><button className="bg-slate-300 px-6 py-3 rounded-lg hover:bg-slate-400 duration-500" onClick={() => setOpen(true)}>+ ADD NEW ORDER</button></Link>
                </div>
                <div><Orders /></div>
            </div>  
            <div>
                <Backdrop
                    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                    open={open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>  
        </div>
    )
};

export default OrdersPage;