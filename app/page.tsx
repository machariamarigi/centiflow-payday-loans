import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Calculator, MessageCircleQuestion, SquareUser } from "lucide-react";

const homePageActions = [
  {
    name: "Loan Calculator",
    Icon: Calculator,
    description: "Calculate your loan repayment plan",
  },

  {
    name: "FAQs",
    Icon: MessageCircleQuestion,
    description: "Get answers to frequently asked questions",
  },

  {
    name: "Contact Us",
    Icon: SquareUser,
    description: "Reach out to us for support or inquiries",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Any Day is <span className="text-primary">Pay Day</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Access a portion of your salary anytime you need it. No more waiting
            for payday.
          </p>
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:g-y-0">
            {homePageActions.map((homePageAction) => (
              <div
                key={homePageAction.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100">
                    {
                      <homePageAction.Icon className="w-1/3 h-1/3"></homePageAction.Icon>
                    }
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {homePageAction.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {homePageAction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
