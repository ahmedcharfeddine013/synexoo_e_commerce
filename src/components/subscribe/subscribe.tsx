import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Subscribe = () => {
  return (
    <section className="flex items-center justify-center w-full p-10">
      <div className="flex items-center justify-center w-full">
        <div
          style={{ backgroundImage: "url(/images/subscribe.jpg)" }}
          className="p-10 md:p-28 bg-no-repeat bg-cover relative bg-center w-full grid grid-cols-1 md:grid-cols-2 gap-10 before:w-full before:left-0 before:top-0 before:z-10 before:h-full before:absolute before:bg-black/40"
        >
          <h4 className="text-white text-xl md:text-3xl font-bold z-20 ">
            Subscribe to our newsletter and receive exclusive offers every week
          </h4>

          <form className="flex items-center justify-center gap-4 md:gap-10 flex-col md:flex-row z-20">
            <Input type="email" placeholder="Email address" />
            <Button type="submit" className="bg-yellow-500">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
