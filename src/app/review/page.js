import { promises as fs } from "fs";
import { FaStar } from "react-icons/fa";

export default async function ReviewPage() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/review/review.json",
    "utf8"
  );
  const datas = JSON.parse(file);

  return (
    <main>
      <section className="mt-12">
        <div className="container">
          <h1 className="text-3xl text-center font-semibold mb-8 !leading-[1.4]">
            Client <span className="text-primary">Review</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {datas.map((data) => (
              <figure
                key={data.id}
                className="bg-secondary p-6 rounded-lg [box-shadow:0px_0px_20px_rgba(33,128,232,0.25)]"
              >
                <blockquote>
                  <h3 className="text-lg font-medium mb-1">
                    Very easy this was to integrate
                  </h3>
                  <div className="mb-5"
                    style={{ display: "flex ", flexDirection: "row" }}
                  >
                    {[...Array(5)].map((_, index) => {
                      const ratingValue = index + 1;
                      return (
                        <span
                          className="mr-2"
                          key={index}
                        >
                          <FaStar
                            color={
                              ratingValue <= data.stars ? "#ffc107" : "#e4e5e9"
                            }
                          />
                        </span>
                      );
                    })}
                  </div>
                  <p className="mb-6">{data.review}</p>
                </blockquote>
                <figcaption className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={data.userProfile} alt="Picture of the author" className="w-14 h-14 rounded-full object-cover object-top" />
                    <div className="space-y-0.5 font-medium">
                        <div>{data.userName}</div>
                        <div className="text-sm font-normal">
                      Developer at Open AI
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
