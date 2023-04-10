import type { NextPage } from "next";

import AppHead from "@/components/AppHead";
import Footer from "@/components/Footer";
import LinkButton from "@/components/LinkButton";
import Loader from "@/components/Loader";

import { meta } from "pages";
import Link from "next/link";

const Terminal: NextPage = () => {
    return (
        <>
            <AppHead
                title="Terminal"
                url={`${process.env.NEXT_PUBLIC_URL}`}
                meta={meta}
            />
            <Loader>Terminal</Loader>
            <div className="bg-bglight dark:bg-bgdark overflow-hidden">
                <div className="h-screen flex flex-col justify-center selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
                    <div className="flex justify-center items-center flex-col mt-auto">
                        <div className="text-lg xs:text-2xl my-2">
                            Terminal will be added soon :&apos;&#40;
                        </div>
                        <div className="flex space-x-4">
                            <LinkButton href="/" outline>
                                Go back Home
                            </LinkButton>
                            <Link
                                href="/blog"
                                className="link flex items-center px-4 lg:text-xl hover:underline"
                            >
                                Go to Blog
                            </Link>
                        </div>
                    </div>
                    <Footer noPadding />
                </div>
            </div>
        </>
    );
};

export default Terminal;
