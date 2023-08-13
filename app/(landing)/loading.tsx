"use client";

import Box from "@/components/Box";
import { BounceLoader } from "react-spinners";

const Loading = () => {
    return (
        <Box className="h-[70vh] flex items-center justify-center">
            <BounceLoader color="#fff" size={40} />
        </Box>
    );
};

export default Loading;