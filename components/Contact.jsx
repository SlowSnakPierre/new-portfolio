import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

export function Email(props) {
    const { name, email, subject, message, ipaddress } = props;
    const formattedDate = new Intl.DateTimeFormat("fr", {
        dateStyle: "long",
        timeStyle: "short",
    }).format(new Date());

    return (
        <Html>
            <Head />
            <Preview>Yelp recent login</Preview>
            <Body style={main}>
                <Container>
                    <Section style={logo}>
                        <Img src="https://slowsnakpierre.com/logo.svg" />
                    </Section>

                    <Section style={content}>
                        <Row>
                            <Img
                                style={image}
                                width={620}
                                src="https://media.istockphoto.com/id/1141639313/photo/contact-us-woman-hand-holding-icon-customer-support-concept-copy-space.jpg?s=612x612&w=0&k=20&c=HK-XWrrf6kuezCVb_hvSE1fWu-vpsqoCDb30En5H8y8="
                            />
                        </Row>

                        <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                            <Column>
                                <Heading
                                    style={{
                                        fontSize: 32,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    Nouveau message de {name},
                                </Heading>
                                <Heading
                                    as="h2"
                                    style={{
                                        fontSize: 26,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    Sujet: {subject}
                                </Heading>

                                <Text style={paragraph}>
                                    <b>Date: </b>
                                    {formattedDate}
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Adresse IP: </b>
                                    {ipaddress}
                                </Text>
                                <Text style={paragraph}>
                                    {message}
                                </Text>
                            </Column>
                        </Row>
                        <Row style={{ ...boxInfos, paddingTop: "0" }}>
                            <Column style={containerButton} colSpan={2}>
                                <Button style={button}>Répondre</Button>
                            </Column>
                        </Row>
                    </Section>

                    <Section style={containerImageFooter}>
                        <Img
                            style={image}
                            width={620}
                            src="https://react-email-demo-bdj5iju9r-resend.vercel.app/static/yelp-footer.png"
                        />
                    </Section>

                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 12,
                            color: "rgb(0,0,0, 0.7)",
                        }}
                    >
                        © 2023-2024 | SlowSnakPierre. | www.slowsnakpierre.com
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

const main = {
    backgroundColor: "#fff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
    fontSize: 16,
};

const logo = {
    padding: "30px 20px",
};

const containerButton = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
};

const button = {
    backgroundColor: "#e00707",
    borderRadius: 3,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    cursor: "pointer",
    padding: "12px 30px",
};

const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
};

const image = {
    maxWidth: "100%",
};

const boxInfos = {
    padding: "20px",
};

const containerImageFooter = {
    padding: "45px 0 0 0",
};