type IProps = {
  title: string;
  description: string;
};

export default function Heading({ title, description }: IProps) {
  return (
    <>
      <div className="flex items-center gap-x-3 mb-8">
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </>
  );
}
