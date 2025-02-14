import clsx from 'clsx'
import React from 'react'
import { IoMdClose } from 'react-icons/io'

export const Modal = ({eventClick, children, showModal, tittle, widthHeight, style }) => {
    return (

        <div className={clsx([
            showModal ? widthHeight : "h-0 w-0 border-none",
            "fixed bottom-45 right-0 bg-Hueso/90 transition-all from-5% rounded-2xl mx-6 border-1 border-black duration-400 "])}
        >
            <div className={clsx([
                showModal ? "w-full h-full flex flex-col content-center items-center" : "hidden"
            ])}>
                {eventClick ? <IoMdClose className='text-5xl fixed right-10 pt-5' onClick={() => eventClick(!showModal)} /> : ""}
                <header>
                    <h2 className={`${tittle ? "text-Granito text-[2em] pt-10 font-bold" : "hidden"}`}>
                        {tittle}
                    </h2>
                </header>
                <div className="w-full h-full p-4">
                    {children}
                </div>
            </div>

        </div>
    )
}
