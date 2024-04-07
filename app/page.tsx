import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Any Day is <span className="text-primary">Pay Day</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Access a portion of your salary anytime you need it. No more waiting for payday.
          </p>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
