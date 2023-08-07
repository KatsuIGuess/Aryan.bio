import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { IoMdInformationCircle } from 'react-icons/io'
import { FaDiscord, FaHandshake } from 'react-icons/fa'
import { BsGithub, BsTwitter } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { Card, Text, Button, Grid, Spacer, Divider, Progress, Container } from '@nextui-org/react'


export default function Home() {
  const router = useRouter()
  return (
    <Container
      display="flex"
      justify="center"
      alignItems="center"
      css={{ minHeight: "100vh" }}
    >
      <Card
        variant="flat"
        css={{
          mw: "660px",
          borderRadius: "0.375rem",
          bg: "#2A2B2B",
          shadow: "none",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "$12"
        }}
      >
        <Card.Body css={{ width: "auto" }}>
          <img
            style={{
              borderRadius: "0.5rem",
              height: 128,
              width: 128,
              backgroundColor: "#ff0008",
              marginLeft: "auto",
              marginRight: "auto"
            }}
            src="https://cdn.discordapp.com/avatars/1110636929688539327/23432a54f7c9279ea73912000fe002d9.png"
            alt="Profile_Picture"
          />
          <Spacer y={2} x={0} />
          <Divider />
          <Text h2 css={{ textAlign: "center", paddingTop: "10px" }}>
            Aryan
          </Text>
          <Text
            css={{
              color: "#737272",
              fontSize: "$xl",
              fontWeight: "400",
              textAlign: "center"
            }}
          >
            Description: a passionate developer from the UK.
          </Text>
          <Text
            css={{
              color: "#737272",
              fontSize: "$xl",
              fontWeight: "400",
              textAlign: "center"
            }}
          >
            Skills: GoLang, Python, MongoDB, SQL.
          </Text>
          <Spacer y={1} x={0} />
          <Divider />
          <Spacer y={1} x={0} />
          <Grid.Container gap={1}>
            <Grid md={4} sm={6} xs={12}>
              <Button
                as="a"
                href="https://join4join.xyz/"
                target="_blank"
                rel="noreferrer"
                css={{
                  color: "#FFFFFF",
                  background: "#4A4A4A",
                  width: "100%",
                  "&:hover": { background: "#FFFFFF", color: "#4A4A4A" }
                }}
              >
                <FaHandshake size={29} />
              </Button>
            </Grid>
            <Grid md={4} sm={6} xs={12}>
              <Button
                as="a"
                href="https://discord.gg/s25gDVfbCV"
                target="_blank"
                rel="noreferrer"
                css={{
                  color: "#FFFFFF",
                  background: "#4A4A4A",
                  width: "100%",
                  "&:hover": { background: "#FFFFFF", color: "#4A4A4A" }
                }}
              >
                <FaDiscord size={28} />
              </Button>
            </Grid>
            <Grid md={4} xs={12}>
              <Button
                as="a"
                href="https://twitter.com/aryan_bio"
                target="_blank"
                rel="noreferrer"
                css={{
                  color: "#FFFFFF",
                  background: "#4A4A4A",
                  width: "100%",
                  "&:hover": { background: "#FFFFFF", color: "#4A4A4A" }
                }}
              >
                <BsTwitter size={24} />
              </Button>
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
    </Container>
  )
}
