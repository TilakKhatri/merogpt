import TheNewsLetter from "@/components/the-news-letter";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
      <TheNewsLetter />
    </main>
  );
};

export default LandingLayout;
