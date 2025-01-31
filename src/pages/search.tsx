import { Badge, Button, Flex, Heading, TextField } from "@radix-ui/themes";
import Smiling from "../assets/happy.svg";

function Search() {
    return (
        <Flex direction="column" align="center" height="100vh" justify="center">
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
            ></TextField.Root>
        </Flex>
    );
}

export default Search;
