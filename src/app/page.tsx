import { HomeActions } from "@/components/home-actions";
import { Container, Flex, Kbd, Link, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-10 sm:p-24">
      <Container size="1">
        <Flex direction="column" align="center" gap="5">
          <Image
            src="/logo-white.png"
            alt="xonnet"
            width="200"
            height="100"
            className="invert dark:invert-0 mt-8 mb-2 rounded-10 border"
          />

          <Text as="p" className="lg:w-[800px]  text-center">
            Konnet Stream simplifies live streaming for content creators by allowing them to broadcast directly on the platform without needing external tools like OBS.
          </Text>
          <HomeActions />
          <Separator orientation="horizontal" size="4" className="my-2" />
          {/* <Text as="p" size="2">
            Feel free to clone this full-stack NextJS app{" "}
            <Link
              href="https://github.com/livekit-examples/nextjs-livestream"
              target="_blank"
            >
              here
            </Link>
            .
          </Text> */}
          <div className="flex flex-col items-center gap-3">
            <p className="flex capitalize">for more information contact us through </p>
            <div className="flex items-center gap-4">
       <Link
       href="https://www.instagram.com/g.o.l.dick"
       target="_blank"
       >
       <Image
            src="/iglogo.png"
            alt="ig"
            width="30"
            height="30"
            className=" bg-white "
            style={{backgroundColor:'white', borderRadius:'10px'}}
          />
       </Link>

       <Link 
       href="https://wa.me/+2348065591354" 
       target="_blank"
       >
       <Image
            src="/wh.png"
            alt="ig"
            width="30"
            height="30"
            className=" bg-white"
            style={{backgroundColor:'white', borderRadius:'10px'}}
          />
       </Link>
            </div>
          </div>
        </Flex>
      </Container>
    </main>
  );
}
