import {
    Avatar,
    Box,
    Card,
    Container,
    Flex,
    Heading,
    Text,
    TextField,
} from "@radix-ui/themes";
import { useSearchParams } from "react-router-dom";
import Smiling from "../assets/happy.svg";

const Results = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q");

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
                    value={q}
                    autoFocus
                    size="3"
                    style={{
                        minWidth: 500,
                    }}
                />

                <h2>Results</h2>

                <Card>
                    <Flex gap="3">
                        <img
                            src="https://encolombia.com/wp-content/uploads/2018/01/genfar-clonazepam-2.jpg"
                            width="256px"
                            height="128px"
                            style={{ objectFit: "contain" }}
                        />
                        <Flex direction="column">
                            <Text weight="bold" size="5">
                                jhsxjwdhfc
                            </Text>
                            <Text>$30,00</Text>
                        </Flex>
                    </Flex>
                </Card>
                <Card>
                    <Flex gap="3">
                        <img
                            src="https://farmavitalgrupo.com/wp-content/uploads/2024/01/acetaminofen-atamel-forte-650mg-10tabletas.webp"
                            width="256px"
                            height="128px"
                            style={{ objectFit: "contain" }}
                        />
                        <Flex direction="column">
                            <Text weight="bold" size="5">
                                jhsxjwdhfc
                            </Text>
                            <Text>$50,00</Text>
                        </Flex>
                    </Flex>
                </Card>
                <Card>
                    <Flex gap="3">
                        <img
                            src="https://www.valmorca.com.ve/wp-content/uploads/2023/07/CARBAMAZEPINA.png"
                            width="256px"
                            height="128px"
                            style={{ objectFit: "contain" }}
                        />
                        <Flex direction="column">
                            <Text weight="bold" size="5">
                                jhsxjwdhfc
                            </Text>
                            <Text>$200,00</Text>
                        </Flex>
                    </Flex>
                </Card>
                <Card>
                    <Flex gap="3">
                        <img
                            src="https://www.farmadon.com.ve/wp-content/uploads/2023/06/Cetirizina-10Mg-X-10-Tabletas-Dac55.png"
                            width="256px"
                            height="128px"
                            style={{ objectFit: "contain" }}
                        />
                        <Flex direction="column">
                            <Text weight="bold" size="5">
                                jhsxjwdhfc
                            </Text>
                            <Text>$10,00</Text>
                        </Flex>
                    </Flex>
                </Card>
                <Card>
                    <Flex gap="3">
                        <img
                            src="https://farmahorro.com.ve/wp-content/uploads/2023/09/104526.jpg"
                            width="256px"
                            height="128px"
                            style={{ objectFit: "contain" }}
                        />
                        <Flex direction="column">
                            <Text weight="bold" size="5">
                                jhsxjwdhfc
                            </Text>
                            <Text>$60,00</Text>
                        </Flex>
                    </Flex>
                </Card>
                <Card>
                    <Flex gap="3">
                        <img
                            src="https://static.salcobrandonline.cl/spree/products/43874/large_webp/7800018129228_1.webp?1641476943"
                            width="256px"
                            height="128px"
                            style={{ objectFit: "contain" }}
                        />
                        <Flex direction="column">
                            <Text weight="bold" size="5">
                                jhsxjwdhfc
                            </Text>
                            <Text>$500,00</Text>
                        </Flex>
                    </Flex>
                </Card>
            </Flex>
        </Container>
    );
};

export default Results;
