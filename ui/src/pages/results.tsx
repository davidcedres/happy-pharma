import {
    Card,
    Container,
    Flex,
    Heading,
    Text,
    TextField,
} from "@radix-ui/themes";
import { useSearchParams } from "react-router-dom";
import Smiling from "../assets/happy.svg";
import { useEffect, useState } from "react";
import { Drug } from "../types";

const Results = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q");

    const [drugs, setDrugs] = useState<Drug[]>([]);

    useEffect(() => {
        const cb = async () => {
            const items = await fetch("http://localhost:8000/drugs").then(
                (response) => response.json() as unknown as Drug[]
            );

            setDrugs(items);
        };

        cb();
    }, []);

    return (
        <Container>
            <Flex direction="column" gap="4">
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
                    value={q ?? ""}
                    autoFocus
                    size="3"
                    style={{
                        minWidth: 500,
                    }}
                />

                <h2>Results</h2>

                {drugs.map((drug) => (
                    <Card>
                        <Flex gap="3">
                            <img
                                src={drug.imageUrl}
                                width="256px"
                                height="128px"
                                style={{ objectFit: "contain" }}
                            />
                            <Flex direction="column">
                                <Text weight="bold" size="5">
                                    {drug.shortDescription}
                                </Text>
                                <Text>Bs. {drug.price}</Text>
                            </Flex>
                        </Flex>
                    </Card>
                ))}
            </Flex>
        </Container>
    );
};

export default Results;
