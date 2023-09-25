"use client"
import React, { createContext } from 'react'
export const user = createContext(null);

export const UserContext = ({children}) => {

  return (
    <user.Provider>
                <div>
                    <h1>its data for usecontext tejjjj</h1>
                </div>
    </user.Provider>

  )
}
