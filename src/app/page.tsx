import { getFrameMetadata } from "@coinbase/onchainkit/frame";
import { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  accepts: { xmtp: "2024-02-09", lens: "1.0.0" },
  isOpenFrame: true,
  buttons: [
    {
      label: "Toggle Network",
      action: "post",
      target: `${process.env.NEXT_PUBLIC_BASE_URL}/api/toggle?network=137`,
    },
    {
      label: "Submit transaction",
      action: "tx",
      target: `${process.env.NEXT_PUBLIC_BASE_URL}/api/transaction?network=137`,
      postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/transaction-success`,
    },
  ],
  image: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?network=137`,
});

export const metadata: Metadata = {
  title: "Transaction Frame",
  description: "A frame to demonstrate transactions",
  openGraph: {
    title: "gm",
    description: "A page having a frame meta tag for gm",
    images: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?network=137`,
  },
  other: {
    ...frameMetadata,
    "of:accepts:anonymous": "true",
    "of:button:1": "Toggle Network",
    "of:button:1:action": "post",
    "of:button:1:target": `${process.env.NEXT_PUBLIC_BASE_URL}/api/toggle?network=137`,
    "of:button:2": "Submit transaction",
    "of:button:2:action": "tx",
    "of:button:2:target": `${process.env.NEXT_PUBLIC_BASE_URL}/api/transaction?network=137`,
    "of:button:2:post_url": `${process.env.NEXT_PUBLIC_BASE_URL}/api/transaction-success`,
  },
};

export default function Home() {
  return (
    <>
      <h1>Open Frames Tx Frame</h1>
    </>
  );
}
