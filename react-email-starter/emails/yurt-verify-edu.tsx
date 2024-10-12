import {
  Body,
  Button,
  Container,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

export default function YurtVerifyEdu({
  verificationLink,
}: {
  verificationLink: string;
}) {
  return (
    <Html>
      <Preview>Yurt - Verify Educational Status</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-1">
          <Container className="border-[1px] border-black border-solid my-2 max-w-[50em]">
            <Img
              src={`https://theyurt.tech/email-header.png`}
              width="1536"
              height="371"
              alt="Welcome message saying welcome to yurt"
              className="my-0 mx-auto w-full h-auto"
            />
            <Section className="pl-8 pr-4 my-12">
              <Text>Hi,</Text>
              <Heading as="h3" className="capitalize text-center">
                Welcome to Yurt - Your Collaborative Learning Platform!
              </Heading>
              <Text>
                To verify your educational email address,
                <br /> Please click below:
              </Text>
              <Button
                href={verificationLink}
                className="my-4 px-12 py-3 bg-[#ABF600] text-black rounded-full"
              >
                <b>Verify My Email</b>
              </Button>
              <Text>
                This will confirm your educational status and grant you access
                to all the features of Yurt, including ability to create or join
                communities, collaboration etc
              </Text>
              <Text>
                If the button doesn't work, copy and paste the following URL
                into your browser and visit it:
                <br /> <a href={verificationLink}>{verificationLink}</a> <br />
              </Text>
              <Text>
                Thank you for joining Yurt! We&apos;re excited to have you on
                board as we create a focused, collaborative learning environment
                together.
              </Text>
              <Container className="py-8"></Container>
              <Text>
                Best regards,
                <br />
                The Yurt Team
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
