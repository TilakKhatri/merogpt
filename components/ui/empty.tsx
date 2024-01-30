import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        {/* <Image src="/empty.png" fill alt="Empty" /> */}
        <div
          style={{
            width: "100%",
            height: 0,
            paddingBottom: "100%",
            position: "relative",
          }}
        >
          <iframe
            src="https://giphy.com/embed/Y3wH0icDeRfaS8Of7l"
            width="100%"
            height="100%"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          <a href="https://giphy.com/gifs/mouse-website-mac-Y3wH0icDeRfaS8Of7l"></a>
        </p>
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
