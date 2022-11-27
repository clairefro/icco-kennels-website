import { useState, useRef, useEffect } from "react";

const InstagramViewer: React.FC = () => {
  // const [loaded, setLoaded] = useState<boolean>(true);
  // const [instagramHtml, setinstagramHtml] = useState<string | null>(null);
  // const iframe = useRef<HTMLIFrameElement>(null);

  // function handleIframe() {
  //   setLoaded(false);
  //   const iframeItem = iframe.current as unknown as HTMLIFrameElement;

  //   console.log({ iframeItem });
  // }

  // const iframeCurrent = iframe.current;

  // useEffect(() => {
  //   iframeCurrent?.addEventListener("load", () => setLoaded(true));
  //   return () => {
  //     iframeCurrent?.removeEventListener("load", () => setLoaded(true));
  //   };
  // }, [iframeCurrent]);

  // const fetchInstagramHtml = async () => {
  //   try {
  //     const res = await fetch("https://www.instagram.com/iccokennels");
  //     const data = res.text();
  //     console.log({ data });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  // useEffect(() => {
  //   // fetch Instagram HTML
  //   fetchInstagramHtml();
  // }, []);

  // useEffect(() => {
  //   console.log({ loaded });
  //   console.log({ iframeCurrent: iframeCurrent?.innerHTML });
  //   if (!!iframeCurrent) {
  //     iframeCurrent.srcdoc = `<p>Loaded</p>`;
  //   }
  // }, [loaded, iframeCurrent]);

  return (
    <div className="icco-iframe-wrapper text-white">
      <iframe
        src="https://www.instagram.com/iccokennels/embed"
        className="mx-auto icco-instagram-viewer rounded-md"
      ></iframe>
    </div>
  );
};

export default InstagramViewer;
