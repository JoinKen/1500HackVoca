
import React from "react";
import Home from '../src/Page/Home';
import MyVoca from '../src/Page/MyVocabulary'
import ProcessPage from '../src/Page/ProcessPage'


const router = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/LoadList",
        exact: true,
        main: () => <MyVoca />
    },
    {
        path: "/Process",
        exact: true,
        main: () => <ProcessPage />
    }
]
export default router;