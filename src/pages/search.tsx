import {
    Badge,
    Box,
    Button,
    Flex,
    Heading,
    IconButton,
    TextField,
} from "@radix-ui/themes";
import Smiling from "../assets/happy.svg";
import { Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Search() {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleKeyDown = (event: { key: string }) => {
        if (event.key === "Enter") {
            // Redirigir a la nueva página con el valor como query parameter
            navigate(`/results?q=${encodeURIComponent(inputValue)}`);
        }
    };
    return (
        <Flex direction="column" p="4">
            <Box
                style={{
                    alignSelf: "end",
                }}
            >
                <IconButton color="gray" variant="soft">
                    <Sun />
                </IconButton>
            </Box>

            <Flex
                direction="column"
                align="center"
                height="95vh"
                justify="center"
            >
                <Flex direction="row" align="center">
                    <img
                        src={Smiling}
                        alt="Smile"
                        style={{
                            width: 80,
                        }}
                    />
                    <Heading size="7">Happy Pharma</Heading>
                </Flex>

                <TextField.Root
                    placeholder="Search"
                    autoFocus
                    size="3"
                    style={{
                        minWidth: 500,
                    }}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                ></TextField.Root>
            </Flex>
        </Flex>
    );
}

export default Search;
