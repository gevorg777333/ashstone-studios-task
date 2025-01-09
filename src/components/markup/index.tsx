import {ReactNode} from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default function SharedLayout({children}: {children: ReactNode}) {
    return (
        <>
            <SearchBar />
            <Header />
            {children}
        </>
    )
}
